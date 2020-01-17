/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PresentableAvatar_presentable$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PresentableTag_presentable$ref: FragmentReference;
declare export opaque type PresentableTag_presentable$fragmentType: PresentableTag_presentable$ref;
export type PresentableTag_presentable = {|
  +__typename: string,
  +id: string,
  +name: string,
  +$fragmentRefs: PresentableAvatar_presentable$ref,
  +$refType: PresentableTag_presentable$ref,
|};
export type PresentableTag_presentable$data = PresentableTag_presentable;
export type PresentableTag_presentable$key = {
  +$data?: PresentableTag_presentable$data,
  +$fragmentRefs: PresentableTag_presentable$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PresentableTag_presentable",
  "type": "Presentable",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "__typename",
      "args": null,
      "storageKey": null
    },
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
      "kind": "FragmentSpread",
      "name": "PresentableAvatar_presentable",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '5c7fcdaa34d6e4f4511facffcd6790a9';
module.exports = node;
