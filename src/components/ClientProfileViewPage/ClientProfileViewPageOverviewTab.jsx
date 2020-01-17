// @flow

import * as React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import invariant from 'invariant';
import { DateTime, Interval } from 'luxon';
import { Select, MenuItem } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WatchLaterIcon from '@material-ui/icons/WatchLater';

import { DashboardPageBody } from '../createDashboardPage';
import { graphql, createQuery } from '../../api';
import LoadingView from '../LoadingView';
// import ProgramTrackRow from '../ProgramViewPage/ProgramTrackRow';
import EventDailyProgressChart from '../EventDailyProgressChart';
import EmptyChart from '../EmptyChart';
import {
  type ProgramModuleDataAction,
  type GenericProgramModuleDataData,
} from '../../helpers/programModuleData';
import BlocksActionFieldBlockChart from '../BlocksActionFieldBlockChart';
import { useDispatch, useSelector } from '../../store';
import createDashboardPageTab from '../createDashboardPageTab';

import { type ClientProfileViewPageOverviewTabQuery } from './__generated__/ClientProfileViewPageOverviewTabQuery.graphql';
import ClientProfileViewPageOverviewTabProgramTrackRow from './ClientProfileViewPageOverviewTabProgramTrackRow';
import StateDescription from './StateDescription';

const useQuery = createQuery<ClientProfileViewPageOverviewTabQuery>(graphql`
  query ClientProfileViewPageOverviewTabQuery(
    $clientProfileId: ID
    $programTracksFilter: ProgramTrackFilterInput
    $eventsFilter: ProgramTrackEventFilterInput
  ) {
    clientProfile(id: $clientProfileId) {
      ...PresentableViewPageHeader_presentable
      id
      name
      user {
        id
      }
    }
    programTracks(first: 9999, filter: $programTracksFilter) {
      edgeCount
      edges {
        node {
          ...ClientProfileViewPageOverviewTabProgramTrackRow_programTrack
            @arguments(eventsFilter: $eventsFilter)
          id
          program {
            name
          }
          actions(filter: { type: { eq: "multiStep" } }, first: 9999) {
            edges {
              node {
                id
                name
                data
                sourceProgramModule {
                  data
                }
                responses(first: 9999) {
                  edges {
                    node {
                      response
                      createdAt
                    }
                  }
                }
                events(filter: $eventsFilter, first: 9999) {
                  edges {
                    node {
                      id
                      startDate
                      actionResponses(first: 1) {
                        edges {
                          node {
                            response
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          events(filter: $eventsFilter, first: 9999) {
            edges {
              node {
                startDate
                hasResponse
              }
            }
          }
        }
      }
    }
  }
`);

