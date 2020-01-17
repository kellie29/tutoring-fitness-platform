// @flow

import * as React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import invariant from 'invariant';

import createDashboardPage, { DashboardPageBody } from '../createDashboardPage';
import PageHelmet from '../PageHelmet';
import { graphql, createQuery } from '../../api';
import NodeDeleteDialog from '../NodeDeleteDialog';
import UserGroupInviteDialog from '../UserGroupInviteDialog';
import UserGroupRemoveDialog from '../UserGroupRemoveDialog';
import UserGroupLeaveDialog from '../UserGroupLeaveDialog';
import LoadingView from '../LoadingView';
import PresentableViewPageHeader from '../PresentableViewPageHeader';
import DialogRoute from '../DialogRoute';
import UserGroupUpdateDialog from '../UserGroupUpdateDialog';

import { type UserGroupViewPageQuery } from './__generated__/UserGroupViewPageQuery.graphql';
import UserGroupUserList from './UserGroupUserList';

const useQuery = createQuery<UserGroupViewPageQuery>(graphql`
  query UserGroupViewPageQuery($userGroupId: ID) {
    currentSession {
      user {
        ...UserGroupLeaveDialog_user
      }
    }
    userGroup(id: $userGroupId) {
      ...PresentableViewPageHeader_presentable
      ...UserGroupInviteDialog_userGroup
      ...UserGroupRemoveDialog_userGroup
      ...UserGroupLeaveDialog_userGroup
      ...UserGroupUserList_userGroup
      id
      name
      description
      viewerCanUpdate
      viewerIsMember
    }
  }
`);

export default createDashboardPage<any>(function UserGroupViewPage() {
  const match = useRouteMatch();

  const query = useQuery({
    userGroupId: match.params.userGroupId,
  });
  const userGroup = query.props?.userGroup;
  const currentSession = query.props?.currentSession;

  if (!query.props) {
    return <LoadingView />;
  }

  invariant(currentSession, 'Expected "currentSession"');

  if (!userGroup) {
    throw new Error('Not found');
  }

  return (
    <>
      <DialogRoute
        path={`${match.path}/update`}
        component={UserGroupUpdateDialog}
        componentProps={{
          userGroup,
        }}
        cancelTo={`/dashboard/organizations/view/${userGroup.id}`}
        completeTo={`/dashboard/organizations/view/${userGroup.id}`}
      />
      <DialogRoute
        path={`${match.path}/delete`}
        component={NodeDeleteDialog}
        componentProps={{
          nodeId: userGroup.id,
        }}
        cancelTo={`/dashboard/organizations/view/${userGroup.id}`}
        completeTo="/dashboard/organizations/"
      />
      <DialogRoute
        path={`${match.path}/invite`}
        component={UserGroupInviteDialog}
        componentProps={{ userGroup }}
        cancelTo={`/dashboard/organizations/view/${userGroup.id}`}
        completeTo={`/dashboard/organizations/view/${userGroup.id}`}
      />
      <DialogRoute
        path={`${match.path}/remove/:userId`}
        component={UserGroupRemoveDialog}
        componentProps={{
          userGroup,
        }}
        cancelTo={`/dashboard/organizations/view/${userGroup.id}`}
        completeTo={`/dashboard/organizations/view/${userGroup.id}`}
      />
      <DialogRoute
        path={`${match.path}/leave`}
        component={UserGroupLeaveDialog}
        componentProps={{
          user: currentSession.user,
          userGroup,
        }}
        cancelTo={`/dashboard/organizations/view/${userGroup.id}`}
        completeTo="/dashboard/organizations/"
      />
      <PageHelmet title={userGroup.name} />
      <DashboardPageBody variant="unpadded">
        <PresentableViewPageHeader
          presentable={userGroup}
          actions={[
            ...(userGroup.viewerCanUpdate
              ? [
                  {
                    key: 'update',
                    type: 'link',
                    label: 'Edit',
                    to: `/dashboard/organizations/view/${userGroup.id}/update`,
                  },
                  {
                    key: 'leave',
                    underMenu: true,
                    type: 'link',
                    label: 'Leave',
                    to: `/dashboard/organizations/view/${userGroup.id}/leave`,
                  },
                  {
                    key: 'delete',
                    underMenu: true,
                    type: 'link',
                    label: 'Delete',
                    to: `/dashboard/organizations/view/${userGroup.id}/delete`,
                  },
                ]
              : []),
            ...(userGroup.viewerCanUpdate
              ? [
                  {
                    key: 'invite',
                    type: 'link',
                    label: 'Invite Member',
                    to: `/dashboard/organizations/view/${userGroup.id}/invite`,
                  },
                ]
              : []),
          ]}
        />
        <div style={{ padding: '24px' }}>
          <Typography variant="h5">Members</Typography>
          <UserGroupUserList userGroup={userGroup} />
        </div>
      </DashboardPageBody>
    </>
  );
});
