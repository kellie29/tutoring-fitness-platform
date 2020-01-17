/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PresentableAvatar_presentable$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProgramModuleDetailScreen_user$ref: FragmentReference;
declare export opaque type ProgramModuleDetailScreen_user$fragmentType: ProgramModuleDetailScreen_user$ref;
export type ProgramModuleDetailScreen_user = {|
  +$fragmentRefs: PresentableAvatar_presentable$ref,
  +$refType: ProgramModuleDetailScreen_user$ref,
|};
export type ProgramModuleDetailScreen_user$data = ProgramModuleDetailScreen_user;
export type ProgramModuleDetailScreen_user$key = {
  +$data?: ProgramModuleDetailScreen_user$data,
  +$fragmentRefs: ProgramModuleDetailScreen_user$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProgramModuleDetailScreen_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "PresentableAvatar_presentable",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'e547e88ed8dd7cffdd597fda7c2604f0';
module.exports = node;
