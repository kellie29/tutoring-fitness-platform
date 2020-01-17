/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProgramTrackActionResponseCard_programTrackActionResponse$ref: FragmentReference;
declare export opaque type ProgramTrackActionResponseCard_programTrackActionResponse$fragmentType: ProgramTrackActionResponseCard_programTrackActionResponse$ref;
export type ProgramTrackActionResponseCard_programTrackActionResponse = {|
  +id: string,
  +createdAt: any,
  +action: {|
    +id: string,
    +name: string,
  |},
  +response: any,
  +$refType: ProgramTrackActionResponseCard_programTrackActionResponse$ref,
|};
export type ProgramTrackActionResponseCard_programTrackActionResponse$data = ProgramTrackActionResponseCard_programTrackActionResponse;
export type ProgramTrackActionResponseCard_programTrackActionResponse$key = {
  +$data?: ProgramTrackActionResponseCard_programTrackActionResponse$data,
  +$fragmentRefs: ProgramTrackActionResponseCard_programTrackActionResponse$ref,
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
  "name": "ProgramTrackActionResponseCard_programTrackActionResponse",
  "type": "ProgramTrackActionResponse",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
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
      "name": "action",
      "storageKey": null,
      "args": null,
      "concreteType": "ProgramTrackAction",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "response",
      "args": null,
      "storageKey": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '199f5e5d0660089bbbdaa82370fbd939';
module.exports = node;
