/**
 * @flow
 * @relayHash 0342692a7b9d6517022cf891efd5a769
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateProgramModuleInput = {|
  id: string,
  name?: ?string,
  type?: ?string,
  description?: ?string,
  data?: ?any,
  programId?: ?string,
  isPublic?: ?boolean,
  ownerId?: ?string,
  tagId?: ?string,
  programModuleGroupId?: ?string,
  image?: ?any,
|};
export type ProgramModuleUpdateDialogUpdateProgramModuleMutationVariables = {|
  input: UpdateProgramModuleInput
|};
export type ProgramModuleUpdateDialogUpdateProgramModuleMutationResponse = {|
  +updateProgramModule: {|
    +programModule: {|
      +id: string,
      +name: string,
      +description: ?string,
      +type: string,
      +data: any,
    |}
  |}
|};
export type ProgramModuleUpdateDialogUpdateProgramModuleMutation = {|
  variables: ProgramModuleUpdateDialogUpdateProgramModuleMutationVariables,
  response: ProgramModuleUpdateDialogUpdateProgramModuleMutationResponse,
|};
*/


/*
mutation ProgramModuleUpdateDialogUpdateProgramModuleMutation(
  $input: UpdateProgramModuleInput!
) {
  updateProgramModule(input: $input) {
    programModule {
      id
      name
      description
      type
      data
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateProgramModuleInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateProgramModule",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateProgramModulePayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "programModule",
        "storageKey": null,
        "args": null,
        "concreteType": "ProgramModule",
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
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "type",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "data",
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
    "name": "ProgramModuleUpdateDialogUpdateProgramModuleMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramModuleUpdateDialogUpdateProgramModuleMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ProgramModuleUpdateDialogUpdateProgramModuleMutation",
    "id": null,
    "text": "mutation ProgramModuleUpdateDialogUpdateProgramModuleMutation(\n  $input: UpdateProgramModuleInput!\n) {\n  updateProgramModule(input: $input) {\n    programModule {\n      id\n      name\n      description\n      type\n      data\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b581ff8213b85764b9212093f37ed16c';
module.exports = node;
