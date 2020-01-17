//  @flow

import * as React from 'react';
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  // Typography
} from '@material-ui/core';

import { graphql, createFragment } from '../../api';
import PresentableAvatar from '../PresentableAvatar';

import { type ChatPageChatChannelListItem_chatChannel as ChatChannel } from './__generated__/ChatPageChatChannelListItem_chatChannel.graphql';

const useFragment = createFragment<ChatChannel>(graphql`
  fragment ChatPageChatChannelListItem_chatChannel on ChatChannel {
    id
    object {
      ... on Presentable {
        ...PresentableAvatar_presentable
        name
      }
    }
  }
`);

type Props = {
  chatChannel: mixed,
};

export default function ChatPageChatChannelListItem(props: Props) {
  const chatChannel = useFragment(props.chatChannel);

  const selected = false;

  return (
    <ListItem alignItems="flex-start" selected={selected} button>
      <ListItemAvatar>
        <PresentableAvatar presentable={chatChannel.object} />
      </ListItemAvatar>
      <ListItemText
        primary={chatChannel.object.name}
        // secondary={
        //   <React.Fragment>
        //     <Typography
        //       component="span"
        //       variant="body2"
        //       style={{ display: 'inline' }}
        //       color="textPrimary"
        //     >
        //       Sender
        //     </Typography>
        //     Text
        //   </React.Fragment>
        // }
      />
    </ListItem>
  );
}
