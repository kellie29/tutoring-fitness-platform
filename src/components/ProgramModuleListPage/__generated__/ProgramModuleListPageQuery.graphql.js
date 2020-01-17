/**
 * @flow
 * @relayHash 4d6c7d6049092c26eb52d12e0e42d5f4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProgramModuleList_query$ref = any;
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
export type ProgramModuleListPageQueryVariables = {|
  filter: ProgramModuleFilterInput,
  userFilter: ProgramModuleFilterInput,
|};
export type ProgramModuleListPageQueryResponse = {|
  +userProgramModules: {|
    +edgeCount: number
  |},
  +$fragmentRefs: ProgramModuleList_query$ref,
|};
export type ProgramModuleListPageQuery = {|
  variables: ProgramModuleListPageQueryVariables,
  response: ProgramModuleListPageQueryResponse,
|};
*/


/*
query ProgramModuleListPageQuery(
  $filter: ProgramModuleFilterInput!
  $userFilter: ProgramModuleFilterInput!
) {
  ...ProgramModuleList_query_Vt7Yj
  userProgramModules: programModules(filter: $userFilter, first: 0) {
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

fragment ProgramModuleList_query_Vt7Yj on Query {
  programModules(filter: $filter, first: 20) {
    edges {
      node {
        ...ProgramModuleRow_programModule
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

fragment ProgramModuleRow_programModule on ProgramModule {
  ...NodeListItem_node
  id
  isPublic
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "filter",
    "type": "ProgramModuleFilterInput!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "userFilter",
    "type": "ProgramModuleFilterInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "LinkedField",
  "alias": "userProgramModules",
  "name": "programModules",
  "storageKey": null,
  "args": [
    {
      "kind": "Variable",
      "name": "filter",
      "variableName": "userFilter"
    },
    {
      "kind": "Literal",
      "name": "first",
      "value": 0
    }
  ],
  "concreteType": "ProgramModuleConnection",
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
    "value": 20
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
    "name": "ProgramModuleListPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      (v1/*: any*/),
      {
        "kind": "FragmentSpread",
        "name": "ProgramModuleList_query",
        "args": [
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramModuleListPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "programModules",
        "storageKey": null,
        "args": (v3/*: any*/),
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
        "name": "programModules",
        "args": (v3/*: any*/),
        "handle": "connection",
        "key": "ProgramModuleList_programModules",
        "filters": [
          "filter"
        ]
      },
      (v1/*: any*/)
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProgramModuleListPageQuery",
    "id": null,
    "text": "query ProgramModuleListPageQuery(\n  $filter: ProgramModuleFilterInput!\n  $userFilter: ProgramModuleFilterInput!\n) {\n  ...ProgramModuleList_query_Vt7Yj\n  userProgramModules: programModules(filter: $userFilter, first: 0) {\n    edgeCount\n  }\n}\n\nfragment NodeListItem_node on Node {\n  ...NodeListItem_presentable\n  ... on Owned {\n    owner {\n      __typename\n      ...PresentableAvatar_presentable\n      ...PresentableLink_presentable\n      ... on Presentable {\n        name\n      }\n      id\n    }\n  }\n  createdAt\n}\n\nfragment NodeListItem_presentable on Presentable {\n  presentableTypeName: __typename\n  ...PresentableAvatar_presentable\n  ...PresentableCardMedia_presentable\n  name\n  image {\n    url\n    id\n  }\n  description\n}\n\nfragment PresentableAvatar_presentable on Presentable {\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment PresentableCardMedia_presentable on Presentable {\n  ...PresentableAvatar_presentable\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment PresentableLink_presentable on Presentable {\n  __typename\n  id\n  name\n}\n\nfragment ProgramModuleList_query_Vt7Yj on Query {\n  programModules(filter: $filter, first: 20) {\n    edges {\n      node {\n        ...ProgramModuleRow_programModule\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment ProgramModuleRow_programModule on ProgramModule {\n  ...NodeListItem_node\n  id\n  isPublic\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4b701fdd2481aaf6bb64316addcdcf6c';
module.exports = node;
