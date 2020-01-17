/**
 * @flow
 * @relayHash 9f3a91ef874503c06c865230b3445e95
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateSessionInput = {|
  email: string,
  password: string,
|};
export type LoginPageCreateSessionMutationVariables = {|
  input: CreateSessionInput
|};
export type LoginPageCreateSessionMutationResponse = {|
  +createSession: {|
    +token: string,
    +session: {|
      +id: string
    |},
  |}
|};
export type LoginPageCreateSessionMutation = {|
  variables: LoginPageCreateSessionMutationVariables,
  response: LoginPageCreateSessionMutationResponse,
|};
*/


/*
mutation LoginPageCreateSessionMutation(
  $input: CreateSessionInput!
) {
  createSession(input: $input) {
    token
    session {
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
    "type": "CreateSessionInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createSession",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateSessionPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "session",
        "storageKey": null,
        "args": null,
        "concreteType": "Session",
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
    "name": "LoginPageCreateSessionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "LoginPageCreateSessionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "LoginPageCreateSessionMutation",
    "id": null,
    "text": "mutation LoginPageCreateSessionMutation(\n  $input: CreateSessionInput!\n) {\n  createSession(input: $input) {\n    token\n    session {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e0c647680f88224e9389d16ae5fe9a6a';
module.exports = node;
