/**
 * @flow
 * @relayHash f77ac8d8189c8ad3dfde1b5f731c0c76
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProgramListPageList_query$ref = any;
export type ProgramFilterInput = {|
  search?: ?string,
  ownerId?: ?string,
  isPublic?: ?boolean,
  tagId?: ?string,
  clientProfileId?: ?string,
|};
export type ProgramListPageQueryVariables = {|
  filter: ProgramFilterInput
|};
export type ProgramListPageQueryResponse = {|
  +userPrograms: {|
    +edgeCount: number
  |},
  +$fragmentRefs: ProgramListPageList_query$ref,
|};
export type ProgramListPageQuery = {|
  variables: ProgramListPageQueryVariables,
  response: ProgramListPageQueryResponse,
|};
*/


/*
query ProgramListPageQuery(
  $filter: ProgramFilterInput!
) {
  ...ProgramListPageList_query_Vt7Yj
  userPrograms: programs(filter: {isPublic: null, tagId: null, ownerId: "me"}, first: 0) {
    edgeCount
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

fragment ProgramListPageList_query_Vt7Yj on Query {
  programs(filter: $filter, first: 10) {
    edges {
      node {
        ...ProgramListPageRow_program
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

fragment ProgramListPageRow_program on Program {
  ...NodeListItem_node
  id
  isPublic
  viewerCanUpdate
  isBookmarkedByViewer
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "filter",
    "type": "ProgramFilterInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "LinkedField",
  "alias": "userPrograms",
  "name": "programs",
  "storageKey": "programs(filter:{\"isPublic\":null,\"ownerId\":\"me\",\"tagId\":null},first:0)",
  "args": [
    {
      "kind": "Literal",
      "name": "filter",
      "value": {
        "isPublic": null,
        "ownerId": "me",
        "tagId": null
      }
    },
    {
      "kind": "Literal",
      "name": "first",
      "value": 0
    }
  ],
  "concreteType": "ProgramConnection",
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
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProgramListPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      (v1/*: any*/),
      {
        "kind": "FragmentSpread",
        "name": "ProgramListPageList_query",
        "args": [
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramListPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "programs",
        "storageKey": null,
        "args": (v3/*: any*/),
        "concreteType": "ProgramConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "ProgramEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Program",
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
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "isPublic",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "viewerCanUpdate",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "isBookmarkedByViewer",
                    "args": null,
                    "storageKey": null
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
        "name": "programs",
        "args": (v3/*: any*/),
        "handle": "connection",
        "key": "ProgramListPageList_programs",
        "filters": [
          "filter"
        ]
      },
      (v1/*: any*/)
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProgramListPageQuery",
    "id": null,
    "text": "query ProgramListPageQuery(\n  $filter: ProgramFilterInput!\n) {\n  ...ProgramListPageList_query_Vt7Yj\n  userPrograms: programs(filter: {isPublic: null, tagId: null, ownerId: \"me\"}, first: 0) {\n    edgeCount\n  }\n}\n\nfragment NodeListItem_node on Node {\n  ...NodeListItem_presentable\n  ... on Owned {\n    owner {\n      __typename\n      ...PresentableAvatar_presentable\n      ...PresentableLink_presentable\n      ... on Presentable {\n        name\n      }\n      id\n    }\n  }\n  createdAt\n}\n\nfragment NodeListItem_presentable on Presentable {\n  presentableTypeName: __typename\n  ...PresentableAvatar_presentable\n  ...PresentableCardMedia_presentable\n  name\n  image {\n    url\n    id\n  }\n  description\n}\n\nfragment PresentableAvatar_presentable on Presentable {\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment PresentableCardMedia_presentable on Presentable {\n  ...PresentableAvatar_presentable\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment PresentableLink_presentable on Presentable {\n  __typename\n  id\n  name\n}\n\nfragment ProgramListPageList_query_Vt7Yj on Query {\n  programs(filter: $filter, first: 10) {\n    edges {\n      node {\n        ...ProgramListPageRow_program\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment ProgramListPageRow_program on Program {\n  ...NodeListItem_node\n  id\n  isPublic\n  viewerCanUpdate\n  isBookmarkedByViewer\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6f748b4caab4f32b9ef10473efb5506f';
module.exports = node;
