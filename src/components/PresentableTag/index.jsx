// @flow

import * as React from 'react';
// import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
// import invariant from 'invariant';

import { graphql, createFragment } from '../../api';
import PresentableAvatar from '../PresentableAvatar';

import { type PresentableTag_presentable as Presentable } from './__generated__/PresentableTag_presentable.graphql';

const useFragment = createFragment<Presentable>(graphql`
  fragment PresentableTag_presentable on Presentable {
    ...PresentableAvatar_presentable
    __typename
    id
    name
  }
`);

type Props = {
  presentable: mixed,
  presentableAvatarProps?: React.ElementConfig<typeof PresentableAvatar>,
};

export default function PresentableTag(props: Props) {
  const { presentableAvatarProps } = props;

  const presentable = useFragment(props.presentable);
  // const { __typename: presentableTypeName } = presentable;

  // const to = (() => {
  //   switch (presentableTypeName) {
  //     case 'User': {
  //       return `/dashboard/users/view/${presentable.id}`;
  //     }
  //     case 'UserGroup': {
  //       return `/dashboard/organizations/view/${presentable.id}`;
  //     }
  //     case 'ProgramTrack': {
  //       return `/dashboard/program-tracks/${presentable.id}`;
  //     }
  //     default: {
  //       invariant(false, 'Expected valid "presentableTypeName"');
  //       // $FlowFixMe
  //       return null;
  //     }
  //   }
  // })();

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <PresentableAvatar
        presentable={presentable}
        {...presentableAvatarProps}
        style={{
          width: 64,
          height: 64,
        }}
      />
      <div style={{ width: 8 }} />
      <Typography
        variant="h6"
        color="textPrimary"
        // component={Link}
        // to={to}
      >
        {presentable.name}
      </Typography>
    </div>
  );
}
