/**
 * @flow
 * @relayHash e541460382ae1d9bf20cd0508d6dbff2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserFilterInput = {|
  search?: ?string
|};
export type UserSearchSelectUsersQueryVariables = {|
  filter?: ?UserFilterInput
|};
export type UserSearchSelectUsersQueryResponse = {|
  +users: {|
    +edges: $ReadOnlyArray<{|
      +node: {|
        +id: string,
        +name: string,
      |}
    |}>
  |}
|};
export type UserSearchSelectUsersQuery = {|
  variables: UserSearchSelectUsersQueryVariables,
  response: UserSearchSelectUsersQueryResponse,
|};
*/


/*
query UserSearchSelectUsersQuery(
  $filter: UserFilterInput
) {
  users(filter: $filter, first: 20) {
    edges {
      node {
        id
        name
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "filter",
    "type": "UserFilterInput",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "users",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "filter",
        "variableName": "filter"
      },
      {
        "kind": "Literal",
        "name": "first",
        "value": 20
      }
    ],
    "concreteType": "UserConnection",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "UserEdge",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
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
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UserSearchSelectUsersQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UserSearchSelectUsersQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "UserSearchSelectUsersQuery",
    "id": null,
    "text": "query UserSearchSelectUsersQuery(\n  $filter: UserFilterInput\n) {\n  users(filter: $filter, first: 20) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6f200a03c242b805ed0cf3b24289976b';
module.exports = node;
