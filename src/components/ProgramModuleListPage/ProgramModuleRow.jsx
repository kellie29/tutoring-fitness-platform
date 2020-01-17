//  @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import { Checkbox } from '@material-ui/core';

import { graphql, createFragment } from '../../api';
import NodeListItem from '../NodeListItem';

import { type ProgramModuleRow_programModule as ProgramModule } from './__generated__/ProgramModuleRow_programModule.graphql';

const useFragment = createFragment<ProgramModule>(graphql`
  fragment ProgramModuleRow_programModule on ProgramModule {
    ...NodeListItem_node
    id
    isPublic
    # viewerCanUpdate
  }
`);

type Props = {
  programModule: mixed,
  selected: boolean,
  onSelectedChange: (selected: boolean) => void,
};

export default function ProgramModuleRow(props: Props) {
  const { selected, onSelectedChange } = props;
  const programModule = useFragment(props.programModule);

  return (
    <NodeListItem
      node={programModule}
      component={Link}
      to={`/dashboard/modules/view/${programModule.id}`}
      infoChips={
        <>
          {!programModule.isPublic && (
            <Chip label={programModule.isPublic ? 'Public' : 'Private'} />
          )}
        </>
      }
      actionButtons={
        <>
          <Checkbox
            color="primary"
            checked={selected}
            onChange={(event) => {
              onSelectedChange(event.target.checked);
            }}
          />
        </>
      }
    />
  );
}
