/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type NodeListItem_presentable$ref = any;
type PresentableAvatar_presentable$ref = any;
type PresentableLink_presentable$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type NodeListItem_node$ref: FragmentReference;
declare export opaque type NodeListItem_node$fragmentType: NodeListItem_node$ref;
export type NodeListItem_node = {|
  +owner?: {|
    +name?: string,
    +$fragmentRefs: PresentableAvatar_presentable$ref & PresentableLink_presentable$ref,
  |},
  +createdAt: any,
  +$fragmentRefs: NodeListItem_presentable$ref,
  +$refType: NodeListItem_node$ref,
|};
export type NodeListItem_node$data = NodeListItem_node;
export type NodeListItem_node$key = {
  +$data?: NodeListItem_node$data,
  +$fragmentRefs: NodeListItem_node$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "NodeListItem_node",
  "type": "Node",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "owner",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "PresentableAvatar_presentable",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "PresentableLink_presentable",
          "args": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "createdAt",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "NodeListItem_presentable",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '321c1bc4f05f8e156101fb65a40704e7';
module.exports = node;
