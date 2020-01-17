// @flow

import * as React from 'react';
// import { type ContextRouter } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import { Paper, IconButton, InputBase } from '@material-ui/core';

import { graphql, createQuery } from '../../api';
import LoadingView from '../LoadingView';

import { type ProgramModuleSearchDialogQuery } from './__generated__/ProgramModuleSearchDialogQuery.graphql';
import ProgramModuleSearchDialogList from './ProgramModuleSearchDialogList';

const useQuery = createQuery<ProgramModuleSearchDialogQuery>(graphql`
  query ProgramModuleSearchDialogQuery($filter: ProgramModuleFilterInput) {
    ...ProgramModuleSearchDialogList_query @arguments(filter: $filter)
  }
`);

type Result = { type: 'closed' } | { type: 'selected', payload: string | null };

type Props = {|
  // ...ContextRouter,
  open: boolean,
  onClose: (result: Result) => void,
|};

export default function ProgramModuleSearchDialog(props: Props) {
  const { open, onClose } = props;

  const [search, setSearch] = React.useState('');
  const filter = React.useMemo(() => ({ search }), [search]);
  const query = useQuery({
    filter,
  });

  const onSearchChange = React.useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  const onProgramModuleClick = React.useCallback(
    (programModuleId) => {
      onClose({ type: 'selected', payload: programModuleId });
    },
    [onClose],
  );

  return (
    <>
      <Dialog open={open} onClose={() => onClose({ type: 'closed' })} fullWidth maxWidth={false}>
        <DialogTitle disableTypography style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6">Search Module</Typography>
          {/* <div style={{ flexGrow: 1 }} />
        <IconButton aria-label="Close" onClick={onClose}>
          <CloseIcon />
        </IconButton> */}
        </DialogTitle>
        <DialogContent style={{ height: '70vh' }}>
          <Paper
            elevation={1}
            style={{
              margin: '0 16px 8px 16px',
              padding: '4px 6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexGrow: 1,
            }}
          >
            <IconButton aria-label="Search" style={{ padding: 8 }}>
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search Modules"
              value={search}
              onChange={onSearchChange}
              style={{
                flex: 1,
              }}
            />
          </Paper>
          {!query.props ? (
            <LoadingView />
          ) : (
            <ProgramModuleSearchDialogList
              query={query.props}
              onProgramModuleClick={onProgramModuleClick}
            />
          )}
        </DialogContent>
        {/* <DialogContent style={{ display: 'flex', flexDirection: 'column' }}>
          <ProgramModuleSearchView onChooseClick={onChooseClick} />
        </DialogContent> */}
      </Dialog>
    </>
  );
}
