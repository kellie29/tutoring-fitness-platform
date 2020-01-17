/**
 * @flow
 * @relayHash 09d86f9e4374e566b61a2a661b8f6273
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
export type ProgramAddProgramModuleDialogPickTabCloneProgramModuleMutationVariables = {|
  input: CloneProgramModuleInput
|};
export type ProgramAddProgramModuleDialogPickTabCloneProgramModuleMutationResponse = {|
  +cloneProgramModule: {|
    +programModule: {|
      +id: string
    |}
  |}
|};
export type ProgramAddProgramModuleDialogPickTabCloneProgramModuleMutation = {|
  variables: ProgramAddProgramModuleDialogPickTabCloneProgramModuleMutationVariables,
  response: ProgramAddProgramModuleDialogPickTabCloneProgramModuleMutationResponse,
|};
*/


/*
mutation ProgramAddProgramModuleDialogPickTabCloneProgramModuleMutation(
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
    "name": "ProgramAddProgramModuleDialogPickTabCloneProgramModuleMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramAddProgramModuleDialogPickTabCloneProgramModuleMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ProgramAddProgramModuleDialogPickTabCloneProgramModuleMutation",
    "id": null,
    "text": "mutation ProgramAddProgramModuleDialogPickTabCloneProgramModuleMutation(\n  $input: CloneProgramModuleInput!\n) {\n  cloneProgramModule(input: $input) {\n    programModule {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ba07f6771dcd1e9921b20c53a21d512f';
module.exports = node;
