//  @flow

import * as React from 'react';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

import { graphql, createFragment } from '../../api';
import NodeListItem from '../NodeListItem';

import { type ProgramModuleSearchDialogRow_programModule as ProgramModule } from './__generated__/ProgramModuleSearchDialogRow_programModule.graphql';

const useFragment = createFragment<ProgramModule>(graphql`
  fragment ProgramModuleSearchDialogRow_programModule on ProgramModule {
    ...NodeListItem_node
    id
    isPublic
    # viewerCanUpdate
  }
`);

type Props = {|
  programModule: mixed,
  onSelectClick: () => void,
|};

export default function ProgramModuleSearchDialogRow(props: Props) {
  const { onSelectClick } = props;

  const programModule = useFragment(props.programModule);

  return (
    <NodeListItem
      node={programModule}
      infoChips={
        <>
          {!programModule.isPublic && (
            <Chip label={programModule.isPublic ? 'Public' : 'Private'} />
          )}
        </>
      }
      actionButtons={
        <>
          <Button color="primary" onClick={onSelectClick}>
            Select
          </Button>
        </>
      }
    />
  );
}
