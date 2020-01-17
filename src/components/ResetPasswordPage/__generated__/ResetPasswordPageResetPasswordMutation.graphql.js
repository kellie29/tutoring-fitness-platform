/**
 * @flow
 * @relayHash 6a5c3a4f6d21d071f578eb33b4e78323
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ResetPasswordInput = {|
  email: string,
  verificationCode: string,
  password: string,
|};
export type ResetPasswordPageResetPasswordMutationVariables = {|
  input: ResetPasswordInput
|};
export type ResetPasswordPageResetPasswordMutationResponse = {|
  +resetPassword: {|
    +user: {|
      +id: string
    |}
  |}
|};
export type ResetPasswordPageResetPasswordMutation = {|
  variables: ResetPasswordPageResetPasswordMutationVariables,
  response: ResetPasswordPageResetPasswordMutationResponse,
|};
*/


/*
mutation ResetPasswordPageResetPasswordMutation(
  $input: ResetPasswordInput!
) {
  resetPassword(input: $input) {
    user {
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
    "type": "ResetPasswordInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "resetPassword",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "ResetPasswordPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
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
    "name": "ResetPasswordPageResetPasswordMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ResetPasswordPageResetPasswordMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ResetPasswordPageResetPasswordMutation",
    "id": null,
    "text": "mutation ResetPasswordPageResetPasswordMutation(\n  $input: ResetPasswordInput!\n) {\n  resetPassword(input: $input) {\n    user {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cc0367eec8a305b0cf23dca145a09cf1';
module.exports = node;
