/**
 * @flow
 * @relayHash 6531918ba3acc6b97db8fa015933c9d0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProgramModuleFilterSelectViewList_query$ref = any;
export type ProgramModuleFilterInput = {|
  type?: ?string,
  search?: ?string,
  searchSplit?: ?boolean,
  ownerId?: ?string,
  isPublic?: ?boolean,
  tagId?: ?TableIDFilterInput,
  tagParentTagId?: ?TableIDFilterInput,
  programModuleGroupId?: ?string,
|};
export type TableIDFilterInput = {|
  ne?: ?string,
  eq?: ?string,
|};
export type ProgramModuleFilterSelectViewListPaginationQueryVariables = {|
  filter?: ?ProgramModuleFilterInput,
  count: number,
  cursor?: ?string,
|};
export type ProgramModuleFilterSelectViewListPaginationQueryResponse = {|
  +$fragmentRefs: ProgramModuleFilterSelectViewList_query$ref
|};
export type ProgramModuleFilterSelectViewListPaginationQuery = {|
  variables: ProgramModuleFilterSelectViewListPaginationQueryVariables,
  response: ProgramModuleFilterSelectViewListPaginationQueryResponse,
|};
*/


/*
query ProgramModuleFilterSelectViewListPaginationQuery(
  $filter: ProgramModuleFilterInput
  $count: Int!
  $cursor: ID
) {
  ...ProgramModuleFilterSelectViewList_query_3KQYpM
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

fragment ProgramModuleFilterSelectViewListRow_programModule on ProgramModule {
  ...NodeListItem_node
  id
  isPublic
}

fragment ProgramModuleFilterSelectViewList_query_3KQYpM on Query {
  programModules(filter: $filter, first: $count, after: $cursor) {
    edges {
      node {
        ...ProgramModuleFilterSelectViewListRow_programModule
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
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "filter",
    "type": "ProgramModuleFilterInput",
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
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProgramModuleFilterSelectViewListPaginationQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ProgramModuleFilterSelectViewList_query",
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
          (v1/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramModuleFilterSelectViewListPaginationQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "programModules",
        "storageKey": null,
        "args": (v2/*: any*/),
        "concreteType": "ProgramModuleConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "ProgramModuleEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "ProgramModule",
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
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "isPublic",
                    "args": null,
                    "storageKey": null
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
        "name": "programModules",
        "args": (v2/*: any*/),
        "handle": "connection",
        "key": "ProgramModuleFilterSelectViewList_programModules",
        "filters": [
          "filter"
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProgramModuleFilterSelectViewListPaginationQuery",
    "id": null,
    "text": "query ProgramModuleFilterSelectViewListPaginationQuery(\n  $filter: ProgramModuleFilterInput\n  $count: Int!\n  $cursor: ID\n) {\n  ...ProgramModuleFilterSelectViewList_query_3KQYpM\n}\n\nfragment NodeListItem_node on Node {\n  ...NodeListItem_presentable\n  ... on Owned {\n    owner {\n      __typename\n      ...PresentableAvatar_presentable\n      ...PresentableLink_presentable\n      ... on Presentable {\n        name\n      }\n      id\n    }\n  }\n  createdAt\n}\n\nfragment NodeListItem_presentable on Presentable {\n  presentableTypeName: __typename\n  ...PresentableAvatar_presentable\n  ...PresentableCardMedia_presentable\n  name\n  image {\n    url\n    id\n  }\n  description\n}\n\nfragment PresentableAvatar_presentable on Presentable {\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment PresentableCardMedia_presentable on Presentable {\n  ...PresentableAvatar_presentable\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment PresentableLink_presentable on Presentable {\n  __typename\n  id\n  name\n}\n\nfragment ProgramModuleFilterSelectViewListRow_programModule on ProgramModule {\n  ...NodeListItem_node\n  id\n  isPublic\n}\n\nfragment ProgramModuleFilterSelectViewList_query_3KQYpM on Query {\n  programModules(filter: $filter, first: $count, after: $cursor) {\n    edges {\n      node {\n        ...ProgramModuleFilterSelectViewListRow_programModule\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1679f8af1b5f0c76cdc12bb95310a35a';
module.exports = node;
