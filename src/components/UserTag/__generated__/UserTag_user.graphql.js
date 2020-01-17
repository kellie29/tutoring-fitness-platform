/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type UserAvatar_user$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserTag_user$ref: FragmentReference;
declare export opaque type UserTag_user$fragmentType: UserTag_user$ref;
export type UserTag_user = {|
  +id: string,
  +name: string,
  +$fragmentRefs: UserAvatar_user$ref,
  +$refType: UserTag_user$ref,
|};
export type UserTag_user$data = UserTag_user;
export type UserTag_user$key = {
  +$data?: UserTag_user$data,
  +$fragmentRefs: UserTag_user$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "UserTag_user",
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
      "kind": "FragmentSpread",
      "name": "UserAvatar_user",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '22c9e637ce4cd9df7574ea7182d92530';
module.exports = node;
