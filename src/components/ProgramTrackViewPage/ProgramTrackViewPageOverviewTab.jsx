// @flow

import * as React from 'react';
import { type ContextRouter } from 'react-router-dom';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
import invariant from 'invariant';
import { DateTime, Interval } from 'luxon';
import { Typography, Grid } from '@material-ui/core';

import createDashboardPageTab, { DashboardPageTabBody } from '../createDashboardPageTab';
import { graphql, createQuery } from '../../api';
import LoadingView from '../LoadingView';
import EmptyChart from '../EmptyChart';
import {
  type ProgramModuleDataAction,
  type GenericProgramModuleDataData,
} from '../../helpers/programModuleData';
import BlocksActionFieldBlockChart from '../BlocksActionFieldBlockChart';

import { type ProgramTrackViewPageOverviewTabQuery } from './__generated__/ProgramTrackViewPageOverviewTabQuery.graphql';

const useQuery = createQuery<ProgramTrackViewPageOverviewTabQuery>(graphql`
  query ProgramTrackViewPageOverviewTabQuery(
    $programTrackId: ID
    $eventsFilter: ProgramTrackEventFilterInput
  ) {
    programTrack(id: $programTrackId) {
      id
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
    }
  }
`);

type Props = {
  ...ContextRouter,
};

export default createDashboardPageTab<any>(function ProgramTrackViewPageOverviewTab(props: Props) {
  const { match } = props;

  const chartInterval = React.useMemo(() => {
    const now = DateTime.utc();
    return Interval.fromDateTimes(now.minus({ days: 6 }).startOf('day'), now);
  }, []);
  const eventsFilter = React.useMemo(
    () => ({
      startDate: {
        after: chartInterval.start.toISO(),
        before: chartInterval.end.toISO(),
      },
    }),
    [chartInterval.end, chartInterval.start],
  );
  const query = useQuery({
    programTrackId: match.params.programTrackId,
    eventsFilter,
  });
  const programTrack = query.props?.programTrack || null;

  if (!query.props) {
    return <LoadingView />;
  }

  if (!programTrack) {
    throw new Error('Not found');
  }

  type MultiStepActionResponseStep = $ReadOnly<{|
    type: 'blocks',
    fields: $ReadOnlyArray<string>,
  |}>;
  type MultiStepActionResponse = {|
    type: 'multiStep',
    steps: $ReadOnlyArray<MultiStepActionResponseStep>,
  |};

  const actions = programTrack.actions.edges.flatMap(({ node: programTrackAction }) => {
    const action: ProgramModuleDataAction = programTrackAction.data;
    const sourceProgramModuleData: GenericProgramModuleDataData =
      programTrackAction.sourceProgramModule.data;
    const scheduled = sourceProgramModuleData.scheduling !== null;

    invariant(
      action.type === 'multiStep',
      `Expected "action.type" to be "multiStep", got "${action.type}"`,
    );

    const fieldBlocks = action.steps.flatMap((step, stepIndex) => {
      invariant(step.action, 'Expected "step.action"');
      invariant(step.action.type === 'blocks', 'Expected "step.action.type" to be "blocks"');

      return step.action.blocks.flatMap((block, blockIndex) => {
        if (
          block.type !== 'scaleField' &&
          block.type !== 'multipleChoiceField' &&
          block.type !== 'numberField'
        )
          return [];

        let events;
        if (scheduled) {
          events = programTrackAction.events.edges.map(({ node: event }) => {
            const response: MultiStepActionResponse | null = event.actionResponses.edges.length
              ? event.actionResponses.edges[0].node.response
              : null;

            return {
              event,
              response: response?.steps[stepIndex].fields[blockIndex] ?? null,
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
            block,
            events,
          },
        ];
      });
    });

    if (!fieldBlocks.length) return [];

    return [
      {
        programTrackAction,
        fieldBlocks,
      },
    ];
  });

  return (
    <DashboardPageTabBody>
      {!actions.length && (
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
              <EmptyChart
                component="EventDailyProgressChart"
                label="Charts and analysis will appear here soon"
              />
            </div>
          </div>
        </div>
      )}
      {actions.map(({ programTrackAction, fieldBlocks }) => (
        <div key={programTrackAction.id}>
          <Typography variant="h5" gutterBottom>
            {programTrackAction.name}
          </Typography>
          <Grid container>
            {fieldBlocks.map(({ block, events }, i) => (
              <Grid key={i} item xs={12} md={6}>
                <Typography variant="h6">{block.title}</Typography>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 200,
                    overflow: 'hidden',
                  }}
                >
                  <BlocksActionFieldBlockChart
                    block={block}
                    events={events}
                    interval={chartInterval}
                  />
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </DashboardPageTabBody>
  );
});
