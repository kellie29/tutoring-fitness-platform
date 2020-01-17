//  @flow

import * as React from 'react';

import { graphql, createPagination } from '../../api';
import ListPageList, { ListPageListItem } from '../ListPageList';

import { type ProgramList_query as Query } from './__generated__/ProgramList_query.graphql';
import ProgramListRow from './ProgramListRow';

const usePagination = createPagination<Query>(graphql`
  fragment ProgramList_query on Query
    @argumentDefinitions(
      filter: { type: "ProgramFilterInput" }
      count: { type: "Int", defaultValue: 10 }
      cursor: { type: "ID" }
    ) {
    programs(filter: $filter, first: $count, after: $cursor)
      @connection(key: "ProgramList_programs") {
      edges {
        node {
          ...ProgramListRow_program
          id
        }
      }
    }
  }
`);

const connectionConfig = {
  getVariables: (props, { count, cursor }, fragmentVariables) => ({
    count,
    cursor,
    filter: fragmentVariables.filter,
  }),
  query: graphql`
    query ProgramListPaginationQuery($filter: ProgramFilterInput, $count: Int!, $cursor: ID) {
      ...ProgramList_query @arguments(filter: $filter, count: $count, cursor: $cursor)
    }
  `,
};

type Props = {|
  query: mixed,
  getNodeListItemProps: $PropertyType<
    React.ElementConfig<typeof ProgramListRow>,
    'getNodeListItemProps',
  >,
|};

export default function ProgramList(props: Props) {
  const { getNodeListItemProps } = props;

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
          <ProgramListRow program={program} getNodeListItemProps={getNodeListItemProps} />
        </ListPageListItem>
      ))}
    </ListPageList>
  );
}
