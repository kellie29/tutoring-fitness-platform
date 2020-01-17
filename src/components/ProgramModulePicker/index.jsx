// @flow

import * as React from 'react';
import { Button, Typography } from '@material-ui/core';

import ListPaper from '../ListPaper';
import ProgramModuleSearchDialog from '../ProgramModuleSearchDialog';

import ProgramModuleListItem from './ProgramModuleListItem';

type Props = {|
  value: string | null,
  onChange: (value: string | null) => void,
|};

export default function ProgramModulePicker(props: Props) {
  const { value: selectedAction, onChange: setSelectedAction } = props;
  // const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  // const [selectedAction, setSelectedAction] = React.useState(null);

  const onChooseClick = React.useCallback(() => {
    setIsDialogOpen(true);
  }, []);

  const onDialogClose = React.useCallback(
    (result) => {
      if (result.type === 'selected') {
        const programModuleId = result.payload;
        setSelectedAction(programModuleId);
      }
      setIsDialogOpen(false);
    },
    [setSelectedAction],
  );

  return (
    <>
      <ProgramModuleSearchDialog open={isDialogOpen} onClose={onDialogClose} />
      {selectedAction ? (
        <>
          <ProgramModuleListItem programModuleId={selectedAction} />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" onClick={onChooseClick}>
              Change Action
            </Button>
          </div>
        </>
      ) : (
        <ListPaper>
          <div style={{ display: 'flex', flexDirection: 'column', placeItems: 'center' }}>
            <Typography gutterBottom>
              <em>No action selected</em>
            </Typography>
            <Button variant="contained" onClick={onChooseClick}>
              Choose Action
            </Button>
          </div>
        </ListPaper>
      )}
    </>
  );
}
