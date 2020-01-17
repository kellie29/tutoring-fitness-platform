/**
 * @flow
 * @relayHash fa467467799abe32578b9bf9834ddf19
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ChatPageChatChannelView_chatChannel$ref = any;
export type ChatPageChatChannelQueryVariables = {|
  chatChannelId?: ?string
|};
export type ChatPageChatChannelQueryResponse = {|
  +chatChannel: ?{|
    +$fragmentRefs: ChatPageChatChannelView_chatChannel$ref
  |}
|};
export type ChatPageChatChannelQuery = {|
  variables: ChatPageChatChannelQueryVariables,
  response: ChatPageChatChannelQueryResponse,
|};
*/


/*
query ChatPageChatChannelQuery(
  $chatChannelId: ID
) {
  chatChannel(id: $chatChannelId) {
    ...ChatPageChatChannelView_chatChannel
  }
}

fragment ChatPageChatChannelView_chatChannel on ChatChannel {
  id
  object {
    __typename
    ... on Presentable {
      ...PresentableAvatar_presentable
    }
    id
  }
}

fragment PresentableAvatar_presentable on Presentable {
  name
  image {
    url
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "chatChannelId",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "chatChannelId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ChatPageChatChannelQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "chatChannel",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ChatChannel",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ChatPageChatChannelView_chatChannel",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ChatPageChatChannelQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "chatChannel",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ChatChannel",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
                "name": "__typename",
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
                "kind": "LinkedField",
                "alias": null,
                "name": "image",
                "storageKey": null,
                "args": null,
                "concreteType": "Image",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "url",
                    "args": null,
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ]
              },
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ChatPageChatChannelQuery",
    "id": null,
    "text": "query ChatPageChatChannelQuery(\n  $chatChannelId: ID\n) {\n  chatChannel(id: $chatChannelId) {\n    ...ChatPageChatChannelView_chatChannel\n  }\n}\n\nfragment ChatPageChatChannelView_chatChannel on ChatChannel {\n  id\n  object {\n    __typename\n    ... on Presentable {\n      ...PresentableAvatar_presentable\n    }\n    id\n  }\n}\n\nfragment PresentableAvatar_presentable on Presentable {\n  name\n  image {\n    url\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '93f205291ba6049ba10d25d9d415deb5';
module.exports = node;
