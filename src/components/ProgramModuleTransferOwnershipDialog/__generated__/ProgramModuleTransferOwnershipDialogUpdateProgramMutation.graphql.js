/**
 * @flow
 * @relayHash 93bdffee90095b973897fdaeaa772b78
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProgramModuleTransferOwnershipDialog_programModule$ref = any;
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
export type ProgramModuleTransferOwnershipDialogUpdateProgramMutationVariables = {|
  input: UpdateProgramModuleInput
|};
export type ProgramModuleTransferOwnershipDialogUpdateProgramMutationResponse = {|
  +updateProgramModule: {|
    +programModule: {|
      +owner: {|
        +id?: string
      |},
      +$fragmentRefs: ProgramModuleTransferOwnershipDialog_programModule$ref,
    |}
  |}
|};
export type ProgramModuleTransferOwnershipDialogUpdateProgramMutation = {|
  variables: ProgramModuleTransferOwnershipDialogUpdateProgramMutationVariables,
  response: ProgramModuleTransferOwnershipDialogUpdateProgramMutationResponse,
|};
*/


/*
mutation ProgramModuleTransferOwnershipDialogUpdateProgramMutation(
  $input: UpdateProgramModuleInput!
) {
  updateProgramModule(input: $input) {
    programModule {
      ...ProgramModuleTransferOwnershipDialog_programModule
      owner {
        __typename
        ... on User {
          id
        }
        ... on UserGroup {
          id
        }
        id
      }
      id
    }
  }
}

fragment ProgramModuleTransferOwnershipDialog_programModule on ProgramModule {
  id
  name
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = [
  (v2/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProgramModuleTransferOwnershipDialogUpdateProgramMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateProgramModule",
        "storageKey": null,
        "args": (v1/*: any*/),
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
                "kind": "LinkedField",
                "alias": null,
                "name": "owner",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "type": "User",
                    "selections": (v3/*: any*/)
                  },
                  {
                    "kind": "InlineFragment",
                    "type": "UserGroup",
                    "selections": (v3/*: any*/)
                  }
                ]
              },
              {
                "kind": "FragmentSpread",
                "name": "ProgramModuleTransferOwnershipDialog_programModule",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramModuleTransferOwnershipDialogUpdateProgramMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateProgramModule",
        "storageKey": null,
        "args": (v1/*: any*/),
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
              (v2/*: any*/),
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
                "name": "owner",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "ProgramModuleTransferOwnershipDialogUpdateProgramMutation",
    "id": null,
    "text": "mutation ProgramModuleTransferOwnershipDialogUpdateProgramMutation(\n  $input: UpdateProgramModuleInput!\n) {\n  updateProgramModule(input: $input) {\n    programModule {\n      ...ProgramModuleTransferOwnershipDialog_programModule\n      owner {\n        __typename\n        ... on User {\n          id\n        }\n        ... on UserGroup {\n          id\n        }\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment ProgramModuleTransferOwnershipDialog_programModule on ProgramModule {\n  id\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c4823dcb8813ddf2250482a452d8552a';
module.exports = node;
