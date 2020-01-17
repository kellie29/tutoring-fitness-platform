// @flow

import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
// import { Duration } from 'luxon';
import { MenuItem, Select, InputLabel, FormControl } from '@material-ui/core';
import { useRouteMatch } from 'react-router-dom';

import useInputValue from '../useInputValue';
import { graphql, createMutation } from '../../api';
import useAsyncTask from '../useAsyncTask';
import { initialGenericProgramModuleDataData } from '../../helpers/programModuleData';
import createDashboardDialog, { DashboardDialogHeader } from '../createDashboardDialog';
import useSearchParams from '../useSearchParams';

import { type ProgramModuleCreateDialogCreateProgramModuleMutation } from './__generated__/ProgramModuleCreateDialogCreateProgramModuleMutation.graphql';

const useMutation = createMutation<ProgramModuleCreateDialogCreateProgramModuleMutation>(graphql`
  mutation ProgramModuleCreateDialogCreateProgramModuleMutation($input: CreateProgramModuleInput!) {
    createProgramModule(input: $input) {
      programModule {
        id
      }
    }
  }
`);

type Props = {|
  programId?: string,
  moduleName?: string,
|};

// TODO: Not like this
// const defaultAvailableTypes = ['reminder', 'action'];
const defaultAvailableTypes = ['generic'];
const moduleTypeToString = { generic: 'Generic', reminder: 'Reminder', action: 'Action' };

export default createDashboardDialog<any, Props>(function ProgramModuleCreateDialog(props) {
  const { programId, open, onCancel, onComplete, moduleName } = props;
  const match = useRouteMatch();
  const { tagId } = match?.params ?? {};
  const searchParams = useSearchParams();
  const typeParam = searchParams.get('type');
  const availableTypes = React.useMemo(() => (typeParam ? [typeParam] : defaultAvailableTypes), [
    typeParam,
  ]);

  const [name, nameInputProps] = useInputValue('');
  const [description, descriptionInputProps] = useInputValue('');
  const [type, setType] = React.useState(availableTypes[0]);
  React.useEffect(() => {
    setType(availableTypes[0]);
  }, [availableTypes]);
  const createProgramModule = useMutation();
  const createProgramModuleTask = useAsyncTask(async () => {
    const data = (() => {
      switch (type) {
        case 'generic': {
          return initialGenericProgramModuleDataData;
        }
        default: {
          throw new Error(`Invalid module type "${type}"`);
        }
      }
    })();

    const response = await createProgramModule({
      input: {
        type,
        name,
        description,
        data,
        programId: programId || null,
        tagId: tagId || 'me',
      },
    });
    onComplete(response.createProgramModule.programModule);
  });

  const onCreateProgramModuleFormSubmit = React.useCallback(
    (event) => {
      event.preventDefault();

      createProgramModuleTask();
    },
    [createProgramModuleTask],
  );

  return (
    <>
      <Dialog open={open} onClose={onCancel} fullWidth>
        <DashboardDialogHeader>Create {moduleName}</DashboardDialogHeader>
        <form onSubmit={onCreateProgramModuleFormSubmit}>
          <DialogContent dividers>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {availableTypes.length > 1 ? (
                <>
                  <FormControl>
                    <InputLabel htmlFor="type">Module Type</InputLabel>
                    <Select
                      value={type}
                      onChange={(event) => {
                        setType(event.target.value);
                      }}
                      inputProps={{
                        name: 'type',
                        id: 'type',
                      }}
                    >
                      {availableTypes.map((availableType) => (
                        <MenuItem key={availableType} value={availableType}>
                          {moduleTypeToString[availableType]}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <div style={{ height: 16 }} />
                </>
              ) : null}
              <TextField variant="outlined" label="Name" required {...nameInputProps} />
              <div style={{ height: 16 }} />
              <TextField
                variant="outlined"
                label="Description"
                required
                multiline
                rows="4"
                {...descriptionInputProps}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={onCancel}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              Create {moduleName}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
});
