/**
 * @flow
 * @relayHash 832000239c2b008cb0c3672ef5481e9d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateProgramModuleGroupInput = {|
  name: string,
  programId: string,
|};
export type ProgramModuleGroupCreateDialogCreateProgramModuleGroupMutationVariables = {|
  input: CreateProgramModuleGroupInput
|};
export type ProgramModuleGroupCreateDialogCreateProgramModuleGroupMutationResponse = {|
  +createProgramModuleGroup: {|
    +programModuleGroup: {|
      +id: string,
      +name: string,
    |}
  |}
|};
export type ProgramModuleGroupCreateDialogCreateProgramModuleGroupMutation = {|
  variables: ProgramModuleGroupCreateDialogCreateProgramModuleGroupMutationVariables,
  response: ProgramModuleGroupCreateDialogCreateProgramModuleGroupMutationResponse,
|};
*/


/*
mutation ProgramModuleGroupCreateDialogCreateProgramModuleGroupMutation(
  $input: CreateProgramModuleGroupInput!
) {
  createProgramModuleGroup(input: $input) {
    programModuleGroup {
      id
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateProgramModuleGroupInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createProgramModuleGroup",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateProgramModuleGroupPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "programModuleGroup",
        "storageKey": null,
        "args": null,
        "concreteType": "ProgramModuleGroup",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
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
    "name": "ProgramModuleGroupCreateDialogCreateProgramModuleGroupMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramModuleGroupCreateDialogCreateProgramModuleGroupMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ProgramModuleGroupCreateDialogCreateProgramModuleGroupMutation",
    "id": null,
    "text": "mutation ProgramModuleGroupCreateDialogCreateProgramModuleGroupMutation(\n  $input: CreateProgramModuleGroupInput!\n) {\n  createProgramModuleGroup(input: $input) {\n    programModuleGroup {\n      id\n      name\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '87c1242c56249bb3b7d8197afec15a31';
module.exports = node;
