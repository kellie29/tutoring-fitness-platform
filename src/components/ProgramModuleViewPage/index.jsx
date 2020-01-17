// @flow

import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
// import invariant from 'invariant';
// import InfoIcon from '@material-ui/icons/Info';
// import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

import createDashboardPage from '../createDashboardPage';
import PageHelmet from '../PageHelmet';
import { graphql, createQuery } from '../../api';
// import useMutation, { createMutation } from '../useMutation';
// import useAsyncTask from '../useAsyncTask';
// import ProgramUpdateDialog from '../ProgramUpdateDialog';
import NodeDeleteDialog from '../NodeDeleteDialog';
import ProgramModuleTransferOwnershipDialog from '../ProgramModuleTransferOwnershipDialog';
import LoadingView from '../LoadingView';
import PresentableViewPageHeader from '../PresentableViewPageHeader';
import { EmulatorStateProvider } from '../MobileAppEmulator';
import DialogRoute from '../DialogRoute';

import { type ProgramModuleViewPageQuery } from './__generated__/ProgramModuleViewPageQuery.graphql';
// import { type ProgramModuleViewPagePageCreateProgramMutation } from './__generated__/ProgramModuleViewPagePageCreateProgramMutation.graphql';
// import { type ProgramModuleViewPageCreateProgramInvitationMutation } from './__generated__/ProgramModuleViewPageCreateProgramInvitationMutation.graphql';
import ProgramModuleViewPageOverviewTab from './ProgramModuleViewPageOverviewTab';
import ProgramModuleViewPageUpdateTab from './ProgramModuleViewPageUpdateTab';

// const createProgramMutation = createMutation<ProgramModuleViewPagePageCreateProgramMutation>(graphql`
//   mutation ProgramModuleViewPagePageCreateProgramMutation($input: CreateProgramInput!) {
//     createProgram(input: $input) {
//       program {
//         id
//       }
//     }
//   }
// `);

// const createProgramInvitationMutation = createMutation<ProgramModuleViewPageCreateProgramInvitationMutation>(graphql`
//   mutation ProgramModuleViewPageCreateProgramInvitationMutation(
//     $input: CreateProgramInvitationInput!
//   ) {
//     createProgramInvitation(input: $input) {
//       programInvitation {
//         id
//       }
//     }
//   }
// `);

const useQuery = createQuery<ProgramModuleViewPageQuery>(graphql`
  query ProgramModuleViewPageQuery($programModuleId: ID) {
    currentSession {
      user {
        id
      }
    }
    programModule(id: $programModuleId) {
      ...PresentableViewPageHeader_presentable
      # ...ProgramUpdateDialog_program
      ...ProgramModuleTransferOwnershipDialog_programModule
      id
      name
      description
      viewerCanUpdate
    }
  }
`);

export default createDashboardPage<any>(function ProgramModuleViewPage() {
  const match = useRouteMatch();

  const query = useQuery({
    programModuleId: match.params.programModuleId,
  });
  const programModule = query.props?.programModule || null;
  const currentSession = query.props?.currentSession;

  // const createProgramInvitation = useMutation(createProgramInvitationMutation);
  // const createProgramInvitationTask = useAsyncTask(async (program) => {
  //   await createProgramInvitation({
  //     input: {
  //       programId: program.id,
  //     },
  //   });
  // });

  // const createProgram = useMutation(createProgramMutation);
  // const createProgramTask = useAsyncTask(async () => {
  //   invariant(programModule, 'Expected "programModule"');
  //   const createProgramResult = await createProgram({
  //     input: {
  //       programModuleId: programModule.id,
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

  if (!query.props) {
    return <LoadingView />;
  }

  if (!programModule) {
    throw new Error('Not found');
  }

  return (
    <EmulatorStateProvider>
      {programModule && currentSession && (
        <>
          {/* <DialogRoute
            path="/dashboard/programs/view/:programModuleId/update"
            returnTo={`/dashboard/programs/view/${program.id}`}
          >
            {(dialogProps) => <ProgramUpdateDialog {...dialogProps} program={program} />}
          </DialogRoute> */}
          <DialogRoute
            path="/dashboard/modules/view/:programModuleId/delete"
            component={NodeDeleteDialog}
            componentProps={{
              nodeId: programModule.id,
            }}
            cancelTo={`/dashboard/modules/view/${programModule.id}`}
            completeTo="/dashboard/modules/"
          />
          <DialogRoute
            path="/dashboard/modules/view/:programModuleId/transfer-ownership"
            component={ProgramModuleTransferOwnershipDialog}
            componentProps={{
              programModule,
            }}
            cancelTo={`/dashboard/modules/view/${programModule.id}`}
            completeTo={`/dashboard/modules/view/${programModule.id}`}
          />
        </>
      )}
      <PageHelmet title={programModule ? programModule.name : ''} />
      {programModule && (
        <>
          <PresentableViewPageHeader
            presentable={programModule}
            actions={[
              ...(programModule.viewerCanUpdate
                ? [
                    {
                      key: 'transfer-ownership',
                      underMenu: true,
                      type: 'link',
                      label: 'Transfer Ownership',
                      to: `/dashboard/modules/view/${programModule.id}/transfer-ownership`,
                    },
                    {
                      key: 'delete',
                      underMenu: true,
                      type: 'link',
                      label: 'Delete',
                      to: `/dashboard/modules/view/${programModule.id}/delete`,
                    },
                  ]
                : []),
              {
                key: 'edit',
                type: 'link',
                label: 'Edit',
                to: `/dashboard/modules/view/${programModule.id}/update`,
              },
            ]}
          />
          <Switch>
            <Route
              exact
              path="/dashboard/modules/view/:programModuleId"
              component={ProgramModuleViewPageOverviewTab}
            />
            <Route
              path="/dashboard/modules/view/:programModuleId/update"
              component={ProgramModuleViewPageUpdateTab}
            />
          </Switch>
        </>
      )}
    </EmulatorStateProvider>
  );
});
