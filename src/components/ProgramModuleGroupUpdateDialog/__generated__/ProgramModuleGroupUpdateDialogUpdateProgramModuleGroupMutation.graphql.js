/**
 * @flow
 * @relayHash 2d72a7b9f4d697ff5b519ee0d8942c34
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateProgramModuleGroupInput = {|
  id: string,
  name: string,
|};
export type ProgramModuleGroupUpdateDialogUpdateProgramModuleGroupMutationVariables = {|
  input: UpdateProgramModuleGroupInput
|};
export type ProgramModuleGroupUpdateDialogUpdateProgramModuleGroupMutationResponse = {|
  +updateProgramModuleGroup: {|
    +programModuleGroup: {|
      +id: string,
      +name: string,
    |}
  |}
|};
export type ProgramModuleGroupUpdateDialogUpdateProgramModuleGroupMutation = {|
  variables: ProgramModuleGroupUpdateDialogUpdateProgramModuleGroupMutationVariables,
  response: ProgramModuleGroupUpdateDialogUpdateProgramModuleGroupMutationResponse,
|};
*/


/*
mutation ProgramModuleGroupUpdateDialogUpdateProgramModuleGroupMutation(
  $input: UpdateProgramModuleGroupInput!
) {
  updateProgramModuleGroup(input: $input) {
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
    "type": "UpdateProgramModuleGroupInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateProgramModuleGroup",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateProgramModuleGroupPayload",
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
    "name": "ProgramModuleGroupUpdateDialogUpdateProgramModuleGroupMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramModuleGroupUpdateDialogUpdateProgramModuleGroupMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ProgramModuleGroupUpdateDialogUpdateProgramModuleGroupMutation",
    "id": null,
    "text": "mutation ProgramModuleGroupUpdateDialogUpdateProgramModuleGroupMutation(\n  $input: UpdateProgramModuleGroupInput!\n) {\n  updateProgramModuleGroup(input: $input) {\n    programModuleGroup {\n      id\n      name\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e3c3ac13785a2974eea05f2d1418a3ab';
module.exports = node;
