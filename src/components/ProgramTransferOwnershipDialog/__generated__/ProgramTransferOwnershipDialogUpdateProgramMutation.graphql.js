/**
 * @flow
 * @relayHash ef4f27e493b77f42f91d75d056cc80af
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProgramTransferOwnershipDialog_program$ref = any;
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
export type ProgramTransferOwnershipDialogUpdateProgramMutationVariables = {|
  input: UpdateProgramInput
|};
export type ProgramTransferOwnershipDialogUpdateProgramMutationResponse = {|
  +updateProgram: {|
    +program: {|
      +owner: {|
        +id?: string
      |},
      +$fragmentRefs: ProgramTransferOwnershipDialog_program$ref,
    |}
  |}
|};
export type ProgramTransferOwnershipDialogUpdateProgramMutation = {|
  variables: ProgramTransferOwnershipDialogUpdateProgramMutationVariables,
  response: ProgramTransferOwnershipDialogUpdateProgramMutationResponse,
|};
*/


/*
mutation ProgramTransferOwnershipDialogUpdateProgramMutation(
  $input: UpdateProgramInput!
) {
  updateProgram(input: $input) {
    program {
      ...ProgramTransferOwnershipDialog_program
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

fragment ProgramTransferOwnershipDialog_program on Program {
  id
  name
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
    "name": "ProgramTransferOwnershipDialogUpdateProgramMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateProgram",
        "storageKey": null,
        "args": (v1/*: any*/),
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
                "name": "ProgramTransferOwnershipDialog_program",
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
    "name": "ProgramTransferOwnershipDialogUpdateProgramMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateProgram",
        "storageKey": null,
        "args": (v1/*: any*/),
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
    "name": "ProgramTransferOwnershipDialogUpdateProgramMutation",
    "id": null,
    "text": "mutation ProgramTransferOwnershipDialogUpdateProgramMutation(\n  $input: UpdateProgramInput!\n) {\n  updateProgram(input: $input) {\n    program {\n      ...ProgramTransferOwnershipDialog_program\n      owner {\n        __typename\n        ... on User {\n          id\n        }\n        ... on UserGroup {\n          id\n        }\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment ProgramTransferOwnershipDialog_program on Program {\n  id\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f84b4da3e004dc28b27d185de5c43ff8';
module.exports = node;
