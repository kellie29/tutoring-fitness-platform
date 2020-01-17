/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProgramModuleTransferOwnershipDialog_programModule$ref: FragmentReference;
declare export opaque type ProgramModuleTransferOwnershipDialog_programModule$fragmentType: ProgramModuleTransferOwnershipDialog_programModule$ref;
export type ProgramModuleTransferOwnershipDialog_programModule = {|
  +id: string,
  +name: string,
  +$refType: ProgramModuleTransferOwnershipDialog_programModule$ref,
|};
export type ProgramModuleTransferOwnershipDialog_programModule$data = ProgramModuleTransferOwnershipDialog_programModule;
export type ProgramModuleTransferOwnershipDialog_programModule$key = {
  +$data?: ProgramModuleTransferOwnershipDialog_programModule$data,
  +$fragmentRefs: ProgramModuleTransferOwnershipDialog_programModule$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProgramModuleTransferOwnershipDialog_programModule",
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
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'cbbe0069e046f83d77975ad1f27f3dbb';
module.exports = node;
