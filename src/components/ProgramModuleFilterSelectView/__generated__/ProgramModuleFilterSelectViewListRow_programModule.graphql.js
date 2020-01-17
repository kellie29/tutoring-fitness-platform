/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type NodeListItem_node$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProgramModuleFilterSelectViewListRow_programModule$ref: FragmentReference;
declare export opaque type ProgramModuleFilterSelectViewListRow_programModule$fragmentType: ProgramModuleFilterSelectViewListRow_programModule$ref;
export type ProgramModuleFilterSelectViewListRow_programModule = {|
  +id: string,
  +isPublic: boolean,
  +$fragmentRefs: NodeListItem_node$ref,
  +$refType: ProgramModuleFilterSelectViewListRow_programModule$ref,
|};
export type ProgramModuleFilterSelectViewListRow_programModule$data = ProgramModuleFilterSelectViewListRow_programModule;
export type ProgramModuleFilterSelectViewListRow_programModule$key = {
  +$data?: ProgramModuleFilterSelectViewListRow_programModule$data,
  +$fragmentRefs: ProgramModuleFilterSelectViewListRow_programModule$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProgramModuleFilterSelectViewListRow_programModule",
  "type": "ProgramModule",
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
(node/*: any*/).hash = '480864cec628bcc61109d25ee49dc85e';
module.exports = node;
