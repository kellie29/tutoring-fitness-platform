/**
 * @flow
 * @relayHash 3841a6c06826560312465f369f3a7e0f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserSearchSelectQueryVariables = {|
  id?: ?string
|};
export type UserSearchSelectQueryResponse = {|
  +user: ?{|
    +id: string,
    +name: string,
  |}
|};
export type UserSearchSelectQuery = {|
  variables: UserSearchSelectQueryVariables,
  response: UserSearchSelectQueryResponse,
|};
*/


/*
query UserSearchSelectQuery(
  $id: ID
) {
  user(id: $id) {
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "user",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "User",
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UserSearchSelectQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UserSearchSelectQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "UserSearchSelectQuery",
    "id": null,
    "text": "query UserSearchSelectQuery(\n  $id: ID\n) {\n  user(id: $id) {\n    id\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e6353d2d93e545feee6c5479bb9bf73d';
module.exports = node;
