// @flow

import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import { ConnectionHandler } from 'relay-runtime';
import { FormControl, InputLabel, Input, FormControlLabel, Checkbox } from '@material-ui/core';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/dist/style.css';

import useInputValue from '../useInputValue';
import { graphql, createMutation } from '../../api';
import useAsyncTask from '../useAsyncTask';
import createDashboardDialog, { DashboardDialogHeader } from '../createDashboardDialog';

import { type ClientProfileCreateDialogCreateClientProfileMutation } from './__generated__/ClientProfileCreateDialogCreateClientProfileMutation.graphql';

const useMutation = createMutation<ClientProfileCreateDialogCreateClientProfileMutation>(
  graphql`
    mutation ClientProfileCreateDialogCreateClientProfileMutation(
      $input: CreateClientProfileInput!
    ) {
      createClientProfile(input: $input) {
        clientProfile {
          id
        }
      }
    }
  `,
  {
    updater: (proxyStore: any) => {
      const rootField = proxyStore.getRootField('createClientProfile');
      const clientProfile = rootField.getLinkedRecord('clientProfile');

      const root = proxyStore.getRoot();

      const userClientProfiles = ConnectionHandler.getConnection(
        root,
        'TutorialStepTracker_clientProfiles',
        { filter: { ownerId: 'me' } },
      );
      if (userClientProfiles) {
        const clientProfileEdge = ConnectionHandler.createEdge(
          proxyStore,
          userClientProfiles,
          clientProfile,
          'ClientProfileEdge',
        );

        ConnectionHandler.insertEdgeBefore(userClientProfiles, clientProfileEdge);
      }
    },
  },
);

export default createDashboardDialog<any, {}>(function ClientProfileCreateDialog(props) {
  const { open, onCancel, onComplete } = props;

  const [name, nameInputProps] = useInputValue('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  // const [email, emailInputProps] = useInputValue('');
  const [chatEnabled, setChatEnabled] = React.useState(true);
  const createClientProfile = useMutation();
  const createClientProfileTask = useAsyncTask(async () => {
    const createClientProfileResponse = await createClientProfile({
      input: {
        name,
        phoneNumber,
        // email,
        chatEnabled,
      },
    });

    onComplete(createClientProfileResponse.createClientProfile.clientProfile);
  });

  const onCreateClientProfileFormSubmit = React.useCallback(
    (event) => {
      event.preventDefault();

      createClientProfileTask();
    },
    [createClientProfileTask],
  );

  const onChatEnabledChange = React.useCallback((event) => {
    const { checked } = event.target;
    setChatEnabled(checked);
  }, []);

  return (
    <>
      <Dialog
        open={open}
        onClose={onCancel}
        fullWidth
        PaperProps={{ style: { overflow: 'visible' } }}
      >
        <DashboardDialogHeader>Add Client</DashboardDialogHeader>
        <form onSubmit={onCreateClientProfileFormSubmit}>
          <DialogContent dividers style={{ overflow: 'visible' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <TextField
                variant="outlined"
                label="Client Name"
                name="name"
                autoComplete="name"
                required
                {...nameInputProps}
              />
              <div style={{ height: 32 }} />
              <FormControl variant="outlined">
                <InputLabel htmlFor="formatted-text-mask-input" shrink>
                  Phone Number
                </InputLabel>
                <Input
                  id="formatted-text-mask-input"
                  inputComponent={PhoneInput}
                  inputProps={{
                    buttonStyle: {
                      border: 'none',
                      background: 'none',
                    },
                    inputStyle: {
                      border: 'none',
                      background: 'none',
                    },
                    inputExtraProps: {
                      required: true,
                    },
                  }}
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                />
              </FormControl>
              <div style={{ height: 32 }} />
              <FormControlLabel
                control={
                  <Checkbox color="primary" checked={chatEnabled} onChange={onChatEnabledChange} />
                }
                label="Enable chat"
              />
              {/* <div style={{ height: 32 }} />
              <TextField
                variant="outlined"
                label="Email"
                type="email"
                name="email"
                {...emailInputProps}
              /> */}
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={onCancel}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
});
