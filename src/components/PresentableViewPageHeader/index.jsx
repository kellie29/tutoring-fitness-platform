// @flow

import * as React from 'react';

import { graphql, createFragment } from '../../api';
import ViewPageHeader from '../ViewPageHeader';
import PresentableAvatar from '../PresentableAvatar';
import PresentableLink from '../PresentableLink';

import { type PresentableViewPageHeader_presentable as Presentable } from './__generated__/PresentableViewPageHeader_presentable.graphql';

const useFragment = createFragment<Presentable>(graphql`
  fragment PresentableViewPageHeader_presentable on Presentable {
    ...PresentableAvatar_presentable
    name
    image {
      url
      width
      height
    }
    ... on Owned {
      owner {
        __id
        ...PresentableLink_presentable
      }
    }
  }
`);

type Props = {|
  presentable: mixed,
  variant?: 'default' | 'compact',
  currentID?: string,
  actions?: any,
  ...$Diff<
    React.ElementConfig<typeof ViewPageHeader>,
    {
      leftContent: mixed,
      titleContent: mixed,
      subtitleContent: mixed,
    },
  >,
|};
let assignID: string;

export default function PresentableViewPageHeader(props: Props) {
  const { variant, tabs, actions, backButtonTo, currentID } = props;

  const presentable = useFragment(props.presentable);
  if (presentable && presentable.owner) {
    // eslint-disable-next-line no-underscore-dangle
    assignID = presentable.owner.__id;
  }

  let subtitleContent = null;
  if (variant !== 'compact') {
    subtitleContent = presentable.owner && (
      <>
        by <PresentableLink presentable={presentable.owner} />
      </>
    );
  }

  return (
    <ViewPageHeader
      leftContent={<PresentableAvatar presentable={presentable} />}
      titleContent={presentable.name}
      subtitleContent={subtitleContent}
      tabs={tabs}
      actions={actions}
      currentID={currentID}
      assignID={assignID}
      backButtonTo={backButtonTo}
    />
  );
}
