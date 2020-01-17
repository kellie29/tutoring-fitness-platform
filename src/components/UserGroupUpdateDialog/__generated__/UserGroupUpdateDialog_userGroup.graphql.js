/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserGroupUpdateDialog_userGroup$ref: FragmentReference;
declare export opaque type UserGroupUpdateDialog_userGroup$fragmentType: UserGroupUpdateDialog_userGroup$ref;
export type UserGroupUpdateDialog_userGroup = {|
  +id: string,
  +name: string,
  +description: string,
  +$refType: UserGroupUpdateDialog_userGroup$ref,
|};
export type UserGroupUpdateDialog_userGroup$data = UserGroupUpdateDialog_userGroup;
export type UserGroupUpdateDialog_userGroup$key = {
  +$data?: UserGroupUpdateDialog_userGroup$data,
  +$fragmentRefs: UserGroupUpdateDialog_userGroup$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "UserGroupUpdateDialog_userGroup",
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'f82f5253804b4de7a418bdc859a408fc';
module.exports = node;
