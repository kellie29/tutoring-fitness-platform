/**
 * @flow
 * @relayHash 41b5628ce75396a9b1592a8303b029be
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type useIsAuthenticatedQueryVariables = {|
  sessionToken?: ?string
|};
export type useIsAuthenticatedQueryResponse = {|
  +session: ?{|
    +user: {|
      +id: string
    |}
  |}
|};
export type useIsAuthenticatedQuery = {|
  variables: useIsAuthenticatedQueryVariables,
  response: useIsAuthenticatedQueryResponse,
|};
*/


/*
query useIsAuthenticatedQuery(
  $sessionToken: String
) {
  session(token: $sessionToken) {
    user {
      id
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "sessionToken",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "token",
    "variableName": "sessionToken"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    (v2/*: any*/)
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "useIsAuthenticatedQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "session",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Session",
        "plural": false,
        "selections": [
          (v3/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "useIsAuthenticatedQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "session",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Session",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "useIsAuthenticatedQuery",
    "id": null,
    "text": "query useIsAuthenticatedQuery(\n  $sessionToken: String\n) {\n  session(token: $sessionToken) {\n    user {\n      id\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a7ba4ef3644ba010df7a1a49156d460a';
module.exports = node;
