/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PresentableTag_presentable$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProgramTrackRow_programTrack$ref: FragmentReference;
declare export opaque type ProgramTrackRow_programTrack$fragmentType: ProgramTrackRow_programTrack$ref;
export type ProgramTrackRow_programTrack = {|
  +id: string,
  +startDate: any,
  +user: ?{|
    +$fragmentRefs: PresentableTag_presentable$ref
  |},
  +$refType: ProgramTrackRow_programTrack$ref,
|};
export type ProgramTrackRow_programTrack$data = ProgramTrackRow_programTrack;
export type ProgramTrackRow_programTrack$key = {
  +$data?: ProgramTrackRow_programTrack$data,
  +$fragmentRefs: ProgramTrackRow_programTrack$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProgramTrackRow_programTrack",
  "type": "ProgramTrack",
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
      "name": "startDate",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "user",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "PresentableTag_presentable",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '75f9cf175a96ae164d71ac702aaa3d0d';
module.exports = node;
