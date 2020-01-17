/**
 * @flow
 * @relayHash 9532ef2eccee166f592e812451d0abf1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SendProgramInvitationSmsInput = {|
  id: string,
  phoneNumber: string,
|};
export type ProgramInvitationSendSmsDialogMutationVariables = {|
  input: SendProgramInvitationSmsInput
|};
export type ProgramInvitationSendSmsDialogMutationResponse = {|
  +sendProgramInvitationSms: {|
    +programInvitation: {|
      +id: string
    |}
  |}
|};
export type ProgramInvitationSendSmsDialogMutation = {|
  variables: ProgramInvitationSendSmsDialogMutationVariables,
  response: ProgramInvitationSendSmsDialogMutationResponse,
|};
*/


/*
mutation ProgramInvitationSendSmsDialogMutation(
  $input: SendProgramInvitationSmsInput!
) {
  sendProgramInvitationSms(input: $input) {
    programInvitation {
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SendProgramInvitationSmsInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "sendProgramInvitationSms",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "SendProgramInvitationSmsPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "programInvitation",
        "storageKey": null,
        "args": null,
        "concreteType": "ProgramInvitation",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
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
    "name": "ProgramInvitationSendSmsDialogMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramInvitationSendSmsDialogMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ProgramInvitationSendSmsDialogMutation",
    "id": null,
    "text": "mutation ProgramInvitationSendSmsDialogMutation(\n  $input: SendProgramInvitationSmsInput!\n) {\n  sendProgramInvitationSms(input: $input) {\n    programInvitation {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '75dd5826b38a86796949b80ad0577589';
module.exports = node;
