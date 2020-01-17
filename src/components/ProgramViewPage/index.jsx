// @flow

import * as React from 'react';
import { type ContextRouter, Switch, Route } from 'react-router-dom';
// import invariant from 'invariant';
// import InfoIcon from '@material-ui/icons/Info';

import createDashoardPage from '../createDashboardPage';
import PageHelmet from '../PageHelmet';
import {
  graphql,
  createQuery,
  // createMutation
} from '../../api';
// import useAsyncTask from '../useAsyncTask';
import ProgramUpdateDialog from '../ProgramUpdateDialog';
import NodeDeleteDialog from '../NodeDeleteDialog';
import ProgramTransferOwnershipDialog from '../ProgramTransferOwnershipDialog';
// import ProgramIcon from '../icons/ProgramIcon';
import ProgramModuleUpdateDialog from '../ProgramModuleUpdateDialog';
// import ProgramModuleCreateDialog from '../ProgramModuleCreateDialog';
import ProgramAddProgramModuleDialog from '../ProgramAddProgramModuleDialog';
import ProgramCloneDialog from '../ProgramCloneDialog';
import PresentableViewPageHeader from '../PresentableViewPageHeader';
import ProgamTrackCreateDialog from '../ProgramTrackCreateDialog';
import { EmulatorStateProvider } from '../MobileAppEmulator';
import DialogRoute from '../DialogRoute';
// import RouterTabs from '../RouterTabs';
import ProgramModuleGroupCreateDialog from '../ProgramModuleGroupCreateDialog';
import ProgramModuleGroupUpdateDialog from '../ProgramModuleGroupUpdateDialog';
import ProgramReminderGroupUpdateDialog from '../ProgramReminderGroupUpdateDialog';
// import ProgramInvitationSendSmsDialog from '../ProgramInvitationSendSmsDialog';

import { type ProgramViewPageQuery } from './__generated__/ProgramViewPageQuery.graphql';
import ProgramViewPageOverviewTab from './ProgramViewPageOverviewTab';
import ProgramViewPageProgramModulesTab from './ProgramViewPageProgramModulesTab';
import ProgramViewPageCalendarTab from './ProgramViewPageCalendarTab';
import ProgramModuleDuplicateDialog from './ProgramModuleDuplicateDialog';
import ProgramViewPageRouterTabs from './ProgramViewPageRouterTabs';
import ProgramViewPageParticipantsTab from './ProgramViewPageParticipantsTab';

const useQuery = createQuery<ProgramViewPageQuery>(graphql`
  query ProgramViewPageQuery($programId: ID) {
    currentSession {
      user {
        id
      }
    }
    program(id: $programId) {
      ...PresentableViewPageHeader_presentable
      ...ProgramUpdateDialog_program
      ...ProgramTransferOwnershipDialog_program
      ...ProgramCloneDialog_program
      ...ProgramViewPageRouterTabs_program
      id
      name
      description
      modules {
        id
        name
        description
        type
        data
      }
      moduleGroups {
        id
        name
      }
      duration
      viewerCanUpdate
    }
  }
`);

