// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import { Interval } from 'luxon';

import NodeListItem from '../NodeListItem';
import PresentableAvatar from '../PresentableAvatar';
import { graphql, createFragment } from '../../api';
import EventDailyProgressBar from '../EventDailyProgressBar';
import EventProgressBar from '../EventProgressBar';

import { type ClientProfileListItem_clientProfile as ClientProfile } from './__generated__/ClientProfileListItem_clientProfile.graphql';

const useFragment = createFragment<ClientProfile>(graphql`
  fragment ClientProfileListItem_clientProfile on ClientProfile
    @argumentDefinitions(eventsFilter: { type: "ProgramTrackEventFilterInput" }) {
    ...NodeListItem_node
    id
    ...PresentableAvatar_presentable
    programTracks(first: 9999) {
      edges {
        node {
          events(filter: $eventsFilter, first: 9999) {
            edges {
              node {
                startDate
                hasResponse
              }
            }
          }
        }
      }
    }
  }
`);

type Props = {|
  clientProfile: mixed,
  showStats?: boolean,
  progressInterval: Interval,
  dailyProgressInterval: Interval,
|};

export default function ClientProfileListItem(props: Props) {
  const { showStats = false, progressInterval, dailyProgressInterval } = props;
  const clientProfile = useFragment(props.clientProfile);

  const events = clientProfile.programTracks.edges.flatMap(({ node: programTrack }) =>
    programTrack.events.edges.map(({ node: event }) => event),
  );

  return (
    <NodeListItem
      component={Link}
      to={`/dashboard/clients/view/${clientProfile.id}`}
      node={clientProfile}
      variant="compact"
      cardMedia={
        <PresentableAvatar
          presentable={clientProfile}
          style={{ borderRadius: 0, width: '100%', height: '100%' }}
        />
      }
      extraContent={
        showStats ? (
          <>
            <EventProgressBar interval={progressInterval} events={events} />
            <div style={{ flexBasis: 16 }} />
            <EventDailyProgressBar interval={dailyProgressInterval} events={events} />
          </>
        ) : null
      }
    />
  );
}
