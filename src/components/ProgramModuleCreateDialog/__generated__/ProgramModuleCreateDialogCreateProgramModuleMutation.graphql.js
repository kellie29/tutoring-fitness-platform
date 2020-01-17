/**
 * @flow
 * @relayHash 17d3055c729e08296b022e938044cfbb
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
export type ProgramModuleCreateDialogCreateProgramModuleMutationVariables = {|
  input: CreateProgramModuleInput
|};
export type ProgramModuleCreateDialogCreateProgramModuleMutationResponse = {|
  +createProgramModule: {|
    +programModule: {|
      +id: string
    |}
  |}
|};
export type ProgramModuleCreateDialogCreateProgramModuleMutation = {|
  variables: ProgramModuleCreateDialogCreateProgramModuleMutationVariables,
  response: ProgramModuleCreateDialogCreateProgramModuleMutationResponse,
|};
*/


/*
mutation ProgramModuleCreateDialogCreateProgramModuleMutation(
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
    "name": "ProgramModuleCreateDialogCreateProgramModuleMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramModuleCreateDialogCreateProgramModuleMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ProgramModuleCreateDialogCreateProgramModuleMutation",
    "id": null,
    "text": "mutation ProgramModuleCreateDialogCreateProgramModuleMutation(\n  $input: CreateProgramModuleInput!\n) {\n  createProgramModule(input: $input) {\n    programModule {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3f11874e881a67ed4f43e9755bafd281';
module.exports = node;
