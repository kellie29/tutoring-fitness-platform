// @flow

import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
// import TextField from '@material-ui/core/TextField';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/dist/style.css';

import { graphql, createMutation } from '../../api';
import useAsyncTask from '../useAsyncTask';
import createDashboardDialog, { DashboardDialogHeader } from '../createDashboardDialog';

import { type ProgramInvitationSendSmsDialogMutation } from './__generated__/ProgramInvitationSendSmsDialogMutation.graphql';

const useMutation = createMutation<ProgramInvitationSendSmsDialogMutation>(
  graphql`
    mutation ProgramInvitationSendSmsDialogMutation($input: SendProgramInvitationSmsInput!) {
      sendProgramInvitationSms(input: $input) {
        programInvitation {
          id
        }
      }
    }
  `,
);

type Props = {|
  programInvitationId: string,
|};

export default createDashboardDialog<any, Props>(function ProgramInvitationSendSmsDialog(props) {
  const { open, onCancel, onComplete, programInvitationId } = props;

  const [phoneNumber, setPhoneNumber] = React.useState('');
  const sendProgramInvitationSms = useMutation();
  const sendProgramInvitationSmsTask = useAsyncTask(async () => {
    const response = await sendProgramInvitationSms({
      input: {
        id: programInvitationId,
        phoneNumber,
      },
    });

    onComplete(response.sendProgramInvitationSms.programInvitation);
  });

  const onSubmit = React.useCallback(
    (event) => {
      event.preventDefault();

      sendProgramInvitationSmsTask();
    },
    [sendProgramInvitationSmsTask],
  );

  return (
    <>
      <Dialog
        open={open}
        onClose={onCancel}
        fullWidth
        PaperProps={{ style: { overflow: 'visible' } }}
      >
        <DashboardDialogHeader>Send Program Invitation SMS</DashboardDialogHeader>
        <form onSubmit={onSubmit}>
          <DialogContent dividers style={{ overflow: 'visible' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <FormControl variant="contained">
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
                  }}
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                />
              </FormControl>
              {/* <TextField
                variant="outlined"
                label="Phone Number"
                type="text"
                // name="email"
                required
                value={phoneNumber}
                onChange={setPhoneNumber}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  inputComponent: PhoneInput,
                  inputProps: {
                    buttonStyle: {
                      border: 'none',
                      background: 'none',
                    },
                    inputStyle: {
                      border: 'none',
                      background: 'none',
                    },
                  },
                }}
              /> */}
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={onCancel}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              Send SMS
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
});
