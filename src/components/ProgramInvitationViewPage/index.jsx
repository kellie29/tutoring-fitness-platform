// @flow

import * as React from 'react';
import { Link, type ContextRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import createDashboardPage, { DashboardPageBody } from '../createDashboardPage';
import PageHelmet from '../PageHelmet';
import { graphql, createQuery } from '../../api';
import LoadingView from '../LoadingView';
import appData from '../../data';

import { type ProgramInvitationViewPageQuery } from './__generated__/ProgramInvitationViewPageQuery.graphql';

const useQuery = createQuery<ProgramInvitationViewPageQuery>(graphql`
  query ProgramInvitationViewPageQuery($programInvitationId: ID) {
    programInvitation(id: $programInvitationId) {
      id
      token
      program {
        id
        name
      }
    }
  }
`);

type Props = {
  ...ContextRouter,
};

export default createDashboardPage<any>(function ProgramInvitationViewPage(props: Props) {
  const { match } = props;

  const query = useQuery({
    programInvitationId: match.params.programInvitationId,
  });
  const programInvitation = query.props?.programInvitation;

  if (!query.props) {
    return <LoadingView />;
  }

  if (!programInvitation) {
    throw new Error('Not found');
  }

  return (
    <>
      <PageHelmet title={`Invitation for "${programInvitation.program.name}"`} />
      <DashboardPageBody>
        <div style={{ display: 'flex' }}>
          <Typography variant="h5" gutterBottom>
            View Program Invitation
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <Button variant="contained" onClick={() => alert('Not yet implemented.')}>
            Cancel
          </Button>
        </div>
        <div>Program Name: {programInvitation.program.name}</div>
        <div>
          Invitation Link:{' '}
          <Link
            to={`/pi/${programInvitation.id}`}
          >{`${appData.mobileApp.urlScheme}/pi/${programInvitation.id}`}</Link>
        </div>
        <div>Token: {programInvitation.token}</div>
      </DashboardPageBody>
    </>
  );
});
