// @flow

import * as React from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import RouterTabs, { type TabDescriptor } from '../RouterTabs';
import ActionBar from '../ActionBar';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0 16px',
    boxShadow: '0 2px 15px 0 rgba(0,0,0,.05)',
    borderBottom: '1px solid rgba(43, 48, 52, 0.05)',
    width: '100%',
    minHeight: '70px',
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

type Props = {|
  leftContent?: React.Node,
  titleContent: React.Node,
  subtitleContent?: React.Node,
  tabs?: $ReadOnlyArray<TabDescriptor>,
  actions?: $PropertyType<React.ElementConfig<typeof ActionBar>, 'actions'>,
  backButtonTo?: string,
  currentID?: string,
  assignID?: string,
|};

export default function ViewPageHeader(props: Props) {
  const {
    leftContent,
    titleContent,
    subtitleContent,
    tabs,
    actions,
    backButtonTo,
    currentID,
    assignID,
  } = props;

  const classes = useStyles();

  return (
    <header className={classes.header}>
      {backButtonTo && (
        <>
          <Button component={Link} to={backButtonTo}>
            <ArrowBackIcon />
          </Button>
          <div style={{ flexBasis: 16, flexShrink: 0 }} />
        </>
      )}
      {leftContent && (
        <>
          {leftContent}
          <div style={{ flexBasis: 16, flexShrink: 0 }} />
        </>
      )}
      <div className={classes.titleContainer}>
        <Typography
          variant="h6"
          noWrap
          style={{
            fontWeight: 'bold',
          }}
        >
          {titleContent}
        </Typography>
        {subtitleContent && (
          <Typography variant="subtitle2" noWrap>
            {subtitleContent}
          </Typography>
        )}
      </div>
      <div style={{ flex: 1 }} />
      {tabs && tabs.length > 1 && (
        <>
          <RouterTabs tabs={tabs} />
          <div style={{ flex: 1 }} />
        </>
      )}
      {actions && (
        <div className={classes.buttonContainer}>
          <ActionBar actions={actions} currentID={currentID} assignID={assignID} />
        </div>
      )}
    </header>
  );
}
