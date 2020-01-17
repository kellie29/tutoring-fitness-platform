/**
 * @flow
 * @relayHash 4ac6941f41bbc62b51a238bfd4b75ec5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProgramModuleGroupUpdateDialogQueryVariables = {|
  id?: ?string
|};
export type ProgramModuleGroupUpdateDialogQueryResponse = {|
  +program: ?{|
    +moduleGroups: ?$ReadOnlyArray<{|
      +id: string,
      +name: string,
    |}>
  |}
|};
export type ProgramModuleGroupUpdateDialogQuery = {|
  variables: ProgramModuleGroupUpdateDialogQueryVariables,
  response: ProgramModuleGroupUpdateDialogQueryResponse,
|};
*/


/*
query ProgramModuleGroupUpdateDialogQuery(
  $id: ID
) {
  program(id: $id) {
    moduleGroups {
      id
      name
    }
    id
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
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "moduleGroups",
  "storageKey": null,
  "args": null,
  "concreteType": "ProgramModuleGroup",
  "plural": true,
  "selections": [
    (v2/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProgramModuleGroupUpdateDialogQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "program",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Program",
        "plural": false,
        "selections": [
          (v3/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramModuleGroupUpdateDialogQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "program",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Program",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProgramModuleGroupUpdateDialogQuery",
    "id": null,
    "text": "query ProgramModuleGroupUpdateDialogQuery(\n  $id: ID\n) {\n  program(id: $id) {\n    moduleGroups {\n      id\n      name\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9b7607ea4ec40e1de128bb7d17bd7bba';
module.exports = node;
