//  @flow

import * as React from 'react';
import Chip from '@material-ui/core/Chip';

import { graphql, createFragment } from '../../api';
import NodeListItem from '../NodeListItem';

import { type ProgramModuleFilterSelectViewListRow_programModule as ProgramModule } from './__generated__/ProgramModuleFilterSelectViewListRow_programModule.graphql';

const useFragment = createFragment<ProgramModule>(graphql`
  fragment ProgramModuleFilterSelectViewListRow_programModule on ProgramModule {
    ...NodeListItem_node
    id
    isPublic
    # viewerCanUpdate
  }
`);

type Props = {|
  programModule: mixed,
  selected?: boolean,
  onSelectClick: () => void,
|};

export default function ProgramModuleFilterSelectViewListRow(props: Props) {
  const { selected, onSelectClick } = props;

  const programModule = useFragment(props.programModule);

  return (
    <NodeListItem
      variant="compact"
      node={programModule}
      infoChips={
        <>
          {!programModule.isPublic && (
            <Chip label={programModule.isPublic ? 'Public' : 'Private'} />
          )}
        </>
      }
      raised={selected}
      onCardContentClick={onSelectClick}
    />
  );
}
