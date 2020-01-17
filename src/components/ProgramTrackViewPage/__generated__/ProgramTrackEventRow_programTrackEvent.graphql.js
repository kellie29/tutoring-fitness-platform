/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ProgramTrackActionResponseRow_programTrackActionResponse$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProgramTrackEventRow_programTrackEvent$ref: FragmentReference;
declare export opaque type ProgramTrackEventRow_programTrackEvent$fragmentType: ProgramTrackEventRow_programTrackEvent$ref;
export type ProgramTrackEventRow_programTrackEvent = {|
  +id: string,
  +name: string,
  +actionResponses: {|
    +edges: $ReadOnlyArray<{|
      +node: {|
        +id: string,
        +$fragmentRefs: ProgramTrackActionResponseRow_programTrackActionResponse$ref,
      |}
    |}>
  |},
  +$refType: ProgramTrackEventRow_programTrackEvent$ref,
|};
export type ProgramTrackEventRow_programTrackEvent$data = ProgramTrackEventRow_programTrackEvent;
export type ProgramTrackEventRow_programTrackEvent$key = {
  +$data?: ProgramTrackEventRow_programTrackEvent$data,
  +$fragmentRefs: ProgramTrackEventRow_programTrackEvent$ref,
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
  "name": "ProgramTrackEventRow_programTrackEvent",
  "type": "ProgramTrackEvent",
  "metadata": null,
  "argumentDefinitions": [],
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
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "ProgramTrackActionResponseEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "ProgramTrackActionResponse",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "kind": "FragmentSpread",
                  "name": "ProgramTrackActionResponseRow_programTrackActionResponse",
                  "args": null
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
(node/*: any*/).hash = 'eb0c64d7459361fc991931cd4ecd7fc5';
module.exports = node;
