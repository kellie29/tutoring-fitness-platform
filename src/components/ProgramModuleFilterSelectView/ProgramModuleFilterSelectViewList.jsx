//  @flow

import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { graphql, createPagination } from '../../api';
import LoadingView from '../LoadingView';

import { type ProgramModuleFilterSelectViewList_query as Query } from './__generated__/ProgramModuleFilterSelectViewList_query.graphql';
import ProgramModuleFilterSelectViewListRow from './ProgramModuleFilterSelectViewListRow';

const usePagination = createPagination<Query>(graphql`
  fragment ProgramModuleFilterSelectViewList_query on Query
    @argumentDefinitions(
      filter: { type: "ProgramModuleFilterInput" }
      count: { type: "Int", defaultValue: 10 }
      cursor: { type: "ID" }
    ) {
    programModules(filter: $filter, first: $count, after: $cursor)
      @connection(key: "ProgramModuleFilterSelectViewList_programModules") {
      edges {
        node {
          ...ProgramModuleFilterSelectViewListRow_programModule
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
    query ProgramModuleFilterSelectViewListPaginationQuery(
      $filter: ProgramModuleFilterInput
      $count: Int!
      $cursor: ID
    ) {
      ...ProgramModuleFilterSelectViewList_query
        @arguments(filter: $filter, count: $count, cursor: $cursor)
    }
  `,
};

type Props = {|
  query: mixed,
  selectedProgramModuleId: string | null,
  onProgramModuleClick: (programModuleId: string) => void,
|};

export default function ProgramModuleFilterSelectViewList(props: Props) {
  const { selectedProgramModuleId, onProgramModuleClick } = props;

  const [query, relay] = usePagination(props.query);

  const loadMore = () => {
    relay.loadMore(connectionConfig, 10);
  };

  return (
    <div
      style={{
        overflowY: 'auto',
      }}
    >
      <InfiniteScroll
        loadMore={loadMore}
        hasMore={relay.hasMore()}
        loader={<LoadingView key="loader" />}
        useWindow={false}
      >
        {query.programModules.edges.map(({ node: programModule }) => (
          <ProgramModuleFilterSelectViewListRow
            key={programModule.id}
            programModule={programModule}
            selected={selectedProgramModuleId === programModule.id}
            onSelectClick={() => onProgramModuleClick(programModule.id)}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}
