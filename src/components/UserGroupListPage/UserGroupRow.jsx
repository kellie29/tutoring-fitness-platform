//  @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';

import { graphql, createFragment } from '../../api';
import NodeListItem from '../NodeListItem';

import { type UserGroupRow_userGroup as UserGroup } from './__generated__/UserGroupRow_userGroup.graphql';

const useFragment = createFragment<UserGroup>(graphql`
  fragment UserGroupRow_userGroup on UserGroup {
    ...NodeListItem_node
    id
    members(first: 0) {
      edgeCount
    }
  }
`);

type Props = {
  userGroup: mixed,
};

export default function UserGroupRow(props: Props) {
  const userGroup = useFragment(props.userGroup);

  return (
    <NodeListItem
      component={Link}
      to={`/dashboard/organizations/view/${userGroup.id}`}
      node={userGroup}
      infoChips={
        <>
          <Chip label={`${userGroup.members.edgeCount} Members`} />
        </>
      }
    />
  );
}
