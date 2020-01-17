/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserGroupLeaveDialog_userGroup$ref: FragmentReference;
declare export opaque type UserGroupLeaveDialog_userGroup$fragmentType: UserGroupLeaveDialog_userGroup$ref;
export type UserGroupLeaveDialog_userGroup = {|
  +id: string,
  +name: string,
  +$refType: UserGroupLeaveDialog_userGroup$ref,
|};
export type UserGroupLeaveDialog_userGroup$data = UserGroupLeaveDialog_userGroup;
export type UserGroupLeaveDialog_userGroup$key = {
  +$data?: UserGroupLeaveDialog_userGroup$data,
  +$fragmentRefs: UserGroupLeaveDialog_userGroup$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "UserGroupLeaveDialog_userGroup",
  "type": "UserGroup",
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
(node/*: any*/).hash = 'f7ebae1760bca94a517754d8418f2674';
module.exports = node;
