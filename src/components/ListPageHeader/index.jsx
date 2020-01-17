// @flow

import * as React from 'react';
import { makeStyles, Button, Menu, IconButton, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import SearchBar from '../SearchBar';
import DashboardPageHeader from '../DashboardPageHeader';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    padding: '16px 16px',
    // boxShadow: '0 2px 15px 0 rgba(0,0,0,.05)',
    // borderBottom: '1px solid rgba(43, 48, 52, 0.05)',
    width: '100%',
    // minHeight: '70px',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  buttonContainer: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

type ActionDescriptor =
  | {|
      key: string,
      underMenu?: boolean,
      primary?: boolean,
      label: string,
      type: 'link',
      to: mixed,
      // ...React.ElementConfig<typeof Link>,
    |}
  | {|
      key: string,
      underMenu?: boolean,
      primary?: boolean,
      label: string,
      type: 'callback',
      callback: () => void,
    |};

type Props = {|
  searchBarProps: any,
  actions?: $ReadOnlyArray<ActionDescriptor>,
  bottomContent?: React.Node,
|};

export default function ListPageHeader(props: Props) {
  const { searchBarProps, actions, bottomContent } = props;

  const classes = useStyles();
  const [moreMenuAnchorEl, setMenuAnchorEl] = React.useState(null);
  const isMoreMenuOpen = Boolean(moreMenuAnchorEl);
  const barActions = React.useMemo(
    () => (actions && actions.filter((action) => !action.underMenu)) || [],
    [actions],
  );
  const menuActions = React.useMemo(
    () => (actions && actions.filter((action) => action.underMenu)) || [],
    [actions],
  );

  const onMoreClick = React.useCallback((event) => {
    setMenuAnchorEl(event.currentTarget);
  }, []);

  const onMoreMenuClose = React.useCallback(() => {
    setMenuAnchorEl(null);
  }, []);

  return (
    <header className={classes.header}>
      <DashboardPageHeader>
        <Grid item xs={12} md={8} style={{ display: 'flex' }}>
          <SearchBar {...searchBarProps} />
          <div style={{ width: 16 }} />
          {barActions.length ? (
            <div className={classes.buttonContainer}>
              {barActions.map((action) => {
                switch (action.type) {
                  case 'link': {
                    return (
                      <Button
                        key={action.key}
                        variant="contained"
                        color={action.primary ? 'primary' : 'default'}
                        component={Link}
                        to={action.to}
                      >
                        {action.label}
                      </Button>
                    );
                  }
                  case 'callback': {
                    return (
                      <Button
                        key={action.key}
                        variant="contained"
                        color={action.primary ? 'primary' : 'default'}
                        onClick={action.callback}
                      >
                        {action.label}
                      </Button>
                    );
                  }
                  default: {
                    throw new Error('Expected valid action type.');
                  }
                }
              })}
            </div>
          ) : null}
          {menuActions.length ? (
            <>
              <div style={{ flexBasis: 16 }} />
              <IconButton
                aria-label="More"
                aria-controls="page-bar-menu"
                aria-haspopup="true"
                onClick={onMoreClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="page-bar-menu"
                elevation={0}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                anchorEl={moreMenuAnchorEl}
                keepMounted
                open={isMoreMenuOpen}
                onClose={onMoreMenuClose}
              >
                {menuActions.map((action) => {
                  switch (action.type) {
                    case 'link': {
                      return (
                        <MenuItem
                          key={action.key}
                          color={action.primary ? 'primary' : 'default'}
                          component={Link}
                          to={action.to}
                          onClick={onMoreMenuClose}
                        >
                          {action.label}
                        </MenuItem>
                      );
                    }
                    case 'callback': {
                      return (
                        <MenuItem
                          key={action.key}
                          color={action.primary ? 'primary' : 'default'}
                          onClick={() => {
                            onMoreMenuClose();
                            action.callback();
                          }}
                        >
                          {action.label}
                        </MenuItem>
                      );
                    }
                    default: {
                      throw new Error('Expected valid action type.');
                    }
                  }
                })}
              </Menu>
            </>
          ) : null}
        </Grid>
      </DashboardPageHeader>
      {bottomContent && (
        <>
          <div style={{ height: 8, flexShrink: 0 }} />
          {bottomContent}
        </>
      )}
    </header>
  );
}
