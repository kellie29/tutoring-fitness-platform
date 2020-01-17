/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProgramTransferOwnershipDialog_program$ref: FragmentReference;
declare export opaque type ProgramTransferOwnershipDialog_program$fragmentType: ProgramTransferOwnershipDialog_program$ref;
export type ProgramTransferOwnershipDialog_program = {|
  +id: string,
  +name: string,
  +$refType: ProgramTransferOwnershipDialog_program$ref,
|};
export type ProgramTransferOwnershipDialog_program$data = ProgramTransferOwnershipDialog_program;
export type ProgramTransferOwnershipDialog_program$key = {
  +$data?: ProgramTransferOwnershipDialog_program$data,
  +$fragmentRefs: ProgramTransferOwnershipDialog_program$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProgramTransferOwnershipDialog_program",
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
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'e35fda75ac2f16f2afd73acf048489d6';
module.exports = node;
