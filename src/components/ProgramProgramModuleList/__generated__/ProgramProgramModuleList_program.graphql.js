/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type GenericModuleCard_programModule$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProgramProgramModuleList_program$ref: FragmentReference;
declare export opaque type ProgramProgramModuleList_program$fragmentType: ProgramProgramModuleList_program$ref;
export type ProgramProgramModuleList_program = {|
  +id: string,
  +viewerCanUpdate: ?boolean,
  +modules: $ReadOnlyArray<{|
    +id: string,
    +name: string,
    +description: ?string,
    +type: string,
    +data: any,
    +programModuleGroup: ?{|
      +id: string
    |},
    +$fragmentRefs: GenericModuleCard_programModule$ref,
  |}>,
  +$refType: ProgramProgramModuleList_program$ref,
|};
export type ProgramProgramModuleList_program$data = ProgramProgramModuleList_program;
export type ProgramProgramModuleList_program$key = {
  +$data?: ProgramProgramModuleList_program$data,
  +$fragmentRefs: ProgramProgramModuleList_program$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "ProgramProgramModuleList_program",
  "type": "Program",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "viewerCanUpdate",
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
        (v0/*: any*/),
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        },
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
          "kind": "FragmentSpread",
          "name": "GenericModuleCard_programModule",
          "args": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b772fd7c18e1f824b3f05e98c6d93b32';
module.exports = node;
