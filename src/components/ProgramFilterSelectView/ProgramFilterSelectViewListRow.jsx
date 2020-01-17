//  @flow

import * as React from 'react';
import Chip from '@material-ui/core/Chip';

import { graphql, createFragment } from '../../api';
import NodeListItem from '../NodeListItem';

import { type ProgramFilterSelectViewListRow_program as Program } from './__generated__/ProgramFilterSelectViewListRow_program.graphql';

const useFragment = createFragment<Program>(graphql`
  fragment ProgramFilterSelectViewListRow_program on Program {
    ...NodeListItem_node
    id
    isPublic
    # viewerCanUpdate
  }
`);

type Props = {|
  program: mixed,
  selected?: boolean,
  onSelectClick: () => void,
|};

export default function ProgramFilterSelectViewListRow(props: Props) {
  const { selected, onSelectClick } = props;

  const program = useFragment(props.program);

  return (
    <NodeListItem
      variant="compact"
      node={program}
      infoChips={
        <>{!program.isPublic && <Chip label={program.isPublic ? 'Public' : 'Private'} />}</>
      }
      raised={selected}
      onCardContentClick={onSelectClick}
    />
  );
}
