/**
 * @flow
 * @relayHash 8428b9da9f5b834d3ba80105a00fed85
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type useCurrentUserSubscriptionQueryVariables = {||};
export type useCurrentUserSubscriptionQueryResponse = {|
  +currentSession: ?{|
    +user: {|
      +subscription: {|
        +id: string,
        +slug: string,
        +name: string,
      |}
    |}
  |}
|};
export type useCurrentUserSubscriptionQuery = {|
  variables: useCurrentUserSubscriptionQueryVariables,
  response: useCurrentUserSubscriptionQueryResponse,
|};
*/


/*
query useCurrentUserSubscriptionQuery {
  currentSession {
    user {
      subscription {
        id
        slug
        name
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "useCurrentUserSubscriptionQuery",
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
    "name": "useCurrentUserSubscriptionQuery",
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
    "name": "useCurrentUserSubscriptionQuery",
    "id": null,
    "text": "query useCurrentUserSubscriptionQuery {\n  currentSession {\n    user {\n      subscription {\n        id\n        slug\n        name\n      }\n      id\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7aac33b84f47a75688804f1d003db91a';
module.exports = node;
