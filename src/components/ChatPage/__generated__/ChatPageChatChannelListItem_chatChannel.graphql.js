/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PresentableAvatar_presentable$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ChatPageChatChannelListItem_chatChannel$ref: FragmentReference;
declare export opaque type ChatPageChatChannelListItem_chatChannel$fragmentType: ChatPageChatChannelListItem_chatChannel$ref;
export type ChatPageChatChannelListItem_chatChannel = {|
  +id: string,
  +object: {|
    +name?: string,
    +$fragmentRefs: PresentableAvatar_presentable$ref,
  |},
  +$refType: ChatPageChatChannelListItem_chatChannel$ref,
|};
export type ChatPageChatChannelListItem_chatChannel$data = ChatPageChatChannelListItem_chatChannel;
export type ChatPageChatChannelListItem_chatChannel$key = {
  +$data?: ChatPageChatChannelListItem_chatChannel$data,
  +$fragmentRefs: ChatPageChatChannelListItem_chatChannel$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ChatPageChatChannelListItem_chatChannel",
  "type": "ChatChannel",
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
      "name": "object",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "PresentableAvatar_presentable",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '1497197dcefa80d1c74b6f41f87650ce';
module.exports = node;
