// @flow

import * as React from 'react';
import { View } from 'react-native';
import Typography from '@material-ui/core/Typography';

import { graphql, createFragment } from '../../../api';
import ProgramTrackActionDetailContainer from '../ProgramTrackActionDetailContainer';
import PresentableAvatar from '../../PresentableAvatar';

import { type ProgramModuleDetailScreen_user as User } from './__generated__/ProgramModuleDetailScreen_user.graphql';

const useFragment = createFragment<User>(graphql`
  fragment ProgramModuleDetailScreen_user on User {
    ...PresentableAvatar_presentable
  }
`);

type Props = {
  user: mixed,
  selectedModule: any,
  response?: any | null,
};

export default function ProgramModuleDetailScreen(props: Props) {
  const { selectedModule, response: actionResponse } = props;

  const user = useFragment(props.user);
  let content = null;
  if (selectedModule) {
    const { data, name } = selectedModule;

    const action = data.action || data.actionModuleData.action;

    const header = (
      <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Typography variant="h6" style={{ display: 'inline-flex', flex: 1 }}>
            {name}
          </Typography>
          <PresentableAvatar presentable={user} style={{ marginLeft: 16 }} />
        </div>
      </div>
    );

    content = (
      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <ProgramTrackActionDetailContainer
          action={action}
          headerView={header}
          response={actionResponse}
        />
      </View>
    );
  }

  return <View style={{ flex: 1 }}>{content}</View>;
}
