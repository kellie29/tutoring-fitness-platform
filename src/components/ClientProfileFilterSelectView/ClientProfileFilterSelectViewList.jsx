//  @flow

import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { graphql, createPagination } from '../../api';
import LoadingView from '../LoadingView';

import { type ClientProfileFilterSelectViewList_query as Query } from './__generated__/ClientProfileFilterSelectViewList_query.graphql';
import ClientProfileFilterSelectViewListRow from './ClientProfileFilterSelectViewListRow';

const usePagination = createPagination<Query>(graphql`
  fragment ClientProfileFilterSelectViewList_query on Query
    @argumentDefinitions(
      filter: { type: "ClientProfileFilterInput" }
      count: { type: "Int", defaultValue: 10 }
      cursor: { type: "ID" }
    ) {
    clientProfiles(filter: $filter, first: $count, after: $cursor)
      @connection(key: "ClientProfileFilterSelectViewList_clientProfiles") {
      edges {
        node {
          ...ClientProfileFilterSelectViewListRow_clientProfile
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
    };
  },
  query: graphql`
    query ClientProfileFilterSelectViewListPaginationQuery(
      $filter: ClientProfileFilterInput
      $count: Int!
      $cursor: ID
    ) {
      ...ClientProfileFilterSelectViewList_query
        @arguments(filter: $filter, count: $count, cursor: $cursor)
    }
  `,
};

type Props = {|
  query: mixed,
  selectedClientProfileId: string | null,
  onClientProfileClick: (clientProfileId: string) => void,
|};

export default function ClientProfileFilterSelectViewList(props: Props) {
  const { selectedClientProfileId, onClientProfileClick } = props;

  const [query, relay] = usePagination(props.query);

  const loadMore = () => {
    relay.loadMore(connectionConfig, 10);
  };

  return (
    <div
      style={{
        overflowY: 'auto',
      }}
    >
      <InfiniteScroll
        loadMore={loadMore}
        hasMore={relay.hasMore()}
        loader={<LoadingView key="loader" />}
        useWindow={false}
      >
        {query.clientProfiles.edges.map(({ node: clientProfile }) => (
          <ClientProfileFilterSelectViewListRow
            key={clientProfile.id}
            clientProfile={clientProfile}
            selected={selectedClientProfileId === clientProfile.id}
            onSelectClick={() => onClientProfileClick(clientProfile.id)}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}
