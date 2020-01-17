// @flow

import * as React from 'react';
import { type ContextRouter } from 'react-router-dom';
// import Typography from '@material-ui/core/Typography';

import { DashboardPageBody } from '../createDashboardPage';
import { graphql, createQuery } from '../../api';
import LoadingView from '../LoadingView';
// import ProgramTrackRow from '../ProgramViewPage/ProgramTrackRow';

import { type ClientProfileViewPageCalendarTabQuery } from './__generated__/ClientProfileViewPageCalendarTabQuery.graphql';

const useQuery = createQuery<ClientProfileViewPageCalendarTabQuery>(graphql`
  query ClientProfileViewPageCalendarTabQuery($clientProfileId: ID) {
    clientProfile(id: $clientProfileId) {
      ...PresentableViewPageHeader_presentable
      id
      name
      # tracks(first: 10) {
      #   edges {
      #     node {
      #       ...ProgramTrackRow_programTrack
      #       id
      #     }
      #   }
      # }
    }
  }
`);

type Props = {
  ...ContextRouter,
};

export default function ClientProfileViewPageCalendarTab(props: Props) {
  const { match } = props;

  const query = useQuery({
    clientProfileId: match.params.clientProfileId,
  });
  const clientProfile = query.props?.clientProfile;

  if (!query.props) {
    return <LoadingView />;
  }

  if (!clientProfile) {
    throw new Error('Not found');
  }

  return (
    <>
      <DashboardPageBody>
        <div>
          {/* <Typography variant="h6" gutterBottom>
            Tracks
          </Typography>
          <div>
            {clientProfile.tracks.edges.map(({ node: programTrack }) => (
              <ProgramTrackRow
                noUserInfo
                key={programTrack.id}
                programTrack={programTrack}
              />
            ))}
          </div> */}
        </div>
      </DashboardPageBody>
    </>
  );
}
