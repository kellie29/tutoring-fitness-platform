// @flow

import * as React from 'react';
import { useRouteMatch } from 'react-router-dom';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
// import invariant from 'invariant';
import flatten from 'lodash/flatten';
import { DateTime } from 'luxon';
import invariant from 'invariant';

import createDashboardPageTab from '../createDashboardPageTab';
import { graphql, createQuery } from '../../api';
import LoadingView from '../LoadingView';
import MobileAppPreviewView from '../MobileAppPreviewView';

import { type ProgramTrackViewPageActionLogTabQuery } from './__generated__/ProgramTrackViewPageActionLogTabQuery.graphql';
import ProgramTrackActionResponseCard from './ProgramTrackActionResponseCard';
import ProgramTrackActionResponseCardEmpty from './ProgramTrackActionResponseCardEmpty';

const useQuery = createQuery<ProgramTrackViewPageActionLogTabQuery>(graphql`
  query ProgramTrackViewPageActionLogTabQuery($programTrackId: ID) {
    programTrack(id: $programTrackId) {
      id
      actions {
        edges {
          node {
            responses(first: 9999) {
              edges {
                node {
                  ...ProgramTrackActionResponseCard_programTrackActionResponse
                  id
                  createdAt
                  response
                  action {
                    id
                    name
                    description
                    data
                  }
                }
              }
            }
          }
        }
      }
      program {
        ...ProgramDetailScreen_program
        id
      }
      # ...ProgramTrackInvitationScreen_program
      # id
      # name
      # description
      # owner {
      #   ...PresentableLink_presentable
      # }
      # modules {
      #   ...ReminderModuleCard_programModule
      #   ...ActionModuleCard_programModule
      #   id
      #   type
      #   name
      #   description
      #   data
      # }
      # duration
      # viewerCanUpdate
    }
  }
`);

export default createDashboardPageTab<any>(function ProgramTrackViewPageActionLogTab() {
  const match = useRouteMatch();

  const query = useQuery({
    programTrackId: match.params.programTrackId,
  });

  const programTrack = query.props?.programTrack || null;

  const [selectedActionResponse, setSelectedActionResponse] = React.useState(undefined);

  // const onProgramModuleCardClick = React.useCallback(
  //   (programModuleId) => {
  //     invariant(program, 'Expected  "program"');
  //     const programModule = program.modules.find(
  //       (aProgramModule) => aProgramModule.id === programModuleId,
  //     );
  //     invariant(programModule, 'Expected  "programModule"');

  //     if (selectedProgramModule && selectedProgramModule.id === programModule.id) {
  //       setSelectedProgramModule(null);
  //     } else {
  //       setSelectedProgramModule(programModule);
  //     }
  //   },
  //   [selectedProgramModule, program],
  // );
  const actionResponses = programTrack
    ? flatten(
        programTrack.actions.edges.map(({ node: action }) =>
          action.responses.edges.map(({ node: actionResponse }) => actionResponse),
        ),
      )
        .sort((a, b) =>
          DateTime.fromISO(a.createdAt)
            // $FlowFixMe
            .diff(DateTime.fromISO(b.createdAt))
            .as('milliseconds'),
        )
        .reverse()
    : null;

  const selectedProgramModule = selectedActionResponse && {
    id: selectedActionResponse.action.id,
    type: 'action',
    name: selectedActionResponse.action.name,
    description: selectedActionResponse.action.description,
    data: {
      action: selectedActionResponse.action.data,
    },
  };

  React.useEffect(() => {
    if (!query.props || selectedActionResponse !== undefined) {
      return;
    }
    invariant(actionResponses, 'Expected "actionResponses"');

    const lastEventWithResponse = [...actionResponses].find(
      (actionResponse) => actionResponse.response,
    );
    if (lastEventWithResponse) {
      setSelectedActionResponse(lastEventWithResponse);
    }
  }, [actionResponses, query.props, selectedActionResponse]);

  if (!query.props) {
    return <LoadingView />;
  }

  if (!programTrack) {
    throw new Error('Not found');
  }

  invariant(actionResponses, 'Expected "actionResponses"');

  // const reminderModules = program.modules
  //   .filter((module) => module.type === 'reminder')
  //   .sort((a, b) => {
  //     const dayDiff = a.data.startDay - b.data.startDay;
  //     if (dayDiff) return dayDiff;
  //     const timeDiff = a.data.startTime - b.data.startTime;
  //     return timeDiff;
  //   });
  // const actionModules = program.modules.filter((module) => module.type === 'action');

  // const { viewerCanUpdate } = program;

  const selectedProgramModuleResponse = selectedActionResponse && selectedActionResponse.response;

  const isEmptyLog = actionResponses.length === 0;

  // eslint-disable-next-line no-nested-ternary
  const emulatable = isEmptyLog
    ? { type: 'programDetail', program: programTrack.program }
    : selectedProgramModule
    ? {
        type: 'programModule',
        module: selectedProgramModule,
        response: selectedProgramModuleResponse,
      }
    : null;

  return (
    <MobileAppPreviewView emulatable={emulatable} noHeader showSaveButton={false}>
      <Grid container spacing={2}>
        {isEmptyLog ? (
          <Grid item xs={12}>
            <ProgramTrackActionResponseCardEmpty />
          </Grid>
        ) : (
          actionResponses.map((actionResponse) => (
            <Grid key={actionResponse.id} item xs={12}>
              <ProgramTrackActionResponseCard
                programTrackActionResponse={actionResponse}
                selected={
                  (selectedActionResponse && selectedActionResponse.id === actionResponse.id) ||
                  false
                }
                onClick={() => {
                  if (selectedActionResponse && selectedActionResponse.id === actionResponse.id) {
                    setSelectedActionResponse(null);
                  } else {
                    setSelectedActionResponse(actionResponse);
                  }
                }}
              />
            </Grid>
          ))
        )}
      </Grid>
    </MobileAppPreviewView>
  );
});
