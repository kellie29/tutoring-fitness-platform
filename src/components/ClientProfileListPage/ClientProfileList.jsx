//  @flow

import * as React from 'react';
import { Interval } from 'luxon';

import { graphql, createPagination } from '../../api';
import ListPageList, { ListPageListItem } from '../ListPageList';
import ClientProfileListItem from '../ClientProfileListItem';

import { type ClientProfileList_query as Query } from './__generated__/ClientProfileList_query.graphql';

const usePagination = createPagination<Query>(graphql`
  fragment ClientProfileList_query on Query
    @argumentDefinitions(
      filter: { type: "ClientProfileFilterInput" }
      count: { type: "Int", defaultValue: 10 }
      cursor: { type: "ID" }
      eventsFilter: { type: "ProgramTrackEventFilterInput" }
    ) {
    clientProfiles(filter: $filter, first: $count, after: $cursor)
      @connection(key: "ClientProfileList_clientProfiles") {
      edges {
        node {
          ...ClientProfileListItem_clientProfile @arguments(eventsFilter: $eventsFilter)
          id
        }
      }
    }
  }
`);

const connectionConfig = {
  getVariables: (props, { count, cursor }, fragmentVariables) => {
    return {
      count,
      cursor,
      filter: fragmentVariables.filter,
      eventsFilter: fragmentVariables.eventsFilter,
    };
  },
  query: graphql`
    query ClientProfileListPaginationQuery(
      $filter: UserFilterInput
      $count: Int!
      $cursor: ID
      $eventsFilter: ProgramTrackEventFilterInput
    ) {
      ...ClientProfileList_query
        @arguments(filter: $filter, count: $count, cursor: $cursor, eventsFilter: $eventsFilter)
    }
  `,
};

type Props = {|
  query: mixed,
  showStats?: boolean,
  progressInterval: Interval,
  dailyProgressInterval: Interval,
|};

export default function ClientProfileList(props: Props) {
  const { showStats, progressInterval, dailyProgressInterval } = props;
  const [query, relay] = usePagination(props.query);

  const loadMore = () => {
    relay.loadMore(connectionConfig, 10);
  };

  return (
    <ListPageList loadMore={loadMore} hasMore={relay.hasMore()}>
      {query.clientProfiles.edges.map(({ node: clientProfile }) => (
        <ListPageListItem key={clientProfile.id}>
          <ClientProfileListItem
            clientProfile={clientProfile}
            showStats={showStats}
            progressInterval={progressInterval}
            dailyProgressInterval={dailyProgressInterval}
          />
        </ListPageListItem>
      ))}
    </ListPageList>
  );
}
