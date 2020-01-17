// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import invariant from 'invariant';

import { graphql, createFragment } from '../../api';

import { type PresentableLink_presentable as Presentable } from './__generated__/PresentableLink_presentable.graphql';

const noLink = true;

const useFragment = createFragment<Presentable>(graphql`
  fragment PresentableLink_presentable on Presentable {
    __typename
    id
    name
  }
`);

type Props = {
  ...$Diff<React.ElementConfig<typeof Link>, { to: mixed }>,
  presentable: mixed,
};

export default function PresentableLink(props: Props) {
  const { children, ...linkProps } = props;

  const presentable = useFragment(props.presentable);
  const { __typename: presentableTypeName } = presentable;

  const to = (() => {
    switch (presentableTypeName) {
      case 'User': {
        return `/dashboard/users/view/${presentable.id}`;
      }
      case 'UserGroup': {
        return `/dashboard/organizations/view/${presentable.id}`;
      }
      case 'ProgramTrack': {
        return `/dashboard/program-tracks/${presentable.id}`;
      }
      default: {
        invariant(false, `Expected valid "presentableTypeName", got "${presentableTypeName}"`);
        // $FlowFixMe
        return null;
      }
    }
  })();

  if (noLink) {
    return <>{children || presentable.name}</>;
  }

  return (
    <Link {...linkProps} to={to}>
      {children || presentable.name}
    </Link>
  );
}
