/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type NodeListItem_node$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserGroupUserList_userGroup$ref: FragmentReference;
declare export opaque type UserGroupUserList_userGroup$fragmentType: UserGroupUserList_userGroup$ref;
export type UserGroupUserList_userGroup = {|
  +id: string,
  +viewerCanUpdate: ?boolean,
  +members: {|
    +edges: $ReadOnlyArray<{|
      +role: string,
      +node: {|
        +id: string,
        +$fragmentRefs: NodeListItem_node$ref,
      |},
    |}>
  |},
  +$refType: UserGroupUserList_userGroup$ref,
|};
export type UserGroupUserList_userGroup$data = UserGroupUserList_userGroup;
export type UserGroupUserList_userGroup$key = {
  +$data?: UserGroupUserList_userGroup$data,
  +$fragmentRefs: UserGroupUserList_userGroup$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "UserGroupUserList_userGroup",
  "type": "UserGroup",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "members"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "search",
      "type": "String",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int",
      "defaultValue": 10
    },
    {
      "kind": "LocalArgument",
      "name": "cursor",
      "type": "ID",
      "defaultValue": null
    }
  ],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "viewerCanUpdate",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": "members",
      "name": "__UserGroupUserList_members_connection",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "search",
          "variableName": "search"
        }
      ],
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
                (v0/*: any*/),
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "NodeListItem_node",
                  "args": null
                }
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
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '312dc17a847e57d7af3079de126defc2';
module.exports = node;
