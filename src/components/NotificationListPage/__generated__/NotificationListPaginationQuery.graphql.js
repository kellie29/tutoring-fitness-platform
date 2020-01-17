/**
 * @flow
 * @relayHash 460411d21beec0394ebd151c8e1bd243
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NotificationList_user$ref = any;
export type NotificationFilterInput = {|
  search?: ?string,
  type?: ?TableStringFilterInput,
  toId?: ?string,
  isSeen?: ?TableBooleanFilterInput,
  isRead?: ?TableBooleanFilterInput,
|};
export type TableStringFilterInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?$ReadOnlyArray<?string>,
  beginsWith?: ?string,
|};
export type TableBooleanFilterInput = {|
  ne?: ?boolean,
  eq?: ?boolean,
|};
export type NotificationListPaginationQueryVariables = {|
  filter?: ?NotificationFilterInput,
  count: number,
  cursor?: ?string,
|};
export type NotificationListPaginationQueryResponse = {|
  +currentSession: ?{|
    +user: {|
      +$fragmentRefs: NotificationList_user$ref
    |}
  |}
|};
export type NotificationListPaginationQuery = {|
  variables: NotificationListPaginationQueryVariables,
  response: NotificationListPaginationQueryResponse,
|};
*/


/*
query NotificationListPaginationQuery(
  $filter: NotificationFilterInput
  $count: Int!
  $cursor: ID
) {
  currentSession {
    user {
      ...NotificationList_user_3KQYpM
      id
    }
    id
  }
}

fragment NotificationList_user_3KQYpM on User {
  notifications(filter: $filter, first: $count, after: $cursor) {
    edges {
      node {
        id
        ...NotificationRow_notification
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

fragment NotificationRow_notification on Notification {
  id
  type
  isRead
  createdAt
  from {
    __typename
    ...PresentableTag_presentable
    id
  }
  to {
    __typename
    ...PresentableTag_presentable
    id
  }
  object {
    __typename
    typeName: __typename
    ... on Node {
      id
    }
    id
  }
}

fragment PresentableAvatar_presentable on Presentable {
  name
  image {
    url
    id
  }
}

fragment PresentableTag_presentable on Presentable {
  ...PresentableAvatar_presentable
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
    "type": "NotificationFilterInput",
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
},
v5 = [
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
  (v4/*: any*/),
  (v3/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "NotificationListPaginationQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
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
              {
                "kind": "FragmentSpread",
                "name": "NotificationList_user",
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
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NotificationListPaginationQuery",
    "argumentDefinitions": (v0/*: any*/),
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
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "notifications",
                "storageKey": null,
                "args": (v2/*: any*/),
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
                          (v3/*: any*/),
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
                            "name": "isRead",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "createdAt",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "from",
                            "storageKey": null,
                            "args": null,
                            "concreteType": null,
                            "plural": false,
                            "selections": (v5/*: any*/)
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "to",
                            "storageKey": null,
                            "args": null,
                            "concreteType": null,
                            "plural": false,
                            "selections": (v5/*: any*/)
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
                              (v4/*: any*/),
                              {
                                "kind": "ScalarField",
                                "alias": "typeName",
                                "name": "__typename",
                                "args": null,
                                "storageKey": null
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
                "name": "notifications",
                "args": (v2/*: any*/),
                "handle": "connection",
                "key": "NotificationList_notifications",
                "filters": [
                  "filter"
                ]
              },
              (v3/*: any*/)
            ]
          },
          (v3/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "NotificationListPaginationQuery",
    "id": null,
    "text": "query NotificationListPaginationQuery(\n  $filter: NotificationFilterInput\n  $count: Int!\n  $cursor: ID\n) {\n  currentSession {\n    user {\n      ...NotificationList_user_3KQYpM\n      id\n    }\n    id\n  }\n}\n\nfragment NotificationList_user_3KQYpM on User {\n  notifications(filter: $filter, first: $count, after: $cursor) {\n    edges {\n      node {\n        id\n        ...NotificationRow_notification\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment NotificationRow_notification on Notification {\n  id\n  type\n  isRead\n  createdAt\n  from {\n    __typename\n    ...PresentableTag_presentable\n    id\n  }\n  to {\n    __typename\n    ...PresentableTag_presentable\n    id\n  }\n  object {\n    __typename\n    typeName: __typename\n    ... on Node {\n      id\n    }\n    id\n  }\n}\n\nfragment PresentableAvatar_presentable on Presentable {\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment PresentableTag_presentable on Presentable {\n  ...PresentableAvatar_presentable\n  __typename\n  id\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd0f9d2454b07952c822a89eb7a64978e';
module.exports = node;
