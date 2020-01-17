/**
 * @flow
 * @relayHash 71b4c0169a15c1c3225c57d5dbb41aa7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UserGroupRemoveDialog_userGroup$ref = any;
export type RemoveUserFromUserGroupInput = {|
  id: string,
  userId: string,
|};
export type UserGroupRemoveDialogRemoveUserFromUserGroupMutationVariables = {|
  input: RemoveUserFromUserGroupInput
|};
export type UserGroupRemoveDialogRemoveUserFromUserGroupMutationResponse = {|
  +removeUserFromUserGroup: {|
    +userGroup: {|
      +$fragmentRefs: UserGroupRemoveDialog_userGroup$ref
    |}
  |}
|};
export type UserGroupRemoveDialogRemoveUserFromUserGroupMutation = {|
  variables: UserGroupRemoveDialogRemoveUserFromUserGroupMutationVariables,
  response: UserGroupRemoveDialogRemoveUserFromUserGroupMutationResponse,
|};
*/


/*
mutation UserGroupRemoveDialogRemoveUserFromUserGroupMutation(
  $input: RemoveUserFromUserGroupInput!
) {
  removeUserFromUserGroup(input: $input) {
    userGroup {
      ...UserGroupRemoveDialog_userGroup
      id
    }
  }
}

fragment UserGroupRemoveDialog_userGroup on UserGroup {
  id
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RemoveUserFromUserGroupInput!",
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
    "name": "UserGroupRemoveDialogRemoveUserFromUserGroupMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removeUserFromUserGroup",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveUserFromUserGroupPayload",
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
                "name": "UserGroupRemoveDialog_userGroup",
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
    "name": "UserGroupRemoveDialogRemoveUserFromUserGroupMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removeUserFromUserGroup",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveUserFromUserGroupPayload",
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
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "UserGroupRemoveDialogRemoveUserFromUserGroupMutation",
    "id": null,
    "text": "mutation UserGroupRemoveDialogRemoveUserFromUserGroupMutation(\n  $input: RemoveUserFromUserGroupInput!\n) {\n  removeUserFromUserGroup(input: $input) {\n    userGroup {\n      ...UserGroupRemoveDialog_userGroup\n      id\n    }\n  }\n}\n\nfragment UserGroupRemoveDialog_userGroup on UserGroup {\n  id\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '87df6a29c6eba5a7f1704dcf7be96f24';
module.exports = node;
