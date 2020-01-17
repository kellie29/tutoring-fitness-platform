/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserGroupInviteDialog_userGroup$ref: FragmentReference;
declare export opaque type UserGroupInviteDialog_userGroup$fragmentType: UserGroupInviteDialog_userGroup$ref;
export type UserGroupInviteDialog_userGroup = {|
  +id: string,
  +name: string,
  +$refType: UserGroupInviteDialog_userGroup$ref,
|};
export type UserGroupInviteDialog_userGroup$data = UserGroupInviteDialog_userGroup;
export type UserGroupInviteDialog_userGroup$key = {
  +$data?: UserGroupInviteDialog_userGroup$data,
  +$fragmentRefs: UserGroupInviteDialog_userGroup$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "UserGroupInviteDialog_userGroup",
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
(node/*: any*/).hash = '6a35c306f068d852d5647cc904025377';
module.exports = node;
