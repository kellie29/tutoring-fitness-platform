/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProgramTrackInvitationScreen_program$ref: FragmentReference;
declare export opaque type ProgramTrackInvitationScreen_program$fragmentType: ProgramTrackInvitationScreen_program$ref;
export type ProgramTrackInvitationScreen_program = {|
  +name: string,
  +$refType: ProgramTrackInvitationScreen_program$ref,
|};
export type ProgramTrackInvitationScreen_program$data = ProgramTrackInvitationScreen_program;
export type ProgramTrackInvitationScreen_program$key = {
  +$data?: ProgramTrackInvitationScreen_program$data,
  +$fragmentRefs: ProgramTrackInvitationScreen_program$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProgramTrackInvitationScreen_program",
  "type": "Program",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '1b66197e2080021cbb458ea5539ffa48';
module.exports = node;
