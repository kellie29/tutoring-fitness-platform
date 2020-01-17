/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type NodeListItem_node$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserFilterSelectViewListRow_user$ref: FragmentReference;
declare export opaque type UserFilterSelectViewListRow_user$fragmentType: UserFilterSelectViewListRow_user$ref;
export type UserFilterSelectViewListRow_user = {|
  +id: string,
  +$fragmentRefs: NodeListItem_node$ref,
  +$refType: UserFilterSelectViewListRow_user$ref,
|};
export type UserFilterSelectViewListRow_user$data = UserFilterSelectViewListRow_user;
export type UserFilterSelectViewListRow_user$key = {
  +$data?: UserFilterSelectViewListRow_user$data,
  +$fragmentRefs: UserFilterSelectViewListRow_user$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "UserFilterSelectViewListRow_user",
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
      "kind": "FragmentSpread",
      "name": "NodeListItem_node",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '6d8c4def2608a3bdeaeb8977373a9d5d';
module.exports = node;
