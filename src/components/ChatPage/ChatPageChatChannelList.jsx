//  @flow

import * as React from 'react';
import { List, ListItem } from '@material-ui/core';
import { useHistory, matchPath } from 'react-router-dom';

import { graphql, createPagination } from '../../api';

import { type ChatPageChatChannelList_query as Query } from './__generated__/ChatPageChatChannelList_query.graphql';
import ChatPageChatChannelListItem from './ChatPageChatChannelListItem';

const usePagination = createPagination<Query>(graphql`
  fragment ChatPageChatChannelList_query on Query
    @argumentDefinitions(
      filter: { type: "ChatChannelFilterInput" }
      count: { type: "Int", defaultValue: 10 }
      cursor: { type: "ID" }
    ) {
    chatChannels(filter: $filter, first: $count, after: $cursor)
      @connection(key: "ChatPageChatChannelList_chatChannels") {
      edges {
        node {
          ...ChatPageChatChannelListItem_chatChannel
          id
        }
      }
    }
  }
`);

// const connectionConfig = {
//   query: graphql`
//     query ChatPageChatChannelListPaginationQuery(
//       $filter: ChatChannelFilterInput
//       $count: Int!
//       $cursor: ID
//     ) {
//       ...ChatPageChatChannelList_query @arguments(filter: $filter, count: $count, cursor: $cursor)
//     }
//   `,
//   getVariables: (props, { count, cursor }, fragmentVariables) => {
//     return {
//       count,
//       cursor,
//       filter: fragmentVariables.filter,
//     };
//   },
// };

type Props = {|
  query: mixed,
|};

export default function ChatPageChatChannelList(props: Props) {
  const history = useHistory();
  const [query] = usePagination(props.query);

  return (
    <List>
      {query.chatChannels.edges.map(({ node: chatChannel }) => (
        <ListItem
          key={chatChannel.id}
          button
          selected={matchPath(history.location.pathname, `/dashboard/chat/${chatChannel.id}`)}
          onClick={() => {
            history.push(`/dashboard/chat/${chatChannel.id}`);
          }}
        >
          <ChatPageChatChannelListItem chatChannel={chatChannel} />
        </ListItem>
      ))}
    </List>
  );
}
