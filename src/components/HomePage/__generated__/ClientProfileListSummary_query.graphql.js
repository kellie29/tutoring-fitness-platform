/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ClientProfileListItem_clientProfile$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ClientProfileListSummary_query$ref: FragmentReference;
declare export opaque type ClientProfileListSummary_query$fragmentType: ClientProfileListSummary_query$ref;
export type ClientProfileListSummary_query = {|
  +clientProfiles: {|
    +edges: $ReadOnlyArray<{|
      +node: {|
        +id: string,
        +$fragmentRefs: ClientProfileListItem_clientProfile$ref,
      |}
    |}>
  |},
  +$refType: ClientProfileListSummary_query$ref,
|};
export type ClientProfileListSummary_query$data = ClientProfileListSummary_query;
export type ClientProfileListSummary_query$key = {
  +$data?: ClientProfileListSummary_query$data,
  +$fragmentRefs: ClientProfileListSummary_query$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ClientProfileListSummary_query",
  "type": "Query",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "clientProfiles"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "eventsFilter",
      "type": "ProgramTrackEventFilterInput",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "clientProfiles",
      "name": "__ClientProfileList_clientProfiles_connection",
      "storageKey": "__ClientProfileList_clientProfiles_connection(filter:{\"ownerId\":\"me\"})",
      "args": [
        {
          "kind": "Literal",
          "name": "filter",
          "value": {
            "ownerId": "me"
          }
        }
      ],
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
                  "alias": null,
                  "name": "id",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "ClientProfileListItem_clientProfile",
                  "args": [
                    {
                      "kind": "Variable",
                      "name": "eventsFilter",
                      "variableName": "eventsFilter"
                    }
                  ]
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
// prettier-ignore
(node/*: any*/).hash = '77350459532befe2dfa96c0bd6314268';
module.exports = node;
