/**
 * @flow
 * @relayHash c1d7d4d9563096c36c4cd68eeeb49be5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PresentableAvatar_presentable$ref = any;
export type ProgramInvitationPageQueryVariables = {|
  programInvitationToken?: ?string
|};
export type ProgramInvitationPageQueryResponse = {|
  +programInvitation: ?{|
    +id: string,
    +token: string,
    +program: {|
      +id: string,
      +name: string,
      +owner: {|
        +id: string,
        +name?: string,
        +$fragmentRefs: PresentableAvatar_presentable$ref,
      |},
    |},
    +firebaseShortLink: ?string,
  |}
|};
export type ProgramInvitationPageQuery = {|
  variables: ProgramInvitationPageQueryVariables,
  response: ProgramInvitationPageQueryResponse,
|};
*/


/*
query ProgramInvitationPageQuery(
  $programInvitationToken: String
) {
  programInvitation(token: $programInvitationToken) {
    id
    token
    program {
      id
      name
      owner {
        __typename
        ...PresentableAvatar_presentable
        id
        ... on Presentable {
          name
        }
      }
    }
    firebaseShortLink
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
    "name": "programInvitationToken",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "token",
    "variableName": "programInvitationToken"
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
  "name": "token",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "firebaseShortLink",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProgramInvitationPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "programInvitation",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ProgramInvitation",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "program",
            "storageKey": null,
            "args": null,
            "concreteType": "Program",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v4/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "owner",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v4/*: any*/),
                  {
                    "kind": "FragmentSpread",
                    "name": "PresentableAvatar_presentable",
                    "args": null
                  }
                ]
              }
            ]
          },
          (v5/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramInvitationPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "programInvitation",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ProgramInvitation",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "program",
            "storageKey": null,
            "args": null,
            "concreteType": "Program",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v4/*: any*/),
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
              }
            ]
          },
          (v5/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProgramInvitationPageQuery",
    "id": null,
    "text": "query ProgramInvitationPageQuery(\n  $programInvitationToken: String\n) {\n  programInvitation(token: $programInvitationToken) {\n    id\n    token\n    program {\n      id\n      name\n      owner {\n        __typename\n        ...PresentableAvatar_presentable\n        id\n        ... on Presentable {\n          name\n        }\n      }\n    }\n    firebaseShortLink\n  }\n}\n\nfragment PresentableAvatar_presentable on Presentable {\n  name\n  image {\n    url\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '73ef1ba3c50e6e6797170d9402c2d91e';
module.exports = node;
