/**
 * @flow
 * @relayHash 60289e0d969e17d7855ca63564501708
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ClientProfileInvitationScreen_clientProfileInvitation$ref = any;
export type ClientProfileInvitationPageQueryVariables = {|
  clientProfileInvitationToken: string
|};
export type ClientProfileInvitationPageQueryResponse = {|
  +clientProfileInvitation: ?{|
    +id: string,
    +firebaseShortLink: ?string,
    +clientProfile: {|
      +owner: {|
        +name?: string
      |}
    |},
    +$fragmentRefs: ClientProfileInvitationScreen_clientProfileInvitation$ref,
  |}
|};
export type ClientProfileInvitationPageQuery = {|
  variables: ClientProfileInvitationPageQueryVariables,
  response: ClientProfileInvitationPageQueryResponse,
|};
*/


/*
query ClientProfileInvitationPageQuery(
  $clientProfileInvitationToken: String!
) {
  clientProfileInvitation(token: $clientProfileInvitationToken) {
    ...ClientProfileInvitationScreen_clientProfileInvitation
    id
    firebaseShortLink
    clientProfile {
      owner {
        __typename
        ... on User {
          name
        }
        id
      }
      id
    }
  }
}

fragment ClientProfileInvitationScreen_clientProfileInvitation on ClientProfileInvitation {
  id
  token
  clientProfile {
    owner {
      __typename
      ...PresentableAvatar_presentable
      id
      ... on User {
        name
      }
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
    "name": "clientProfileInvitationToken",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "token",
    "variableName": "clientProfileInvitationToken"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "firebaseShortLink",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ClientProfileInvitationPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "clientProfileInvitation",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ClientProfileInvitation",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "clientProfile",
            "storageKey": null,
            "args": null,
            "concreteType": "ClientProfile",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "owner",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "type": "User",
                    "selections": [
                      (v4/*: any*/)
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "FragmentSpread",
            "name": "ClientProfileInvitationScreen_clientProfileInvitation",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ClientProfileInvitationPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "clientProfileInvitation",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ClientProfileInvitation",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
            "name": "clientProfile",
            "storageKey": null,
            "args": null,
            "concreteType": "ClientProfile",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "owner",
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
                  (v4/*: any*/),
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
              },
              (v2/*: any*/)
            ]
          },
          (v3/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ClientProfileInvitationPageQuery",
    "id": null,
    "text": "query ClientProfileInvitationPageQuery(\n  $clientProfileInvitationToken: String!\n) {\n  clientProfileInvitation(token: $clientProfileInvitationToken) {\n    ...ClientProfileInvitationScreen_clientProfileInvitation\n    id\n    firebaseShortLink\n    clientProfile {\n      owner {\n        __typename\n        ... on User {\n          name\n        }\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment ClientProfileInvitationScreen_clientProfileInvitation on ClientProfileInvitation {\n  id\n  token\n  clientProfile {\n    owner {\n      __typename\n      ...PresentableAvatar_presentable\n      id\n      ... on User {\n        name\n      }\n    }\n    id\n  }\n}\n\nfragment PresentableAvatar_presentable on Presentable {\n  name\n  image {\n    url\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '22753a001f75c299bc647bb76aff77d1';
module.exports = node;
