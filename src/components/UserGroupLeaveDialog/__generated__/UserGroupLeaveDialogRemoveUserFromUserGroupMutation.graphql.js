/**
 * @flow
 * @relayHash 7162541b94ef11f2e6cb30f13eaf5631
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UserGroupLeaveDialog_userGroup$ref = any;
export type RemoveUserFromUserGroupInput = {|
  id: string,
  userId: string,
|};
export type UserGroupLeaveDialogRemoveUserFromUserGroupMutationVariables = {|
  input: RemoveUserFromUserGroupInput
|};
export type UserGroupLeaveDialogRemoveUserFromUserGroupMutationResponse = {|
  +removeUserFromUserGroup: {|
    +userGroup: {|
      +viewerIsMember: ?boolean,
      +viewerCanUpdate: ?boolean,
      +$fragmentRefs: UserGroupLeaveDialog_userGroup$ref,
    |}
  |}
|};
export type UserGroupLeaveDialogRemoveUserFromUserGroupMutation = {|
  variables: UserGroupLeaveDialogRemoveUserFromUserGroupMutationVariables,
  response: UserGroupLeaveDialogRemoveUserFromUserGroupMutationResponse,
|};
*/


/*
mutation UserGroupLeaveDialogRemoveUserFromUserGroupMutation(
  $input: RemoveUserFromUserGroupInput!
) {
  removeUserFromUserGroup(input: $input) {
    userGroup {
      ...UserGroupLeaveDialog_userGroup
      viewerIsMember
      viewerCanUpdate
      id
    }
  }
}

fragment UserGroupLeaveDialog_userGroup on UserGroup {
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
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "viewerIsMember",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "viewerCanUpdate",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UserGroupLeaveDialogRemoveUserFromUserGroupMutation",
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
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "kind": "FragmentSpread",
                "name": "UserGroupLeaveDialog_userGroup",
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
    "name": "UserGroupLeaveDialogRemoveUserFromUserGroupMutation",
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
              },
              (v2/*: any*/),
              (v3/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "UserGroupLeaveDialogRemoveUserFromUserGroupMutation",
    "id": null,
    "text": "mutation UserGroupLeaveDialogRemoveUserFromUserGroupMutation(\n  $input: RemoveUserFromUserGroupInput!\n) {\n  removeUserFromUserGroup(input: $input) {\n    userGroup {\n      ...UserGroupLeaveDialog_userGroup\n      viewerIsMember\n      viewerCanUpdate\n      id\n    }\n  }\n}\n\nfragment UserGroupLeaveDialog_userGroup on UserGroup {\n  id\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7ac5894b5e8847d6a98bff039d4a5b22';
module.exports = node;
