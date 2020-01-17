/**
 * @flow
 * @relayHash 0ac4a551b1bb0c3f3797458d68180c88
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ClientProfileList_query$ref = any;
export type UserFilterInput = {|
  search?: ?string
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
export type ClientProfileListPaginationQueryVariables = {|
  filter?: ?UserFilterInput,
  count: number,
  cursor?: ?string,
  eventsFilter?: ?ProgramTrackEventFilterInput,
|};
export type ClientProfileListPaginationQueryResponse = {|
  +$fragmentRefs: ClientProfileList_query$ref
|};
export type ClientProfileListPaginationQuery = {|
  variables: ClientProfileListPaginationQueryVariables,
  response: ClientProfileListPaginationQueryResponse,
|};
*/


/*
query ClientProfileListPaginationQuery(
  $filter: UserFilterInput
  $count: Int!
  $cursor: ID
  $eventsFilter: ProgramTrackEventFilterInput
) {
  ...ClientProfileList_query_2beOII
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

fragment ClientProfileList_query_2beOII on Query {
  clientProfiles(filter: $filter, first: $count, after: $cursor) {
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
    "type": "UserFilterInput",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "ID",
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
  "kind": "Variable",
  "name": "filter",
  "variableName": "filter"
},
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  (v1/*: any*/),
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
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
    (v4/*: any*/)
  ]
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "Literal",
  "name": "first",
  "value": 9999
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ClientProfileListPaginationQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ClientProfileList_query",
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor"
          },
          {
            "kind": "Variable",
            "name": "eventsFilter",
            "variableName": "eventsFilter"
          },
          (v1/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ClientProfileListPaginationQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "clientProfiles",
        "storageKey": null,
        "args": (v2/*: any*/),
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
                  (v3/*: any*/),
                  (v5/*: any*/),
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
                      (v3/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v4/*: any*/)
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "createdAt",
                    "args": null,
                    "storageKey": null
                  },
                  (v4/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "programTracks",
                    "storageKey": "programTracks(first:9999)",
                    "args": [
                      (v7/*: any*/)
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
                                  (v7/*: any*/)
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
                                          (v4/*: any*/)
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              (v4/*: any*/)
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  (v6/*: any*/)
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
        "args": (v2/*: any*/),
        "handle": "connection",
        "key": "ClientProfileList_clientProfiles",
        "filters": [
          "filter"
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ClientProfileListPaginationQuery",
    "id": null,
    "text": "query ClientProfileListPaginationQuery(\n  $filter: UserFilterInput\n  $count: Int!\n  $cursor: ID\n  $eventsFilter: ProgramTrackEventFilterInput\n) {\n  ...ClientProfileList_query_2beOII\n}\n\nfragment ClientProfileListItem_clientProfile_bvTSy on ClientProfile {\n  ...NodeListItem_node\n  id\n  ...PresentableAvatar_presentable\n  programTracks(first: 9999) {\n    edges {\n      node {\n        events(filter: $eventsFilter, first: 9999) {\n          edges {\n            node {\n              startDate\n              hasResponse\n              id\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment ClientProfileList_query_2beOII on Query {\n  clientProfiles(filter: $filter, first: $count, after: $cursor) {\n    edges {\n      node {\n        ...ClientProfileListItem_clientProfile_bvTSy\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment NodeListItem_node on Node {\n  ...NodeListItem_presentable\n  ... on Owned {\n    owner {\n      __typename\n      ...PresentableAvatar_presentable\n      ...PresentableLink_presentable\n      ... on Presentable {\n        name\n      }\n      id\n    }\n  }\n  createdAt\n}\n\nfragment NodeListItem_presentable on Presentable {\n  presentableTypeName: __typename\n  ...PresentableAvatar_presentable\n  ...PresentableCardMedia_presentable\n  name\n  image {\n    url\n    id\n  }\n  description\n}\n\nfragment PresentableAvatar_presentable on Presentable {\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment PresentableCardMedia_presentable on Presentable {\n  ...PresentableAvatar_presentable\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment PresentableLink_presentable on Presentable {\n  __typename\n  id\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '307988355f6ce5365b4fbfd254549a1b';
module.exports = node;
