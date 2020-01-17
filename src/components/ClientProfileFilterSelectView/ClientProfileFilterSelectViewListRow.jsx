//  @flow

import * as React from 'react';

import { graphql, createFragment } from '../../api';
import NodeListItem from '../NodeListItem';

import { type ClientProfileFilterSelectViewListRow_clientProfile as ClientProfile } from './__generated__/ClientProfileFilterSelectViewListRow_clientProfile.graphql';

const useFragment = createFragment<ClientProfile>(graphql`
  fragment ClientProfileFilterSelectViewListRow_clientProfile on ClientProfile {
    ...NodeListItem_node
    id
  }
`);

type Props = {|
  clientProfile: mixed,
  selected?: boolean,
  onSelectClick: () => void,
|};

export default function ClientProfileFilterSelectViewListRow(props: Props) {
  const { selected, onSelectClick } = props;

  const clientProfile = useFragment(props.clientProfile);

  return (
    <NodeListItem
      variant="compact"
      node={clientProfile}
      raised={selected}
      onCardContentClick={onSelectClick}
    />
  );
}
