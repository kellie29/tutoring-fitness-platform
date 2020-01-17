/**
 * @flow
 * @relayHash a1174b9f9e69cfbae480d88cb9732b2e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UserGroupUpdateDialog_userGroup$ref = any;
export type UpdateUserGroupInput = {|
  id: string,
  name?: ?string,
  description?: ?string,
|};
export type UserGroupUpdateDialogUpdateUserGroupMutationVariables = {|
  input: UpdateUserGroupInput
|};
export type UserGroupUpdateDialogUpdateUserGroupMutationResponse = {|
  +updateUserGroup: {|
    +userGroup: {|
      +$fragmentRefs: UserGroupUpdateDialog_userGroup$ref
    |}
  |}
|};
export type UserGroupUpdateDialogUpdateUserGroupMutation = {|
  variables: UserGroupUpdateDialogUpdateUserGroupMutationVariables,
  response: UserGroupUpdateDialogUpdateUserGroupMutationResponse,
|};
*/


/*
mutation UserGroupUpdateDialogUpdateUserGroupMutation(
  $input: UpdateUserGroupInput!
) {
  updateUserGroup(input: $input) {
    userGroup {
      ...UserGroupUpdateDialog_userGroup
      id
    }
  }
}

fragment UserGroupUpdateDialog_userGroup on UserGroup {
  id
  name
  description
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateUserGroupInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UserGroupUpdateDialogUpdateUserGroupMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateUserGroup",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateUserGroupPayload",
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
                "kind": "FragmentSpread",
                "name": "UserGroupUpdateDialog_userGroup",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UserGroupUpdateDialogUpdateUserGroupMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateUserGroup",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateUserGroupPayload",
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
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "UserGroupUpdateDialogUpdateUserGroupMutation",
    "id": null,
    "text": "mutation UserGroupUpdateDialogUpdateUserGroupMutation(\n  $input: UpdateUserGroupInput!\n) {\n  updateUserGroup(input: $input) {\n    userGroup {\n      ...UserGroupUpdateDialog_userGroup\n      id\n    }\n  }\n}\n\nfragment UserGroupUpdateDialog_userGroup on UserGroup {\n  id\n  name\n  description\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8b61261e0fa925aba27be17a8537e83d';
module.exports = node;
