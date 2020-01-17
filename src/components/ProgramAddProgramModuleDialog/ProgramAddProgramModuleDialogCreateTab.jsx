// @flow

import * as React from 'react';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import { MenuItem, Select, InputLabel, FormControl } from '@material-ui/core';

import useInputValue from '../useInputValue';
import { graphql, createMutation } from '../../api';
import useAsyncTask from '../useAsyncTask';
import { initialGenericProgramModuleDataData } from '../../helpers/programModuleData';

import { type ProgramAddProgramModuleDialogCreateTabCreateProgramModuleMutation } from './__generated__/ProgramAddProgramModuleDialogCreateTabCreateProgramModuleMutation.graphql';

const useMutation = createMutation<ProgramAddProgramModuleDialogCreateTabCreateProgramModuleMutation>(graphql`
  mutation ProgramAddProgramModuleDialogCreateTabCreateProgramModuleMutation(
    $input: CreateProgramModuleInput!
  ) {
    createProgramModule(input: $input) {
      programModule {
        id
      }
    }
  }
`);

type Props = {|
  availableTypes: $ReadOnlyArray<'generic' | 'reminder' | 'action'>,
  programId?: string,
  onCancel: () => void,
  onComplete: (any) => void,
|};

const moduleTypeToString = { generic: 'Generic', reminder: 'Reminder', action: 'Action' };

export default function ProgramAddProgramModuleDialogCreateTab(props: Props) {
  const { availableTypes, programId, onCancel, onComplete } = props;

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
          Create Module
        </Button>
      </DialogActions>
    </form>
  );
}
