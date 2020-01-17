/**
 * @flow
 * @relayHash 4e1722262f2c1c92c3bbd38fa1a355bd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PageFrameHeaderQueryVariables = {||};
export type PageFrameHeaderQueryResponse = {|
  +currentSession: ?{|
    +id: string
  |}
|};
export type PageFrameHeaderQuery = {|
  variables: PageFrameHeaderQueryVariables,
  response: PageFrameHeaderQueryResponse,
|};
*/


/*
query PageFrameHeaderQuery {
  currentSession {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "currentSession",
    "storageKey": null,
    "args": null,
    "concreteType": "Session",
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "PageFrameHeaderQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "PageFrameHeaderQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "PageFrameHeaderQuery",
    "id": null,
    "text": "query PageFrameHeaderQuery {\n  currentSession {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b5faf1423f6ce337e7988491595d2ec2';
module.exports = node;
