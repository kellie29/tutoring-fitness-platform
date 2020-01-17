/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PresentableAvatar_presentable$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PresentableCardMedia_presentable$ref: FragmentReference;
declare export opaque type PresentableCardMedia_presentable$fragmentType: PresentableCardMedia_presentable$ref;
export type PresentableCardMedia_presentable = {|
  +name: string,
  +image: ?{|
    +url: any
  |},
  +$fragmentRefs: PresentableAvatar_presentable$ref,
  +$refType: PresentableCardMedia_presentable$ref,
|};
export type PresentableCardMedia_presentable$data = PresentableCardMedia_presentable;
export type PresentableCardMedia_presentable$key = {
  +$data?: PresentableCardMedia_presentable$data,
  +$fragmentRefs: PresentableCardMedia_presentable$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PresentableCardMedia_presentable",
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
    },
    {
      "kind": "FragmentSpread",
      "name": "PresentableAvatar_presentable",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '371386f3e147d26bcf124879eaf06ed1';
module.exports = node;
