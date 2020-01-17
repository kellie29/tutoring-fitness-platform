//  @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';

import { graphql, createFragment } from '../../api';
import NodeListItem from '../NodeListItem';

import { type ProgramListPageRow_program as Program } from './__generated__/ProgramListPageRow_program.graphql';

const useFragment = createFragment<Program>(graphql`
  fragment ProgramListPageRow_program on Program {
    ...NodeListItem_node
    id
    isPublic
    viewerCanUpdate
    isBookmarkedByViewer
  }
`);

type Props = {
  program: mixed,
};

export default function ProgramListPageRow(props: Props) {
  const program = useFragment(props.program);

  return (
    <NodeListItem
      component={Link}
      to={`/dashboard/programs/view/${program.id}`}
      node={program}
      infoChips={
        <>{!program.isPublic && <Chip label={program.isPublic ? 'Public' : 'Private'} />}</>
      }
    />
  );
}
