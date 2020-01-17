/**
 * @flow
 * @relayHash 221eaae3153399415f406de389ad47bf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateClientProfileInput = {|
  name: string,
  phoneNumber: string,
  email?: ?string,
  chatEnabled?: ?boolean,
|};
export type ClientProfileCreateDialogCreateClientProfileMutationVariables = {|
  input: CreateClientProfileInput
|};
export type ClientProfileCreateDialogCreateClientProfileMutationResponse = {|
  +createClientProfile: {|
    +clientProfile: {|
      +id: string
    |}
  |}
|};
export type ClientProfileCreateDialogCreateClientProfileMutation = {|
  variables: ClientProfileCreateDialogCreateClientProfileMutationVariables,
  response: ClientProfileCreateDialogCreateClientProfileMutationResponse,
|};
*/


/*
mutation ClientProfileCreateDialogCreateClientProfileMutation(
  $input: CreateClientProfileInput!
) {
  createClientProfile(input: $input) {
    clientProfile {
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
    "type": "CreateClientProfileInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createClientProfile",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateClientProfilePayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "clientProfile",
        "storageKey": null,
        "args": null,
        "concreteType": "ClientProfile",
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
    "name": "ClientProfileCreateDialogCreateClientProfileMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ClientProfileCreateDialogCreateClientProfileMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ClientProfileCreateDialogCreateClientProfileMutation",
    "id": null,
    "text": "mutation ClientProfileCreateDialogCreateClientProfileMutation(\n  $input: CreateClientProfileInput!\n) {\n  createClientProfile(input: $input) {\n    clientProfile {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7dbf9678d3c3946e06d20850ea9f0d6c';
module.exports = node;
