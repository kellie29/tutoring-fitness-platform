//  @flow

import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { Interval } from 'luxon';

import { graphql, createFragment } from '../../api';
import ClientProfileListItem from '../ClientProfileListItem';

import { type ClientProfileListSummary_query as Query } from './__generated__/ClientProfileListSummary_query.graphql';

const useFragment = createFragment<Query>(graphql`
  fragment ClientProfileListSummary_query on Query
    @argumentDefinitions(eventsFilter: { type: "ProgramTrackEventFilterInput" }) {
    clientProfiles(filter: { ownerId: "me" }, first: 3)
      @connection(key: "ClientProfileList_clientProfiles") {
      edges {
        node {
          id
          ...ClientProfileListItem_clientProfile @arguments(eventsFilter: $eventsFilter)
        }
      }
    }
  }
`);

type Props = {|
  query: mixed,
  progressInterval: Interval,
  dailyProgressInterval: Interval,
|};

export default function ClientProfileListSummary(props: Props) {
  const { progressInterval, dailyProgressInterval } = props;

  const query = useFragment(props.query);

  return (
    <Grid container style={{ display: 'flex', justifyContent: 'center' }}>
      {query.clientProfiles.edges.map(({ node: clientProfile }) => (
        <Grid key={clientProfile.id} item xs={12} md={12}>
          <ClientProfileListItem
            clientProfile={clientProfile}
            progressInterval={progressInterval}
            dailyProgressInterval={dailyProgressInterval}
          />
        </Grid>
      ))}
    </Grid>
  );
}
