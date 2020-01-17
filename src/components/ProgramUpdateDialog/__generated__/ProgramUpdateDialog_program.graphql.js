/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PresentableAvatarInput_presentable$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProgramUpdateDialog_program$ref: FragmentReference;
declare export opaque type ProgramUpdateDialog_program$fragmentType: ProgramUpdateDialog_program$ref;
export type ProgramUpdateDialog_program = {|
  +id: string,
  +name: string,
  +description: string,
  +duration: string,
  +isPublic: boolean,
  +chatEnabled: boolean,
  +trackChatEnabled: boolean,
  +modules: $ReadOnlyArray<{|
    +name: string,
    +description: ?string,
    +type: string,
    +data: any,
  |}>,
  +tag: ?{|
    +id: string
  |},
  +$fragmentRefs: PresentableAvatarInput_presentable$ref,
  +$refType: ProgramUpdateDialog_program$ref,
|};
export type ProgramUpdateDialog_program$data = ProgramUpdateDialog_program;
export type ProgramUpdateDialog_program$key = {
  +$data?: ProgramUpdateDialog_program$data,
  +$fragmentRefs: ProgramUpdateDialog_program$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "ProgramUpdateDialog_program",
  "type": "Program",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    (v2/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "duration",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isPublic",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "chatEnabled",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "trackChatEnabled",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "modules",
      "storageKey": null,
      "args": null,
      "concreteType": "ProgramModule",
      "plural": true,
      "selections": [
        (v1/*: any*/),
        (v2/*: any*/),
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "type",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "data",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "tag",
      "storageKey": null,
      "args": null,
      "concreteType": "Tag",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "PresentableAvatarInput_presentable",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'be073b88081416f492e9dd37a955b8b1';
module.exports = node;
