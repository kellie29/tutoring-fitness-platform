// @flow

import * as React from 'react';
import { useHistory } from 'react-router-dom';
import invariant from 'invariant';
import { Interval, DateTime } from 'luxon';
import { LinearProgress } from '@material-ui/core';

import { graphql, createFragment } from '../../api';
import EventDailyProgressBar from '../EventDailyProgressBar';
import NodeListItem from '../NodeListItem';

import { type ProgramViewPageParticipantsTabProgramTrackRow_programTrack as Program } from './__generated__/ProgramViewPageParticipantsTabProgramTrackRow_programTrack.graphql';

const useFragment = createFragment<Program>(graphql`
  fragment ProgramViewPageParticipantsTabProgramTrackRow_programTrack on ProgramTrack
    @argumentDefinitions(eventsFilter: { type: "ProgramTrackEventFilterInput" }) {
    id
    program {
      ...NodeListItem_node
      id
      name
      createdAt
    }
    startDate
    endDate
    user {
      ...NodeListItem_presentable
    }
    clientProfile {
      ...NodeListItem_presentable
      id
    }
    events(filter: $eventsFilter, first: 9999) {
      edges {
        node {
          startDate
          hasResponse
        }
      }
    }
  }
`);

type Props = {|
  programTrack: mixed,
  chartInterval: Interval,
|};

export default function ProgramViewPageParticipantsTabProgramTrackRow(props: Props) {
  const { chartInterval } = props;
  const programTrack = useFragment(props.programTrack);
  const { clientProfile } = programTrack;
  invariant(clientProfile, 'Expected "clientProfile"');

  const history = useHistory();

  const onCardContentClick = React.useCallback(() => {
    history.push(`/dashboard/clients/view/${clientProfile.id}/tracks/view/${programTrack.id}`);
  }, [clientProfile.id, history, programTrack.id]);

  const events = programTrack.events.edges.map(({ node: event }) => event);

  let extraContent;
  if (programTrack) {
    const startDate = DateTime.fromISO(programTrack.startDate);
    // $FlowFixMe
    const endDate = DateTime.fromISO(programTrack.endDate);
    const now = DateTime.utc();
    const completion =
      now.diff(startDate, 'days').as('days') / endDate.diff(startDate, 'days').as('days');

    extraContent = (
      <>
        <LinearProgress
          variant="determinate"
          value={completion * 100}
          style={{ width: 120, height: 8 }}
        />
        <div style={{ width: 16 }} />
        <EventDailyProgressBar interval={chartInterval} events={events} />
      </>
    );
  }

  return (
    <NodeListItem
      variant="compact"
      node={programTrack.program}
      presentable={programTrack.user || programTrack.clientProfile}
      onCardContentClick={onCardContentClick}
      noOwner
      extraContent={extraContent}
    />
  );
}
