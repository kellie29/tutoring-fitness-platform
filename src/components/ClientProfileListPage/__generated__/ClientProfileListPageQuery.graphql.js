/**
 * @flow
 * @relayHash ec35263d3398256fbe29de3d64a041e5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ClientProfileList_query$ref = any;
export type ClientProfileFilterInput = {|
  search?: ?string,
  ownerId?: ?string,
  userId?: ?string,
|};
export type ProgramTrackEventFilterInput = {|
  startDate?: ?DateTimeFilterInput,
  programTrackId?: ?string,
  programId?: ?string,
  clientProfileId?: ?string,
|};
export type DateTimeFilterInput = {|
  after?: ?any,
  before?: ?any,
|};
export type ClientProfileListPageQueryVariables = {|
  filter?: ?ClientProfileFilterInput,
  eventsFilter?: ?ProgramTrackEventFilterInput,
|};
export type ClientProfileListPageQueryResponse = {|
  +userClientProfiles: {|
    +edgeCount: number
  |},
  +$fragmentRefs: ClientProfileList_query$ref,
|};
export type ClientProfileListPageQuery = {|
  variables: ClientProfileListPageQueryVariables,
  response: ClientProfileListPageQueryResponse,
|};
*/


/*
query ClientProfileListPageQuery(
  $filter: ClientProfileFilterInput
  $eventsFilter: ProgramTrackEventFilterInput
) {
  ...ClientProfileList_query_16VbND
  userClientProfiles: clientProfiles(filter: {ownerId: "me"}, first: 0) {
    edgeCount
  }
}

fragment ClientProfileListItem_clientProfile_bvTSy on ClientProfile {
  ...NodeListItem_node
  id
  ...PresentableAvatar_presentable
  programTracks(first: 9999) {
    edges {
      node {
        events(filter: $eventsFilter, first: 9999) {
          edges {
            node {
              startDate
              hasResponse
              id
            }
          }
        }
        id
      }
    }
  }
}

fragment ClientProfileList_query_16VbND on Query {
  clientProfiles(filter: $filter, first: 10) {
    edges {
      node {
        ...ClientProfileListItem_clientProfile_bvTSy
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

fragment NodeListItem_node on Node {
  ...NodeListItem_presentable
  ... on Owned {
    owner {
      __typename
      ...PresentableAvatar_presentable
      ...PresentableLink_presentable
      ... on Presentable {
        name
      }
      id
    }
  }
  createdAt
}

fragment NodeListItem_presentable on Presentable {
  presentableTypeName: __typename
  ...PresentableAvatar_presentable
  ...PresentableCardMedia_presentable
  name
  image {
    url
    id
  }
  description
}

fragment PresentableAvatar_presentable on Presentable {
  name
  image {
    url
    id
  }
}

fragment PresentableCardMedia_presentable on Presentable {
  ...PresentableAvatar_presentable
  name
  image {
    url
    id
  }
}

fragment PresentableLink_presentable on Presentable {
  __typename
  id
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "filter",
    "type": "ClientProfileFilterInput",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "eventsFilter",
    "type": "ProgramTrackEventFilterInput",
    "defaultValue": null
  }
],
v1 = {
  "kind": "LinkedField",
  "alias": "userClientProfiles",
  "name": "clientProfiles",
  "storageKey": "clientProfiles(filter:{\"ownerId\":\"me\"},first:0)",
  "args": [
    {
      "kind": "Literal",
      "name": "filter",
      "value": {
        "ownerId": "me"
      }
    },
    {
      "kind": "Literal",
      "name": "first",
      "value": 0
    }
  ],
  "concreteType": "ClientProfileConnection",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "edgeCount",
      "args": null,
      "storageKey": null
    }
  ]
},
v2 = {
  "kind": "Variable",
  "name": "filter",
  "variableName": "filter"
},
v3 = [
  (v2/*: any*/),
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v6 = {
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
    (v5/*: any*/)
  ]
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "Literal",
  "name": "first",
  "value": 9999
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ClientProfileListPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      (v1/*: any*/),
      {
        "kind": "FragmentSpread",
        "name": "ClientProfileList_query",
        "args": [
          {
            "kind": "Variable",
            "name": "eventsFilter",
            "variableName": "eventsFilter"
          },
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ClientProfileListPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "clientProfiles",
        "storageKey": null,
        "args": (v3/*: any*/),
        "concreteType": "ClientProfileConnection",
        "plural": false,
        "selections": [
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
                  {
                    "kind": "ScalarField",
                    "alias": "presentableTypeName",
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  },
                  (v4/*: any*/),
                  (v6/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "description",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "owner",
                    "storageKey": null,
                    "args": null,
                    "concreteType": null,
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v5/*: any*/)
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "createdAt",
                    "args": null,
                    "storageKey": null
                  },
                  (v5/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "programTracks",
                    "storageKey": "programTracks(first:9999)",
                    "args": [
                      (v8/*: any*/)
                    ],
                    "concreteType": "ProgramTrackConnection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "edges",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "ProgramTrackEdge",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "ProgramTrack",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "events",
                                "storageKey": null,
                                "args": [
                                  {
                                    "kind": "Variable",
                                    "name": "filter",
                                    "variableName": "eventsFilter"
                                  },
                                  (v8/*: any*/)
                                ],
                                "concreteType": "ProgramTrackEventConnection",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "edges",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "ProgramTrackEventEdge",
                                    "plural": true,
                                    "selections": [
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "node",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "ProgramTrackEvent",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "startDate",
                                            "args": null,
                                            "storageKey": null
                                          },
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "hasResponse",
                                            "args": null,
                                            "storageKey": null
                                          },
                                          (v5/*: any*/)
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              (v5/*: any*/)
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  (v7/*: any*/)
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
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "clientProfiles",
        "args": (v3/*: any*/),
        "handle": "connection",
        "key": "ClientProfileList_clientProfiles",
        "filters": [
          "filter"
        ]
      },
      (v1/*: any*/)
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ClientProfileListPageQuery",
    "id": null,
    "text": "query ClientProfileListPageQuery(\n  $filter: ClientProfileFilterInput\n  $eventsFilter: ProgramTrackEventFilterInput\n) {\n  ...ClientProfileList_query_16VbND\n  userClientProfiles: clientProfiles(filter: {ownerId: \"me\"}, first: 0) {\n    edgeCount\n  }\n}\n\nfragment ClientProfileListItem_clientProfile_bvTSy on ClientProfile {\n  ...NodeListItem_node\n  id\n  ...PresentableAvatar_presentable\n  programTracks(first: 9999) {\n    edges {\n      node {\n        events(filter: $eventsFilter, first: 9999) {\n          edges {\n            node {\n              startDate\n              hasResponse\n              id\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment ClientProfileList_query_16VbND on Query {\n  clientProfiles(filter: $filter, first: 10) {\n    edges {\n      node {\n        ...ClientProfileListItem_clientProfile_bvTSy\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment NodeListItem_node on Node {\n  ...NodeListItem_presentable\n  ... on Owned {\n    owner {\n      __typename\n      ...PresentableAvatar_presentable\n      ...PresentableLink_presentable\n      ... on Presentable {\n        name\n      }\n      id\n    }\n  }\n  createdAt\n}\n\nfragment NodeListItem_presentable on Presentable {\n  presentableTypeName: __typename\n  ...PresentableAvatar_presentable\n  ...PresentableCardMedia_presentable\n  name\n  image {\n    url\n    id\n  }\n  description\n}\n\nfragment PresentableAvatar_presentable on Presentable {\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment PresentableCardMedia_presentable on Presentable {\n  ...PresentableAvatar_presentable\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment PresentableLink_presentable on Presentable {\n  __typename\n  id\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5d027cca7086ff6c9332cdb5197f98ca';
module.exports = node;
