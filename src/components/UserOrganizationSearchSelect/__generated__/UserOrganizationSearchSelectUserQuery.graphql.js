/**
 * @flow
 * @relayHash b71f72bb39e4e5a9a7042feb58ea12a4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserOrganizationSearchSelectUserQueryVariables = {|
  userId: string,
  search?: ?string,
|};
export type UserOrganizationSearchSelectUserQueryResponse = {|
  +user: ?{|
    +organizations: {|
      +edges: $ReadOnlyArray<{|
        +node: {|
          +id: string,
          +name: string,
        |}
      |}>
    |}
  |}
|};
export type UserOrganizationSearchSelectUserQuery = {|
  variables: UserOrganizationSearchSelectUserQueryVariables,
  response: UserOrganizationSearchSelectUserQueryResponse,
|};
*/


/*
query UserOrganizationSearchSelectUserQuery(
  $userId: ID!
  $search: String
) {
  user(id: $userId) {
    organizations(search: $search, first: 20) {
      edges {
        node {
          id
          name
        }
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "userId",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "search",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "userId"
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
  "name": "organizations",
  "storageKey": null,
  "args": [
    {
      "kind": "Literal",
      "name": "first",
      "value": 20
    },
    {
      "kind": "Variable",
      "name": "search",
      "variableName": "search"
    }
  ],
  "concreteType": "UserGroupConnection",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "UserGroupEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "UserGroup",
          "plural": false,
          "selections": [
            (v2/*: any*/),
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
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UserOrganizationSearchSelectUserQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v3/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UserOrganizationSearchSelectUserQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
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
    "name": "UserOrganizationSearchSelectUserQuery",
    "id": null,
    "text": "query UserOrganizationSearchSelectUserQuery(\n  $userId: ID!\n  $search: String\n) {\n  user(id: $userId) {\n    organizations(search: $search, first: 20) {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '52dd7c64ec044a1c61e7dc01f1b104c7';
module.exports = node;
