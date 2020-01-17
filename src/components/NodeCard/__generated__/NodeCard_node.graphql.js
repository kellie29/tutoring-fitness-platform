/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PresentableAvatar_presentable$ref = any;
type PresentableLink_presentable$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type NodeCard_node$ref: FragmentReference;
declare export opaque type NodeCard_node$fragmentType: NodeCard_node$ref;
export type NodeCard_node = {|
  +presentableTypeName?: string,
  +name?: string,
  +description?: ?string,
  +owner?: {|
    +$fragmentRefs: PresentableLink_presentable$ref
  |},
  +createdAt: any,
  +$fragmentRefs: PresentableAvatar_presentable$ref,
  +$refType: NodeCard_node$ref,
|};
export type NodeCard_node$data = NodeCard_node;
export type NodeCard_node$key = {
  +$data?: NodeCard_node$data,
  +$fragmentRefs: NodeCard_node$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "NodeCard_node",
  "type": "Node",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": "presentableTypeName",
      "name": "__typename",
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
    },
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
      "name": "PresentableAvatar_presentable",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b4bd45aac8935c3eb270b4f48db81c27';
module.exports = node;
