/**
 * @flow
 * @relayHash 7c2c30d4ac51dc38ba8c2104133e9004
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateProgramModuleInput = {|
  name: string,
  type: string,
  description?: ?string,
  data: any,
  programId?: ?string,
  tagId?: ?string,
  programModuleGroupId?: ?string,
  image?: ?any,
|};
export type ProgramAddProgramModuleDialogCreateTabCreateProgramModuleMutationVariables = {|
  input: CreateProgramModuleInput
|};
export type ProgramAddProgramModuleDialogCreateTabCreateProgramModuleMutationResponse = {|
  +createProgramModule: {|
    +programModule: {|
      +id: string
    |}
  |}
|};
export type ProgramAddProgramModuleDialogCreateTabCreateProgramModuleMutation = {|
  variables: ProgramAddProgramModuleDialogCreateTabCreateProgramModuleMutationVariables,
  response: ProgramAddProgramModuleDialogCreateTabCreateProgramModuleMutationResponse,
|};
*/


/*
mutation ProgramAddProgramModuleDialogCreateTabCreateProgramModuleMutation(
  $input: CreateProgramModuleInput!
) {
  createProgramModule(input: $input) {
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
    "type": "CreateProgramModuleInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createProgramModule",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateProgramModulePayload",
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
    "name": "ProgramAddProgramModuleDialogCreateTabCreateProgramModuleMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramAddProgramModuleDialogCreateTabCreateProgramModuleMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ProgramAddProgramModuleDialogCreateTabCreateProgramModuleMutation",
    "id": null,
    "text": "mutation ProgramAddProgramModuleDialogCreateTabCreateProgramModuleMutation(\n  $input: CreateProgramModuleInput!\n) {\n  createProgramModule(input: $input) {\n    programModule {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '903b90db09654a18a15297e56bfb9510';
module.exports = node;
