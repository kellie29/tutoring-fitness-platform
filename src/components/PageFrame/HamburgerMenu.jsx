// @flow

import * as React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid } from '@material-ui/core';

type Props = {
  children: React.Node,
};

function SwipeableTemporaryDrawer(props: Props) {
  const { children } = props;
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (side, open) => () => {
    // $FlowFixMe
    setState({ ...state, [side]: open });
  };

  const sideList = (
    <Grid container direction="column" style={{ padding: 20 }}>
      {children}
    </Grid>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('right', true)}>
        <MenuIcon />
      </Button>
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDrawer('right', false)}
          onKeyDown={toggleDrawer('right', false)}
        >
          {sideList}
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default SwipeableTemporaryDrawer;
