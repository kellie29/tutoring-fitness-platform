/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PresentableAvatar_presentable$ref = any;
type PresentableCardMedia_presentable$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type NodeListItem_presentable$ref: FragmentReference;
declare export opaque type NodeListItem_presentable$fragmentType: NodeListItem_presentable$ref;
export type NodeListItem_presentable = {|
  +presentableTypeName: string,
  +name: string,
  +image: ?{|
    +url: any
  |},
  +description: ?string,
  +$fragmentRefs: PresentableAvatar_presentable$ref & PresentableCardMedia_presentable$ref,
  +$refType: NodeListItem_presentable$ref,
|};
export type NodeListItem_presentable$data = NodeListItem_presentable;
export type NodeListItem_presentable$key = {
  +$data?: NodeListItem_presentable$data,
  +$fragmentRefs: NodeListItem_presentable$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "NodeListItem_presentable",
  "type": "Presentable",
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
      "kind": "LinkedField",
      "alias": null,
      "name": "image",
      "storageKey": null,
      "args": null,
      "concreteType": "Image",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "url",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
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
      "name": "PresentableCardMedia_presentable",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '09633d55714e34113eb579d026671300';
module.exports = node;
