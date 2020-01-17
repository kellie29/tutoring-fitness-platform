/**
 * @flow
 * @relayHash 5de4b794272f9314f14557b0a40f3e21
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateNotificationInput = {|
  id: string,
  isSeen?: ?boolean,
  isRead?: ?boolean,
|};
export type NotificationRowUpdateNotificationMutationVariables = {|
  input: UpdateNotificationInput
|};
export type NotificationRowUpdateNotificationMutationResponse = {|
  +updateNotification: {|
    +notification: {|
      +isRead: boolean
    |}
  |}
|};
export type NotificationRowUpdateNotificationMutation = {|
  variables: NotificationRowUpdateNotificationMutationVariables,
  response: NotificationRowUpdateNotificationMutationResponse,
|};
*/


/*
mutation NotificationRowUpdateNotificationMutation(
  $input: UpdateNotificationInput!
) {
  updateNotification(input: $input) {
    notification {
      isRead
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
    "type": "UpdateNotificationInput!",
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
  "name": "isRead",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "NotificationRowUpdateNotificationMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateNotification",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateNotificationPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "notification",
            "storageKey": null,
            "args": null,
            "concreteType": "Notification",
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
    "name": "NotificationRowUpdateNotificationMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateNotification",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateNotificationPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "notification",
            "storageKey": null,
            "args": null,
            "concreteType": "Notification",
            "plural": false,
            "selections": [
              (v2/*: any*/),
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
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "NotificationRowUpdateNotificationMutation",
    "id": null,
    "text": "mutation NotificationRowUpdateNotificationMutation(\n  $input: UpdateNotificationInput!\n) {\n  updateNotification(input: $input) {\n    notification {\n      isRead\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4aa5e0b59471f9d01dfe9bd3a936d209';
module.exports = node;
