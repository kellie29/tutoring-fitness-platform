/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserGroupLeaveDialog_user$ref: FragmentReference;
declare export opaque type UserGroupLeaveDialog_user$fragmentType: UserGroupLeaveDialog_user$ref;
export type UserGroupLeaveDialog_user = {|
  +id: string,
  +name: string,
  +$refType: UserGroupLeaveDialog_user$ref,
|};
export type UserGroupLeaveDialog_user$data = UserGroupLeaveDialog_user;
export type UserGroupLeaveDialog_user$key = {
  +$data?: UserGroupLeaveDialog_user$data,
  +$fragmentRefs: UserGroupLeaveDialog_user$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "UserGroupLeaveDialog_user",
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'c7625e83900be9254f4cd1eea5d0ab11';
module.exports = node;
