/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PresentableAvatar_presentable$ref = any;
type PresentableCardMedia_presentable$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type NotificationListSummary_query$ref: FragmentReference;
declare export opaque type NotificationListSummary_query$fragmentType: NotificationListSummary_query$ref;
export type NotificationListSummary_query = {|
  +notifications: {|
    +edges: $ReadOnlyArray<{|
      +node: ?{|
        +id: string,
        +type: string,
        +isSeen: boolean,
        +isRead: boolean,
        +createdAt: any,
        +from: {|
          +__typename: string,
          +id: string,
          +name: string,
          +email?: string,
          +$fragmentRefs: PresentableCardMedia_presentable$ref & PresentableAvatar_presentable$ref,
        |},
        +to: {|
          +__typename: "User",
          +id: string,
          +name: string,
        |} | {|
          // This will never be '%other', but we need some
          // value in case none of the concrete values match.
          +__typename: "%other"
        |},
        +object: {|
          +typeName: string,
          +id: string,
          +name: string,
          +clientProfile?: {|
            +id: string
          |},
          +track?: {|
            +id: string,
            +clientProfile: ?{|
              +id: string
            |},
            +program: {|
              +name: string
            |},
          |},
        |},
      |}
    |}>
  |},
  +$refType: NotificationListSummary_query$ref,
|};
export type NotificationListSummary_query$data = NotificationListSummary_query;
export type NotificationListSummary_query$key = {
  +$data?: NotificationListSummary_query$data,
  +$fragmentRefs: NotificationListSummary_query$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "clientProfile",
  "storageKey": null,
  "args": null,
  "concreteType": "ClientProfile",
  "plural": false,
  "selections": [
    (v0/*: any*/)
  ]
};
return {
  "kind": "Fragment",
  "name": "NotificationListSummary_query",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
        {
          "kind": "Literal",
          "name": "first",
          "value": 3
        }
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
                (v0/*: any*/),
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
                  "selections": [
                    (v1/*: any*/),
                    (v0/*: any*/),
                    (v2/*: any*/),
                    {
                      "kind": "FragmentSpread",
                      "name": "PresentableCardMedia_presentable",
                      "args": null
                    },
                    {
                      "kind": "FragmentSpread",
                      "name": "PresentableAvatar_presentable",
                      "args": null
                    },
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
                    {
                      "kind": "InlineFragment",
                      "type": "User",
                      "selections": [
                        (v1/*: any*/),
                        (v0/*: any*/),
                        (v2/*: any*/)
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
                    {
                      "kind": "ScalarField",
                      "alias": "typeName",
                      "name": "__typename",
                      "args": null,
                      "storageKey": null
                    },
                    (v0/*: any*/),
                    (v2/*: any*/),
                    {
                      "kind": "InlineFragment",
                      "type": "ClientProfileInvitation",
                      "selections": [
                        (v3/*: any*/)
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
                            (v0/*: any*/),
                            (v3/*: any*/),
                            {
                              "kind": "LinkedField",
                              "alias": null,
                              "name": "program",
                              "storageKey": null,
                              "args": null,
                              "concreteType": "Program",
                              "plural": false,
                              "selections": [
                                (v2/*: any*/)
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
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fa0c0aa23e81bb46d2818e38afbb049d';
module.exports = node;
