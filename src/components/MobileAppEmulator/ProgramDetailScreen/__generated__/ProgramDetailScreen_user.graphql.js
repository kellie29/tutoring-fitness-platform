/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PresentableAvatar_presentable$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProgramDetailScreen_user$ref: FragmentReference;
declare export opaque type ProgramDetailScreen_user$fragmentType: ProgramDetailScreen_user$ref;
export type ProgramDetailScreen_user = {|
  +id: string,
  +name?: string,
  +image?: ?{|
    +url: any
  |},
  +$fragmentRefs: PresentableAvatar_presentable$ref,
  +$refType: ProgramDetailScreen_user$ref,
|};
export type ProgramDetailScreen_user$data = ProgramDetailScreen_user;
export type ProgramDetailScreen_user$key = {
  +$data?: ProgramDetailScreen_user$data,
  +$fragmentRefs: ProgramDetailScreen_user$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProgramDetailScreen_user",
  "type": "User",
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
      "kind": "LinkedField",
      "alias": null,
      "name": "image",
      "storageKey": null,
      "args": null,
      "concreteType": "Image",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "url",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "PresentableAvatar_presentable",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b0ad74fab7079833f992d8273cb31013';
module.exports = node;
