/**
 * @flow
 * @relayHash 72f8ed79c11b166ba269ec51f64c117f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PresentableAvatarInput_presentable$ref = any;
export type ProfilePageQueryVariables = {||};
export type ProfilePageQueryResponse = {|
  +currentSession: ?{|
    +user: {|
      +id: string,
      +name: string,
      +country: string,
      +occupation: ?string,
      +email: string,
      +image: ?{|
        +id: string
      |},
      +$fragmentRefs: PresentableAvatarInput_presentable$ref,
    |}
  |}
|};
export type ProfilePageQuery = {|
  variables: ProfilePageQueryVariables,
  response: ProfilePageQueryResponse,
|};
*/


/*
query ProfilePageQuery {
  currentSession {
    user {
      ...PresentableAvatarInput_presentable
      id
      name
      country
      occupation
      email
      image {
        id
      }
    }
    id
  }
}

fragment PresentableAvatarInput_presentable on Presentable {
  ...PresentableAvatar_presentable
  id
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
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "country",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "occupation",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProfilePageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "currentSession",
        "storageKey": null,
        "args": null,
        "concreteType": "Session",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
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
                  (v0/*: any*/)
                ]
              },
              {
                "kind": "FragmentSpread",
                "name": "PresentableAvatarInput_presentable",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProfilePageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "currentSession",
        "storageKey": null,
        "args": null,
        "concreteType": "Session",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v1/*: any*/),
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
                  (v0/*: any*/)
                ]
              },
              (v0/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ]
          },
          (v0/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProfilePageQuery",
    "id": null,
    "text": "query ProfilePageQuery {\n  currentSession {\n    user {\n      ...PresentableAvatarInput_presentable\n      id\n      name\n      country\n      occupation\n      email\n      image {\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment PresentableAvatarInput_presentable on Presentable {\n  ...PresentableAvatar_presentable\n  id\n}\n\nfragment PresentableAvatar_presentable on Presentable {\n  name\n  image {\n    url\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '61ac31adcec65a6cc44c405108e93b51';
module.exports = node;
