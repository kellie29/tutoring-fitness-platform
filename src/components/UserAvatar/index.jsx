// @flow

import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';

import { graphql, createFragment } from '../../api';

import { type UserAvatar_user as User } from './__generated__/UserAvatar_user.graphql';

const useFragment = createFragment<User>(graphql`
  fragment UserAvatar_user on User {
    name
    image {
      url
    }
  }
`);

type Props = {
  user: mixed,
  ...React.ElementConfig<Avatar>,
};

export default React.forwardRef<Props, any>(function UserAvatar(props: Props, ref) {
  const { ...restProps } = props;

  const user = useFragment(props.user);

  const src = restProps.src || (user.image && user.image.url) || null;
  const initials = user.name.split(' ').map((userName) => userName[0]);

  return (
    <Avatar ref={ref} alt={user.name} {...restProps} src={src}>
      {initials}
    </Avatar>
  );
});
