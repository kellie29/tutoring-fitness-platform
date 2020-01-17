/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PresentableAvatar_presentable$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProgramCloneDialog_program$ref: FragmentReference;
declare export opaque type ProgramCloneDialog_program$fragmentType: ProgramCloneDialog_program$ref;
export type ProgramCloneDialog_program = {|
  +id: string,
  +name: string,
  +viewerCanUpdate: ?boolean,
  +$fragmentRefs: PresentableAvatar_presentable$ref,
  +$refType: ProgramCloneDialog_program$ref,
|};
export type ProgramCloneDialog_program$data = ProgramCloneDialog_program;
export type ProgramCloneDialog_program$key = {
  +$data?: ProgramCloneDialog_program$data,
  +$fragmentRefs: ProgramCloneDialog_program$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProgramCloneDialog_program",
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "viewerCanUpdate",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PresentableAvatar_presentable",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'c3bf3d19f5271aa058bed82f1d4a9e8d';
module.exports = node;
