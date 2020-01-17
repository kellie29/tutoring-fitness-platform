/**
 * @flow
 * @relayHash a7a6b52cad5b1391ebc6a754fab69234
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateProgramInput = {|
  id: string,
  name?: ?string,
  image?: ?any,
  description?: ?string,
  duration?: ?string,
  isPublic?: ?boolean,
  ownerId?: ?string,
  tagId?: ?string,
  reminderGroupName?: ?string,
  chatEnabled?: ?boolean,
  trackChatEnabled?: ?boolean,
|};
export type ProgramReminderGroupUpdateDialogUpdateProgramMutationVariables = {|
  input: UpdateProgramInput
|};
export type ProgramReminderGroupUpdateDialogUpdateProgramMutationResponse = {|
  +updateProgram: {|
    +program: {|
      +id: string,
      +reminderGroupName: ?string,
    |}
  |}
|};
export type ProgramReminderGroupUpdateDialogUpdateProgramMutation = {|
  variables: ProgramReminderGroupUpdateDialogUpdateProgramMutationVariables,
  response: ProgramReminderGroupUpdateDialogUpdateProgramMutationResponse,
|};
*/


/*
mutation ProgramReminderGroupUpdateDialogUpdateProgramMutation(
  $input: UpdateProgramInput!
) {
  updateProgram(input: $input) {
    program {
      id
      reminderGroupName
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateProgramInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateProgram",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateProgramPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "program",
        "storageKey": null,
        "args": null,
        "concreteType": "Program",
        "plural": false,
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
            "name": "reminderGroupName",
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
    "name": "ProgramReminderGroupUpdateDialogUpdateProgramMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramReminderGroupUpdateDialogUpdateProgramMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ProgramReminderGroupUpdateDialogUpdateProgramMutation",
    "id": null,
    "text": "mutation ProgramReminderGroupUpdateDialogUpdateProgramMutation(\n  $input: UpdateProgramInput!\n) {\n  updateProgram(input: $input) {\n    program {\n      id\n      reminderGroupName\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'da0adcfe19aa134b8c4f8ef68da8bd62';
module.exports = node;
