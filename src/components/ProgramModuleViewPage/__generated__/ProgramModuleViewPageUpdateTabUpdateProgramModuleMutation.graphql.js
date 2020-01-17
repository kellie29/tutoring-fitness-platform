/**
 * @flow
 * @relayHash 82a69cf42e40484fca9481fa5d56a3f7
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
export type ProgramModuleViewPageUpdateTabUpdateProgramModuleMutationVariables = {|
  input: UpdateProgramModuleInput
|};
export type ProgramModuleViewPageUpdateTabUpdateProgramModuleMutationResponse = {|
  +updateProgramModule: {|
    +programModule: {|
      +id: string,
      +type: string,
      +name: string,
      +image: ?{|
        +id: string
      |},
      +description: ?string,
      +data: any,
      +isPublic: boolean,
      +tag: ?{|
        +id: string
      |},
    |}
  |}
|};
export type ProgramModuleViewPageUpdateTabUpdateProgramModuleMutation = {|
  variables: ProgramModuleViewPageUpdateTabUpdateProgramModuleMutationVariables,
  response: ProgramModuleViewPageUpdateTabUpdateProgramModuleMutationResponse,
|};
*/


/*
mutation ProgramModuleViewPageUpdateTabUpdateProgramModuleMutation(
  $input: UpdateProgramModuleInput!
) {
  updateProgramModule(input: $input) {
    programModule {
      id
      type
      name
      image {
        id
      }
      description
      data
      isPublic
      tag {
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
    "type": "UpdateProgramModuleInput!",
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
          (v1/*: any*/),
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
            "selections": (v2/*: any*/)
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
            "name": "data",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isPublic",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "tag",
            "storageKey": null,
            "args": null,
            "concreteType": "Tag",
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
    "name": "ProgramModuleViewPageUpdateTabUpdateProgramModuleMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramModuleViewPageUpdateTabUpdateProgramModuleMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ProgramModuleViewPageUpdateTabUpdateProgramModuleMutation",
    "id": null,
    "text": "mutation ProgramModuleViewPageUpdateTabUpdateProgramModuleMutation(\n  $input: UpdateProgramModuleInput!\n) {\n  updateProgramModule(input: $input) {\n    programModule {\n      id\n      type\n      name\n      image {\n        id\n      }\n      description\n      data\n      isPublic\n      tag {\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '497021354d8c473893996d391e766113';
module.exports = node;
