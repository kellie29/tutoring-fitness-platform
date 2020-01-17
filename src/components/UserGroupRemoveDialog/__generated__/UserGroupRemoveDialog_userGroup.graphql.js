/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserGroupRemoveDialog_userGroup$ref: FragmentReference;
declare export opaque type UserGroupRemoveDialog_userGroup$fragmentType: UserGroupRemoveDialog_userGroup$ref;
export type UserGroupRemoveDialog_userGroup = {|
  +id: string,
  +name: string,
  +$refType: UserGroupRemoveDialog_userGroup$ref,
|};
export type UserGroupRemoveDialog_userGroup$data = UserGroupRemoveDialog_userGroup;
export type UserGroupRemoveDialog_userGroup$key = {
  +$data?: UserGroupRemoveDialog_userGroup$data,
  +$fragmentRefs: UserGroupRemoveDialog_userGroup$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "UserGroupRemoveDialog_userGroup",
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
(node/*: any*/).hash = 'c4dd30d0525825e65f458f25d10b9680';
module.exports = node;
