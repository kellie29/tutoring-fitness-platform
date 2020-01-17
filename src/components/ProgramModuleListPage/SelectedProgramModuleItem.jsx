//  @flow

import * as React from 'react';
import { Typography, IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

import { graphql, createQuery } from '../../api';
import PresentableAvatar from '../PresentableAvatar';

import { type SelectedProgramModuleItemQuery } from './__generated__/SelectedProgramModuleItemQuery.graphql';

const useQuery = createQuery<SelectedProgramModuleItemQuery>(graphql`
  query SelectedProgramModuleItemQuery($id: ID) {
    programModule(id: $id) {
      ...PresentableAvatar_presentable
      id
      name
    }
  }
`);

type Props = {
  id: string,
  onRemoveClick: () => void,
};

export default function SelectedProgramModuleItem(props: Props) {
  const { id, onRemoveClick } = props;

  const query = useQuery({
    id,
  });
  const programModule = query.props?.programModule;

  if (!programModule) return null;

  return (
    <div
      style={{
        display: 'flex',
        borderRadius: 4,
        height: 50,
        backgroundColor: '#fafafa',
        overflow: 'hidden',
        marginBottom: 16,
      }}
    >
      <PresentableAvatar
        presentable={programModule}
        style={{ borderRadius: 0, width: 50, height: 50 }}
      />
      <div style={{ flex: 1, display: 'flex', placeItems: 'center', padding: 8 }}>
        <Typography variant="body">{programModule.name}</Typography>
      </div>
      <div
        style={{
          display: 'flex',
          placeContent: 'center',
          placeItems: 'center',
          padding: 8,
        }}
      >
        <IconButton size="small" onClick={onRemoveClick}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
}
