/**
 * @flow
 * @relayHash 41065da8259d1c7dd1d10475a1ae4446
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ReferenceActionComponentQueryVariables = {|
  moduleId?: ?string
|};
export type ReferenceActionComponentQueryResponse = {|
  +programModule: ?{|
    +type: string,
    +data: any,
  |}
|};
export type ReferenceActionComponentQuery = {|
  variables: ReferenceActionComponentQueryVariables,
  response: ReferenceActionComponentQueryResponse,
|};
*/


/*
query ReferenceActionComponentQuery(
  $moduleId: ID
) {
  programModule(id: $moduleId) {
    type
    data
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "moduleId",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "moduleId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "data",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ReferenceActionComponentQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "programModule",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ProgramModule",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ReferenceActionComponentQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "programModule",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ProgramModule",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
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
    "name": "ReferenceActionComponentQuery",
    "id": null,
    "text": "query ReferenceActionComponentQuery(\n  $moduleId: ID\n) {\n  programModule(id: $moduleId) {\n    type\n    data\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '26e30604317562cd7e0ef17c3ae21a88';
module.exports = node;
