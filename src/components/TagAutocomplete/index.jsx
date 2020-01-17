// @flow

import * as React from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import { graphql, createQuery } from '../../api';
import LoadingView from '../LoadingView';

import {
  type TagAutocompleteQuery,
  type TagFilterInput,
} from './__generated__/TagAutocompleteQuery.graphql';

const useQuery = createQuery<TagAutocompleteQuery>(graphql`
  query TagAutocompleteQuery($filter: TagFilterInput) {
    tags(filter: $filter, first: 50) {
      edges {
        node {
          id
          slug
          name
          parent {
            id
            name
          }
        }
      }
    }
  }
`);

type Props = {
  filter: TagFilterInput,
  onValueChange: (string | null) => void,
  value: string | null,
  grouped?: boolean,
};

export default function TagAutocomplete(props: Props) {
  const { filter, onValueChange, value, grouped, ...restProps } = props;

  const query = useQuery({ filter });

  const onChange = React.useCallback(
    (event, nextSelectedTag) => {
      onValueChange(nextSelectedTag ? nextSelectedTag.id : null);
    },
    [onValueChange],
  );

  if (!query.props) {
    return <LoadingView />;
  }
  const { tags } = query.props;

  const autocompleteValue =
    (value && tags.edges.find(({ node: tag }) => tag.id === value)?.node) ?? null;

  let shouldGroup = grouped;
  if (typeof shouldGroup !== 'boolean') {
    const parentIds = new Set();
    tags.edges.forEach(({ node: tag }) => parentIds.add(tag.parent?.id));

    shouldGroup = parentIds.size > 1;
  }

  return (
    <Autocomplete
      {...restProps}
      options={tags.edges.map(({ node: tag }) => tag)}
      getOptionLabel={(tag) => tag.name}
      groupBy={shouldGroup ? (tag) => tag.parent?.name || 'Root' : null}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Tag"
          variant="outlined"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
      )}
      onChange={onChange}
      value={autocompleteValue}
    />
  );
}
