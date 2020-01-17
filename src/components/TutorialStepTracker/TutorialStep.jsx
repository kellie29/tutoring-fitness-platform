// @flow

import * as React from 'react';
import { Box, Typography, Link } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import { type SvgIconProps } from '@material-ui/core/SvgIcon';
import { Link as RouterLink } from 'react-router-dom';

import appData from '../../data';

type Props = {
  icon?: React$ComponentType<SvgIconProps>,
  title: string,
  completed?: boolean,
  collapsed?: boolean,
  to?: string,
};

export default function TutorialStep(props: Props) {
  const { title, completed, icon: Icon = DoneIcon, collapsed = true, to } = props;

  const iconContent = (
    <Box
      mb={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{
        width: 56,
        height: 56,
        backgroundColor: completed ? appData.colors.primary : '#ffffff',
        borderRadius: 28,
        margin: '16px auto',
        border: `1px solid ${appData.colors.primary}`,
      }}
    >
      {completed ? (
        <DoneIcon style={{ width: 28, height: 28, color: '#ffffff' }} />
      ) : (
        <Icon style={{ width: 28, height: 28, color: appData.colors.primary }} />
      )}
    </Box>
  );

  return (
    <Box textAlign="center">
      {/* eslint-disable-next-line no-nested-ternary */}
      {!collapsed ? (
        completed ? (
          iconContent
        ) : (
          <Link
            component={RouterLink}
            to={to}
            style={{ justifyContent: 'center', display: 'flex' }}
          >
            {iconContent}
          </Link>
        )
      ) : null}
      <Typography
        variant="body2"
        style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}
      >
        {collapsed ? (
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 24,
              height: 24,
              backgroundColor: completed ? appData.colors.primary : '#ffffff',
              borderRadius: 12,
              border: `1px solid ${appData.colors.primary}`,
              marginRight: 8,
            }}
          >
            {completed ? (
              <DoneIcon style={{ width: 16, height: 16, color: '#ffffff' }} />
            ) : (
              <Icon style={{ width: 16, height: 16, color: appData.colors.primary }} />
            )}
          </Box>
        ) : null}
        {completed ? (
          title
        ) : (
          <Link component={RouterLink} to={to} style={{ color: 'black' }}>
            {title}
          </Link>
        )}
      </Typography>
    </Box>
  );
}
