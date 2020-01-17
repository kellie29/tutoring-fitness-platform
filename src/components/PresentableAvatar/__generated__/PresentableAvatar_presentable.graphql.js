/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PresentableAvatar_presentable$ref: FragmentReference;
declare export opaque type PresentableAvatar_presentable$fragmentType: PresentableAvatar_presentable$ref;
export type PresentableAvatar_presentable = {|
  +name: string,
  +image: ?{|
    +url: any
  |},
  +$refType: PresentableAvatar_presentable$ref,
|};
export type PresentableAvatar_presentable$data = PresentableAvatar_presentable;
export type PresentableAvatar_presentable$key = {
  +$data?: PresentableAvatar_presentable$data,
  +$fragmentRefs: PresentableAvatar_presentable$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PresentableAvatar_presentable",
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
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '7ba5880563d15589995bd80b03b9915e';
module.exports = node;