type Props = {
  ...ContextRouter,
};
let currentID: string;
export default createDashoardPage<any>(function ProgramViewPage(props: Props) {
  const { match } = props;

  const query = useQuery({
    programId: match.params.programId,
  });
  const program = query.props?.program || null;
  const currentSession = query.props?.currentSession;
  if (currentSession && currentSession.user) {
    currentID = currentSession.user.id;
  }

  // const createProgramInvitation = useCreateProgramInvitationMutation();
  // const createProgramInvitationTask = useAsyncTask(async (program) => {
  //   await createProgramInvitation({
  //     input: {
  //       programId: program.id,
  //     },
  //   });
  // });

  // const createProgram = useCreateProgramMutation();
  // const createProgramTask = useAsyncTask(async () => {
  //   invariant(program, 'Expected "program"');
  //   const createProgramResult = await createProgram({
  //     input: {
  //       programId: program.id,
  //       // participants,
  //       // maxParticipants,
  //       // dataAvailability,
  //       // dataSharing,
  //       // dataAnonymity,
  //     },
  //   });

  //   const { program } = createProgramResult.createProgram;

  //   await createProgramInvitationTask(program);

  //   history.push(`/dashboard/programs/view/${program.id}`);
  // });

  // const onCreateClick = React.useCallback(() => {
  //   createProgramTask();
  // }, [createProgramTask]);

  if (query.props && !program) {
    throw new Error('Not found');
  }

  return (
    <EmulatorStateProvider>
      {program && currentSession && (
        <>
          <DialogRoute
            path="/dashboard/programs/view/:programId/update"
            component={ProgramUpdateDialog}
            componentProps={{ program }}
            cancelTo={`/dashboard/programs/view/${program.id}`}
            completeTo={`/dashboard/programs/view/${program.id}`}
          />
          <DialogRoute
            path="/dashboard/programs/view/:programId/delete"
            component={NodeDeleteDialog}
            componentProps={{ nodeId: program.id }}
            cancelTo={`/dashboard/programs/view/${program.id}`}
            completeTo="/dashboard/programs/"
          />
          <DialogRoute
            path="/dashboard/programs/view/:programId/transfer-ownership"
            component={ProgramTransferOwnershipDialog}
            componentProps={{ program }}
            cancelTo={`/dashboard/programs/view/${program.id}`}
            completeTo={`/dashboard/programs/view/${program.id}`}
          />
          {/* <DialogRoute
            path={`/dashboard/programs/view/${program.id}/modules/create`}
            returnTo={`/dashboard/programs/view/${program.id}`}
          >
            {(dialogProps) => (
              <ProgramModuleCreateDialog
                {...dialogProps}
                programId={program.id}
                onClose={(result) => {
                  if (result.type === 'created') {
                    // TODO: Not like this
                    window.location = `/dashboard/programs/view/${program.id}/modules/update/${result.payload}`;
                  } else {
                    dialogProps.onClose();
                  }
                }}
              />
            )}
          </DialogRoute> */}
          <DialogRoute
            path={`/dashboard/programs/view/${program.id}/modules/create`}
            component={ProgramAddProgramModuleDialog}
            componentProps={{ programId: program.id }}
            completeTo={(programModule) =>
              `/dashboard/programs/view/${program.id}/modules/update/${programModule.id}`
            }
            onComplete={(programModule) => {
              // TODO: Not like this
              window.location = `/dashboard/programs/view/${program.id}/modules/update/${programModule.id}`;
            }}
            goBackOnCancel
          />
          <DialogRoute
            path="/dashboard/programs/view/:programId/modules/update/:programModuleId"
            component={ProgramModuleUpdateDialog}
            completeTo={(programModule) => {
              if (programModule.data.scheduling) {
                return `/dashboard/programs/view/${program.id}/modules/reminders`;
              }

              if (programModule.programModuleGroup) {
                return `/dashboard/programs/view/${program.id}/modules/${programModule.programModuleGroup.id}`;
              }

              return `/dashboard/programs/view/${program.id}/modules`;
            }}
            onComplete={(programModule) => {
              if (programModule.data.scheduling) {
                // TODO: Not like this
                window.location = `/dashboard/programs/view/${program.id}/modules/reminders`;
                return;
              }

              if (programModule.programModuleGroup) {
                // TODO: Not like this
                window.location = `/dashboard/programs/view/${program.id}/modules/${programModule.programModuleGroup.id}`;
                return;
              }

              // TODO: Not like this
              window.location = `/dashboard/programs/view/${program.id}/modules`;
            }}
            goBackOnCancel
          />
          <DialogRoute
            path="/dashboard/programs/view/:programId/modules/reminders/update"
            component={ProgramReminderGroupUpdateDialog}
            completeTo={`/dashboard/programs/view/${program.id}/modules/reminders`}
            cancelTo={`/dashboard/programs/view/${program.id}/modules/reminders`}
          />
          <DialogRoute
            path="/dashboard/programs/view/:programId/modules/:programModuleGroupId/updateGroup"
            component={ProgramModuleGroupUpdateDialog}
            onComplete={(programModuleGroup) => {
              // TODO: Not like this
              window.location = `/dashboard/programs/view/${program.id}/modules/${programModuleGroup.id}`;
              return true;
            }}
            goBackOnCancel
          />
          <DialogRoute
            path="/dashboard/programs/view/:programId/modules/:programModuleGroupId/deleteGroup"
            component={NodeDeleteDialog}
            componentProps={(routeProps) => ({
              // $FlowFixMe
              nodeId: routeProps.match?.params.programModuleGroupId,
            })}
            completeTo={`/dashboard/programs/view/${program.id}`}
            goBackOnCancel
          />
          <DialogRoute
            path={`/dashboard/programs/view/${program.id}/modules/duplicate/:programModuleId`}
            component={ProgramModuleDuplicateDialog}
            completeTo={`/dashboard/programs/view/${program.id}`}
            onComplete={() => {
              // TODO: Not like this
              window.location = `/dashboard/programs/view/${program.id}`;
            }}
            goBackOnCancel
          />
          <DialogRoute
            path={`/dashboard/programs/view/${program.id}/modules/delete/:programModuleId`}
            component={NodeDeleteDialog}
            componentProps={(routeProps) => ({
              // $FlowFixMe
              nodeId: routeProps.match?.params.programModuleId,
            })}
            onComplete={() => {
              // TODO: Not like this
              window.location = `/dashboard/programs/view/${program.id}`;
              return true;
            }}
            goBackOnCancel
          />
          <DialogRoute
            path="/dashboard/programs/view/:programId/copy"
            component={ProgramCloneDialog}
            componentProps={{ program }}
            cancelTo={`/dashboard/programs/view/${program.id}`}
            completeTo={(clonedProgram) => `/dashboard/programs/view/${clonedProgram.id}`}
          />
          <DialogRoute
            path="/dashboard/programs/view/:programId/assign"
            component={ProgamTrackCreateDialog}
            cancelTo={`/dashboard/programs/view/${program.id}`}
            completeTo={(programTrack) => {
              if (programTrack.clientProfile) {
                return `/dashboard/clients/view/${programTrack.clientProfile.id}/tracks/view/${programTrack.id}`;
              }
              return `/dashboard/tracks/view/${programTrack.id}`;
            }}
          />
          <DialogRoute
            path="/dashboard/programs/view/:programId/modules/createGroup"
            component={ProgramModuleGroupCreateDialog}
            onComplete={(programModuleGroup) => {
              // TODO: Not like this
              window.location = `/dashboard/programs/view/${program.id}/modules/${programModuleGroup.id}`;
              return true;
            }}
            goBackOnCancel
          />
          {/* <DialogRoute
            path="/dashboard/programs/view/:programId/participants/send-invitation"
            component={ProgramInvitationSendSmsDialog}
            componentProps={{ programInvitationId: program.invitations.edges[0].node.id }}
            cancelTo={`/dashboard/programs/view/${program.id}/participants`}
            completeTo={`/dashboard/programs/view/${program.id}/participants`}
          /> */}
        </>
      )}
      <PageHelmet title={program ? program.name : ''} />
      {program && (
        <>
          <PresentableViewPageHeader
            currentID={currentID}
            presentable={program}
            actions={[
              // ...(!program.viewerCanUpdate
              //   ? [
              //       {
              //         key: 'edit',
              //         type: 'link',
              //         label: 'Edit',
              //         to: `/dashboard/programs/view/${program.id}/copy`,
              //       },
              //     ]
              //   : []),
              // ...(program.viewerCanUpdate
              //   ? [
              //       {
              //         key: 'copy',
              //         type: 'link',
              //         label: 'Copy',
              //         to: `/dashboard/programs/view/${program.id}/copy`,
              //       },
              //       {
              //         key: 'edit',
              //         type: 'link',
              //         label: 'Edit',
              //         to: `/dashboard/programs/view/${program.id}/update`,
              //       },
              //     ]
              //   : []),
              {
                key: 'copy',
                type: 'link',
                underMenu: true,
                label: 'Copy',
                to: `/dashboard/programs/view/${program.id}/copy`,
              },
              // {
              //   key: 'create',
              //   type: 'callback',
              //   label: 'Create ObsChart',
              //   callback: onCreateClick,
              //   primary: true,
              // },
              {
                key: 'assign',
                type: 'program',
                label: 'Assign Program',
                to: `/dashboard/programs/view/${program.id}/assign`,
                primary: true,
              },
              {
                key: 'use',
                type: 'program',
                label: 'Use Program',
                to: `/dashboard/programs/view/${program.id}/copy`,
                primary: true,
              },
              // {
              //   key: 'create',
              //   type: 'link',
              //   label: 'Create ObsChart',
              //   to: `/dashboard/programs/create?programId=${program.id}`,
              //   primary: true,
              // },
              {
                key: 'transfer-ownership',
                underMenu: true,
                type: 'link',
                label: 'Transfer Ownership',
                to: `/dashboard/programs/view/${program.id}/transfer-ownership`,
              },
              {
                key: 'delete',
                underMenu: true,
                type: 'link',
                label: 'Delete',
                to: `/dashboard/programs/view/${program.id}/delete`,
              },
            ]}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              overflow: 'hidden',
              height: '100%',
            }}
          >
            <div
              style={{
                width: 256,
                backgroundColor: 'white',
                overflowY: 'auto',
              }}
            >
              <ProgramViewPageRouterTabs program={program} currentID={currentID} />
            </div>
            <Switch>
              <Route
                path="/dashboard/programs/view/:programId/modules/:programModuleGroupId"
                component={ProgramViewPageProgramModulesTab}
              />
              <Route
                path="/dashboard/programs/view/:programId/modules"
                component={ProgramViewPageProgramModulesTab}
              />
              <Route
                path="/dashboard/programs/view/:programId/calendar"
                component={ProgramViewPageCalendarTab}
              />
              <Route
                path="/dashboard/programs/view/:programId/participants"
                component={ProgramViewPageParticipantsTab}
              />
              <Route
                path="/dashboard/programs/view/:programId"
                component={ProgramViewPageOverviewTab}
              />
            </Switch>
          </div>
        </>
      )}
    </EmulatorStateProvider>
  );
});
