/**
 * @flow
 * @relayHash 23f50a42c22eb30220af2efd08ccc3c5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PresentableViewPageHeader_presentable$ref = any;
type ProgramModuleTransferOwnershipDialog_programModule$ref = any;
export type ProgramModuleViewPageQueryVariables = {|
  programModuleId?: ?string
|};
export type ProgramModuleViewPageQueryResponse = {|
  +currentSession: ?{|
    +user: {|
      +id: string
    |}
  |},
  +programModule: ?{|
    +id: string,
    +name: string,
    +description: ?string,
    +viewerCanUpdate: ?boolean,
    +$fragmentRefs: PresentableViewPageHeader_presentable$ref & ProgramModuleTransferOwnershipDialog_programModule$ref,
  |},
|};
export type ProgramModuleViewPageQuery = {|
  variables: ProgramModuleViewPageQueryVariables,
  response: ProgramModuleViewPageQueryResponse,
|};
*/


/*
query ProgramModuleViewPageQuery(
  $programModuleId: ID
) {
  currentSession {
    user {
      id
    }
    id
  }
  programModule(id: $programModuleId) {
    ...PresentableViewPageHeader_presentable
    ...ProgramModuleTransferOwnershipDialog_programModule
    id
    name
    description
    viewerCanUpdate
  }
}

fragment PresentableAvatar_presentable on Presentable {
  name
  image {
    url
    id
  }
}

fragment PresentableLink_presentable on Presentable {
  __typename
  id
  name
}

fragment PresentableViewPageHeader_presentable on Presentable {
  ...PresentableAvatar_presentable
  name
  image {
    url
    width
    height
    id
  }
  ... on Owned {
    owner {
      __typename
      ...PresentableLink_presentable
      id
    }
  }
}

fragment ProgramModuleTransferOwnershipDialog_programModule on ProgramModule {
  id
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "programModuleId",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    (v1/*: any*/)
  ]
},
v3 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "programModuleId"
  }
],
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
  "name": "description",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "viewerCanUpdate",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProgramModuleViewPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
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
          (v2/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "programModule",
        "storageKey": null,
        "args": (v3/*: any*/),
        "concreteType": "ProgramModule",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "PresentableViewPageHeader_presentable",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "ProgramModuleTransferOwnershipDialog_programModule",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramModuleViewPageQuery",
    "argumentDefinitions": (v0/*: any*/),
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
          (v2/*: any*/),
          (v1/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "programModule",
        "storageKey": null,
        "args": (v3/*: any*/),
        "concreteType": "ProgramModule",
        "plural": false,
        "selections": [
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
              (v1/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "width",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "height",
                "args": null,
                "storageKey": null
              }
            ]
          },
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
              (v1/*: any*/),
              (v4/*: any*/),
              {
                "kind": "ClientExtension",
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__id",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          (v1/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProgramModuleViewPageQuery",
    "id": null,
    "text": "query ProgramModuleViewPageQuery(\n  $programModuleId: ID\n) {\n  currentSession {\n    user {\n      id\n    }\n    id\n  }\n  programModule(id: $programModuleId) {\n    ...PresentableViewPageHeader_presentable\n    ...ProgramModuleTransferOwnershipDialog_programModule\n    id\n    name\n    description\n    viewerCanUpdate\n  }\n}\n\nfragment PresentableAvatar_presentable on Presentable {\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment PresentableLink_presentable on Presentable {\n  __typename\n  id\n  name\n}\n\nfragment PresentableViewPageHeader_presentable on Presentable {\n  ...PresentableAvatar_presentable\n  name\n  image {\n    url\n    width\n    height\n    id\n  }\n  ... on Owned {\n    owner {\n      __typename\n      ...PresentableLink_presentable\n      id\n    }\n  }\n}\n\nfragment ProgramModuleTransferOwnershipDialog_programModule on ProgramModule {\n  id\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '999f42a8c65e14bc2a2aa6212baab8b1';
module.exports = node;
