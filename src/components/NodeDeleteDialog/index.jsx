// @flow

import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import { FormattedMessage } from 'react-intl';
import invariant from 'invariant';
import {
  useRouteMatch,
  // useParams
} from 'react-router-dom';

import { graphql, createQuery, createMutation } from '../../api';
import useAsyncTask from '../useAsyncTask';
import createDashboardDialog, { DashboardDialogHeader } from '../createDashboardDialog';

import { type NodeDeleteDialogDeleteNodeMutation } from './__generated__/NodeDeleteDialogDeleteNodeMutation.graphql';
import { type NodeDeleteDialogQuery } from './__generated__/NodeDeleteDialogQuery.graphql';

const useMutation = createMutation<NodeDeleteDialogDeleteNodeMutation>(graphql`
  mutation NodeDeleteDialogDeleteNodeMutation($input: DeleteNodeInput!) {
    deleteNode(input: $input) {
      node {
        id
      }
    }
  }
`);

const useQuery = createQuery<NodeDeleteDialogQuery>(graphql`
  query NodeDeleteDialogQuery($nodeId: ID) {
    node(id: $nodeId) {
      typeName: __typename
      id
      ... on Presentable {
        name
      }
    }
  }
`);

type Props = {|
  nodeId?: string | null,
|};

export default createDashboardDialog<void, Props>(function NodeDeleteDialog(props) {
  const { open, onCancel, onComplete } = props;
  const match = useRouteMatch();
  const params = match ? match.params : {};
  // const params = useParams();

  const nodeId = props.nodeId || params.nodeId;
  const query = useQuery({ nodeId });
  const node = query.props?.node;
  const deleteNode = useMutation();
  const deleteNodeTask = useAsyncTask(async () => {
    invariant(node, 'Expected "node"');
    await deleteNode({
      input: {
        id: node.id,
      },
    });

    onComplete();
  });

  const onCancelClick = React.useCallback(() => {
    onCancel();
  }, [onCancel]);

  const onDeleteClick = React.useCallback(async () => {
    deleteNodeTask();
  }, [deleteNodeTask]);

  if (open && query.props && !node) {
    // throw new Error('Not found');
    return null;
  }

  const deleteMessage = node ? (
    <FormattedMessage
      id="NodeDeleteDialog.title"
      defaultMessage={`
        Delete {typeName, select,
          Program {Program}
          ProgramTrack {Program}
          ProgramModule {Module}
          ProgramModuleGroup {Module Group}
          UserGroup {Organization}
          ClientProfile {Client}
          other {{typeName}}
        }
      `}
      values={node}
    />
  ) : (
    ''
  );

  return (
    <Dialog open={open} onClose={onCancelClick} fullWidth maxWidth="xs">
      {node ? (
        <>
          <DashboardDialogHeader>{deleteMessage}</DashboardDialogHeader>
          <DialogContent>
            <DialogContentText>
              <FormattedMessage
                id="NodeDeleteDialog.message"
                defaultMessage={`
                Are you sure you want to delete {typeName, select,
                  Program {program}
                  ProgramTrack {program}
                  ProgramModule {module}
                  ProgramModuleGroup {module group}
                  UserGroup {organization}
                  ClientProfile {client}
                  other {{typeName}}
                } "{name}"?
              `}
                values={node}
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={onCancelClick}>
              <FormattedMessage id="NodeDeleteDialog.cancel" defaultMessage="Cancel" />
            </Button>
            <Button variant="contained" color="primary" onClick={onDeleteClick}>
              {deleteMessage}
            </Button>
          </DialogActions>
        </>
      ) : null}
    </Dialog>
  );
});
