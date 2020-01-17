// @flow

import * as React from 'react';
import { type ContextRouter } from 'react-router-dom';

import { graphql, createFragment } from '../../api';
import ListPaper from '../ListPaper';

import { type ProgramTrackEventRow_programTrackEvent as ProgramTrackEvent } from './__generated__/ProgramTrackEventRow_programTrackEvent.graphql';
import ProgramTrackActionResponseRow from './ProgramTrackActionResponseRow';

const useFragment = createFragment<ProgramTrackEvent>(graphql`
  fragment ProgramTrackEventRow_programTrackEvent on ProgramTrackEvent {
    id
    name
    actionResponses(first: 1) {
      edges {
        node {
          id
          ...ProgramTrackActionResponseRow_programTrackActionResponse
        }
      }
    }
  }
`);

type Props = {
  ...ContextRouter,
  programTrackEvent: mixed,
};

export default function ProgramTrackEventRow(props: Props) {
  const programTrackEvent = useFragment(props.programTrackEvent);

  return (
    <ListPaper>
      Event Name: {programTrackEvent.name}
      {!programTrackEvent.actionResponses.edges.length && <div>No response</div>}
      {programTrackEvent.actionResponses.edges.map(({ node: actionResponse }) => (
        <ProgramTrackActionResponseRow
          id={actionResponse.id}
          programTrackActionResponse={actionResponse}
        />
      ))}
    </ListPaper>
  );
}
