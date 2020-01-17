/**
 * @flow
 * @relayHash 0271cf69d9b879ce29970554705936d2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CloneProgramInput = {|
  id: string,
  name?: ?string,
|};
export type ProgramCloneDialogCloneProgramMutationVariables = {|
  input: CloneProgramInput
|};
export type ProgramCloneDialogCloneProgramMutationResponse = {|
  +cloneProgram: {|
    +program: {|
      +id: string
    |}
  |}
|};
export type ProgramCloneDialogCloneProgramMutation = {|
  variables: ProgramCloneDialogCloneProgramMutationVariables,
  response: ProgramCloneDialogCloneProgramMutationResponse,
|};
*/


/*
mutation ProgramCloneDialogCloneProgramMutation(
  $input: CloneProgramInput!
) {
  cloneProgram(input: $input) {
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
    "type": "CloneProgramInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "cloneProgram",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CloneProgramPayload",
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
    "name": "ProgramCloneDialogCloneProgramMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramCloneDialogCloneProgramMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ProgramCloneDialogCloneProgramMutation",
    "id": null,
    "text": "mutation ProgramCloneDialogCloneProgramMutation(\n  $input: CloneProgramInput!\n) {\n  cloneProgram(input: $input) {\n    program {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bdcdd9c60d5bfb9b1750967601c42d7f';
module.exports = node;
