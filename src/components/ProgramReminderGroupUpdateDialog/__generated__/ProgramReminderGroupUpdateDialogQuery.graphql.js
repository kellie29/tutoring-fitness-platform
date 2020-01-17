/**
 * @flow
 * @relayHash 4911ab51c3214e9f83af7259dacd51fc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProgramReminderGroupUpdateDialogQueryVariables = {|
  id?: ?string
|};
export type ProgramReminderGroupUpdateDialogQueryResponse = {|
  +program: ?{|
    +id: string,
    +reminderGroupName: ?string,
  |}
|};
export type ProgramReminderGroupUpdateDialogQuery = {|
  variables: ProgramReminderGroupUpdateDialogQueryVariables,
  response: ProgramReminderGroupUpdateDialogQueryResponse,
|};
*/


/*
query ProgramReminderGroupUpdateDialogQuery(
  $id: ID
) {
  program(id: $id) {
    id
    reminderGroupName
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
    "name": "program",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Program",
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
        "name": "reminderGroupName",
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
    "name": "ProgramReminderGroupUpdateDialogQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramReminderGroupUpdateDialogQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ProgramReminderGroupUpdateDialogQuery",
    "id": null,
    "text": "query ProgramReminderGroupUpdateDialogQuery(\n  $id: ID\n) {\n  program(id: $id) {\n    id\n    reminderGroupName\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '29440265f9978f5979d2e02bb13ca333';
module.exports = node;