export default createDashboardPageTab<any>(function ClientProfileViewPageOverviewTab() {
  const match = useRouteMatch();
  const { clientProfileId } = match.params;
  invariant(clientProfileId, 'Expected "clientProfileId"');

  const programTracksFilter = React.useMemo(
    () => ({
      ownerId: 'me',
      clientProfileId,
    }),
    [clientProfileId],
  );
  const { eventsFilter, chartInterval } = React.useMemo(() => {
    const now = DateTime.utc();
    const interval = Interval.fromDateTimes(now.minus({ days: 6 }).startOf('day'), now);

    return {
      eventsFilter: {
        startDate: {
          after: interval.start.toISO(),
          before: interval.end.toISO(),
        },
      },
      chartInterval: interval,
    };
  }, []);
  const query = useQuery({
    clientProfileId,
    programTracksFilter,
    eventsFilter,
  });
  const clientProfile = query.props?.clientProfile;
  const programTracks = query.props?.programTracks;

  const clientProfileSelectedChartIds = useSelector((s) => s.clientProfileSelectedChartIds);
  const selectedChartId = clientProfileSelectedChartIds[clientProfileId] ?? '';

  const dispatch = useDispatch();
  const onChartIdSelectChange = React.useCallback(
    (event) => {
      invariant(clientProfile, 'Expected "clientProfile"');
      const chartId = event.target.value;
      dispatch({ type: 'setClientProfileSelectedChartId', payload: [clientProfile.id, chartId] });
    },
    [clientProfile, dispatch],
  );

  if (!query.props) {
    return <LoadingView />;
  }

  if (!clientProfile || !programTracks) {
    throw new Error('Not found');
  }

  const charts = programTracks.edges.flatMap(({ node: programTrack }) => {
    return programTrack.actions.edges.flatMap(({ node: programTrackAction }) => {
      const action: ProgramModuleDataAction = programTrackAction.data;
      const sourceProgramModuleData: GenericProgramModuleDataData =
        programTrackAction.sourceProgramModule.data;
      const scheduled = sourceProgramModuleData.scheduling !== null;

      invariant(
        action.type === 'multiStep',
        `Expected "action.type" to be "multiStep", got "${action.type}"`,
      );

      return action.steps.flatMap((step, stepIndex) => {
        const stepAction = step.action;
        invariant(stepAction, 'Expected "stepAction"');
        invariant(stepAction.type === 'blocks', 'Expected "stepAction.type" to be "blocks"');

        return stepAction.blocks.flatMap((block, blockIndex) => {
          if (
            block.type !== 'scaleField' &&
            block.type !== 'multipleChoiceField' &&
            block.type !== 'numberField'
          )
            return [];

          type MultiStepActionResponseStep = $ReadOnly<{|
            type: 'blocks',
            fields: $ReadOnlyArray<string>,
          |}>;
          type MultiStepActionResponse = {|
            type: 'multiStep',
            steps: $ReadOnlyArray<MultiStepActionResponseStep>,
          |};

          let events;
          if (scheduled) {
            events = programTrackAction.events.edges.map(({ node: event }) => {
              const response: MultiStepActionResponse | null = event.actionResponses.edges.length
                ? event.actionResponses.edges[0].node.response
                : null;

              return {
                event,
                response: response?.steps[stepIndex].fields[blockIndex] || null,
              };
            });
          } else {
            events = programTrackAction.responses.edges.map(
              ({ node: programTrackActionResponse }) => {
                const { response } = programTrackActionResponse;

                return {
                  event: {
                    startDate: programTrackActionResponse.createdAt,
                  },
                  response: response.steps[stepIndex].fields[blockIndex],
                };
              },
            );
          }

          if (!events.length || !events.find((e) => !!e.response)) return [];

          return [
            {
              id: btoa([programTrack.id, programTrackAction.id, stepIndex, blockIndex].join(':')),
              name: `${programTrack.program.name} - ${programTrackAction.name} - ${block.title}`,
              // program,
              // programTrack,
              // programTrackAction,
              // step,
              // stepIndex,
              block,
              // blockIndex,
              events,
            },
          ];
        });
      });
    });
  });

  const selectedChart = selectedChartId ? charts.find((c) => c.id === selectedChartId) : null;

  if (selectedChartId && !selectedChart) {
    dispatch({ type: 'setClientProfileSelectedChartId', payload: [clientProfile.id, ''] });
  }

  if (!selectedChartId && charts.length) {
    dispatch({
      type: 'setClientProfileSelectedChartId',
      payload: [clientProfile.id, charts[0].id],
    });
  }

  const events = [];
  programTracks.edges.forEach(({ node: programTrack }) => {
    programTrack.events.edges.forEach(({ node: event }) => {
      events.push(event);
    });
  });

  const lines = [{ events }];

  return (
    <>
      <DashboardPageBody>
        <div>
          <div style={{ height: '35vh', display: 'flex' }}>
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              }}
            >
              {!charts.length ? (
                <EmptyChart
                  component="EventDailyProgressChart"
                  label="Charts and analysis will appear here soon"
                />
              ) : (
                <>
                  <Typography variant="h6" gutterBottom>
                    Completion Last 7 Days
                  </Typography>
                  <EventDailyProgressChart lines={lines} interval={chartInterval} />
                </>
              )}
            </div>
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              }}
            >
              {!charts.length ? (
                <EmptyChart
                  component="NumberFieldBlockChart"
                  label="Charts and analysis will appear here soon"
                />
              ) : (
                <>
                  <Select
                    value={selectedChartId}
                    onChange={onChartIdSelectChange}
                    displayEmpty
                    style={{ width: '100%', overflow: 'hidden', marginBottom: '0.35em' }}
                  >
                    <MenuItem value="">Select a chart</MenuItem>
                    {charts.map(({ id, name }) => (
                      <MenuItem value={id}>{name}</MenuItem>
                    ))}
                  </Select>
                  {!selectedChart ? (
                    <div
                      style={{
                        flex: 1,
                        display: 'flex',
                        placeContent: 'center',
                        placeItems: 'center',
                      }}
                    >
                      <Typography variant="body1">Select a chart.</Typography>
                    </div>
                  ) : (
                    <BlocksActionFieldBlockChart
                      block={selectedChart.block}
                      events={selectedChart.events}
                      interval={chartInterval}
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <div style={{ height: 16 }} />
        <div style={{ paddingLeft: '48px', paddingRight: '48px' }}>
          <>
            <br></br>
            {!charts.length ? (
              <div>
                <Typography variant="h6" gutterBottom>
                  Invitation Status
                </Typography>
                {clientProfile.user ? (
                  <StateDescription icon={<CheckCircleIcon color="primary" />}>
                    Accepted
                  </StateDescription>
                ) : (
                  <StateDescription icon={<WatchLaterIcon />}>Pending</StateDescription>
                )}
              </div>
            ) : null}
            <div style={{ height: 16 }} />
          </>
          <div>
            <Typography variant="h6" gutterBottom>
              Programs
            </Typography>
            {!programTracks.edgeCount ? (
              <div>
                <StateDescription icon={<CancelIcon />}>
                  You haven&apos;t assigned a program yet
                </StateDescription>
              </div>
            ) : (
              <div>
                {programTracks.edges.map(({ node: programTrack }) => (
                  <ClientProfileViewPageOverviewTabProgramTrackRow
                    key={programTrack.id}
                    programTrack={programTrack}
                    chartInterval={chartInterval}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </DashboardPageBody>
    </>
  );
});
