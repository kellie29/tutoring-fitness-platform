/**
 * @flow
 * @relayHash 80a7088229dd95dcd2760da903e3e22f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CloneProgramModuleInput = {|
  id: string,
  programId?: ?string,
  name?: ?string,
|};
export type ProgramModuleDuplicateDialogCloneProgramModuleMutationVariables = {|
  input: CloneProgramModuleInput
|};
export type ProgramModuleDuplicateDialogCloneProgramModuleMutationResponse = {|
  +cloneProgramModule: {|
    +programModule: {|
      +id: string
    |}
  |}
|};
export type ProgramModuleDuplicateDialogCloneProgramModuleMutation = {|
  variables: ProgramModuleDuplicateDialogCloneProgramModuleMutationVariables,
  response: ProgramModuleDuplicateDialogCloneProgramModuleMutationResponse,
|};
*/


/*
mutation ProgramModuleDuplicateDialogCloneProgramModuleMutation(
  $input: CloneProgramModuleInput!
) {
  cloneProgramModule(input: $input) {
    programModule {
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CloneProgramModuleInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "cloneProgramModule",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CloneProgramModulePayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "programModule",
        "storageKey": null,
        "args": null,
        "concreteType": "ProgramModule",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProgramModuleDuplicateDialogCloneProgramModuleMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramModuleDuplicateDialogCloneProgramModuleMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ProgramModuleDuplicateDialogCloneProgramModuleMutation",
    "id": null,
    "text": "mutation ProgramModuleDuplicateDialogCloneProgramModuleMutation(\n  $input: CloneProgramModuleInput!\n) {\n  cloneProgramModule(input: $input) {\n    programModule {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6a1c7f3bb705f574f4d2dbb3c58f46b4';
module.exports = node;
