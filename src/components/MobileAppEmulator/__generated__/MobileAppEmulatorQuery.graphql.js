/**
 * @flow
 * @relayHash 8e27eb3f1d5df6d241866a2e070476fd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProgramDetailScreen_user$ref = any;
type ProgramModuleDetailScreen_user$ref = any;
type ProgramTrackInvitationScreen_user$ref = any;
export type MobileAppEmulatorQueryVariables = {||};
export type MobileAppEmulatorQueryResponse = {|
  +currentSession: ?{|
    +user: {|
      +$fragmentRefs: ProgramTrackInvitationScreen_user$ref & ProgramModuleDetailScreen_user$ref & ProgramDetailScreen_user$ref
    |}
  |}
|};
export type MobileAppEmulatorQuery = {|
  variables: MobileAppEmulatorQueryVariables,
  response: MobileAppEmulatorQueryResponse,
|};
*/


/*
query MobileAppEmulatorQuery {
  currentSession {
    user {
      ...ProgramTrackInvitationScreen_user
      ...ProgramModuleDetailScreen_user
      ...ProgramDetailScreen_user
      id
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

fragment ProgramDetailScreen_user on User {
  id
  ... on Presentable {
    name
    image {
      url
      id
    }
    ...PresentableAvatar_presentable
  }
}

fragment ProgramModuleDetailScreen_user on User {
  ...PresentableAvatar_presentable
}

fragment ProgramTrackInvitationScreen_user on User {
  id
  ... on Presentable {
    name
    image {
      url
      id
    }
    ...PresentableAvatar_presentable
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
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "MobileAppEmulatorQuery",
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
              {
                "kind": "FragmentSpread",
                "name": "ProgramTrackInvitationScreen_user",
                "args": null
              },
              {
                "kind": "FragmentSpread",
                "name": "ProgramModuleDetailScreen_user",
                "args": null
              },
              {
                "kind": "FragmentSpread",
                "name": "ProgramDetailScreen_user",
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
    "name": "MobileAppEmulatorQuery",
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
                  (v0/*: any*/)
                ]
              }
            ]
          },
          (v0/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "MobileAppEmulatorQuery",
    "id": null,
    "text": "query MobileAppEmulatorQuery {\n  currentSession {\n    user {\n      ...ProgramTrackInvitationScreen_user\n      ...ProgramModuleDetailScreen_user\n      ...ProgramDetailScreen_user\n      id\n    }\n    id\n  }\n}\n\nfragment PresentableAvatar_presentable on Presentable {\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment ProgramDetailScreen_user on User {\n  id\n  ... on Presentable {\n    name\n    image {\n      url\n      id\n    }\n    ...PresentableAvatar_presentable\n  }\n}\n\nfragment ProgramModuleDetailScreen_user on User {\n  ...PresentableAvatar_presentable\n}\n\nfragment ProgramTrackInvitationScreen_user on User {\n  id\n  ... on Presentable {\n    name\n    image {\n      url\n      id\n    }\n    ...PresentableAvatar_presentable\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f9eef17694f704bee034114521fd34f9';
module.exports = node;
