// @flow

import * as React from 'react';
import { type ContextRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import invariant from 'invariant';

import PageHelmet from '../PageHelmet';
import { graphql, createQuery } from '../../api';
import LoadingView from '../LoadingView';
import MobileAppEmulator, { EmulatorStateProvider } from '../MobileAppEmulator';
import appData from '../../data';

import AppStore from './AppStore.png';
import GooglePlay from './GooglePlay.png';
import ClientProfileInvitationViewScreen from './ClientProfileInvitationScreen';
import { type ClientProfileInvitationPageQuery } from './__generated__/ClientProfileInvitationPageQuery.graphql';

const useQuery = createQuery<ClientProfileInvitationPageQuery>(graphql`
  query ClientProfileInvitationPageQuery($clientProfileInvitationToken: String!) {
    clientProfileInvitation(token: $clientProfileInvitationToken) {
      ...ClientProfileInvitationScreen_clientProfileInvitation
      id
      firebaseShortLink
      clientProfile {
        owner {
          ... on User {
            name
          }
        }
      }
    }
  }
`);

type Props = {|
  ...ContextRouter,
|};

export default function ClientProfileInvitationPage(props: Props) {
  const { match } = props;
  const { clientProfileInvitationToken } = match.params;
  invariant(clientProfileInvitationToken, 'Expected "clientProfileInvitationToken"');

  const query = useQuery({
    clientProfileInvitationToken,
  });
  const clientProfileInvitation = query.props?.clientProfileInvitation;

  const matches = useMediaQuery('(max-width: 700px)');

  if (!query.props) {
    return <LoadingView />;
  }

  if (!clientProfileInvitation) {
    throw new Error('Not found');
  }

  let viewInAppUrl = `${appData.mobileApp.urlScheme}://ci/${clientProfileInvitation.id}`;
  if (clientProfileInvitation.firebaseShortLink) {
    viewInAppUrl = clientProfileInvitation.firebaseShortLink;
  }

  return (
    <>
      <PageHelmet
        // $FlowFixMe
        title={`Client Invitation from "${clientProfileInvitation.clientProfile.owner.name}"`}
      />
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '32px 16px',
          textAlign: 'center',
          ...(matches ? { backgroundColor: 'white' } : null),
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
          {matches ? (
            <>
              <ClientProfileInvitationViewScreen
                clientProfileInvitation={clientProfileInvitation}
              />
              <Button
                variant="contained"
                color="primary"
                component="a"
                href={viewInAppUrl}
                style={{ marginTop: 100 }}
              >
                View in App
              </Button>
            </>
          ) : (
            <>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <div style={{ width: 320, height: 'auto' }}>
                  <EmulatorStateProvider>
                    <MobileAppEmulator
                      emulatable={{ type: 'clientProfileInvitation', clientProfileInvitation }}
                    />
                  </EmulatorStateProvider>
                </div>
                <div
                  style={{
                    textAlign: 'center',
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 64,
                  }}
                >
                  <Typography variant="h5" style={{ marginBottom: 32 }}>
                    Open this link on your mobile device to get instant access.
                  </Typography>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <a
                      href={`https://play.google.com/store/apps/details?id=${appData.mobileApp.androidPackageName}`}
                      style={{ marginRight: 32 }}
                    >
                      <img src={GooglePlay} alt="Google Play" style={{ width: 200 }} />
                    </a>
                    <a
                      href={`https://apps.apple.com/bn/app/obschart/id${appData.mobileApp.iosAppStoreId}`}
                    >
                      <img src={AppStore} alt="App Store" style={{ width: 200, padding: 16 }} />
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
