/**
 * @flow
 * @relayHash c9908fc29a62f7949e2845bb0d03f8d0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateSessionInput = {|
  email: string,
  password: string,
|};
export type useCreateSessionMutationCreateSessionMutationVariables = {|
  input: CreateSessionInput
|};
export type useCreateSessionMutationCreateSessionMutationResponse = {|
  +createSession: {|
    +token: string,
    +session: {|
      +id: string
    |},
  |}
|};
export type useCreateSessionMutationCreateSessionMutation = {|
  variables: useCreateSessionMutationCreateSessionMutationVariables,
  response: useCreateSessionMutationCreateSessionMutationResponse,
|};
*/


/*
mutation useCreateSessionMutationCreateSessionMutation(
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
    "name": "useCreateSessionMutationCreateSessionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "useCreateSessionMutationCreateSessionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "useCreateSessionMutationCreateSessionMutation",
    "id": null,
    "text": "mutation useCreateSessionMutationCreateSessionMutation(\n  $input: CreateSessionInput!\n) {\n  createSession(input: $input) {\n    token\n    session {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2f28720d1597b1ead3374deded2d0491';
module.exports = node;
