/**
 * @flow
 * @relayHash 324d3d6fe04d496d555c0a6a6188593c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UserAvatar_user$ref = any;
export type DashboardPageFrameDrawerQueryVariables = {||};
export type DashboardPageFrameDrawerQueryResponse = {|
  +currentSession: ?{|
    +user: {|
      +name: string,
      +$fragmentRefs: UserAvatar_user$ref,
    |}
  |},
  +tags: {|
    +edges: $ReadOnlyArray<{|
      +node: {|
        +id: string,
        +slug: string,
      |}
    |}>
  |},
|};
export type DashboardPageFrameDrawerQuery = {|
  variables: DashboardPageFrameDrawerQueryVariables,
  response: DashboardPageFrameDrawerQueryResponse,
|};
*/


/*
query DashboardPageFrameDrawerQuery {
  currentSession {
    user {
      name
      ...UserAvatar_user
      id
    }
    id
  }
  tags(filter: {parentTagId: {eq: "me"}}, first: 5) {
    edges {
      node {
        id
        slug
      }
    }
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
},
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "tags",
  "storageKey": "tags(filter:{\"parentTagId\":{\"eq\":\"me\"}},first:5)",
  "args": [
    {
      "kind": "Literal",
      "name": "filter",
      "value": {
        "parentTagId": {
          "eq": "me"
        }
      }
    },
    {
      "kind": "Literal",
      "name": "first",
      "value": 5
    }
  ],
  "concreteType": "TagConnection",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "TagEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "Tag",
          "plural": false,
          "selections": [
            (v1/*: any*/),
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "slug",
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
    "name": "DashboardPageFrameDrawerQuery",
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
      },
      (v2/*: any*/)
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DashboardPageFrameDrawerQuery",
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
      },
      (v2/*: any*/)
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "DashboardPageFrameDrawerQuery",
    "id": null,
    "text": "query DashboardPageFrameDrawerQuery {\n  currentSession {\n    user {\n      name\n      ...UserAvatar_user\n      id\n    }\n    id\n  }\n  tags(filter: {parentTagId: {eq: \"me\"}}, first: 5) {\n    edges {\n      node {\n        id\n        slug\n      }\n    }\n  }\n}\n\nfragment UserAvatar_user on User {\n  name\n  image {\n    url\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2ff6f7a3c235eb08272764bad8d107a3';
module.exports = node;
