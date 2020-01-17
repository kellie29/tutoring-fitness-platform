// @flow

import * as React from 'react';
import CardMedia from '@material-ui/core/CardMedia';

import { graphql, createFragment } from '../../api';
import PresentableAvatar from '../PresentableAvatar';

import { type PresentableCardMedia_presentable as Presentable } from './__generated__/PresentableCardMedia_presentable.graphql';

const useFragment = createFragment<Presentable>(graphql`
  fragment PresentableCardMedia_presentable on Presentable {
    ...PresentableAvatar_presentable
    name
    image {
      url
    }
  }
`);

type Props = {
  presentable: mixed,
  ...React.ElementConfig<CardMedia>,
};

export default React.forwardRef<Props, any>(function PresentableCardMedia(props: Props, ref) {
  const { children, ...restProps } = props;

  const presentable = useFragment(props.presentable);
  const src = restProps.src || (presentable.image && presentable.image.url) || null;

  return (
    <CardMedia ref={ref} alt={presentable.name} {...restProps} image={src}>
      {!src ? children : null}
      <PresentableAvatar
        presentable={presentable}
        style={{ borderRadius: 0, width: '100%', height: '100%' }}
      />
    </CardMedia>
  );
});
