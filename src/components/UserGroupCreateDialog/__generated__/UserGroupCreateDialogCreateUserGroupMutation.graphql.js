/**
 * @flow
 * @relayHash d512fe17f3cd93dd81a13fb948cd24e1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateUserGroupInput = {|
  name: string,
  description: string,
|};
export type UserGroupCreateDialogCreateUserGroupMutationVariables = {|
  input: CreateUserGroupInput
|};
export type UserGroupCreateDialogCreateUserGroupMutationResponse = {|
  +createUserGroup: {|
    +userGroup: {|
      +id: string,
      +name: string,
      +description: string,
    |}
  |}
|};
export type UserGroupCreateDialogCreateUserGroupMutation = {|
  variables: UserGroupCreateDialogCreateUserGroupMutationVariables,
  response: UserGroupCreateDialogCreateUserGroupMutationResponse,
|};
*/


/*
mutation UserGroupCreateDialogCreateUserGroupMutation(
  $input: CreateUserGroupInput!
) {
  createUserGroup(input: $input) {
    userGroup {
      id
      name
      description
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateUserGroupInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createUserGroup",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateUserGroupPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "userGroup",
        "storageKey": null,
        "args": null,
        "concreteType": "UserGroup",
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
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
    "name": "UserGroupCreateDialogCreateUserGroupMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UserGroupCreateDialogCreateUserGroupMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UserGroupCreateDialogCreateUserGroupMutation",
    "id": null,
    "text": "mutation UserGroupCreateDialogCreateUserGroupMutation(\n  $input: CreateUserGroupInput!\n) {\n  createUserGroup(input: $input) {\n    userGroup {\n      id\n      name\n      description\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5c8b9da7b69e31b0e64570af0aca1ac3';
module.exports = node;
