/**
 * @flow
 * @relayHash 1c17669d3fd93efa588307a913442bba
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ChatPageChatChannelList_query$ref = any;
export type ChatChannelFilterInput = {|
  userId?: ?string
|};
export type ChatPageQueryVariables = {|
  filter: ChatChannelFilterInput
|};
export type ChatPageQueryResponse = {|
  +$fragmentRefs: ChatPageChatChannelList_query$ref
|};
export type ChatPageQuery = {|
  variables: ChatPageQueryVariables,
  response: ChatPageQueryResponse,
|};
*/


/*
query ChatPageQuery(
  $filter: ChatChannelFilterInput!
) {
  ...ChatPageChatChannelList_query_Vt7Yj
}

fragment ChatPageChatChannelListItem_chatChannel on ChatChannel {
  id
  object {
    __typename
    ... on Presentable {
      ...PresentableAvatar_presentable
      name
    }
    id
  }
}

fragment ChatPageChatChannelList_query_Vt7Yj on Query {
  chatChannels(filter: $filter, first: 10) {
    edges {
      node {
        ...ChatPageChatChannelListItem_chatChannel
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

fragment PresentableAvatar_presentable on Presentable {
  name
  image {
    url
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "filter",
    "type": "ChatChannelFilterInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "Variable",
  "name": "filter",
  "variableName": "filter"
},
v2 = [
  (v1/*: any*/),
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
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
    "name": "ChatPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ChatPageChatChannelList_query",
        "args": [
          (v1/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ChatPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "chatChannels",
        "storageKey": null,
        "args": (v2/*: any*/),
        "concreteType": "ChatChannelConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "ChatChannelEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "ChatChannel",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "object",
                    "storageKey": null,
                    "args": null,
                    "concreteType": null,
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
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
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "url",
                            "args": null,
                            "storageKey": null
                          },
                          (v3/*: any*/)
                        ]
                      },
                      (v3/*: any*/)
                    ]
                  },
                  (v4/*: any*/)
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
        "name": "chatChannels",
        "args": (v2/*: any*/),
        "handle": "connection",
        "key": "ChatPageChatChannelList_chatChannels",
        "filters": [
          "filter"
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ChatPageQuery",
    "id": null,
    "text": "query ChatPageQuery(\n  $filter: ChatChannelFilterInput!\n) {\n  ...ChatPageChatChannelList_query_Vt7Yj\n}\n\nfragment ChatPageChatChannelListItem_chatChannel on ChatChannel {\n  id\n  object {\n    __typename\n    ... on Presentable {\n      ...PresentableAvatar_presentable\n      name\n    }\n    id\n  }\n}\n\nfragment ChatPageChatChannelList_query_Vt7Yj on Query {\n  chatChannels(filter: $filter, first: 10) {\n    edges {\n      node {\n        ...ChatPageChatChannelListItem_chatChannel\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment PresentableAvatar_presentable on Presentable {\n  name\n  image {\n    url\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '757ee9e04c410b26eef63fc71f20bf1a';
module.exports = node;
