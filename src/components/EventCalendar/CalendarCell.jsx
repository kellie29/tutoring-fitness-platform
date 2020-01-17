// @flow

import * as React from 'react';
import { DateTime } from 'luxon';
import { Typography } from '@material-ui/core';
import { styled } from '@material-ui/styles';

const Container = styled('div')(({ theme }) => ({
  border: '1px solid rgba(221, 221, 221, 0.50)',
  color: '#646777',
  flex: 1,
  minHeight: 100,
  padding: theme.spacing(1, 0.5),
  overflow: 'hidden',
}));

const Header = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  paddingBottom: theme.spacing(1),
}));

type Props = {|
  variant: 'relative' | 'absolute',
  startDate: DateTime,
  day: number,
  children: React.Node,
|};

export default function CalendarCell(props: Props) {
  const { variant, startDate, day, children } = props;

  const date = startDate.plus({ day });

  return (
    <Container style={{ position: 'relative' }}>
      {variant === 'absolute' && (
        <Header>
          <Typography style={{ fontWeight: 800, zIndex: 1 }}>
            {date.toFormat(date.day === 1 ? 'MMM d' : 'd')}
          </Typography>
        </Header>
      )}
      {variant === 'relative' && (
        <Header>
          <Typography style={{ fontWeight: 800, zIndex: 1 }}>
            {day === 0 ? 'Day 1' : day + 1}
          </Typography>
        </Header>
      )}
      {children}
    </Container>
  );
}
