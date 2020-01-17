//  @flow

import * as React from 'react';
import Chip from '@material-ui/core/Chip';
// import Button from '@material-ui/core/Button';

import NodeListItem from '../NodeListItem';
import { graphql, createQuery } from '../../api';

import { type ProgramModuleListItemQuery } from './__generated__/ProgramModuleListItemQuery.graphql';

const useQuery = createQuery<ProgramModuleListItemQuery>(graphql`
  query ProgramModuleListItemQuery($programModuleId: ID) {
    programModule(id: $programModuleId) {
      ...NodeListItem_node
      id
      isPublic
      # viewerCanUpdate
    }
  }
`);

type Props = {|
  programModuleId: string,
|};

export default function ProgramModuleListItem(props: Props) {
  const { programModuleId } = props;

  const query = useQuery({ programModuleId });

  if (!query.props) {
    return null;
  }

  const { programModule } = query.props;

  if (!programModule) {
    throw new Error('Not found');
  }

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
    />
  );
}
