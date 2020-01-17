/**
 * @flow
 * @relayHash 494e64d3b2d835406eeaef62dee3c0a4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignupPageQueryVariables = {||};
export type SignupPageQueryResponse = {|
  +requesterCountry: ?string
|};
export type SignupPageQuery = {|
  variables: SignupPageQueryVariables,
  response: SignupPageQueryResponse,
|};
*/


/*
query SignupPageQuery {
  requesterCountry
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "requesterCountry",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SignupPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SignupPageQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "SignupPageQuery",
    "id": null,
    "text": "query SignupPageQuery {\n  requesterCountry\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f6bb58f19fa6b490ae02e05413332b39';
module.exports = node;
