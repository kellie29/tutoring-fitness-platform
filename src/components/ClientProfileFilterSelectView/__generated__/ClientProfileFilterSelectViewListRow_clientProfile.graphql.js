/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type NodeListItem_node$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ClientProfileFilterSelectViewListRow_clientProfile$ref: FragmentReference;
declare export opaque type ClientProfileFilterSelectViewListRow_clientProfile$fragmentType: ClientProfileFilterSelectViewListRow_clientProfile$ref;
export type ClientProfileFilterSelectViewListRow_clientProfile = {|
  +id: string,
  +$fragmentRefs: NodeListItem_node$ref,
  +$refType: ClientProfileFilterSelectViewListRow_clientProfile$ref,
|};
export type ClientProfileFilterSelectViewListRow_clientProfile$data = ClientProfileFilterSelectViewListRow_clientProfile;
export type ClientProfileFilterSelectViewListRow_clientProfile$key = {
  +$data?: ClientProfileFilterSelectViewListRow_clientProfile$data,
  +$fragmentRefs: ClientProfileFilterSelectViewListRow_clientProfile$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ClientProfileFilterSelectViewListRow_clientProfile",
  "type": "ClientProfile",
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
(node/*: any*/).hash = '6c788f5cb68fb0317b48476f21341c54';
module.exports = node;
