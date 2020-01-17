//  @flow

import * as React from 'react';

import { graphql, createPagination } from '../../api';
import ListPageList, { ListPageListItem } from '../ListPageList';

import { type UserGroupList_query as Query } from './__generated__/UserGroupList_query.graphql';
import UserGroupRow from './UserGroupRow';

const usePagination = createPagination<Query>(graphql`
  fragment UserGroupList_query on Query
    @argumentDefinitions(
      filter: { type: "UserGroupFilterInput" }
      count: { type: "Int", defaultValue: 10 }
      cursor: { type: "ID" }
    ) {
    userGroups(filter: $filter, first: $count, after: $cursor)
      @connection(key: "UserGroupList_userGroups") {
      edges {
        node {
          ...UserGroupRow_userGroup
          id
        }
      }
    }
  }
`);

const connectionConfig = {
  getVariables: (props, { count, cursor }, fragmentVariables) => ({
    count,
    cursor,
    filter: fragmentVariables.filter,
  }),
  query: graphql`
    query UserGroupListPaginationQuery($filter: UserGroupFilterInput, $count: Int!, $cursor: ID) {
      ...UserGroupList_query @arguments(filter: $filter, count: $count, cursor: $cursor)
    }
  `,
};

type Props = {
  query: mixed,
};

export default function UserGroupList(props: Props) {
  const [query, relay] = usePagination(props.query);

  const loadMore = () => {
    relay.loadMore(connectionConfig, 10);
  };

  return (
    <ListPageList loadMore={loadMore} hasMore={relay.hasMore()}>
      {query.userGroups.edges.map(({ node: userGroup }) => (
        <ListPageListItem key={userGroup.id}>
          <UserGroupRow userGroup={userGroup} />
        </ListPageListItem>
      ))}
    </ListPageList>
  );
}
