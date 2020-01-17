/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type NodeListItem_node$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProgramFilterSelectViewListRow_program$ref: FragmentReference;
declare export opaque type ProgramFilterSelectViewListRow_program$fragmentType: ProgramFilterSelectViewListRow_program$ref;
export type ProgramFilterSelectViewListRow_program = {|
  +id: string,
  +isPublic: boolean,
  +$fragmentRefs: NodeListItem_node$ref,
  +$refType: ProgramFilterSelectViewListRow_program$ref,
|};
export type ProgramFilterSelectViewListRow_program$data = ProgramFilterSelectViewListRow_program;
export type ProgramFilterSelectViewListRow_program$key = {
  +$data?: ProgramFilterSelectViewListRow_program$data,
  +$fragmentRefs: ProgramFilterSelectViewListRow_program$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProgramFilterSelectViewListRow_program",
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
      "kind": "ScalarField",
      "alias": null,
      "name": "isPublic",
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
(node/*: any*/).hash = 'e8b2712725708b92489f3d104386ac18';
module.exports = node;
