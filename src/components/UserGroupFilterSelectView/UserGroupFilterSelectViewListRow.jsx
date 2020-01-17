//  @flow

import * as React from 'react';

import { graphql, createFragment } from '../../api';
import NodeListItem from '../NodeListItem';

import { type UserGroupFilterSelectViewListRow_userGroup as UserGroup } from './__generated__/UserGroupFilterSelectViewListRow_userGroup.graphql';

const useFragment = createFragment<UserGroup>(graphql`
  fragment UserGroupFilterSelectViewListRow_userGroup on UserGroup {
    ...NodeListItem_node
    id
  }
`);

type Props = {|
  userGroup: mixed,
  selected?: boolean,
  onSelectClick: () => void,
|};

export default function UserGroupFilterSelectViewListRow(props: Props) {
  const { selected, onSelectClick } = props;

  const userGroup = useFragment(props.userGroup);

  return (
    <NodeListItem
      variant="compact"
      node={userGroup}
      raised={selected}
      onCardContentClick={onSelectClick}
    />
  );
}
