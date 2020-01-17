// @flow

import * as React from 'react';
import { useRouteMatch } from 'react-router-dom';

import createDashboardPage, { DashboardPageBody } from '../createDashboardPage';
import PageHelmet from '../PageHelmet';
import { createQuery, graphql } from '../../api';
import LoadingView from '../LoadingView';
import ViewPageHeader from '../ViewPageHeader';

import { type ChatPageQuery } from './__generated__/ChatPageQuery.graphql';
import { type ChatPageChatChannelQuery } from './__generated__/ChatPageChatChannelQuery.graphql';
import ChatPageChatChannelList from './ChatPageChatChannelList';
import ChatPageChatChannelView from './ChatPageChatChannelView';
import TwilioClientGate from './TwilioClientGate';

const useQuery = createQuery<ChatPageQuery>(graphql`
  query ChatPageQuery($filter: ChatChannelFilterInput!) {
    ...ChatPageChatChannelList_query @arguments(filter: $filter)
  }
`);

const useChatChannelQuery = createQuery<ChatPageChatChannelQuery>(graphql`
  query ChatPageChatChannelQuery($chatChannelId: ID) {
    chatChannel(id: $chatChannelId) {
      ...ChatPageChatChannelView_chatChannel
    }
  }
`);

export default createDashboardPage<any>(function ChatPage() {
  const match = useRouteMatch();
  const { chatChannelId } = match.params;

  const query = useQuery({
    filter: {
      userId: 'me',
    },
  });
  const chatChannelQuery = useChatChannelQuery({ chatChannelId });
  const chatChannel = chatChannelQuery.props?.chatChannel;

  let rightPane;
  if (!chatChannelId) {
    rightPane = <div style={{ flex: 1 }}>Select soomething on the left</div>;
  } else if (!chatChannel) {
    rightPane = <LoadingView />;
  } else {
    rightPane = (
      <div style={{ flex: 1 }}>
        <TwilioClientGate>
          <ChatPageChatChannelView chatChannel={chatChannel} />
        </TwilioClientGate>
      </div>
    );
  }

  return (
    <>
      <PageHelmet title="Messages" />
      <ViewPageHeader titleContent="Messaging" />
      <DashboardPageBody variant="unpadded" hideDownBreakpoint="md" style={{ overflow: 'hidden' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
          <div style={{ flexShrink: 0, width: 300, borderRight: '1px solid black' }}>
            {!query.props ? <LoadingView /> : <ChatPageChatChannelList query={query.props} />}
          </div>
          {rightPane}
        </div>
      </DashboardPageBody>
    </>
  );
});
