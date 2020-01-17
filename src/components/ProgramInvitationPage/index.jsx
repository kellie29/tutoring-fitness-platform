// @flow

import * as React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import PageHelmet from '../PageHelmet';
import { graphql, createQuery } from '../../api';
import PresentableAvatar from '../PresentableAvatar';
import LoadingView from '../LoadingView';
import appData from '../../data';

import { type ProgramInvitationPageQuery } from './__generated__/ProgramInvitationPageQuery.graphql';

const useQuery = createQuery<ProgramInvitationPageQuery>(graphql`
  query ProgramInvitationPageQuery($programInvitationToken: String) {
    programInvitation(token: $programInvitationToken) {
      id
      token
      program {
        id
        name
        owner {
          ...PresentableAvatar_presentable
          id
          ... on Presentable {
            name
          }
        }
      }
      firebaseShortLink
    }
  }
`);

export default function ProgramInvitationViewPage() {
  const match = useRouteMatch();

  const query = useQuery({
    programInvitationToken: match.params.programInvitationToken,
  });
  const programInvitation = query.props?.programInvitation;

  if (!query.props) {
    return <LoadingView />;
  }

  if (!programInvitation) {
    throw new Error('Not found');
  }

  let viewInAppUrl = `${appData.mobileApp.urlScheme}://pi/${programInvitation.id}`;
  if (programInvitation.firebaseShortLink) {
    viewInAppUrl = programInvitation.firebaseShortLink;
  }

  return (
    <>
      <PageHelmet title={`Invitation for "${programInvitation.program.name}"`} />
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
            presentable={programInvitation.program.owner}
            style={{ width: 128, height: 128 }}
          />
          <div style={{ height: 32 }} />
          <Typography variant="body" gutterBottom>
            You have been invited by
          </Typography>
          <Typography variant="h5" style={{ margin: '16px 0' }}>
            {programInvitation.program.owner.name}
          </Typography>
          <Typography variant="body" gutterBottom>
            for
          </Typography>
          <Typography variant="h5" style={{ margin: '16px 0' }}>
            {programInvitation.program.name}
          </Typography>
        </div>
        <div>
          <Button variant="contained" color="primary" component="a" href={viewInAppUrl}>
            View in App
          </Button>
        </div>
      </div>
    </>
  );
}
