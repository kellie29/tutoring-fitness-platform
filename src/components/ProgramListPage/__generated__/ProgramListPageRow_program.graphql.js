/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type NodeListItem_node$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProgramListPageRow_program$ref: FragmentReference;
declare export opaque type ProgramListPageRow_program$fragmentType: ProgramListPageRow_program$ref;
export type ProgramListPageRow_program = {|
  +id: string,
  +isPublic: boolean,
  +viewerCanUpdate: ?boolean,
  +isBookmarkedByViewer: ?boolean,
  +$fragmentRefs: NodeListItem_node$ref,
  +$refType: ProgramListPageRow_program$ref,
|};
export type ProgramListPageRow_program$data = ProgramListPageRow_program;
export type ProgramListPageRow_program$key = {
  +$data?: ProgramListPageRow_program$data,
  +$fragmentRefs: ProgramListPageRow_program$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProgramListPageRow_program",
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
      "kind": "ScalarField",
      "alias": null,
      "name": "viewerCanUpdate",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isBookmarkedByViewer",
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
(node/*: any*/).hash = '39bb241ac78b4f41d0282c41050a9ecf';
module.exports = node;
