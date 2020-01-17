/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PresentableTag_presentable$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type NotificationRow_notification$ref: FragmentReference;
declare export opaque type NotificationRow_notification$fragmentType: NotificationRow_notification$ref;
export type NotificationRow_notification = {|
  +id: string,
  +type: string,
  +isRead: boolean,
  +createdAt: any,
  +from: {|
    +$fragmentRefs: PresentableTag_presentable$ref
  |},
  +to: {|
    +$fragmentRefs: PresentableTag_presentable$ref
  |},
  +object: {|
    +typeName: string,
    +id?: string,
  |},
  +$refType: NotificationRow_notification$ref,
|};
export type NotificationRow_notification$data = NotificationRow_notification;
export type NotificationRow_notification$key = {
  +$data?: NotificationRow_notification$data,
  +$fragmentRefs: NotificationRow_notification$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "FragmentSpread",
    "name": "PresentableTag_presentable",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "NotificationRow_notification",
  "type": "Notification",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
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
      "name": "isRead",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "createdAt",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "from",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": (v1/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "to",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": (v1/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "object",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": "typeName",
          "name": "__typename",
          "args": null,
          "storageKey": null
        },
        (v0/*: any*/)
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'abff51c13857c1b8ac6da8ce1c70cf1b';
module.exports = node;
