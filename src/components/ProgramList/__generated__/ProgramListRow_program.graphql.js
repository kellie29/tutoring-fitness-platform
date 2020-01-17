/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type NodeListItem_node$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProgramListRow_program$ref: FragmentReference;
declare export opaque type ProgramListRow_program$fragmentType: ProgramListRow_program$ref;
export type ProgramListRow_program = {|
  +id: string,
  +$fragmentRefs: NodeListItem_node$ref,
  +$refType: ProgramListRow_program$ref,
|};
export type ProgramListRow_program$data = ProgramListRow_program;
export type ProgramListRow_program$key = {
  +$data?: ProgramListRow_program$data,
  +$fragmentRefs: ProgramListRow_program$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProgramListRow_program",
  "type": "Program",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "NodeListItem_node",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '76800ffea627357ce53d269a36a47a65';
module.exports = node;
