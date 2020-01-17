// @flow

import * as React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';

import { graphql, createMutation, createQuery } from '../../api';
import useAsyncTask from '../useAsyncTask';
import createDashboardDialog, { DashboardDialogHeader } from '../createDashboardDialog';

import { type ProgramModuleGroupUpdateDialogUpdateProgramModuleGroupMutation } from './__generated__/ProgramModuleGroupUpdateDialogUpdateProgramModuleGroupMutation.graphql';
import { type ProgramModuleGroupUpdateDialogQuery } from './__generated__/ProgramModuleGroupUpdateDialogQuery.graphql';

const useMutation = createMutation<ProgramModuleGroupUpdateDialogUpdateProgramModuleGroupMutation>(
  graphql`
    mutation ProgramModuleGroupUpdateDialogUpdateProgramModuleGroupMutation(
      $input: UpdateProgramModuleGroupInput!
    ) {
      updateProgramModuleGroup(input: $input) {
        programModuleGroup {
          id
          name
        }
      }
    }
  `,
);

const useQuery = createQuery<ProgramModuleGroupUpdateDialogQuery>(graphql`
  query ProgramModuleGroupUpdateDialogQuery($id: ID) {
    program(id: $id) {
      moduleGroups {
        id
        name
      }
    }
  }
`);

type Props = {
  programModuleGroup: mixed,
};

export default createDashboardDialog<any, Props>(function ProgramModuleGroupUpdateDialog(props) {
  const { open, onCancel, onComplete } = props;

  const match = useRouteMatch();

  const programId = (match && match.params.programId) || null;
  const programModuleGroupId = match && match.params.programModuleGroupId;

  const query = useQuery({ id: programId });

  const program = query.props?.program || null;
  let programModuleGroup = null;

  if (program) {
    programModuleGroup = program.moduleGroups
      ? program.moduleGroups.find((moduleGroup) => moduleGroup.id === programModuleGroupId)
      : null;
  }

  const [name, setName] = React.useState('');

  React.useEffect(() => {
    if (programModuleGroup) {
      setName(programModuleGroup.name);
    }
  }, [programModuleGroup]);

  const updateProgramModuleGroup = useMutation();
  const updateProgramModuleGroupTask = useAsyncTask(async () => {
    if (programModuleGroup) {
      const updateProgramModuleGroupResponse = await updateProgramModuleGroup({
        input: {
          name,
          id: programModuleGroup.id,
        },
      });

      onComplete(updateProgramModuleGroupResponse.updateProgramModuleGroup.programModuleGroup);
    }
  });

  const onUpdateProgramModuleGroupFormSubmit = React.useCallback(
    (event) => {
      event.preventDefault();

      updateProgramModuleGroupTask();
    },
    [updateProgramModuleGroupTask],
  );

  if (!program) {
    return null;
  }

  return (
    <>
      <Dialog open={open} onClose={onCancel} fullWidth>
        <DashboardDialogHeader>Update Module Group</DashboardDialogHeader>
        <form onSubmit={onUpdateProgramModuleGroupFormSubmit}>
          <DialogContent dividers>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <TextField
                variant="outlined"
                label="Module Group Name"
                type="text"
                name="moduleGroupName"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={onCancel}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
});
