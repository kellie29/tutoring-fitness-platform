// @flow

import { type GraphQLTaggedNode } from 'relay-runtime';
import { useFragment } from 'relay-hooks';

type UseFragment<TFragmentData> = (fragmentRef: any) => TFragmentData;

export default function createFragment<TFragmentData>(
  fragmentDef: GraphQLTaggedNode,
): UseFragment<TFragmentData> {
  return (fragmentRef) => {
    const data = useFragment(fragmentDef, fragmentRef);

    return data;
  };
}
