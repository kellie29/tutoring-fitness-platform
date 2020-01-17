//  @flow

import * as React from 'react';

import { graphql, createPagination } from '../../api';
import ListPageList, { ListPageListItem } from '../ListPageList';

import { type ProgramListPageList_query as Query } from './__generated__/ProgramListPageList_query.graphql';
import ProgramListPageRow from './ProgramListPageRow';

const usePagination = createPagination<Query>(graphql`
  fragment ProgramListPageList_query on Query
    @argumentDefinitions(
      filter: { type: "ProgramFilterInput" }
      count: { type: "Int", defaultValue: 10 }
      cursor: { type: "ID" }
    ) {
    programs(filter: $filter, first: $count, after: $cursor)
      @connection(key: "ProgramListPageList_programs") {
      edges {
        node {
          ...ProgramListPageRow_program
          id
        }
      }
    }
  }
`);

const connectionConfig = {
  query: graphql`
    query ProgramListPageListPaginationQuery(
      $filter: ProgramFilterInput
      $count: Int!
      $cursor: ID
    ) {
      ...ProgramListPageList_query @arguments(filter: $filter, count: $count, cursor: $cursor)
    }
  `,
  getVariables: (props, { count, cursor }, fragmentVariables) => {
    return {
      count,
      cursor,
      filter: fragmentVariables.filter,
    };
  },
};

type Props = {|
  query: mixed,
|};

export default function ProgramListPageList(props: Props) {
  const [query, relay] = usePagination(props.query);

  const loadMore = () => {
    relay.loadMore(connectionConfig, 10, (/* error */) => {
      // TODO: Handle error
    });
  };

  return (
    <ListPageList loadMore={loadMore} hasMore={relay.hasMore()}>
      {query.programs.edges.map(({ node: program }) => (
        <ListPageListItem key={program.id}>
          <ProgramListPageRow program={program} />
        </ListPageListItem>
      ))}
    </ListPageList>
  );
}
