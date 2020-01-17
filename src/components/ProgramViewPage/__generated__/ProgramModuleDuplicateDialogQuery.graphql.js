/**
 * @flow
 * @relayHash d67e177f19fec1ce9ed781fe803abaec
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProgramModuleDuplicateDialogQueryVariables = {|
  id?: ?string
|};
export type ProgramModuleDuplicateDialogQueryResponse = {|
  +programModule: ?{|
    +id: string,
    +name: string,
    +program: ?{|
      +id: string
    |},
  |}
|};
export type ProgramModuleDuplicateDialogQuery = {|
  variables: ProgramModuleDuplicateDialogQueryVariables,
  response: ProgramModuleDuplicateDialogQueryResponse,
|};
*/


/*
query ProgramModuleDuplicateDialogQuery(
  $id: ID
) {
  programModule(id: $id) {
    id
    name
    program {
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "programModule",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "ProgramModule",
    "plural": false,
    "selections": [
      (v1/*: any*/),
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
        "name": "program",
        "storageKey": null,
        "args": null,
        "concreteType": "Program",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProgramModuleDuplicateDialogQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramModuleDuplicateDialogQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ProgramModuleDuplicateDialogQuery",
    "id": null,
    "text": "query ProgramModuleDuplicateDialogQuery(\n  $id: ID\n) {\n  programModule(id: $id) {\n    id\n    name\n    program {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7457e54c9e543cc4e229b248b9aba5db';
module.exports = node;
