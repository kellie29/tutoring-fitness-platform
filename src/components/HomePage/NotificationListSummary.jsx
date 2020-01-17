//  @flow

import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import invariant from 'invariant';
import { Typography, Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core';
// $FlowFixMe
import { FormattedRelativeTime, FormattedMessage } from 'react-intl';
import { DateTime } from 'luxon';

import { graphql, createFragment } from '../../api';
import PresentableAvatar from '../PresentableAvatar';

import { type NotificationListSummary_query as Query } from './__generated__/NotificationListSummary_query.graphql';

const useFragment = createFragment<Query>(graphql`
  fragment NotificationListSummary_query on Query {
    notifications(filter: { toId: "me" }, first: 3) {
      edges {
        node {
          id
          type
          isSeen
          isRead
          createdAt
          from {
            ...PresentableCardMedia_presentable
            ...PresentableAvatar_presentable
            __typename
            id
            name
            ... on User {
              email
            }
          }
          to {
            ... on User {
              __typename
              id
              name
            }
          }
          object {
            typeName: __typename
            id
            name
            ... on ClientProfileInvitation {
              clientProfile {
                id
              }
            }
            ... on ProgramTrackAction {
              track {
                id
                clientProfile {
                  id
                }
                program {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`);

type Props = {|
  query: mixed,
|};

export default function NotificationListSummary(props: Props) {
  const query = useFragment(props.query);

  const notificationEdges = query.notifications.edges.filter(
    ({ node: notification }) =>
      notification && notification.object.typeName !== 'ProgramTrackEvent',
  );

  return (
    <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center' }}>
      {notificationEdges.length ? (
        notificationEdges.map(({ node: notification }) => {
          invariant(notification, 'Expected "notification"');
          let to;
          switch (notification.object.typeName) {
            case 'ProgramTrackAction': {
              const clientProfileId = notification.object.track?.clientProfile?.id;
              const programTrackId = notification.object.track?.id;
              invariant(clientProfileId, 'Expected "clientProfileId"');
              invariant(programTrackId, 'Expected "trackId"');
              to = `/dashboard/clients/view/${clientProfileId}/tracks/view/${programTrackId}/calendar`;
              break;
            }
            case 'ClientProfileInvitation': {
              const clientProfileId = notification.object.clientProfile?.id;
              invariant(clientProfileId, 'Expected "clientProfileId"');
              to = `/dashboard/clients/view/${clientProfileId}`;
              break;
            }
            default: {
              throw new Error(`Invalid object type "${notification.object.typeName}"`);
            }
          }
          return (
            <Grid key={notification.id} item xs={12} md={12} style={{ display: 'flex' }}>
              <Card style={{ flex: 1 }}>
                <CardActionArea
                  component={Link}
                  to={to}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'stretch',
                  }}
                >
                  <CardMedia>
                    <PresentableAvatar
                      presentable={notification.from}
                      style={{ borderRadius: 0, width: 100, height: 100 }}
                    />
                  </CardMedia>
                  <CardContent style={{ flex: 1, display: 'flex' }}>
                    <div
                      style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        placeItems: 'flex-start',
                        justifyContent: 'space-around',
                      }}
                    >
                      <Typography variant="body1" style={{ textAlign: 'left' }}>
                        <FormattedMessage
                          id="NotificationListSummary.notificationText"
                          defaultMessage={`
                            {type, select,
                              ClientProfileInvitationSent {Client invitation was sent to {email}.}
                              ClientProfileInvitationAccepted {{from} ({email}) accepted your invitation.}
                              ProgramActionUsed {{from} has made progress in {programName}.}
                              other {{type}}
                            }
                          `}
                          values={{
                            type: notification.type,
                            from: <strong>{notification.from.name}</strong>,
                            email: <strong>{notification.from.email}</strong>,
                            programName: <strong>{notification.object.track?.program.name}</strong>,
                          }}
                        />
                      </Typography>
                      <Typography
                        variant="body2"
                        style={
                          {
                            // alignSelf: 'flex-end'
                          }
                        }
                      >
                        <FormattedRelativeTime
                          value={DateTime.fromISO(notification.createdAt)
                            // $FlowFixMe
                            .diffNow()
                            .as('seconds')}
                          numeric="auto"
                          updateIntervalInSeconds={10}
                        />
                      </Typography>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })
      ) : (
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            placeItems: 'center',
            placeContent: 'center',
          }}
        >
          <Typography>You have no notifications yet.</Typography>
        </div>
      )}
    </Grid>
  );
}
