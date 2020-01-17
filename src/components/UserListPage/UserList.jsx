//  @flow

import * as React from 'react';
import { Link } from 'react-router-dom';

import { graphql, createPagination } from '../../api';
import NodeListItem from '../NodeListItem';
import ListPageList, { ListPageListItem } from '../ListPageList';

import { type UserList_query as Query } from './__generated__/UserList_query.graphql';

const usePagination = createPagination<Query>(graphql`
  fragment UserList_query on Query
    @argumentDefinitions(
      filter: { type: "UserFilterInput" }
      count: { type: "Int", defaultValue: 10 }
      cursor: { type: "ID" }
    ) {
    users(filter: $filter, first: $count, after: $cursor) @connection(key: "UserList_users") {
      edges {
        node {
          ...NodeListItem_node
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
    query UserListPaginationQuery($filter: UserFilterInput, $count: Int!, $cursor: ID) {
      ...UserList_query @arguments(filter: $filter, count: $count, cursor: $cursor)
    }
  `,
};

type Props = {|
  query: mixed,
|};

export default function UserList(props: Props) {
  const [query, relay] = usePagination(props.query);

  const loadMore = () => {
    relay.loadMore(connectionConfig, 10);
  };

  return (
    <ListPageList loadMore={loadMore} hasMore={relay.hasMore()}>
      {query.users.edges.map(({ node: user }) => (
        <ListPageListItem key={user.id}>
          <NodeListItem component={Link} to={`/dashboard/users/view/${user.id}`} node={user} />
        </ListPageListItem>
      ))}
    </ListPageList>
  );
}
