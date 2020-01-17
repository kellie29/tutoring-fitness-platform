/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PresentableLink_presentable$ref: FragmentReference;
declare export opaque type PresentableLink_presentable$fragmentType: PresentableLink_presentable$ref;
export type PresentableLink_presentable = {|
  +__typename: string,
  +id: string,
  +name: string,
  +$refType: PresentableLink_presentable$ref,
|};
export type PresentableLink_presentable$data = PresentableLink_presentable;
export type PresentableLink_presentable$key = {
  +$data?: PresentableLink_presentable$data,
  +$fragmentRefs: PresentableLink_presentable$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PresentableLink_presentable",
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '17372a93d708c4c834bd587760824a12';
module.exports = node;
