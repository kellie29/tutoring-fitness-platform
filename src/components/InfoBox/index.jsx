// @flow

import * as React from 'react';
import { Typography, IconButton, Divider } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { useDispatch, useSelector } from '../../store';

type Props = {|
  id: string,
  title: React.Node,
  body: React.Node,
|};

export default function InfoBox(props: Props) {
  const { id, title, body } = props;

  const hidden = useSelector((state) => state.dismissedInfoBoxIds.includes(id));
  const dispatch = useDispatch();

  const onDismiss = () => {
    dispatch({ type: 'dismissInfoBox', payload: id });
  };

  if (hidden) return null;

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
          padding: '8px 16px',
        }}
      >
        <div
          style={{
            display: 'flex',
            placeItems: 'center',
            placeContent: 'center',
          }}
        >
          <Typography variant="h6">{title}</Typography>
          <div style={{ flex: 1 }} />
          <IconButton size="small" aria-label="close" onClick={onDismiss}>
            <CloseIcon />
          </IconButton>
        </div>
        <div style={{ flexBasis: 16 }} />
        <div>
          <Typography variant="body2">{body}</Typography>
        </div>
      </div>
      <Divider />
    </>
  );
}
