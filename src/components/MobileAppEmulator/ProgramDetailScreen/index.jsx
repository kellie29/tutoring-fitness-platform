// @flow

import * as React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import AlarmIcon from '@material-ui/icons/Alarm';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import { graphql, createFragment } from '../../../api';
import PresentableAvatar from '../../PresentableAvatar';

import { type ProgramDetailScreen_program as Program } from './__generated__/ProgramDetailScreen_program.graphql';
import { type ProgramDetailScreen_user as User } from './__generated__/ProgramDetailScreen_user.graphql';

const useProgramFragment = createFragment<Program>(graphql`
  fragment ProgramDetailScreen_program on Program {
    name
    description
    reminderGroupName
    image {
      url
    }
    modules {
      data
      programModuleGroup {
        id
      }
    }
    moduleGroups {
      name
    }
  }
`);

const useUserFragment = createFragment<User>(graphql`
  fragment ProgramDetailScreen_user on User {
    id
    ... on Presentable {
      name
      image {
        url
      }
      ...PresentableAvatar_presentable
    }
  }
`);

type Props = {
  user: mixed,
  program: mixed,
};

type ModuleGroupDescriptor = {
  icon?: React.Node,
  name: string,
};

export default function ProgramDetailScreen(props: Props) {
  const theme = useTheme();

  const user = useUserFragment(props.user);
  const program = useProgramFragment(props.program);

  const gray = theme.palette.grey[500];

  const moduleGroups: ModuleGroupDescriptor[] = [
    { icon: <AlarmIcon style={{ color: gray }} />, name: program.reminderGroupName ?? 'Reminders' },
  ];

  if (program.moduleGroups) {
    program.moduleGroups.forEach((moduleGroup) => moduleGroups.push({ name: moduleGroup.name }));
  }

  return (
    <div style={{ display: 'flex', flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>
      <div
        style={{
          display: 'flex',
          height: 44,
          backgroundColor: theme.palette.secondary.main,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h6"
          style={{
            flex: 1,
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            maxWidth: 240,
          }}
        >
          {program.name}
        </Typography>
      </div>
      <div style={{ flex: 1, overflow: 'auto', pointerEvents: 'auto' }}>
        {program.image ? (
          <img
            src={program.image.url}
            alt="Program cover"
            height={160}
            style={{ width: '100%', objectFit: 'cover' }}
          />
        ) : null}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: 8,
            height: 48,
          }}
        >
          Assigned by {user.name}
          <PresentableAvatar presentable={user} style={{ width: 24, height: 24, marginLeft: 8 }} />
        </div>
        <Typography variant="body2" style={{ margin: 16, textAlign: 'justify' }}>
          {program.description}
        </Typography>
        <div style={{ height: 1, backgroundColor: gray }} />
        {moduleGroups.map((moduleGroup, index) => (
          <React.Fragment key={index}>
            <div
              style={{
                display: 'flex',
                height: 52,
                paddingLeft: 16,
                paddingRight: 16,
                alignItems: 'center',
              }}
            >
              {moduleGroup.icon || <div style={{ width: 24, height: 24 }} />}
              <Typography variant="body1" style={{ flex: 1, marginLeft: 16, color: gray }}>
                {moduleGroup.name}
              </Typography>
              <KeyboardArrowRightIcon style={{ color: gray }} />
            </div>
            {index < moduleGroups.length - 1 ? (
              <div style={{ height: 1, backgroundColor: gray, marginLeft: 16 }} />
            ) : null}
          </React.Fragment>
        ))}
        <div style={{ height: 1, backgroundColor: gray }} />
        <div style={{ height: 32 }} />
      </div>
    </div>
  );
}
