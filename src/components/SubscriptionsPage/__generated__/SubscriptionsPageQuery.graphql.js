/**
 * @flow
 * @relayHash b308d774c57ef88a1d0762c4bacca273
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SubscriptionsPageQueryVariables = {||};
export type SubscriptionsPageQueryResponse = {|
  +currentSession: ?{|
    +user: {|
      +subscription: {|
        +id: string,
        +slug: string,
      |}
    |}
  |}
|};
export type SubscriptionsPageQuery = {|
  variables: SubscriptionsPageQueryVariables,
  response: SubscriptionsPageQueryResponse,
|};
*/


/*
query SubscriptionsPageQuery {
  currentSession {
    user {
      subscription {
        id
        slug
      }
      id
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "subscription",
  "storageKey": null,
  "args": null,
  "concreteType": "Subscription",
  "plural": false,
  "selections": [
    (v0/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "slug",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SubscriptionsPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "currentSession",
        "storageKey": null,
        "args": null,
        "concreteType": "Session",
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
              (v1/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SubscriptionsPageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "currentSession",
        "storageKey": null,
        "args": null,
        "concreteType": "Session",
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
              (v1/*: any*/),
              (v0/*: any*/)
            ]
          },
          (v0/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "SubscriptionsPageQuery",
    "id": null,
    "text": "query SubscriptionsPageQuery {\n  currentSession {\n    user {\n      subscription {\n        id\n        slug\n      }\n      id\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '745f4b04b4944b2ff3509ca89b2645d2';
module.exports = node;
