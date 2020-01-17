//  @flow

import * as React from 'react';

import { graphql, createFragment } from '../../api';
import NodeListItem from '../NodeListItem';

import { type UserFilterSelectViewListRow_user as User } from './__generated__/UserFilterSelectViewListRow_user.graphql';

const useFragment = createFragment<User>(graphql`
  fragment UserFilterSelectViewListRow_user on User {
    ...NodeListItem_node
    id
  }
`);

type Props = {|
  user: mixed,
  selected?: boolean,
  onSelectClick: () => void,
|};

export default function UserFilterSelectViewListRow(props: Props) {
  const { selected, onSelectClick } = props;

  const user = useFragment(props.user);

  return (
    <NodeListItem
      variant="compact"
      node={user}
      raised={selected}
      onCardContentClick={onSelectClick}
    />
  );
}
