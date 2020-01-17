/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type NodeListItem_node$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserGroupFilterSelectViewListRow_userGroup$ref: FragmentReference;
declare export opaque type UserGroupFilterSelectViewListRow_userGroup$fragmentType: UserGroupFilterSelectViewListRow_userGroup$ref;
export type UserGroupFilterSelectViewListRow_userGroup = {|
  +id: string,
  +$fragmentRefs: NodeListItem_node$ref,
  +$refType: UserGroupFilterSelectViewListRow_userGroup$ref,
|};
export type UserGroupFilterSelectViewListRow_userGroup$data = UserGroupFilterSelectViewListRow_userGroup;
export type UserGroupFilterSelectViewListRow_userGroup$key = {
  +$data?: UserGroupFilterSelectViewListRow_userGroup$data,
  +$fragmentRefs: UserGroupFilterSelectViewListRow_userGroup$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "UserGroupFilterSelectViewListRow_userGroup",
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
      "kind": "FragmentSpread",
      "name": "NodeListItem_node",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '46b39129508df12a1c1ae409bfb971b2';
module.exports = node;
