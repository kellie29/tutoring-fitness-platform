// @flow

import * as React from 'react';
import Typography from '@material-ui/core/Typography';

import { graphql, createFragment } from '../../api';
import PresentableAvatar from '../PresentableAvatar';

import { type ClientProfileInvitationScreen_clientProfileInvitation as ClientProfileInvitation } from './__generated__/ClientProfileInvitationScreen_clientProfileInvitation.graphql';

const useFragment = createFragment<ClientProfileInvitation>(graphql`
  fragment ClientProfileInvitationScreen_clientProfileInvitation on ClientProfileInvitation {
    id
    token
    clientProfile {
      owner {
        ...PresentableAvatar_presentable
        id
        ... on User {
          name
        }
      }
    }
  }
`);

type Props = {|
  clientProfileInvitation: any,
|};

export default function ClientProfileInvitationViewScreen(props: Props) {
  const clientProfileInvitation = useFragment(props.clientProfileInvitation);

  return (
    <>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '32px 16px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <PresentableAvatar
            presentable={clientProfileInvitation.clientProfile.owner}
            style={{ width: 128, height: 128 }}
          />
          <div style={{ height: 32 }} />
          <Typography variant="body" gutterBottom>
            You have been invited to become a client of
          </Typography>
          <Typography variant="h5" style={{ margin: '16px 0' }}>
            {clientProfileInvitation.clientProfile.owner.name}
          </Typography>
        </div>
      </div>
    </>
  );
}
