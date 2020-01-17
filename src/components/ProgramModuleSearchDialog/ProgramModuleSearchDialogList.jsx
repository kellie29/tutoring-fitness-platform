//  @flow

import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { graphql, createPagination } from '../../api';
import LoadingView from '../LoadingView';

import { type ProgramModuleSearchDialogList_query as Query } from './__generated__/ProgramModuleSearchDialogList_query.graphql';
import ProgramModuleSearchDialogRow from './ProgramModuleSearchDialogRow';

const usePagination = createPagination<Query>(graphql`
  fragment ProgramModuleSearchDialogList_query on Query
    @argumentDefinitions(
      filter: { type: "ProgramModuleFilterInput" }
      count: { type: "Int", defaultValue: 10 }
      cursor: { type: "ID" }
    ) {
    programModules(filter: $filter, first: $count, after: $cursor)
      @connection(key: "ProgramModuleSearchDialogList_programModules") {
      edges {
        node {
          ...ProgramModuleSearchDialogRow_programModule
          id
        }
      }
    }
  }
`);

const connectionConfig = {
  getVariables: (props, { count, cursor }, fragmentVariables) => {
    return {
      count,
      cursor,
      filter: fragmentVariables.filter,
    };
  },
  query: graphql`
    query ProgramModuleSearchDialogListPaginationQuery(
      $filter: ProgramModuleFilterInput
      $count: Int!
      $cursor: ID
    ) {
      ...ProgramModuleSearchDialogList_query
        @arguments(filter: $filter, count: $count, cursor: $cursor)
    }
  `,
};

type Props = {|
  query: mixed,
  onProgramModuleClick: (programModuleId: string) => void,
|};

export default function ProgramModuleSearchDialogList(props: Props) {
  const { onProgramModuleClick } = props;

  const [query, relay] = usePagination(props.query);

  const loadMore = () => {
    relay.loadMore(connectionConfig, 10);
  };

  return (
    <InfiniteScroll
      loadMore={loadMore}
      hasMore={relay.hasMore()}
      loader={<LoadingView key="loader" />}
    >
      {query.programModules.edges.map(({ node: programModule }) => (
        <ProgramModuleSearchDialogRow
          key={programModule.id}
          programModule={programModule}
          onSelectClick={() => onProgramModuleClick(programModule.id)}
        />
      ))}
    </InfiniteScroll>
  );
}
