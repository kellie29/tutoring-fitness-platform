/**
 * @flow
 * @relayHash d18c0192e4fd838a6156d35f971b65ce
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RequestPasswordResetInput = {|
  email: string
|};
export type RequestPasswordResetPageRequestPasswordResetMutationVariables = {|
  input: RequestPasswordResetInput
|};
export type RequestPasswordResetPageRequestPasswordResetMutationResponse = {|
  +requestPasswordReset: {|
    +email: string
  |}
|};
export type RequestPasswordResetPageRequestPasswordResetMutation = {|
  variables: RequestPasswordResetPageRequestPasswordResetMutationVariables,
  response: RequestPasswordResetPageRequestPasswordResetMutationResponse,
|};
*/


/*
mutation RequestPasswordResetPageRequestPasswordResetMutation(
  $input: RequestPasswordResetInput!
) {
  requestPasswordReset(input: $input) {
    email
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RequestPasswordResetInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "requestPasswordReset",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "RequestPasswordResetPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "email",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RequestPasswordResetPageRequestPasswordResetMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RequestPasswordResetPageRequestPasswordResetMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "RequestPasswordResetPageRequestPasswordResetMutation",
    "id": null,
    "text": "mutation RequestPasswordResetPageRequestPasswordResetMutation(\n  $input: RequestPasswordResetInput!\n) {\n  requestPasswordReset(input: $input) {\n    email\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '23a81bca1d08704eb49aa224f653ac4d';
module.exports = node;
