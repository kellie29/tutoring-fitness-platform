/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PresentableAvatar_presentable$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PresentableAvatarInput_presentable$ref: FragmentReference;
declare export opaque type PresentableAvatarInput_presentable$fragmentType: PresentableAvatarInput_presentable$ref;
export type PresentableAvatarInput_presentable = {|
  +id: string,
  +$fragmentRefs: PresentableAvatar_presentable$ref,
  +$refType: PresentableAvatarInput_presentable$ref,
|};
export type PresentableAvatarInput_presentable$data = PresentableAvatarInput_presentable;
export type PresentableAvatarInput_presentable$key = {
  +$data?: PresentableAvatarInput_presentable$data,
  +$fragmentRefs: PresentableAvatarInput_presentable$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PresentableAvatarInput_presentable",
  "type": "Presentable",
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
      "name": "PresentableAvatar_presentable",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '4c2e876782f9db78975e58dec3262ecd';
module.exports = node;
