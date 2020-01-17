//  @flow

import * as React from 'react';

import { graphql, createFragment } from '../../api';
import NodeListItem from '../NodeListItem';

import { type ProgramListRow_program as Program } from './__generated__/ProgramListRow_program.graphql';

const useFragment = createFragment<Program>(graphql`
  fragment ProgramListRow_program on Program {
    ...NodeListItem_node
    id
  }
`);

type Props = {|
  program: mixed,
  getNodeListItemProps?: (
    program: Program,
  ) => $Diff<React.ElementConfig<typeof NodeListItem>, { node: mixed }>,
|};

export default function ProgramListRow(props: Props) {
  const { getNodeListItemProps } = props;

  const program = useFragment(props.program);

  return (
    <NodeListItem
      {...(getNodeListItemProps ? getNodeListItemProps(program) : null)}
      node={program}
      actionButtons={
        <>
          {/* <Button
            color="primary"
            component={Link}
            to={`/dashboard/programs/view/${program.id}`}
          >
            View
          </Button> */}
        </>
      }
    />
  );
}
