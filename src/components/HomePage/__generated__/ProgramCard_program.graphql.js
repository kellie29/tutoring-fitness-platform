/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PresentableCardMedia_presentable$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProgramCard_program$ref: FragmentReference;
declare export opaque type ProgramCard_program$fragmentType: ProgramCard_program$ref;
export type ProgramCard_program = {|
  +image: ?{|
    +url: any
  |},
  +id: string,
  +name: string,
  +tracks: {|
    +edgeCount: number,
    +edges: $ReadOnlyArray<{|
      +node: {|
        +events: {|
          +edges: $ReadOnlyArray<{|
            +node: {|
              +actionResponses: {|
                +edgeCount: number
              |}
            |}
          |}>
        |}
      |}
    |}>,
  |},
  +$fragmentRefs: PresentableCardMedia_presentable$ref,
  +$refType: ProgramCard_program$ref,
|};
export type ProgramCard_program$data = ProgramCard_program;
export type ProgramCard_program$key = {
  +$data?: ProgramCard_program$data,
  +$fragmentRefs: ProgramCard_program$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "edgeCount",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "ProgramCard_program",
  "type": "Program",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
        }
      ]
    },
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
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "tracks",
      "storageKey": null,
      "args": null,
      "concreteType": "ProgramTrackConnection",
      "plural": false,
      "selections": [
        (v0/*: any*/),
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
                  "args": null,
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
                              "kind": "LinkedField",
                              "alias": null,
                              "name": "actionResponses",
                              "storageKey": "actionResponses(first:1)",
                              "args": [
                                {
                                  "kind": "Literal",
                                  "name": "first",
                                  "value": 1
                                }
                              ],
                              "concreteType": "ProgramTrackActionResponseConnection",
                              "plural": false,
                              "selections": [
                                (v0/*: any*/)
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
    },
    {
      "kind": "FragmentSpread",
      "name": "PresentableCardMedia_presentable",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b5d4a5df6ca153adf0f6daaf11159287';
module.exports = node;
