// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';

import { graphql, createFragment } from '../../api';
import UserAvatar from '../UserAvatar';

import { type UserTag_user as User } from './__generated__/UserTag_user.graphql';

const useFragment = createFragment<User>(graphql`
  fragment UserTag_user on User {
    ...UserAvatar_user
    id
    name
  }
`);

type Props = {
  user: mixed,
  userAvatarProps?: React.ElementConfig<typeof UserAvatar>,
};

export default function UserTag(props: Props) {
  const { userAvatarProps } = props;

  const user = useFragment(props.user);

  return (
    <Link to={`/dashboard/users/view/${user.id}`}>
      <UserAvatar user={user} {...userAvatarProps} />
      {user.name}
    </Link>
  );
}
