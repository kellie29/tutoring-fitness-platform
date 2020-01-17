/**
 * @flow
 * @relayHash 5b7e4dfb9e66d92743968b96f5b8ebca
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserOrganizationSearchSelectQueryVariables = {|
  id?: ?string
|};
export type UserOrganizationSearchSelectQueryResponse = {|
  +userGroup: ?{|
    +id: string,
    +name: string,
  |}
|};
export type UserOrganizationSearchSelectQuery = {|
  variables: UserOrganizationSearchSelectQueryVariables,
  response: UserOrganizationSearchSelectQueryResponse,
|};
*/


/*
query UserOrganizationSearchSelectQuery(
  $id: ID
) {
  userGroup(id: $id) {
    id
    name
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
    "kind": "LinkedField",
    "alias": null,
    "name": "userGroup",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "UserGroup",
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UserOrganizationSearchSelectQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UserOrganizationSearchSelectQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "UserOrganizationSearchSelectQuery",
    "id": null,
    "text": "query UserOrganizationSearchSelectQuery(\n  $id: ID\n) {\n  userGroup(id: $id) {\n    id\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '32ed76bb082144acf95e67483d46fa63';
module.exports = node;
