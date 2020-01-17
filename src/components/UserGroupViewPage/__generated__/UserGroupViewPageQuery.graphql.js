/**
 * @flow
 * @relayHash 5deec332511d6054b30f859bcca9747e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PresentableViewPageHeader_presentable$ref = any;
type UserGroupInviteDialog_userGroup$ref = any;
type UserGroupLeaveDialog_user$ref = any;
type UserGroupLeaveDialog_userGroup$ref = any;
type UserGroupRemoveDialog_userGroup$ref = any;
type UserGroupUserList_userGroup$ref = any;
export type UserGroupViewPageQueryVariables = {|
  userGroupId?: ?string
|};
export type UserGroupViewPageQueryResponse = {|
  +currentSession: ?{|
    +user: {|
      +$fragmentRefs: UserGroupLeaveDialog_user$ref
    |}
  |},
  +userGroup: ?{|
    +id: string,
    +name: string,
    +description: string,
    +viewerCanUpdate: ?boolean,
    +viewerIsMember: ?boolean,
    +$fragmentRefs: PresentableViewPageHeader_presentable$ref & UserGroupInviteDialog_userGroup$ref & UserGroupRemoveDialog_userGroup$ref & UserGroupLeaveDialog_userGroup$ref & UserGroupUserList_userGroup$ref,
  |},
|};
export type UserGroupViewPageQuery = {|
  variables: UserGroupViewPageQueryVariables,
  response: UserGroupViewPageQueryResponse,
|};
*/


/*
query UserGroupViewPageQuery(
  $userGroupId: ID
) {
  currentSession {
    user {
      ...UserGroupLeaveDialog_user
      id
    }
    id
  }
  userGroup(id: $userGroupId) {
    ...PresentableViewPageHeader_presentable
    ...UserGroupInviteDialog_userGroup
    ...UserGroupRemoveDialog_userGroup
    ...UserGroupLeaveDialog_userGroup
    ...UserGroupUserList_userGroup
    id
    name
    description
    viewerCanUpdate
    viewerIsMember
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

fragment UserGroupInviteDialog_userGroup on UserGroup {
  id
  name
}

fragment UserGroupLeaveDialog_user on User {
  id
  name
}

fragment UserGroupLeaveDialog_userGroup on UserGroup {
  id
  name
}

fragment UserGroupRemoveDialog_userGroup on UserGroup {
  id
  name
}

fragment UserGroupUserList_userGroup on UserGroup {
  id
  viewerCanUpdate
  members(first: 10) {
    edges {
      role
      node {
        ...NodeListItem_node
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
    "name": "userGroupId",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "userGroupId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
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
  "name": "description",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "viewerCanUpdate",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "viewerIsMember",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v9 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v10 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "image",
  "storageKey": null,
  "args": null,
  "concreteType": "Image",
  "plural": false,
  "selections": [
    (v7/*: any*/),
    (v2/*: any*/)
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UserGroupViewPageQuery",
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
                "name": "UserGroupLeaveDialog_user",
                "args": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "userGroup",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UserGroup",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "PresentableViewPageHeader_presentable",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "UserGroupInviteDialog_userGroup",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "UserGroupRemoveDialog_userGroup",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "UserGroupLeaveDialog_userGroup",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "UserGroupUserList_userGroup",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UserGroupViewPageQuery",
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
              (v2/*: any*/),
              (v3/*: any*/)
            ]
          },
          (v2/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "userGroup",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UserGroup",
        "plural": false,
        "selections": [
          (v3/*: any*/),
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
              (v2/*: any*/),
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
              (v8/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
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
          (v2/*: any*/),
          (v5/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "members",
            "storageKey": "members(first:10)",
            "args": (v9/*: any*/),
            "concreteType": "MemberConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "MemberEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "role",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
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
                      (v10/*: any*/),
                      (v4/*: any*/),
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
                          (v10/*: any*/),
                          (v8/*: any*/),
                          (v2/*: any*/)
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "createdAt",
                        "args": null,
                        "storageKey": null
                      },
                      (v2/*: any*/),
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
            "name": "members",
            "args": (v9/*: any*/),
            "handle": "connection",
            "key": "UserGroupUserList_members",
            "filters": [
              "search"
            ]
          },
          (v4/*: any*/),
          (v6/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "UserGroupViewPageQuery",
    "id": null,
    "text": "query UserGroupViewPageQuery(\n  $userGroupId: ID\n) {\n  currentSession {\n    user {\n      ...UserGroupLeaveDialog_user\n      id\n    }\n    id\n  }\n  userGroup(id: $userGroupId) {\n    ...PresentableViewPageHeader_presentable\n    ...UserGroupInviteDialog_userGroup\n    ...UserGroupRemoveDialog_userGroup\n    ...UserGroupLeaveDialog_userGroup\n    ...UserGroupUserList_userGroup\n    id\n    name\n    description\n    viewerCanUpdate\n    viewerIsMember\n  }\n}\n\nfragment NodeListItem_node on Node {\n  ...NodeListItem_presentable\n  ... on Owned {\n    owner {\n      __typename\n      ...PresentableAvatar_presentable\n      ...PresentableLink_presentable\n      ... on Presentable {\n        name\n      }\n      id\n    }\n  }\n  createdAt\n}\n\nfragment NodeListItem_presentable on Presentable {\n  presentableTypeName: __typename\n  ...PresentableAvatar_presentable\n  ...PresentableCardMedia_presentable\n  name\n  image {\n    url\n    id\n  }\n  description\n}\n\nfragment PresentableAvatar_presentable on Presentable {\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment PresentableCardMedia_presentable on Presentable {\n  ...PresentableAvatar_presentable\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment PresentableLink_presentable on Presentable {\n  __typename\n  id\n  name\n}\n\nfragment PresentableViewPageHeader_presentable on Presentable {\n  ...PresentableAvatar_presentable\n  name\n  image {\n    url\n    width\n    height\n    id\n  }\n  ... on Owned {\n    owner {\n      __typename\n      ...PresentableLink_presentable\n      id\n    }\n  }\n}\n\nfragment UserGroupInviteDialog_userGroup on UserGroup {\n  id\n  name\n}\n\nfragment UserGroupLeaveDialog_user on User {\n  id\n  name\n}\n\nfragment UserGroupLeaveDialog_userGroup on UserGroup {\n  id\n  name\n}\n\nfragment UserGroupRemoveDialog_userGroup on UserGroup {\n  id\n  name\n}\n\nfragment UserGroupUserList_userGroup on UserGroup {\n  id\n  viewerCanUpdate\n  members(first: 10) {\n    edges {\n      role\n      node {\n        ...NodeListItem_node\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ef7b9e1eccc1671b0ba4e30252b0726d';
module.exports = node;
