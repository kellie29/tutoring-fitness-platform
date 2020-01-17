/**
 * @flow
 * @relayHash 92a71c1955c0bb5ba9efd2deb2f8e285
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TutorialStepTrackerQueryVariables = {||};
export type TutorialStepTrackerQueryResponse = {|
  +currentSession: ?{|
    +user: {|
      +id: string,
      +name: string,
      +image: ?{|
        +id: string
      |},
    |}
  |},
  +clientProfiles: {|
    +edgeCount: number,
    +edges: $ReadOnlyArray<{|
      +node: {|
        +id: string
      |}
    |}>,
  |},
|};
export type TutorialStepTrackerQuery = {|
  variables: TutorialStepTrackerQueryVariables,
  response: TutorialStepTrackerQueryResponse,
|};
*/


/*
query TutorialStepTrackerQuery {
  currentSession {
    user {
      id
      name
      image {
        id
      }
    }
    id
  }
  clientProfiles(filter: {ownerId: "me"}, first: 0) {
    edgeCount
    edges {
      node {
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
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
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    (v0/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "image",
      "storageKey": null,
      "args": null,
      "concreteType": "Image",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ]
    }
  ]
},
v2 = {
  "kind": "Literal",
  "name": "filter",
  "value": {
    "ownerId": "me"
  }
},
v3 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "edgeCount",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "ClientProfileEdge",
    "plural": true,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "ClientProfile",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "cursor",
        "args": null,
        "storageKey": null
      }
    ]
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "pageInfo",
    "storageKey": null,
    "args": null,
    "concreteType": "PageInfo",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "endCursor",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "hasNextPage",
        "args": null,
        "storageKey": null
      }
    ]
  }
],
v4 = [
  (v2/*: any*/),
  {
    "kind": "Literal",
    "name": "first",
    "value": 0
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TutorialStepTrackerQuery",
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
          (v1/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": "clientProfiles",
        "name": "__TutorialStepTracker_clientProfiles_connection",
        "storageKey": "__TutorialStepTracker_clientProfiles_connection(filter:{\"ownerId\":\"me\"})",
        "args": [
          (v2/*: any*/)
        ],
        "concreteType": "ClientProfileConnection",
        "plural": false,
        "selections": (v3/*: any*/)
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TutorialStepTrackerQuery",
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
          (v1/*: any*/),
          (v0/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "clientProfiles",
        "storageKey": "clientProfiles(filter:{\"ownerId\":\"me\"},first:0)",
        "args": (v4/*: any*/),
        "concreteType": "ClientProfileConnection",
        "plural": false,
        "selections": (v3/*: any*/)
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "clientProfiles",
        "args": (v4/*: any*/),
        "handle": "connection",
        "key": "TutorialStepTracker_clientProfiles",
        "filters": [
          "filter"
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "TutorialStepTrackerQuery",
    "id": null,
    "text": "query TutorialStepTrackerQuery {\n  currentSession {\n    user {\n      id\n      name\n      image {\n        id\n      }\n    }\n    id\n  }\n  clientProfiles(filter: {ownerId: \"me\"}, first: 0) {\n    edgeCount\n    edges {\n      node {\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "clientProfiles"
          ]
        }
      ]
    }
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '508babbba317b6d2b018bdff193c69b0';
module.exports = node;
