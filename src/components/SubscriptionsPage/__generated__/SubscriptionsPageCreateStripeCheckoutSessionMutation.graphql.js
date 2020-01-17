/**
 * @flow
 * @relayHash 4aad042d957c1ff22514ad730b6f930f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateStripeCheckoutSessionInput = {|
  subscriptionSlug: string
|};
export type SubscriptionsPageCreateStripeCheckoutSessionMutationVariables = {|
  input: CreateStripeCheckoutSessionInput
|};
export type SubscriptionsPageCreateStripeCheckoutSessionMutationResponse = {|
  +createStripeCheckoutSession: {|
    +sessionId: string
  |}
|};
export type SubscriptionsPageCreateStripeCheckoutSessionMutation = {|
  variables: SubscriptionsPageCreateStripeCheckoutSessionMutationVariables,
  response: SubscriptionsPageCreateStripeCheckoutSessionMutationResponse,
|};
*/


/*
mutation SubscriptionsPageCreateStripeCheckoutSessionMutation(
  $input: CreateStripeCheckoutSessionInput!
) {
  createStripeCheckoutSession(input: $input) {
    sessionId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateStripeCheckoutSessionInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createStripeCheckoutSession",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateStripeCheckoutSessionPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "sessionId",
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
    "name": "SubscriptionsPageCreateStripeCheckoutSessionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SubscriptionsPageCreateStripeCheckoutSessionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SubscriptionsPageCreateStripeCheckoutSessionMutation",
    "id": null,
    "text": "mutation SubscriptionsPageCreateStripeCheckoutSessionMutation(\n  $input: CreateStripeCheckoutSessionInput!\n) {\n  createStripeCheckoutSession(input: $input) {\n    sessionId\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd62f918081dec9ad50792cb99ec176a4';
module.exports = node;
