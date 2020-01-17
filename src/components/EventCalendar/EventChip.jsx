// @flow

import * as React from 'react';
import { Typography } from '@material-ui/core';
import { styled } from '@material-ui/styles';

import { type ProgramModuleDataEvent } from '../../helpers/programModuleData';
import hueFromIndex from '../../helpers/hueFromIndex';

const Container = styled('div')({
  flex: 1,
  borderRadius: 5,
  color: 'black',
  margin: '4px 2px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  padding: '2px 4px',
  cursor: 'pointer',
});

type Props = {
  colorIndex: number,
  event: ProgramModuleDataEvent,
  selected?: boolean,
  onClick?: () => void,
};

export default function EventChip(props: Props) {
  const { colorIndex, event, selected = false, onClick } = props;

  const hue = hueFromIndex(colorIndex);
  const color = `hsl(${hue}, 98%, 67%)`;
  const lightColor = `hsl(${hue}, 98%, 87%)`;

  return (
    <Container
      onClick={onClick}
      style={{
        backgroundColor: selected ? color : lightColor,
        borderLeft: `4px solid ${color}`,
        borderRadius: 3,
        userSelect: 'none',
      }}
    >
      <Typography
        style={{
          fontWeight: 'bold',
          fontSize: 14,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {event.title}
      </Typography>
    </Container>
  );
}
