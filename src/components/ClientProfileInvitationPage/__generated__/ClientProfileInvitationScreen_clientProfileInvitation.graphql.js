/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PresentableAvatar_presentable$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ClientProfileInvitationScreen_clientProfileInvitation$ref: FragmentReference;
declare export opaque type ClientProfileInvitationScreen_clientProfileInvitation$fragmentType: ClientProfileInvitationScreen_clientProfileInvitation$ref;
export type ClientProfileInvitationScreen_clientProfileInvitation = {|
  +id: string,
  +token: string,
  +clientProfile: {|
    +owner: {|
      +id: string,
      +name?: string,
      +$fragmentRefs: PresentableAvatar_presentable$ref,
    |}
  |},
  +$refType: ClientProfileInvitationScreen_clientProfileInvitation$ref,
|};
export type ClientProfileInvitationScreen_clientProfileInvitation$data = ClientProfileInvitationScreen_clientProfileInvitation;
export type ClientProfileInvitationScreen_clientProfileInvitation$key = {
  +$data?: ClientProfileInvitationScreen_clientProfileInvitation$data,
  +$fragmentRefs: ClientProfileInvitationScreen_clientProfileInvitation$ref,
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
  "name": "ClientProfileInvitationScreen_clientProfileInvitation",
  "type": "ClientProfileInvitation",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "token",
      "args": null,
      "storageKey": null
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
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "owner",
          "storageKey": null,
          "args": null,
          "concreteType": null,
          "plural": false,
          "selections": [
            (v0/*: any*/),
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
                  "name": "name",
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
(node/*: any*/).hash = 'b0b2d1f931202cb3fb552b4c0aa23540';
module.exports = node;
