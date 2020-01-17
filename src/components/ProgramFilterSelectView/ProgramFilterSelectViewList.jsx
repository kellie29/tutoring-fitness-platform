//  @flow

import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { graphql, createPagination } from '../../api';
import LoadingView from '../LoadingView';

import { type ProgramFilterSelectViewList_query as Query } from './__generated__/ProgramFilterSelectViewList_query.graphql';
import ProgramFilterSelectViewListRow from './ProgramFilterSelectViewListRow';

const usePagination = createPagination<Query>(graphql`
  fragment ProgramFilterSelectViewList_query on Query
    @argumentDefinitions(
      filter: { type: "ProgramFilterInput" }
      count: { type: "Int", defaultValue: 10 }
      cursor: { type: "ID" }
    ) {
    programs(filter: $filter, first: $count, after: $cursor)
      @connection(key: "ProgramFilterSelectViewList_programs") {
      edges {
        node {
          ...ProgramFilterSelectViewListRow_program
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
    query ProgramFilterSelectViewListPaginationQuery(
      $filter: ProgramFilterInput
      $count: Int!
      $cursor: ID
    ) {
      ...ProgramFilterSelectViewList_query
        @arguments(filter: $filter, count: $count, cursor: $cursor)
    }
  `,
};

type Props = {|
  query: mixed,
  selectedProgramId: string | null,
  onProgramClick: (programId: string) => void,
|};

export default function ProgramFilterSelectViewList(props: Props) {
  const { selectedProgramId, onProgramClick } = props;

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
        {query.programs.edges.map(({ node: program }) => (
          <ProgramFilterSelectViewListRow
            key={program.id}
            program={program}
            selected={selectedProgramId === program.id}
            onSelectClick={() => onProgramClick(program.id)}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}
