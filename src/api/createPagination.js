// @flow

import { type GraphQLTaggedNode, type PageInfo, type Variables } from 'relay-runtime';
import { usePagination } from 'relay-hooks';

type ConnectionData = {
  edges?: $ReadOnlyArray<any>,
  pageInfo?: PageInfo,
};

type FragmentVariablesGetter = (prevVars: Variables, totalCount: number) => Variables;

type ConnectionConfig = {
  direction?: 'backward' | 'forward',
  getConnectionFromProps?: (props: Object) => ConnectionData,
  getFragmentVariables?: FragmentVariablesGetter,
  getVariables: (
    props: Object,
    paginationInfo: {
      count: number,
      cursor: string,
    },
    fragmentVariables: Variables,
  ) => Variables,
  query: GraphQLTaggedNode,
};

type RefetchOptions = {
  force?: boolean,
  fetchPolicy?: 'store-or-network' | 'network-only',
};

type PaginationFunction = {
  loadMore: (
    connectionConfig: ConnectionConfig,
    pageSize: number,
    observerOrCallback: any,
    options?: RefetchOptions,
  ) => any,
  hasMore: () => boolean,
  isLoading: () => boolean,
  refetchConnection: (
    connectionConfig: ConnectionConfig,
    totalCount: number,
    callback: any,
    refetchVariables: any,
  ) => any,
};

type UsePagination<TFragmentData> = (fragmentRef: any) => [TFragmentData, PaginationFunction];

export default function createPagination<TFragmentData>(
  fragmentDef: GraphQLTaggedNode,
): UsePagination<TFragmentData> {
  return (fragmentRef) => {
    const pagination = usePagination(fragmentDef, fragmentRef);

    return pagination;
  };
}
