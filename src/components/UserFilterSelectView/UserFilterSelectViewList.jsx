//  @flow

import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { graphql, createPagination } from '../../api';
import LoadingView from '../LoadingView';

import { type UserFilterSelectViewList_query as Query } from './__generated__/UserFilterSelectViewList_query.graphql';
import UserFilterSelectViewListRow from './UserFilterSelectViewListRow';

const usePagination = createPagination<Query>(graphql`
  fragment UserFilterSelectViewList_query on Query
    @argumentDefinitions(
      filter: { type: "UserFilterInput" }
      count: { type: "Int", defaultValue: 10 }
      cursor: { type: "ID" }
    ) {
    users(filter: $filter, first: $count, after: $cursor)
      @connection(key: "UserFilterSelectViewList_users") {
      edges {
        node {
          ...UserFilterSelectViewListRow_user
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
    query UserFilterSelectViewListPaginationQuery(
      $filter: UserFilterInput
      $count: Int!
      $cursor: ID
    ) {
      ...UserFilterSelectViewList_query @arguments(filter: $filter, count: $count, cursor: $cursor)
    }
  `,
};

type Props = {|
  query: mixed,
  selectedUserId: string | null,
  onUserClick: (userId: string) => void,
|};

export default function UserFilterSelectViewList(props: Props) {
  const { selectedUserId, onUserClick } = props;

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
        {query.users.edges.map(({ node: user }) => (
          <UserFilterSelectViewListRow
            key={user.id}
            user={user}
            selected={selectedUserId === user.id}
            onSelectClick={() => onUserClick(user.id)}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}
