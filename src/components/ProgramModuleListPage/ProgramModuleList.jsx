//  @flow

import * as React from 'react';
import { Breadcrumbs, Button } from '@material-ui/core';
import uniq from 'lodash/uniq';

import { graphql, createPagination } from '../../api';
import ListPageList, { ListPageListItem } from '../ListPageList';

import { type ProgramModuleList_query as Query } from './__generated__/ProgramModuleList_query.graphql';
import ProgramModuleRow from './ProgramModuleRow';

const usePagination = createPagination<Query>(graphql`
  fragment ProgramModuleList_query on Query
    @argumentDefinitions(
      filter: { type: "ProgramModuleFilterInput" }
      # TODO: Reduce to 10 after "Select All" starts selecting all results instead of all loaded results
      count: { type: "Int", defaultValue: 20 }
      cursor: { type: "ID" }
    ) {
    programModules(filter: $filter, first: $count, after: $cursor)
      @connection(key: "ProgramModuleList_programModules") {
      edges {
        node {
          ...ProgramModuleRow_programModule
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
    query ProgramModuleListPaginationQuery(
      $filter: ProgramModuleFilterInput
      $count: Int!
      $cursor: ID
    ) {
      ...ProgramModuleList_query @arguments(filter: $filter, count: $count, cursor: $cursor)
    }
  `,
};

type Props = {|
  query: mixed,
  selectedProgramModuleIds: $ReadOnlyArray<string>,
  onSelectedProgramModuleIdsChange: (selectedProgramModuleIds: $ReadOnlyArray<string>) => void,
|};

export default function ProgramModuleList(props: Props) {
  const { selectedProgramModuleIds, onSelectedProgramModuleIdsChange } = props;
  const [query, relay] = usePagination(props.query);

  const loadMore = () => {
    relay.loadMore(connectionConfig, 10);
  };

  return (
    <>
      <ListPageList loadMore={loadMore} hasMore={relay.hasMore()}>
        <ListPageListItem>
          <div style={{ width: '100%', display: 'flex', placeContent: 'flex-end' }}>
            <Breadcrumbs aria-label="Breadcrumb">
              <Button
                onClick={() => {
                  onSelectedProgramModuleIdsChange(
                    uniq([
                      ...selectedProgramModuleIds,
                      ...query.programModules.edges.map(({ node }) => node.id),
                    ]),
                  );
                }}
              >
                Select All
              </Button>
              <Button
                onClick={() => {
                  onSelectedProgramModuleIdsChange(
                    selectedProgramModuleIds.filter(
                      (a) => !query.programModules.edges.map(({ node }) => node.id).includes(a),
                    ),
                  );
                }}
              >
                Deselect All
              </Button>
            </Breadcrumbs>
          </div>
        </ListPageListItem>
        {query.programModules.edges.map(({ node: programModule }) => (
          <ListPageListItem key={programModule.id}>
            <ProgramModuleRow
              programModule={programModule}
              selected={selectedProgramModuleIds.includes(programModule.id)}
              onSelectedChange={(selected) => {
                if (selected) {
                  onSelectedProgramModuleIdsChange([...selectedProgramModuleIds, programModule.id]);
                } else {
                  onSelectedProgramModuleIdsChange(
                    selectedProgramModuleIds.filter((id) => id !== programModule.id),
                  );
                }
              }}
            />
          </ListPageListItem>
        ))}
      </ListPageList>
    </>
  );
}
