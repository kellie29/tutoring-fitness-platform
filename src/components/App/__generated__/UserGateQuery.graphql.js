/**
 * @flow
 * @relayHash cb3aa21b2ef258220b283c7306501168
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserGateQueryVariables = {|
  token?: ?string
|};
export type UserGateQueryResponse = {|
  +session: ?{|
    +id: string
  |},
  +currentSession: ?{|
    +id: string
  |},
|};
export type UserGateQuery = {|
  variables: UserGateQueryVariables,
  response: UserGateQueryResponse,
|};
*/


/*
query UserGateQuery(
  $token: String
) {
  session(token: $token) {
    id
  }
  currentSession {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "token",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  }
],
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "session",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "token",
        "variableName": "token"
      }
    ],
    "concreteType": "Session",
    "plural": false,
    "selections": (v1/*: any*/)
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "currentSession",
    "storageKey": null,
    "args": null,
    "concreteType": "Session",
    "plural": false,
    "selections": (v1/*: any*/)
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UserGateQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UserGateQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "UserGateQuery",
    "id": null,
    "text": "query UserGateQuery(\n  $token: String\n) {\n  session(token: $token) {\n    id\n  }\n  currentSession {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '91bf890856145b649360c0054f88e185';
module.exports = node;
