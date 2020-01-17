/**
 * @flow
 * @relayHash 28fc31fb4cf986b37df6b105121a46fa
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PresentableViewPageHeader_presentable$ref = any;
type ProgramList_query$ref = any;
export type ProgramFilterInput = {|
  search?: ?string,
  ownerId?: ?string,
  isPublic?: ?boolean,
  tagId?: ?string,
  clientProfileId?: ?string,
|};
export type ClientProfileViewPageProgramListTabQueryVariables = {|
  clientProfileId?: ?string,
  programFilter: ProgramFilterInput,
|};
export type ClientProfileViewPageProgramListTabQueryResponse = {|
  +userPrograms: {|
    +edgeCount: number
  |},
  +clientProfile: ?{|
    +id: string,
    +name: string,
    +$fragmentRefs: PresentableViewPageHeader_presentable$ref,
  |},
  +$fragmentRefs: ProgramList_query$ref,
|};
export type ClientProfileViewPageProgramListTabQuery = {|
  variables: ClientProfileViewPageProgramListTabQueryVariables,
  response: ClientProfileViewPageProgramListTabQueryResponse,
|};
*/


/*
query ClientProfileViewPageProgramListTabQuery(
  $clientProfileId: ID
  $programFilter: ProgramFilterInput!
) {
  ...ProgramList_query_2I4ULz
  userPrograms: programs(first: 0, filter: $programFilter) {
    edgeCount
  }
  clientProfile(id: $clientProfileId) {
    ...PresentableViewPageHeader_presentable
    id
    name
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

fragment PresentableViewPageHeader_presentable on Presentable {
  ...PresentableAvatar_presentable
  name
  image {
    url
    width
    height
    id
  }
  ... on Owned {
    owner {
      __typename
      ...PresentableLink_presentable
      id
    }
  }
}

fragment ProgramListRow_program on Program {
  ...NodeListItem_node
  id
}

fragment ProgramList_query_2I4ULz on Query {
  programs(filter: $programFilter, first: 10) {
    edges {
      node {
        ...ProgramListRow_program
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
    "name": "clientProfileId",
    "type": "ID",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "programFilter",
    "type": "ProgramFilterInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "Variable",
  "name": "filter",
  "variableName": "programFilter"
},
v2 = {
  "kind": "LinkedField",
  "alias": "userPrograms",
  "name": "programs",
  "storageKey": null,
  "args": [
    (v1/*: any*/),
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
v3 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "clientProfileId"
  }
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v6 = [
  (v1/*: any*/),
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "image",
  "storageKey": null,
  "args": null,
  "concreteType": "Image",
  "plural": false,
  "selections": [
    (v7/*: any*/),
    (v4/*: any*/)
  ]
},
v9 = {
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
    "name": "ClientProfileViewPageProgramListTabQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      (v2/*: any*/),
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "clientProfile",
        "storageKey": null,
        "args": (v3/*: any*/),
        "concreteType": "ClientProfile",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "PresentableViewPageHeader_presentable",
            "args": null
          }
        ]
      },
      {
        "kind": "FragmentSpread",
        "name": "ProgramList_query",
        "args": [
          (v1/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ClientProfileViewPageProgramListTabQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "programs",
        "storageKey": null,
        "args": (v6/*: any*/),
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
                  (v5/*: any*/),
                  (v8/*: any*/),
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
                      (v5/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/),
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
                  (v9/*: any*/)
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
        "args": (v6/*: any*/),
        "handle": "connection",
        "key": "ProgramList_programs",
        "filters": [
          "filter"
        ]
      },
      (v2/*: any*/),
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "clientProfile",
        "storageKey": null,
        "args": (v3/*: any*/),
        "concreteType": "ClientProfile",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "image",
            "storageKey": null,
            "args": null,
            "concreteType": "Image",
            "plural": false,
            "selections": [
              (v7/*: any*/),
              (v4/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "width",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "height",
                "args": null,
                "storageKey": null
              }
            ]
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
              (v9/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "kind": "ClientExtension",
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__id",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          (v4/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ClientProfileViewPageProgramListTabQuery",
    "id": null,
    "text": "query ClientProfileViewPageProgramListTabQuery(\n  $clientProfileId: ID\n  $programFilter: ProgramFilterInput!\n) {\n  ...ProgramList_query_2I4ULz\n  userPrograms: programs(first: 0, filter: $programFilter) {\n    edgeCount\n  }\n  clientProfile(id: $clientProfileId) {\n    ...PresentableViewPageHeader_presentable\n    id\n    name\n  }\n}\n\nfragment NodeListItem_node on Node {\n  ...NodeListItem_presentable\n  ... on Owned {\n    owner {\n      __typename\n      ...PresentableAvatar_presentable\n      ...PresentableLink_presentable\n      ... on Presentable {\n        name\n      }\n      id\n    }\n  }\n  createdAt\n}\n\nfragment NodeListItem_presentable on Presentable {\n  presentableTypeName: __typename\n  ...PresentableAvatar_presentable\n  ...PresentableCardMedia_presentable\n  name\n  image {\n    url\n    id\n  }\n  description\n}\n\nfragment PresentableAvatar_presentable on Presentable {\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment PresentableCardMedia_presentable on Presentable {\n  ...PresentableAvatar_presentable\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment PresentableLink_presentable on Presentable {\n  __typename\n  id\n  name\n}\n\nfragment PresentableViewPageHeader_presentable on Presentable {\n  ...PresentableAvatar_presentable\n  name\n  image {\n    url\n    width\n    height\n    id\n  }\n  ... on Owned {\n    owner {\n      __typename\n      ...PresentableLink_presentable\n      id\n    }\n  }\n}\n\nfragment ProgramListRow_program on Program {\n  ...NodeListItem_node\n  id\n}\n\nfragment ProgramList_query_2I4ULz on Query {\n  programs(filter: $programFilter, first: 10) {\n    edges {\n      node {\n        ...ProgramListRow_program\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '87a9e8db102b285fcb41909b83ebfef8';
module.exports = node;
