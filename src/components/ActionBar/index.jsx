// @flow

import * as React from 'react';
import { Button, Menu, IconButton, MenuItem } from '@material-ui/core';
import { Link, type LocationShape } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';

type To = string | $Exact<LocationShape>;

type ActionDescriptorBase = {|
  key: string,
  underMenu?: boolean,
  primary?: boolean,
  label: React.Node,
|};

type ActionDescriptor =
  | {|
      ...ActionDescriptorBase,
      type: 'link',
      to: To,
    |}
  | {|
      ...ActionDescriptorBase,
      type: 'callback',
      callback: () => void,
    |};

type Props = {|
  variant?: 'text' | 'icon',
  iconSize?: $PropertyType<React.ElementConfig<typeof IconButton>, 'size'>,
  actions: $ReadOnlyArray<?ActionDescriptor>,
  currentID?: string,
  assignID?: string,
|};

export default function ActionBar(props: Props) {
  const { variant = 'text', iconSize, actions, currentID, assignID } = props;

  const [moreMenuAnchorEl, setMenuAnchorEl] = React.useState(null);
  const isMoreMenuOpen = Boolean(moreMenuAnchorEl);
  const barActions = React.useMemo(
    () => actions.filter(Boolean).filter((action) => !action.underMenu),
    [actions],
  );
  const menuActions = React.useMemo(
    () => actions.filter(Boolean).filter((action) => action.underMenu),
    [actions],
  );

  const onMoreClick = React.useCallback((event) => {
    setMenuAnchorEl(event.currentTarget);
  }, []);

  const onMoreMenuClose = React.useCallback(() => {
    setMenuAnchorEl(null);
  }, []);

  const ButtonComponent = { text: Button, icon: IconButton }[variant];

  return (
    <>
      {barActions.length ? (
        <>
          {barActions.map((action) => {
            switch (action.type) {
              case 'program': {
                if (currentID === assignID) {
                  if (action.key === 'assign') {
                    return (
                      <ButtonComponent
                        key={action.key}
                        size={iconSize}
                        variant="contained"
                        color={action.primary ? 'primary' : 'default'}
                        component={Link}
                        to={action.to}
                      >
                        {action.label}
                      </ButtonComponent>
                    );
                  }
                  return true;
                }
                if (action.key === 'use')
                  return (
                    <ButtonComponent
                      key={action.key}
                      size={iconSize}
                      variant="contained"
                      color={action.primary ? 'primary' : 'default'}
                      component={Link}
                      to={action.to}
                    >
                      {action.label}
                    </ButtonComponent>
                  );
                return true;
              }
              case 'link': {
                return (
                  <ButtonComponent
                    key={action.key}
                    size={iconSize}
                    variant="contained"
                    color={action.primary ? 'primary' : 'default'}
                    component={Link}
                    to={action.to}
                  >
                    {action.label}
                  </ButtonComponent>
                );
              }
              case 'callback': {
                return (
                  <ButtonComponent
                    size={iconSize}
                    key={action.key}
                    variant="contained"
                    color={action.primary ? 'primary' : 'default'}
                    onClick={action.callback}
                  >
                    {action.label}
                  </ButtonComponent>
                );
              }
              default: {
                throw new Error('Expected valid action type.');
              }
            }
          })}
        </>
      ) : null}
      {menuActions.length ? (
        <>
          {currentID === assignID && (
            <IconButton
              aria-label="More"
              aria-controls="page-bar-menu"
              aria-haspopup="true"
              onClick={onMoreClick}
            >
              <MoreVertIcon />
            </IconButton>
          )}
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
    </>
  );
}
