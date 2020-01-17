/**
 * @flow
 * @relayHash 8b79977148b341ac129270890a5cee06
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteNodeInput = {|
  id: string
|};
export type NodeDeleteDialogDeleteNodeMutationVariables = {|
  input: DeleteNodeInput
|};
export type NodeDeleteDialogDeleteNodeMutationResponse = {|
  +deleteNode: {|
    +node: {|
      +id: string
    |}
  |}
|};
export type NodeDeleteDialogDeleteNodeMutation = {|
  variables: NodeDeleteDialogDeleteNodeMutationVariables,
  response: NodeDeleteDialogDeleteNodeMutationResponse,
|};
*/


/*
mutation NodeDeleteDialogDeleteNodeMutation(
  $input: DeleteNodeInput!
) {
  deleteNode(input: $input) {
    node {
      __typename
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
    "type": "DeleteNodeInput!",
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
    "name": "NodeDeleteDialogDeleteNodeMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteNode",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteNodePayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NodeDeleteDialogDeleteNodeMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteNode",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteNodePayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
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
  },
  "params": {
    "operationKind": "mutation",
    "name": "NodeDeleteDialogDeleteNodeMutation",
    "id": null,
    "text": "mutation NodeDeleteDialogDeleteNodeMutation(\n  $input: DeleteNodeInput!\n) {\n  deleteNode(input: $input) {\n    node {\n      __typename\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f8895d6cd5e1ab7f58caa11edc0e4658';
module.exports = node;
