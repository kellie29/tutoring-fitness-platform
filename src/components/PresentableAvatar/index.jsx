// @flow

import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';

import { graphql, createFragment } from '../../api';

import { type PresentableAvatar_presentable as Presentable } from './__generated__/PresentableAvatar_presentable.graphql';

const useFragment = createFragment<Presentable>(graphql`
  fragment PresentableAvatar_presentable on Presentable {
    name
    image {
      url
    }
  }
`);

type Props = {
  presentable: mixed,
  ...React.ElementConfig<Avatar>,
};

export default React.forwardRef<Props, any>(function PresentableAvatar(props: Props, ref) {
  const { presentable: _, children, ...restProps } = props;

  const presentable = useFragment(props.presentable);

  const src = restProps.src || (presentable.image && presentable.image.url) || null;
  const initials = presentable.name.split(' ').map((presentableName) => presentableName[0]);

  return (
    <Avatar ref={ref} alt={presentable.name} {...restProps} src={src}>
      {children || initials}
    </Avatar>
  );
});
