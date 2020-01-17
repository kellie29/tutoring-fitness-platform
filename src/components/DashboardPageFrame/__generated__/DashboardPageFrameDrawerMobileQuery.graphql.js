/**
 * @flow
 * @relayHash a314e1380f4cc692459f89f9cf6a54b0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UserAvatar_user$ref = any;
export type DashboardPageFrameDrawerMobileQueryVariables = {||};
export type DashboardPageFrameDrawerMobileQueryResponse = {|
  +currentSession: ?{|
    +user: {|
      +name: string,
      +$fragmentRefs: UserAvatar_user$ref,
    |}
  |}
|};
export type DashboardPageFrameDrawerMobileQuery = {|
  variables: DashboardPageFrameDrawerMobileQueryVariables,
  response: DashboardPageFrameDrawerMobileQueryResponse,
|};
*/


/*
query DashboardPageFrameDrawerMobileQuery {
  currentSession {
    user {
      name
      ...UserAvatar_user
      id
    }
    id
  }
}

fragment UserAvatar_user on User {
  name
  image {
    url
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DashboardPageFrameDrawerMobileQuery",
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
              (v0/*: any*/),
              {
                "kind": "FragmentSpread",
                "name": "UserAvatar_user",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DashboardPageFrameDrawerMobileQuery",
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
              (v0/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "image",
                "storageKey": null,
                "args": null,
                "concreteType": "Image",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "url",
                    "args": null,
                    "storageKey": null
                  },
                  (v1/*: any*/)
                ]
              },
              (v1/*: any*/)
            ]
          },
          (v1/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "DashboardPageFrameDrawerMobileQuery",
    "id": null,
    "text": "query DashboardPageFrameDrawerMobileQuery {\n  currentSession {\n    user {\n      name\n      ...UserAvatar_user\n      id\n    }\n    id\n  }\n}\n\nfragment UserAvatar_user on User {\n  name\n  image {\n    url\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f945ead8b880fd65e0de73c7f0fdff61';
module.exports = node;
