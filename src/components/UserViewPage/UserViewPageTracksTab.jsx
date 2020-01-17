// @flow

import * as React from 'react';
import { type ContextRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import { DashboardPageBody } from '../createDashboardPage';
import { graphql, createQuery } from '../../api';
import LoadingView from '../LoadingView';
import ProgramTrackRow from '../ProgramViewPage/ProgramTrackRow';

import { type UserViewPageTracksTabQuery } from './__generated__/UserViewPageTracksTabQuery.graphql';

const useQuery = createQuery<UserViewPageTracksTabQuery>(graphql`
  query UserViewPageTracksTabQuery($userId: ID) {
    user(id: $userId) {
      ...PresentableViewPageHeader_presentable
      id
      name
      tracks(first: 10) {
        edges {
          node {
            ...ProgramTrackRow_programTrack
            id
          }
        }
      }
    }
  }
`);

type Props = {
  ...ContextRouter,
};

export default function UserViewPageTracksTab(props: Props) {
  const { match } = props;

  const query = useQuery({
    userId: match.params.userId,
  });
  const user = query.props?.user;

  if (!query.props) {
    return <LoadingView />;
  }

  if (!user) {
    throw new Error('Not found');
  }

  return (
    <>
      <DashboardPageBody>
        <div>
          <Typography variant="h6" gutterBottom>
            Tracks
          </Typography>
          <div>
            {user.tracks.edges.map(({ node: programTrack }) => (
              <ProgramTrackRow noUserInfo key={programTrack.id} programTrack={programTrack} />
            ))}
          </div>
        </div>
      </DashboardPageBody>
    </>
  );
}
