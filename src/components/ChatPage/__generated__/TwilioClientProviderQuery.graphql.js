/**
 * @flow
 * @relayHash bd230c5dfad6b2eeee84ec94cad05a1e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TwilioClientProviderQueryVariables = {||};
export type TwilioClientProviderQueryResponse = {|
  +currentSession: ?{|
    +twilioToken: string
  |}
|};
export type TwilioClientProviderQuery = {|
  variables: TwilioClientProviderQueryVariables,
  response: TwilioClientProviderQueryResponse,
|};
*/


/*
query TwilioClientProviderQuery {
  currentSession {
    twilioToken
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "twilioToken",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TwilioClientProviderQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "currentSession",
        "storageKey": null,
        "args": null,
        "concreteType": "Session",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TwilioClientProviderQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "currentSession",
        "storageKey": null,
        "args": null,
        "concreteType": "Session",
        "plural": false,
        "selections": [
          (v0/*: any*/),
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
  },
  "params": {
    "operationKind": "query",
    "name": "TwilioClientProviderQuery",
    "id": null,
    "text": "query TwilioClientProviderQuery {\n  currentSession {\n    twilioToken\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9d42a4bc6849d31128b14cca3ea4dcee';
module.exports = node;
