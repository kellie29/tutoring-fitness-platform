/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type NodeListItem_node$ref = any;
type NodeListItem_presentable$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProgramViewPageParticipantsTabProgramTrackRow_programTrack$ref: FragmentReference;
declare export opaque type ProgramViewPageParticipantsTabProgramTrackRow_programTrack$fragmentType: ProgramViewPageParticipantsTabProgramTrackRow_programTrack$ref;
export type ProgramViewPageParticipantsTabProgramTrackRow_programTrack = {|
  +id: string,
  +program: {|
    +id: string,
    +name: string,
    +createdAt: any,
    +$fragmentRefs: NodeListItem_node$ref,
  |},
  +startDate: any,
  +endDate: ?any,
  +user: ?{|
    +$fragmentRefs: NodeListItem_presentable$ref
  |},
  +clientProfile: ?{|
    +id: string,
    +$fragmentRefs: NodeListItem_presentable$ref,
  |},
  +events: {|
    +edges: $ReadOnlyArray<{|
      +node: {|
        +startDate: any,
        +hasResponse: boolean,
      |}
    |}>
  |},
  +$refType: ProgramViewPageParticipantsTabProgramTrackRow_programTrack$ref,
|};
export type ProgramViewPageParticipantsTabProgramTrackRow_programTrack$data = ProgramViewPageParticipantsTabProgramTrackRow_programTrack;
export type ProgramViewPageParticipantsTabProgramTrackRow_programTrack$key = {
  +$data?: ProgramViewPageParticipantsTabProgramTrackRow_programTrack$data,
  +$fragmentRefs: ProgramViewPageParticipantsTabProgramTrackRow_programTrack$ref,
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
  "name": "startDate",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "FragmentSpread",
  "name": "NodeListItem_presentable",
  "args": null
};
return {
  "kind": "Fragment",
  "name": "ProgramViewPageParticipantsTabProgramTrackRow_programTrack",
  "type": "ProgramTrack",
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
    (v0/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "program",
      "storageKey": null,
      "args": null,
      "concreteType": "Program",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
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
          "kind": "FragmentSpread",
          "name": "NodeListItem_node",
          "args": null
        }
      ]
    },
    (v1/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "endDate",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "user",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [
        (v2/*: any*/)
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "clientProfile",
      "storageKey": null,
      "args": null,
      "concreteType": "ClientProfile",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        (v2/*: any*/)
      ]
    },
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
        {
          "kind": "Literal",
          "name": "first",
          "value": 9999
        }
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
                (v1/*: any*/),
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
};
})();
// prettier-ignore
(node/*: any*/).hash = '0c24dc1bcaf3c0a4cbc8198bec5d0a19';
module.exports = node;
