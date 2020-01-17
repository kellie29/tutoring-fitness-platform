/**
 * @flow
 * @relayHash 60d186d454c68c39ccbb14ab9d9f22ea
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UserGroupInviteDialog_userGroup$ref = any;
export type InviteUserToUserGroupInput = {|
  id: string,
  userId: string,
|};
export type UserGroupInviteDialogInviteUserToUserGroupMutationVariables = {|
  input: InviteUserToUserGroupInput
|};
export type UserGroupInviteDialogInviteUserToUserGroupMutationResponse = {|
  +inviteUserToUserGroup: {|
    +userGroup: {|
      +$fragmentRefs: UserGroupInviteDialog_userGroup$ref
    |}
  |}
|};
export type UserGroupInviteDialogInviteUserToUserGroupMutation = {|
  variables: UserGroupInviteDialogInviteUserToUserGroupMutationVariables,
  response: UserGroupInviteDialogInviteUserToUserGroupMutationResponse,
|};
*/


/*
mutation UserGroupInviteDialogInviteUserToUserGroupMutation(
  $input: InviteUserToUserGroupInput!
) {
  inviteUserToUserGroup(input: $input) {
    userGroup {
      ...UserGroupInviteDialog_userGroup
      id
    }
  }
}

fragment UserGroupInviteDialog_userGroup on UserGroup {
  id
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "InviteUserToUserGroupInput!",
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
    "name": "UserGroupInviteDialogInviteUserToUserGroupMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "inviteUserToUserGroup",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "InviteUserToUserGroupPayload",
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
                "name": "UserGroupInviteDialog_userGroup",
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
    "name": "UserGroupInviteDialogInviteUserToUserGroupMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "inviteUserToUserGroup",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "InviteUserToUserGroupPayload",
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
    "name": "UserGroupInviteDialogInviteUserToUserGroupMutation",
    "id": null,
    "text": "mutation UserGroupInviteDialogInviteUserToUserGroupMutation(\n  $input: InviteUserToUserGroupInput!\n) {\n  inviteUserToUserGroup(input: $input) {\n    userGroup {\n      ...UserGroupInviteDialog_userGroup\n      id\n    }\n  }\n}\n\nfragment UserGroupInviteDialog_userGroup on UserGroup {\n  id\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e85dca906ac7bfb9a051c4fb34fb465d';
module.exports = node;
