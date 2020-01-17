//  @flow

import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { graphql, createPagination } from '../../api';
import LoadingView from '../LoadingView';

import { type UserGroupFilterSelectViewList_query as Query } from './__generated__/UserGroupFilterSelectViewList_query.graphql';
import UserGroupFilterSelectViewListRow from './UserGroupFilterSelectViewListRow';

const usePagination = createPagination<Query>(graphql`
  fragment UserGroupFilterSelectViewList_query on Query
    @argumentDefinitions(
      filter: { type: "UserGroupFilterInput" }
      count: { type: "Int", defaultValue: 10 }
      cursor: { type: "ID" }
    ) {
    userGroups(filter: $filter, first: $count, after: $cursor)
      @connection(key: "UserGroupFilterSelectViewList_userGroups") {
      edges {
        node {
          ...UserGroupFilterSelectViewListRow_userGroup
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
    query UserGroupFilterSelectViewListPaginationQuery(
      $filter: UserGroupFilterInput
      $count: Int!
      $cursor: ID
    ) {
      ...UserGroupFilterSelectViewList_query
        @arguments(filter: $filter, count: $count, cursor: $cursor)
    }
  `,
};

type Props = {|
  query: mixed,
  selectedUserGroupId: string | null,
  onUserGroupClick: (userGroupId: string) => void,
|};

export default function UserGroupFilterSelectViewList(props: Props) {
  const { selectedUserGroupId, onUserGroupClick } = props;

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
        {query.userGroups.edges.map(({ node: userGroup }) => (
          <UserGroupFilterSelectViewListRow
            key={userGroup.id}
            userGroup={userGroup}
            selected={selectedUserGroupId === userGroup.id}
            onSelectClick={() => onUserGroupClick(userGroup.id)}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}
