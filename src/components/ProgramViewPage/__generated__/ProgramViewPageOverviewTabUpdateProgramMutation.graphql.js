/**
 * @flow
 * @relayHash f13607b728f221a25e632296dbebd490
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PresentableAvatar_presentable$ref = any;
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
export type ProgramViewPageOverviewTabUpdateProgramMutationVariables = {|
  input: UpdateProgramInput
|};
export type ProgramViewPageOverviewTabUpdateProgramMutationResponse = {|
  +updateProgram: {|
    +program: {|
      +$fragmentRefs: PresentableAvatar_presentable$ref
    |}
  |}
|};
export type ProgramViewPageOverviewTabUpdateProgramMutation = {|
  variables: ProgramViewPageOverviewTabUpdateProgramMutationVariables,
  response: ProgramViewPageOverviewTabUpdateProgramMutationResponse,
|};
*/


/*
mutation ProgramViewPageOverviewTabUpdateProgramMutation(
  $input: UpdateProgramInput!
) {
  updateProgram(input: $input) {
    program {
      ...PresentableAvatar_presentable
      id
    }
  }
}

fragment PresentableAvatar_presentable on Presentable {
  name
  image {
    url
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
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProgramViewPageOverviewTabUpdateProgramMutation",
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
                "name": "PresentableAvatar_presentable",
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
    "name": "ProgramViewPageOverviewTabUpdateProgramMutation",
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
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "url",
                    "args": null,
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ]
              },
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "ProgramViewPageOverviewTabUpdateProgramMutation",
    "id": null,
    "text": "mutation ProgramViewPageOverviewTabUpdateProgramMutation(\n  $input: UpdateProgramInput!\n) {\n  updateProgram(input: $input) {\n    program {\n      ...PresentableAvatar_presentable\n      id\n    }\n  }\n}\n\nfragment PresentableAvatar_presentable on Presentable {\n  name\n  image {\n    url\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '84a991172b97a17db21cf8ff84b9ea06';
module.exports = node;
