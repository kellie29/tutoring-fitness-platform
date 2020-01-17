/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PresentableAvatar_presentable$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ChatPageChatChannelView_chatChannel$ref: FragmentReference;
declare export opaque type ChatPageChatChannelView_chatChannel$fragmentType: ChatPageChatChannelView_chatChannel$ref;
export type ChatPageChatChannelView_chatChannel = {|
  +id: string,
  +object: {|
    +$fragmentRefs: PresentableAvatar_presentable$ref
  |},
  +$refType: ChatPageChatChannelView_chatChannel$ref,
|};
export type ChatPageChatChannelView_chatChannel$data = ChatPageChatChannelView_chatChannel;
export type ChatPageChatChannelView_chatChannel$key = {
  +$data?: ChatPageChatChannelView_chatChannel$data,
  +$fragmentRefs: ChatPageChatChannelView_chatChannel$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ChatPageChatChannelView_chatChannel",
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
          "kind": "FragmentSpread",
          "name": "PresentableAvatar_presentable",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '0986fa1a75b5f41b026500c70ba4a547';
module.exports = node;
