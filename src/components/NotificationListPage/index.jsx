// @flow

import * as React from 'react';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import invariant from 'invariant';

import createDashboardPage, { DashboardPageBody } from '../createDashboardPage';
import PageHelmet from '../PageHelmet';
import useInputValue from '../useInputValue';
import DashboardPageHeader from '../DashboardPageHeader';
import { graphql, createQuery } from '../../api';
import LoadingView from '../LoadingView';

import { type NotificationListPageQuery } from './__generated__/NotificationListPageQuery.graphql';
import NotificationList from './NotificationList';

const useQuery = createQuery<NotificationListPageQuery>(graphql`
  query NotificationListPageQuery {
    currentSession {
      user {
        ...NotificationList_user
      }
    }
  }
`);

export default createDashboardPage<any>(function NotificationListPage() {
  const query = useQuery();
  const [search, searchInputProps] = useInputValue('');

  return (
    <>
      <PageHelmet title="Notifications" />
      <DashboardPageBody>
        <DashboardPageHeader>
          <Paper
            elevation={1}
            style={{
              padding: '4px 6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexGrow: 1,
            }}
          >
            <IconButton aria-label="Search" style={{ padding: 8 }}>
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search Notifications"
              {...searchInputProps}
              style={{
                flex: 1,
              }}
            />
          </Paper>
          {// hasUnread && (
          true && (
            <>
              <div style={{ width: 16 }} />
              <Button variant="contained" onClick={() => alert('Not yet implemented.')}>
                Mark All as Read
              </Button>
            </>
          )}
        </DashboardPageHeader>
        <div style={{ height: 8 }} />
        {(({ props: data }) => {
          if (!data) {
            return <LoadingView />;
          }

          const { currentSession } = data;
          invariant(currentSession, 'Expected "currentSession"');

          return <NotificationList filter={{ search }} user={currentSession.user} />;
        })(query)}
      </DashboardPageBody>
    </>
  );
});
