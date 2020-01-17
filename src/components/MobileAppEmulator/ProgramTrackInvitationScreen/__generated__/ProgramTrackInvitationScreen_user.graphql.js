/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PresentableAvatar_presentable$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProgramTrackInvitationScreen_user$ref: FragmentReference;
declare export opaque type ProgramTrackInvitationScreen_user$fragmentType: ProgramTrackInvitationScreen_user$ref;
export type ProgramTrackInvitationScreen_user = {|
  +id: string,
  +name?: string,
  +image?: ?{|
    +url: any
  |},
  +$fragmentRefs: PresentableAvatar_presentable$ref,
  +$refType: ProgramTrackInvitationScreen_user$ref,
|};
export type ProgramTrackInvitationScreen_user$data = ProgramTrackInvitationScreen_user;
export type ProgramTrackInvitationScreen_user$key = {
  +$data?: ProgramTrackInvitationScreen_user$data,
  +$fragmentRefs: ProgramTrackInvitationScreen_user$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProgramTrackInvitationScreen_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
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
      "name": "name",
      "args": null,
      "storageKey": null
    },
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
      "kind": "FragmentSpread",
      "name": "PresentableAvatar_presentable",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '1efad3c3ccea628690c0155b1f8eca71';
module.exports = node;
