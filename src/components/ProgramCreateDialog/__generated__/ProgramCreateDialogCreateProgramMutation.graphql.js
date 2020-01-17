/**
 * @flow
 * @relayHash b952393b97b468868bcd31f6dbfd082e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateProgramInput = {|
  name: string,
  description: string,
  duration: string,
  isPublic?: ?boolean,
  tagId?: ?string,
  chatEnabled?: ?boolean,
  trackChatEnabled?: ?boolean,
|};
export type ProgramCreateDialogCreateProgramMutationVariables = {|
  input: CreateProgramInput
|};
export type ProgramCreateDialogCreateProgramMutationResponse = {|
  +createProgram: {|
    +program: {|
      +id: string
    |}
  |}
|};
export type ProgramCreateDialogCreateProgramMutation = {|
  variables: ProgramCreateDialogCreateProgramMutationVariables,
  response: ProgramCreateDialogCreateProgramMutationResponse,
|};
*/


/*
mutation ProgramCreateDialogCreateProgramMutation(
  $input: CreateProgramInput!
) {
  createProgram(input: $input) {
    program {
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
    "type": "CreateProgramInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createProgram",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateProgramPayload",
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
    "name": "ProgramCreateDialogCreateProgramMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramCreateDialogCreateProgramMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ProgramCreateDialogCreateProgramMutation",
    "id": null,
    "text": "mutation ProgramCreateDialogCreateProgramMutation(\n  $input: CreateProgramInput!\n) {\n  createProgram(input: $input) {\n    program {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '44c58aca2fc668e1676333b6bce26fc0';
module.exports = node;
