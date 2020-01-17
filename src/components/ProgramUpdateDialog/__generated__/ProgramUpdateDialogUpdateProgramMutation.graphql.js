/**
 * @flow
 * @relayHash eab2270311a088fbd9a1e458be1102e6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProgramUpdateDialog_program$ref = any;
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
export type ProgramUpdateDialogUpdateProgramMutationVariables = {|
  input: UpdateProgramInput
|};
export type ProgramUpdateDialogUpdateProgramMutationResponse = {|
  +updateProgram: {|
    +program: {|
      +$fragmentRefs: ProgramUpdateDialog_program$ref
    |}
  |}
|};
export type ProgramUpdateDialogUpdateProgramMutation = {|
  variables: ProgramUpdateDialogUpdateProgramMutationVariables,
  response: ProgramUpdateDialogUpdateProgramMutationResponse,
|};
*/


/*
mutation ProgramUpdateDialogUpdateProgramMutation(
  $input: UpdateProgramInput!
) {
  updateProgram(input: $input) {
    program {
      ...ProgramUpdateDialog_program
      id
    }
  }
}

fragment PresentableAvatarInput_presentable on Presentable {
  ...PresentableAvatar_presentable
  id
}

fragment PresentableAvatar_presentable on Presentable {
  name
  image {
    url
    id
  }
}

fragment ProgramUpdateDialog_program on Program {
  ...PresentableAvatarInput_presentable
  id
  name
  description
  duration
  isPublic
  chatEnabled
  trackChatEnabled
  modules {
    name
    description
    type
    data
    id
  }
  tag {
    id
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProgramUpdateDialogUpdateProgramMutation",
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
                "kind": "FragmentSpread",
                "name": "ProgramUpdateDialog_program",
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
    "name": "ProgramUpdateDialogUpdateProgramMutation",
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
                "kind": "LinkedField",
                "alias": null,
                "name": "image",
                "storageKey": null,
                "args": null,
                "concreteType": "Image",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "url",
                    "args": null,
                    "storageKey": null
                  },
                  (v3/*: any*/)
                ]
              },
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "duration",
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
                "kind": "ScalarField",
                "alias": null,
                "name": "chatEnabled",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "trackChatEnabled",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "modules",
                "storageKey": null,
                "args": null,
                "concreteType": "ProgramModule",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v4/*: any*/),
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
                  },
                  (v3/*: any*/)
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "tag",
                "storageKey": null,
                "args": null,
                "concreteType": "Tag",
                "plural": false,
                "selections": [
                  (v3/*: any*/)
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
    "name": "ProgramUpdateDialogUpdateProgramMutation",
    "id": null,
    "text": "mutation ProgramUpdateDialogUpdateProgramMutation(\n  $input: UpdateProgramInput!\n) {\n  updateProgram(input: $input) {\n    program {\n      ...ProgramUpdateDialog_program\n      id\n    }\n  }\n}\n\nfragment PresentableAvatarInput_presentable on Presentable {\n  ...PresentableAvatar_presentable\n  id\n}\n\nfragment PresentableAvatar_presentable on Presentable {\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment ProgramUpdateDialog_program on Program {\n  ...PresentableAvatarInput_presentable\n  id\n  name\n  description\n  duration\n  isPublic\n  chatEnabled\n  trackChatEnabled\n  modules {\n    name\n    description\n    type\n    data\n    id\n  }\n  tag {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '121f991edf4abdce9cf7339f5a99686d';
module.exports = node;
