// @flow

import * as React from 'react';
import Button from '@material-ui/core/Button';
import { useRouteMatch, Link } from 'react-router-dom';

import SelectedProgramModuleItem from './SelectedProgramModuleItem';

type Props = {|
  selectedProgramModuleIds: $ReadOnlyArray<string>,
  setSelectedProgramModuleIds: ($ReadOnlyArray<string>) => void,
|};

export default function SelectedProgramModuleList(props: Props) {
  const { selectedProgramModuleIds, setSelectedProgramModuleIds } = props;
  const match = useRouteMatch();
  const { tagId } = match.params;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        width: 260,
        flexShrink: 0,
        backgroundColor: 'white',
      }}
    >
      <div
        style={{
          flex: 1,
          overflow: 'hidden',
          overflowY: 'auto',
          padding: 16,
          paddingBottom: 0,
        }}
      >
        {selectedProgramModuleIds.map((id) => (
          <SelectedProgramModuleItem
            key={id}
            id={id}
            onRemoveClick={() => {
              setSelectedProgramModuleIds(selectedProgramModuleIds.filter((a) => a !== id));
            }}
          />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          placeContent: 'center',
          placeItems: 'center',
          padding: 16,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={
            tagId
              ? `/dashboard/modules/${tagId}/add-to-program`
              : `/dashboard/modules/add-to-program`
          }
        >
          Add to Program
        </Button>
      </div>
    </div>
  );
}
