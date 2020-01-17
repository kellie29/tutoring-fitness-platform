/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type NodeListItem_node$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProgramModuleRow_programModule$ref: FragmentReference;
declare export opaque type ProgramModuleRow_programModule$fragmentType: ProgramModuleRow_programModule$ref;
export type ProgramModuleRow_programModule = {|
  +id: string,
  +isPublic: boolean,
  +$fragmentRefs: NodeListItem_node$ref,
  +$refType: ProgramModuleRow_programModule$ref,
|};
export type ProgramModuleRow_programModule$data = ProgramModuleRow_programModule;
export type ProgramModuleRow_programModule$key = {
  +$data?: ProgramModuleRow_programModule$data,
  +$fragmentRefs: ProgramModuleRow_programModule$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProgramModuleRow_programModule",
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
(node/*: any*/).hash = '8dc7f28918634e6d8f2bae3795d5bf7a';
module.exports = node;
