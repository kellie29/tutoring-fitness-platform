/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProgramModuleCard_programModule$ref: FragmentReference;
declare export opaque type ProgramModuleCard_programModule$fragmentType: ProgramModuleCard_programModule$ref;
export type ProgramModuleCard_programModule = {|
  +id: string,
  +name: string,
  +description: ?string,
  +data: any,
  +program: ?{|
    +id: string,
    +reminderGroupName: ?string,
  |},
  +programModuleGroup: ?{|
    +name: string
  |},
  +viewerCanUpdate: ?boolean,
  +$refType: ProgramModuleCard_programModule$ref,
|};
export type ProgramModuleCard_programModule$data = ProgramModuleCard_programModule;
export type ProgramModuleCard_programModule$key = {
  +$data?: ProgramModuleCard_programModule$data,
  +$fragmentRefs: ProgramModuleCard_programModule$ref,
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
  "name": "ProgramModuleCard_programModule",
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
      "name": "data",
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
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "reminderGroupName",
          "args": null,
          "storageKey": null
        }
      ]
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
        (v1/*: any*/)
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "viewerCanUpdate",
      "args": null,
      "storageKey": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'da6e0ba8c5a2cfb4229cc930997cb0a9';
module.exports = node;
