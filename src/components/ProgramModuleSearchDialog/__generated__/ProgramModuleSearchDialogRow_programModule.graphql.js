/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type NodeListItem_node$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProgramModuleSearchDialogRow_programModule$ref: FragmentReference;
declare export opaque type ProgramModuleSearchDialogRow_programModule$fragmentType: ProgramModuleSearchDialogRow_programModule$ref;
export type ProgramModuleSearchDialogRow_programModule = {|
  +id: string,
  +isPublic: boolean,
  +$fragmentRefs: NodeListItem_node$ref,
  +$refType: ProgramModuleSearchDialogRow_programModule$ref,
|};
export type ProgramModuleSearchDialogRow_programModule$data = ProgramModuleSearchDialogRow_programModule;
export type ProgramModuleSearchDialogRow_programModule$key = {
  +$data?: ProgramModuleSearchDialogRow_programModule$data,
  +$fragmentRefs: ProgramModuleSearchDialogRow_programModule$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProgramModuleSearchDialogRow_programModule",
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
(node/*: any*/).hash = '29651b5c35516a7fa07e98d46e5d1bba';
module.exports = node;
