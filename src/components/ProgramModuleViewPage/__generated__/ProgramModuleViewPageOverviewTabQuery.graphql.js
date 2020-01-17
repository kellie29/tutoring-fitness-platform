/**
 * @flow
 * @relayHash 618b81b6046ed88420cca4d7fcc35cf3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProgramModuleViewPageOverviewTabQueryVariables = {|
  programModuleId?: ?string
|};
export type ProgramModuleViewPageOverviewTabQueryResponse = {|
  +programModule: ?{|
    +id: string,
    +name: string,
    +description: ?string,
    +type: string,
    +data: any,
  |}
|};
export type ProgramModuleViewPageOverviewTabQuery = {|
  variables: ProgramModuleViewPageOverviewTabQueryVariables,
  response: ProgramModuleViewPageOverviewTabQueryResponse,
|};
*/


/*
query ProgramModuleViewPageOverviewTabQuery(
  $programModuleId: ID
) {
  programModule(id: $programModuleId) {
    id
    name
    description
    type
    data
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "programModuleId",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "programModule",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "programModuleId"
      }
    ],
    "concreteType": "ProgramModule",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "description",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "type",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "data",
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
    "name": "ProgramModuleViewPageOverviewTabQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramModuleViewPageOverviewTabQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ProgramModuleViewPageOverviewTabQuery",
    "id": null,
    "text": "query ProgramModuleViewPageOverviewTabQuery(\n  $programModuleId: ID\n) {\n  programModule(id: $programModuleId) {\n    id\n    name\n    description\n    type\n    data\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f500366d837531f16ccbed014c757b52';
module.exports = node;
