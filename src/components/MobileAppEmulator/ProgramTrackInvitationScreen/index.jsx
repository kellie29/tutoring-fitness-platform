// @flow

import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

import { graphql, createFragment } from '../../../api';
import { useUpdateUserMutation } from '../../ProfilePage';
import PresentableAvatar from '../../PresentableAvatar';

import { type ProgramTrackInvitationScreen_program as Program } from './__generated__/ProgramTrackInvitationScreen_program.graphql';
import { type ProgramTrackInvitationScreen_user as User } from './__generated__/ProgramTrackInvitationScreen_user.graphql';

const useProgramFragment = createFragment<Program>(graphql`
  fragment ProgramTrackInvitationScreen_program on Program {
    name
  }
`);
const useUserFragment = createFragment<User>(graphql`
  fragment ProgramTrackInvitationScreen_user on User {
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

export default function ProgramTrackInvitationScreen(props: Props) {
  const user = useUserFragment(props.user);
  const program = useProgramFragment(props.program);
  const updateUser = useUpdateUserMutation();

  const onAvatarFileChange = React.useCallback(
    (event: SyntheticInputEvent<HTMLInputElement>) => {
      const image = event.target.files[0];
      updateUser({
        input: {
          id: user.id,
          image,
        },
      });
    },
    [updateUser, user],
  );

  let avatarComponent;
  if (user.image && user.image.url) {
    avatarComponent = <PresentableAvatar presentable={user} style={{ width: 128, height: 128 }} />;
  } else {
    avatarComponent = (
      <label htmlFor="text-button-file" style={{ width: 'fit-content', position: 'relative' }}>
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="text-button-file"
          type="file"
          onChange={onAvatarFileChange}
        />
        <PresentableAvatar
          presentable={user}
          style={{ width: 128, height: 128, cursor: 'pointer' }}
        />
        <div
          style={{
            position: 'absolute',
            right: -10,
            bottom: -10,
            backgroundColor: '#a3a3a3',
            width: 48,
            height: 48,
            borderRadius: 24,
            justifyContent: 'center',
            display: 'flex',
            flex: 1,
            boxShadow: '0px 0px 0px 8px #ffffff',
            cursor: 'pointer',
          }}
        >
          <AddAPhotoIcon style={{ width: 32, height: 32, alignSelf: 'center', color: 'white' }} />
        </div>
      </label>
    );
  }

  return (
    <div style={{ display: 'flex', flex: 1, position: 'relative' }}>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '32px 16px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {avatarComponent}
          <div style={{ height: 32 }} />
          <Typography variant="body2" gutterBottom>
            You have been invited by
          </Typography>
          <Typography variant="h5" style={{ margin: '16px 0' }}>
            {user.name}
          </Typography>
          <Typography variant="body2" gutterBottom>
            for
          </Typography>
          <Typography variant="h5" style={{ margin: '16px 0' }}>
            {program.name}
          </Typography>
        </div>
      </div>
    </div>
  );
}
