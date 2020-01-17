//  @flow

import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { graphql, createPagination } from '../../api';
import LoadingView from '../LoadingView';

import { type NotificationList_user as User } from './__generated__/NotificationList_user.graphql';
import NotificationRow from './NotificationRow';

const usePagination = createPagination<User>(graphql`
  fragment NotificationList_user on User
    @argumentDefinitions(
      filter: { type: "NotificationFilterInput" }
      count: { type: "Int", defaultValue: 10 }
      cursor: { type: "ID" }
    ) {
    notifications(filter: $filter, first: $count, after: $cursor)
      @connection(key: "NotificationList_notifications") {
      edges {
        node {
          id
          ...NotificationRow_notification
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
    query NotificationListPaginationQuery(
      $filter: NotificationFilterInput
      $count: Int!
      $cursor: ID
    ) {
      currentSession {
        user {
          ...NotificationList_user @arguments(filter: $filter, count: $count, cursor: $cursor)
        }
      }
    }
  `,
};

type Props = {
  user: mixed,
};

export default function NotificationList(props: Props) {
  const [user, relay] = usePagination(props.user);

  const loadMore = () => {
    relay.loadMore(connectionConfig, 10);
  };

  return (
    <InfiniteScroll
      loadMore={loadMore}
      hasMore={relay.hasMore()}
      loader={<LoadingView key="loader" />}
    >
      {user.notifications.edges.map(
        ({ node: notification }) =>
          notification && <NotificationRow key={notification.id} notification={notification} />,
      )}
    </InfiniteScroll>
  );
}
