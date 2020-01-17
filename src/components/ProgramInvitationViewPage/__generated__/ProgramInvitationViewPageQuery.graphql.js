/**
 * @flow
 * @relayHash 99482253cdf8802ddbf8d1cd8b0dee76
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProgramInvitationViewPageQueryVariables = {|
  programInvitationId?: ?string
|};
export type ProgramInvitationViewPageQueryResponse = {|
  +programInvitation: ?{|
    +id: string,
    +token: string,
    +program: {|
      +id: string,
      +name: string,
    |},
  |}
|};
export type ProgramInvitationViewPageQuery = {|
  variables: ProgramInvitationViewPageQueryVariables,
  response: ProgramInvitationViewPageQueryResponse,
|};
*/


/*
query ProgramInvitationViewPageQuery(
  $programInvitationId: ID
) {
  programInvitation(id: $programInvitationId) {
    id
    token
    program {
      id
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "programInvitationId",
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
    "name": "programInvitation",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "programInvitationId"
      }
    ],
    "concreteType": "ProgramInvitation",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
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
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProgramInvitationViewPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramInvitationViewPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ProgramInvitationViewPageQuery",
    "id": null,
    "text": "query ProgramInvitationViewPageQuery(\n  $programInvitationId: ID\n) {\n  programInvitation(id: $programInvitationId) {\n    id\n    token\n    program {\n      id\n      name\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '42536baffdc780d82e17680b490dcba2';
module.exports = node;
