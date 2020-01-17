/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type NodeListItem_node$ref = any;
type PresentableAvatar_presentable$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ClientProfileListItem_clientProfile$ref: FragmentReference;
declare export opaque type ClientProfileListItem_clientProfile$fragmentType: ClientProfileListItem_clientProfile$ref;
export type ClientProfileListItem_clientProfile = {|
  +id: string,
  +programTracks: {|
    +edges: $ReadOnlyArray<{|
      +node: {|
        +events: {|
          +edges: $ReadOnlyArray<{|
            +node: {|
              +startDate: any,
              +hasResponse: boolean,
            |}
          |}>
        |}
      |}
    |}>
  |},
  +$fragmentRefs: NodeListItem_node$ref & PresentableAvatar_presentable$ref,
  +$refType: ClientProfileListItem_clientProfile$ref,
|};
export type ClientProfileListItem_clientProfile$data = ClientProfileListItem_clientProfile;
export type ClientProfileListItem_clientProfile$key = {
  +$data?: ClientProfileListItem_clientProfile$data,
  +$fragmentRefs: ClientProfileListItem_clientProfile$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "Literal",
  "name": "first",
  "value": 9999
};
return {
  "kind": "Fragment",
  "name": "ClientProfileListItem_clientProfile",
  "type": "ClientProfile",
  "metadata": null,
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
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "programTracks",
      "storageKey": "programTracks(first:9999)",
      "args": [
        (v0/*: any*/)
      ],
      "concreteType": "ProgramTrackConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "ProgramTrackEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "ProgramTrack",
              "plural": false,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "events",
                  "storageKey": null,
                  "args": [
                    {
                      "kind": "Variable",
                      "name": "filter",
                      "variableName": "eventsFilter"
                    },
                    (v0/*: any*/)
                  ],
                  "concreteType": "ProgramTrackEventConnection",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "edges",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "ProgramTrackEventEdge",
                      "plural": true,
                      "selections": [
                        {
                          "kind": "LinkedField",
                          "alias": null,
                          "name": "node",
                          "storageKey": null,
                          "args": null,
                          "concreteType": "ProgramTrackEvent",
                          "plural": false,
                          "selections": [
                            {
                              "kind": "ScalarField",
                              "alias": null,
                              "name": "startDate",
                              "args": null,
                              "storageKey": null
                            },
                            {
                              "kind": "ScalarField",
                              "alias": null,
                              "name": "hasResponse",
                              "args": null,
                              "storageKey": null
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
    },
    {
      "kind": "FragmentSpread",
      "name": "NodeListItem_node",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PresentableAvatar_presentable",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '03328c14e5746114a13dfdd709ebe662';
module.exports = node;
