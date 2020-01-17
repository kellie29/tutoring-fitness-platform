/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserAvatar_user$ref: FragmentReference;
declare export opaque type UserAvatar_user$fragmentType: UserAvatar_user$ref;
export type UserAvatar_user = {|
  +name: string,
  +image: ?{|
    +url: any
  |},
  +$refType: UserAvatar_user$ref,
|};
export type UserAvatar_user$data = UserAvatar_user;
export type UserAvatar_user$key = {
  +$data?: UserAvatar_user$data,
  +$fragmentRefs: UserAvatar_user$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "UserAvatar_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '1b29f8017f4185c7131df554044f0f60';
module.exports = node;
