/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProgramTrackActionResponseRow_programTrackActionResponse$ref: FragmentReference;
declare export opaque type ProgramTrackActionResponseRow_programTrackActionResponse$fragmentType: ProgramTrackActionResponseRow_programTrackActionResponse$ref;
export type ProgramTrackActionResponseRow_programTrackActionResponse = {|
  +id: string,
  +response: any,
  +createdAt: any,
  +action: {|
    +data: any
  |},
  +$refType: ProgramTrackActionResponseRow_programTrackActionResponse$ref,
|};
export type ProgramTrackActionResponseRow_programTrackActionResponse$data = ProgramTrackActionResponseRow_programTrackActionResponse;
export type ProgramTrackActionResponseRow_programTrackActionResponse$key = {
  +$data?: ProgramTrackActionResponseRow_programTrackActionResponse$data,
  +$fragmentRefs: ProgramTrackActionResponseRow_programTrackActionResponse$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProgramTrackActionResponseRow_programTrackActionResponse",
  "type": "ProgramTrackActionResponse",
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
      "name": "response",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "createdAt",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "action",
      "storageKey": null,
      "args": null,
      "concreteType": "ProgramTrackAction",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "data",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '6cab87b061b3fb1611f0fa6519bb785b';
module.exports = node;
