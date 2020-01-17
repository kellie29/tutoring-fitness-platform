//  @flow

import * as React from 'react';
import { GiftedChat } from 'react-web-gifted-chat';
import invariant from 'invariant';

import { graphql, createFragment } from '../../api';

import { type ChatPageChatChannelView_chatChannel as ChatChannel } from './__generated__/ChatPageChatChannelView_chatChannel.graphql';
import { useTwilioClient } from './TwilioClientGate';

const useFragment = createFragment<ChatChannel>(graphql`
  fragment ChatPageChatChannelView_chatChannel on ChatChannel {
    id
    object {
      ... on Presentable {
        ...PresentableAvatar_presentable
      }
    }
  }
`);

type Props = {
  chatChannel: mixed,
};

export default function ChatPageChatChannelView(props: Props) {
  const chatChannel = useFragment(props.chatChannel);
  const twilioClient = useTwilioClient();
  const [messages, setMessages] = React.useState(null);
  const [twilioChannel, setTwilioChannel] = React.useState(null);

  const onMessageAdded = React.useCallback(
    (message) => {
      invariant(messages, 'Expected "twilioChannel"');
      setMessages([...messages, message]);
    },
    [messages],
  );

  React.useEffect(() => {
    twilioClient.getChannelBySid(chatChannel.id).then((channel) => {
      setTwilioChannel(channel);

      channel.getMessages().then((result) => {
        setMessages(result.items);
      });

      channel.on('messageAdded', onMessageAdded);
    });
  }, [chatChannel.id, onMessageAdded, twilioClient]);

  const gcMessages = React.useMemo(
    () =>
      messages &&
      messages.map((message) => ({
        id: message.sid,
        text: message.body,
        createdAt: message.timestamp,
        user: message.attributes?.user,
      })),
    [messages],
  );

  const onSend = React.useCallback(
    (newMessages) => {
      invariant(twilioChannel, 'Expected "twilioChannel"');

      twilioChannel.sendMessage(newMessages[0].text, {
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      });
    },
    [twilioChannel],
  );

  return (
    <GiftedChat
      messages={gcMessages}
      onSend={onSend}
      inverted={false}
      showAvatarForEveryMessage
      user={{
        _id: 1,
      }}
    />
  );
}
