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
declare export opaque type PresentableViewPageHeader_presentable$ref: FragmentReference;
declare export opaque type PresentableViewPageHeader_presentable$fragmentType: PresentableViewPageHeader_presentable$ref;
export type PresentableViewPageHeader_presentable = {|
  +name: string,
  +image: ?{|
    +url: any,
    +width: number,
    +height: number,
  |},
  +owner?: {|
    +__id: string,
    +$fragmentRefs: PresentableLink_presentable$ref,
  |},
  +$fragmentRefs: PresentableAvatar_presentable$ref,
  +$refType: PresentableViewPageHeader_presentable$ref,
|};
export type PresentableViewPageHeader_presentable$data = PresentableViewPageHeader_presentable;
export type PresentableViewPageHeader_presentable$key = {
  +$data?: PresentableViewPageHeader_presentable$data,
  +$fragmentRefs: PresentableViewPageHeader_presentable$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PresentableViewPageHeader_presentable",
  "type": "Presentable",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "width",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "height",
          "args": null,
          "storageKey": null
        }
      ]
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
        },
        {
          "kind": "ClientExtension",
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "__id",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "PresentableAvatar_presentable",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '7a79561952ad38d9846ef90b4d6e119c';
module.exports = node;
