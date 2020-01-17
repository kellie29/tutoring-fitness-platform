/**
 * @flow
 * @relayHash 065dd6169a10690d3d8a75f10d4867d0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateProgramTrackInput = {|
  programId?: ?string,
  programInvitationToken?: ?string,
  clientProfileId?: ?string,
  userId?: ?string,
  startDate?: ?string,
|};
export type ProgramTrackCreateDialogMutationVariables = {|
  input: CreateProgramTrackInput
|};
export type ProgramTrackCreateDialogMutationResponse = {|
  +createProgramTrack: {|
    +programTrack: {|
      +id: string,
      +user: ?{|
        +id: string
      |},
      +clientProfile: ?{|
        +id: string
      |},
    |}
  |}
|};
export type ProgramTrackCreateDialogMutation = {|
  variables: ProgramTrackCreateDialogMutationVariables,
  response: ProgramTrackCreateDialogMutationResponse,
|};
*/


/*
mutation ProgramTrackCreateDialogMutation(
  $input: CreateProgramTrackInput!
) {
  createProgramTrack(input: $input) {
    programTrack {
      id
      user {
        id
      }
      clientProfile {
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateProgramTrackInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  (v1/*: any*/)
],
v3 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createProgramTrack",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateProgramTrackPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "programTrack",
        "storageKey": null,
        "args": null,
        "concreteType": "ProgramTrack",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v2/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "clientProfile",
            "storageKey": null,
            "args": null,
            "concreteType": "ClientProfile",
            "plural": false,
            "selections": (v2/*: any*/)
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProgramTrackCreateDialogMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramTrackCreateDialogMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ProgramTrackCreateDialogMutation",
    "id": null,
    "text": "mutation ProgramTrackCreateDialogMutation(\n  $input: CreateProgramTrackInput!\n) {\n  createProgramTrack(input: $input) {\n    programTrack {\n      id\n      user {\n        id\n      }\n      clientProfile {\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '58697749c8f835402d99452a22896eab';
module.exports = node;
