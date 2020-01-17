/**
 * @flow
 * @relayHash 04d04a4d8029d6435c7c6fc14c139e35
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CloneProgramModulesInput = {|
  ids: $ReadOnlyArray<string>,
  programId?: ?string,
|};
export type ProgramAddProgramModulesDialogMutationVariables = {|
  input: CloneProgramModulesInput
|};
export type ProgramAddProgramModulesDialogMutationResponse = {|
  +cloneProgramModules: {|
    +programModules: $ReadOnlyArray<{|
      +id: string,
      +program: ?{|
        +id: string
      |},
      +programModuleGroup: ?{|
        +id: string
      |},
    |}>
  |}
|};
export type ProgramAddProgramModulesDialogMutation = {|
  variables: ProgramAddProgramModulesDialogMutationVariables,
  response: ProgramAddProgramModulesDialogMutationResponse,
|};
*/


/*
mutation ProgramAddProgramModulesDialogMutation(
  $input: CloneProgramModulesInput!
) {
  cloneProgramModules(input: $input) {
    programModules {
      id
      program {
        id
      }
      programModuleGroup {
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
    "type": "CloneProgramModulesInput!",
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
    "name": "cloneProgramModules",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CloneProgramModulesPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "programModules",
        "storageKey": null,
        "args": null,
        "concreteType": "ProgramModule",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "program",
            "storageKey": null,
            "args": null,
            "concreteType": "Program",
            "plural": false,
            "selections": (v2/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "programModuleGroup",
            "storageKey": null,
            "args": null,
            "concreteType": "ProgramModuleGroup",
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
    "name": "ProgramAddProgramModulesDialogMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramAddProgramModulesDialogMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ProgramAddProgramModulesDialogMutation",
    "id": null,
    "text": "mutation ProgramAddProgramModulesDialogMutation(\n  $input: CloneProgramModulesInput!\n) {\n  cloneProgramModules(input: $input) {\n    programModules {\n      id\n      program {\n        id\n      }\n      programModuleGroup {\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a90c9a191609ce81648d62422833d08f';
module.exports = node;
