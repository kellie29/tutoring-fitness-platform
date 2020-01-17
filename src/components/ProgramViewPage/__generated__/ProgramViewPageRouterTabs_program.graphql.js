/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProgramViewPageRouterTabs_program$ref: FragmentReference;
declare export opaque type ProgramViewPageRouterTabs_program$fragmentType: ProgramViewPageRouterTabs_program$ref;
export type ProgramViewPageRouterTabs_program = {|
  +id: string,
  +viewerCanUpdate: ?boolean,
  +reminderGroupName: ?string,
  +owner: {|
    +__id: string
  |},
  +moduleGroups: ?$ReadOnlyArray<{|
    +id: string,
    +name: string,
    +program: {|
      +id: string,
      +viewerCanUpdate: ?boolean,
    |},
  |}>,
  +$refType: ProgramViewPageRouterTabs_program$ref,
|};
export type ProgramViewPageRouterTabs_program$data = ProgramViewPageRouterTabs_program;
export type ProgramViewPageRouterTabs_program$key = {
  +$data?: ProgramViewPageRouterTabs_program$data,
  +$fragmentRefs: ProgramViewPageRouterTabs_program$ref,
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
  "name": "viewerCanUpdate",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "ProgramViewPageRouterTabs_program",
  "type": "Program",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
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
      "name": "owner",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": [
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
      "kind": "LinkedField",
      "alias": null,
      "name": "moduleGroups",
      "storageKey": null,
      "args": null,
      "concreteType": "ProgramModuleGroup",
      "plural": true,
      "selections": [
        (v0/*: any*/),
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
          "name": "program",
          "storageKey": null,
          "args": null,
          "concreteType": "Program",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/)
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e2b22a0b222b0ba4b7c940ebeaa2bcf2';
module.exports = node;
