/**
 * @flow
 * @relayHash 5b4aa29d5e4b2336031b22ade485930e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ClientProfileListSummary_query$ref = any;
type NotificationListSummary_query$ref = any;
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
export type HomePageQueryVariables = {|
  eventsFilter?: ?ProgramTrackEventFilterInput
|};
export type HomePageQueryResponse = {|
  +userClientProfiles: {|
    +edgeCount: number
  |},
  +$fragmentRefs: ClientProfileListSummary_query$ref & NotificationListSummary_query$ref,
|};
export type HomePageQuery = {|
  variables: HomePageQueryVariables,
  response: HomePageQueryResponse,
|};
*/


/*
query HomePageQuery(
  $eventsFilter: ProgramTrackEventFilterInput
) {
  ...ClientProfileListSummary_query_bvTSy
  ...NotificationListSummary_query
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

fragment ClientProfileListSummary_query_bvTSy on Query {
  clientProfiles(filter: {ownerId: "me"}, first: 3) {
    edges {
      node {
        id
        ...ClientProfileListItem_clientProfile_bvTSy
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

fragment NotificationListSummary_query on Query {
  notifications(filter: {toId: "me"}, first: 3) {
    edges {
      node {
        id
        type
        isSeen
        isRead
        createdAt
        from {
          ...PresentableCardMedia_presentable
          ...PresentableAvatar_presentable
          __typename
          id
          name
          ... on User {
            email
          }
        }
        to {
          __typename
          ... on User {
            __typename
            id
            name
          }
          id
        }
        object {
          __typename
          typeName: __typename
          id
          name
          ... on ClientProfileInvitation {
            clientProfile {
              id
            }
          }
          ... on ProgramTrackAction {
            track {
              id
              clientProfile {
                id
              }
              program {
                name
                id
              }
            }
          }
        }
      }
    }
  }
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
    "name": "eventsFilter",
    "type": "ProgramTrackEventFilterInput",
    "defaultValue": null
  }
],
v1 = {
  "kind": "Literal",
  "name": "filter",
  "value": {
    "ownerId": "me"
  }
},
v2 = {
  "kind": "LinkedField",
  "alias": "userClientProfiles",
  "name": "clientProfiles",
  "storageKey": "clientProfiles(filter:{\"ownerId\":\"me\"},first:0)",
  "args": [
    (v1/*: any*/),
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
v3 = {
  "kind": "Literal",
  "name": "first",
  "value": 3
},
v4 = [
  (v1/*: any*/),
  (v3/*: any*/)
],
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v7 = {
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
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "createdAt",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "Literal",
  "name": "first",
  "value": 9999
},
v11 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "clientProfile",
  "storageKey": null,
  "args": null,
  "concreteType": "ClientProfile",
  "plural": false,
  "selections": [
    (v5/*: any*/)
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "HomePageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      (v2/*: any*/),
      {
        "kind": "FragmentSpread",
        "name": "ClientProfileListSummary_query",
        "args": [
          {
            "kind": "Variable",
            "name": "eventsFilter",
            "variableName": "eventsFilter"
          }
        ]
      },
      {
        "kind": "FragmentSpread",
        "name": "NotificationListSummary_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomePageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "clientProfiles",
        "storageKey": "clientProfiles(filter:{\"ownerId\":\"me\"},first:3)",
        "args": (v4/*: any*/),
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
                  (v5/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": "presentableTypeName",
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  },
                  (v6/*: any*/),
                  (v7/*: any*/),
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
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v5/*: any*/)
                    ]
                  },
                  (v9/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "programTracks",
                    "storageKey": "programTracks(first:9999)",
                    "args": [
                      (v10/*: any*/)
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
                                  (v10/*: any*/)
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
                  (v8/*: any*/)
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
        "args": (v4/*: any*/),
        "handle": "connection",
        "key": "ClientProfileList_clientProfiles",
        "filters": [
          "filter"
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "notifications",
        "storageKey": "notifications(filter:{\"toId\":\"me\"},first:3)",
        "args": [
          {
            "kind": "Literal",
            "name": "filter",
            "value": {
              "toId": "me"
            }
          },
          (v3/*: any*/)
        ],
        "concreteType": "NotificationConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "NotificationEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Notification",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "type",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "isSeen",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "isRead",
                    "args": null,
                    "storageKey": null
                  },
                  (v9/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "from",
                    "storageKey": null,
                    "args": null,
                    "concreteType": null,
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v5/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "type": "User",
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "email",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "to",
                    "storageKey": null,
                    "args": null,
                    "concreteType": null,
                    "plural": false,
                    "selections": [
                      (v8/*: any*/),
                      (v5/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "type": "User",
                        "selections": [
                          (v8/*: any*/),
                          (v6/*: any*/)
                        ]
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "object",
                    "storageKey": null,
                    "args": null,
                    "concreteType": null,
                    "plural": false,
                    "selections": [
                      (v8/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": "typeName",
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      },
                      (v5/*: any*/),
                      (v6/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "type": "ClientProfileInvitation",
                        "selections": [
                          (v11/*: any*/)
                        ]
                      },
                      {
                        "kind": "InlineFragment",
                        "type": "ProgramTrackAction",
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "track",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "ProgramTrack",
                            "plural": false,
                            "selections": [
                              (v5/*: any*/),
                              (v11/*: any*/),
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "program",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "Program",
                                "plural": false,
                                "selections": [
                                  (v6/*: any*/),
                                  (v5/*: any*/)
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      (v2/*: any*/)
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "HomePageQuery",
    "id": null,
    "text": "query HomePageQuery(\n  $eventsFilter: ProgramTrackEventFilterInput\n) {\n  ...ClientProfileListSummary_query_bvTSy\n  ...NotificationListSummary_query\n  userClientProfiles: clientProfiles(filter: {ownerId: \"me\"}, first: 0) {\n    edgeCount\n  }\n}\n\nfragment ClientProfileListItem_clientProfile_bvTSy on ClientProfile {\n  ...NodeListItem_node\n  id\n  ...PresentableAvatar_presentable\n  programTracks(first: 9999) {\n    edges {\n      node {\n        events(filter: $eventsFilter, first: 9999) {\n          edges {\n            node {\n              startDate\n              hasResponse\n              id\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment ClientProfileListSummary_query_bvTSy on Query {\n  clientProfiles(filter: {ownerId: \"me\"}, first: 3) {\n    edges {\n      node {\n        id\n        ...ClientProfileListItem_clientProfile_bvTSy\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment NodeListItem_node on Node {\n  ...NodeListItem_presentable\n  ... on Owned {\n    owner {\n      __typename\n      ...PresentableAvatar_presentable\n      ...PresentableLink_presentable\n      ... on Presentable {\n        name\n      }\n      id\n    }\n  }\n  createdAt\n}\n\nfragment NodeListItem_presentable on Presentable {\n  presentableTypeName: __typename\n  ...PresentableAvatar_presentable\n  ...PresentableCardMedia_presentable\n  name\n  image {\n    url\n    id\n  }\n  description\n}\n\nfragment NotificationListSummary_query on Query {\n  notifications(filter: {toId: \"me\"}, first: 3) {\n    edges {\n      node {\n        id\n        type\n        isSeen\n        isRead\n        createdAt\n        from {\n          ...PresentableCardMedia_presentable\n          ...PresentableAvatar_presentable\n          __typename\n          id\n          name\n          ... on User {\n            email\n          }\n        }\n        to {\n          __typename\n          ... on User {\n            __typename\n            id\n            name\n          }\n          id\n        }\n        object {\n          __typename\n          typeName: __typename\n          id\n          name\n          ... on ClientProfileInvitation {\n            clientProfile {\n              id\n            }\n          }\n          ... on ProgramTrackAction {\n            track {\n              id\n              clientProfile {\n                id\n              }\n              program {\n                name\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment PresentableAvatar_presentable on Presentable {\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment PresentableCardMedia_presentable on Presentable {\n  ...PresentableAvatar_presentable\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment PresentableLink_presentable on Presentable {\n  __typename\n  id\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '23faf5d4922cedd1353cb8509176381a';
module.exports = node;
