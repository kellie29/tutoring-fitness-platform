/**
 * @flow
 * @relayHash 752b72a925143f43e8d7ce46925355ae
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NodeDeleteDialogQueryVariables = {|
  nodeId?: ?string
|};
export type NodeDeleteDialogQueryResponse = {|
  +node: ?{|
    +typeName: string,
    +id: string,
    +name?: string,
  |}
|};
export type NodeDeleteDialogQuery = {|
  variables: NodeDeleteDialogQueryVariables,
  response: NodeDeleteDialogQueryResponse,
|};
*/


/*
query NodeDeleteDialogQuery(
  $nodeId: ID
) {
  node(id: $nodeId) {
    __typename
    typeName: __typename
    id
    ... on Presentable {
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "nodeId",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "nodeId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": "typeName",
  "name": "__typename",
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
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "NodeDeleteDialogQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NodeDeleteDialogQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": (v1/*: any*/),
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
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "NodeDeleteDialogQuery",
    "id": null,
    "text": "query NodeDeleteDialogQuery(\n  $nodeId: ID\n) {\n  node(id: $nodeId) {\n    __typename\n    typeName: __typename\n    id\n    ... on Presentable {\n      name\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'aa0e18332056e5df3b9c8c8343888eb4';
module.exports = node;
