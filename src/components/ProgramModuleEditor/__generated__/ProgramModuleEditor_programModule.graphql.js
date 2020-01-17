/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PresentableAvatarInput_presentable$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProgramModuleEditor_programModule$ref: FragmentReference;
declare export opaque type ProgramModuleEditor_programModule$fragmentType: ProgramModuleEditor_programModule$ref;
export type ProgramModuleEditor_programModule = {|
  +id: string,
  +name: string,
  +description: ?string,
  +type: string,
  +data: any,
  +programModuleGroup: ?{|
    +id: string
  |},
  +program: ?{|
    +reminderGroupName: ?string,
    +moduleGroups: ?$ReadOnlyArray<{|
      +id: string,
      +name: string,
    |}>,
  |},
  +$fragmentRefs: PresentableAvatarInput_presentable$ref,
  +$refType: ProgramModuleEditor_programModule$ref,
|};
export type ProgramModuleEditor_programModule$data = ProgramModuleEditor_programModule;
export type ProgramModuleEditor_programModule$key = {
  +$data?: ProgramModuleEditor_programModule$data,
  +$fragmentRefs: ProgramModuleEditor_programModule$ref,
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
};
return {
  "kind": "Fragment",
  "name": "ProgramModuleEditor_programModule",
  "type": "ProgramModule",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
      "args": null,
      "storageKey": null
    },
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
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "programModuleGroup",
      "storageKey": null,
      "args": null,
      "concreteType": "ProgramModuleGroup",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "program",
      "storageKey": null,
      "args": null,
      "concreteType": "Program",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "reminderGroupName",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "moduleGroups",
          "storageKey": null,
          "args": null,
          "concreteType": "ProgramModuleGroup",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/)
          ]
        }
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
(node/*: any*/).hash = '59c67311083f75f6c4e0df594599a22f';
module.exports = node;
