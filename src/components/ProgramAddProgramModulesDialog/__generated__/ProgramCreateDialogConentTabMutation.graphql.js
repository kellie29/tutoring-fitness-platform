/**
 * @flow
 * @relayHash 441936e4b74aa97a9045c7bda287cd0e
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
export type ProgramCreateDialogConentTabMutationVariables = {|
  input: CreateProgramInput
|};
export type ProgramCreateDialogConentTabMutationResponse = {|
  +createProgram: {|
    +program: {|
      +id: string
    |}
  |}
|};
export type ProgramCreateDialogConentTabMutation = {|
  variables: ProgramCreateDialogConentTabMutationVariables,
  response: ProgramCreateDialogConentTabMutationResponse,
|};
*/


/*
mutation ProgramCreateDialogConentTabMutation(
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
    "name": "ProgramCreateDialogConentTabMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramCreateDialogConentTabMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ProgramCreateDialogConentTabMutation",
    "id": null,
    "text": "mutation ProgramCreateDialogConentTabMutation(\n  $input: CreateProgramInput!\n) {\n  createProgram(input: $input) {\n    program {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bbd3e8400f3ec13da993ad63846923c0';
module.exports = node;
