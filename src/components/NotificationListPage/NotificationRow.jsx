//  @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import { FormattedDate } from 'react-intl';

import { graphql, createFragment, createMutation } from '../../api';
import ListPaper from '../ListPaper';
import PresentableTag from '../PresentableTag';

import { type NotificationRow_notification as Notification } from './__generated__/NotificationRow_notification.graphql';
import { type NotificationRowUpdateNotificationMutation } from './__generated__/NotificationRowUpdateNotificationMutation.graphql';

const useMutation = createMutation<NotificationRowUpdateNotificationMutation>(graphql`
  mutation NotificationRowUpdateNotificationMutation($input: UpdateNotificationInput!) {
    updateNotification(input: $input) {
      notification {
        isRead
      }
    }
  }
`);

const useFragment = createFragment<Notification>(graphql`
  fragment NotificationRow_notification on Notification {
    id
    type
    isRead
    createdAt
    from {
      ...PresentableTag_presentable
    }
    to {
      ...PresentableTag_presentable
    }
    object {
      typeName: __typename
      ... on Node {
        id
      }
    }
  }
`);

type Props = {
  notification: mixed,
};

export default function NotificationRow(props: Props) {
  const notification = useFragment(props.notification);

  const updateNotification = useMutation();

  const onMarkAsReadClick = React.useCallback(() => {
    updateNotification({
      input: { id: notification.id, isRead: true },
    });
  }, [notification.id, updateNotification]);

  const onMarkAsUnreadClick = React.useCallback(() => {
    updateNotification({
      input: { id: notification.id, isRead: false },
    });
  }, [notification.id, updateNotification]);

  return (
    <ListPaper key={notification.id}>
      <div
        style={{
          padding: '1.5rem 2.5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            backgroundColor: 'rgb(245, 245, 245)',
          }}
        >
          {notification.id} - {notification.type}
          <div style={{ fontSize: 14 }}>
            <PresentableTag presentable={notification.from} />
          </div>
          <div style={{ fontSize: 14 }}>
            <PresentableTag presentable={notification.to} />
          </div>
        </div>
      </div>
      <div
        style={{
          padding: '1.5rem 2.5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <Chip
            label={
              <span>
                {'Created - '}
                <FormattedDate
                  value={notification.createdAt}
                  year="numeric"
                  month="long"
                  day="2-digit"
                  hour="numeric"
                  minute="numeric"
                />
              </span>
            }
          />
        </div>
        {/* <div style={{ marginTop: 24, fontSize: 16 }}>{program.description}</div> */}
        <div>
          {(() => {
            const objectTypeName = notification.object.typeName;
            const objectId = notification.object.id;

            if (!objectId) return null;

            switch (objectTypeName) {
              case 'ProgramInvitation': {
                return (
                  <Button
                    variant="contained"
                    component={Link}
                    to={`/dashboard/program-invitations/view/${objectId}`}
                  >
                    View Invitation
                  </Button>
                );
              }
              default: {
                return null;
              }
            }
          })()}
          {notification.isRead ? (
            <Button variant="contained" onClick={onMarkAsUnreadClick}>
              Mark as Unread
            </Button>
          ) : (
            <Button variant="contained" onClick={onMarkAsReadClick}>
              Mark as Read
            </Button>
          )}
        </div>
      </div>
    </ListPaper>
  );
}
