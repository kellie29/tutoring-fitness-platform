/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type NodeListItem_node$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserGroupRow_userGroup$ref: FragmentReference;
declare export opaque type UserGroupRow_userGroup$fragmentType: UserGroupRow_userGroup$ref;
export type UserGroupRow_userGroup = {|
  +id: string,
  +members: {|
    +edgeCount: number
  |},
  +$fragmentRefs: NodeListItem_node$ref,
  +$refType: UserGroupRow_userGroup$ref,
|};
export type UserGroupRow_userGroup$data = UserGroupRow_userGroup;
export type UserGroupRow_userGroup$key = {
  +$data?: UserGroupRow_userGroup$data,
  +$fragmentRefs: UserGroupRow_userGroup$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "UserGroupRow_userGroup",
  "type": "UserGroup",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "members",
      "storageKey": "members(first:0)",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 0
        }
      ],
      "concreteType": "MemberConnection",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "edgeCount",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "NodeListItem_node",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8fb0e0c5af1d8665d113c677519ef06e';
module.exports = node;
