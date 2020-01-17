/**
 * @flow
 * @relayHash d79f46131fb38fcdf7bf67efba9ecc24
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PresentableViewPageHeader_presentable$ref = any;
type ProgramCloneDialog_program$ref = any;
type ProgramTransferOwnershipDialog_program$ref = any;
type ProgramUpdateDialog_program$ref = any;
type ProgramViewPageRouterTabs_program$ref = any;
export type ProgramViewPageQueryVariables = {|
  programId?: ?string
|};
export type ProgramViewPageQueryResponse = {|
  +currentSession: ?{|
    +user: {|
      +id: string
    |}
  |},
  +program: ?{|
    +id: string,
    +name: string,
    +description: string,
    +modules: $ReadOnlyArray<{|
      +id: string,
      +name: string,
      +description: ?string,
      +type: string,
      +data: any,
    |}>,
    +moduleGroups: ?$ReadOnlyArray<{|
      +id: string,
      +name: string,
    |}>,
    +duration: string,
    +viewerCanUpdate: ?boolean,
    +$fragmentRefs: PresentableViewPageHeader_presentable$ref & ProgramUpdateDialog_program$ref & ProgramTransferOwnershipDialog_program$ref & ProgramCloneDialog_program$ref & ProgramViewPageRouterTabs_program$ref,
  |},
|};
export type ProgramViewPageQuery = {|
  variables: ProgramViewPageQueryVariables,
  response: ProgramViewPageQueryResponse,
|};
*/


/*
query ProgramViewPageQuery(
  $programId: ID
) {
  currentSession {
    user {
      id
    }
    id
  }
  program(id: $programId) {
    ...PresentableViewPageHeader_presentable
    ...ProgramUpdateDialog_program
    ...ProgramTransferOwnershipDialog_program
    ...ProgramCloneDialog_program
    ...ProgramViewPageRouterTabs_program
    id
    name
    description
    modules {
      id
      name
      description
      type
      data
    }
    moduleGroups {
      id
      name
    }
    duration
    viewerCanUpdate
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

fragment ProgramCloneDialog_program on Program {
  ...PresentableAvatar_presentable
  id
  name
  viewerCanUpdate
}

fragment ProgramTransferOwnershipDialog_program on Program {
  id
  name
}

fragment ProgramUpdateDialog_program on Program {
  ...PresentableAvatarInput_presentable
  id
  name
  description
  duration
  isPublic
  chatEnabled
  trackChatEnabled
  modules {
    name
    description
    type
    data
    id
  }
  tag {
    id
  }
}

fragment ProgramViewPageRouterTabs_program on Program {
  id
  viewerCanUpdate
  reminderGroupName
  owner {
    __typename
    id
  }
  moduleGroups {
    id
    name
    program {
      id
      viewerCanUpdate
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "programId",
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
v2 = [
  (v1/*: any*/)
],
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": (v2/*: any*/)
},
v4 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "programId"
  }
],
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "data",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "duration",
  "args": null,
  "storageKey": null
},
v10 = {
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
    "name": "ProgramViewPageQuery",
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
          (v3/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "program",
        "storageKey": null,
        "args": (v4/*: any*/),
        "concreteType": "Program",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "modules",
            "storageKey": null,
            "args": null,
            "concreteType": "ProgramModule",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "moduleGroups",
            "storageKey": null,
            "args": null,
            "concreteType": "ProgramModuleGroup",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v5/*: any*/)
            ]
          },
          (v9/*: any*/),
          (v10/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "PresentableViewPageHeader_presentable",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "ProgramUpdateDialog_program",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "ProgramTransferOwnershipDialog_program",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "ProgramCloneDialog_program",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "ProgramViewPageRouterTabs_program",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramViewPageQuery",
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
          (v3/*: any*/),
          (v1/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "program",
        "storageKey": null,
        "args": (v4/*: any*/),
        "concreteType": "Program",
        "plural": false,
        "selections": [
          (v5/*: any*/),
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
              (v5/*: any*/),
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
          (v6/*: any*/),
          (v9/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isPublic",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "chatEnabled",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "trackChatEnabled",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "modules",
            "storageKey": null,
            "args": null,
            "concreteType": "ProgramModule",
            "plural": true,
            "selections": [
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v1/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "tag",
            "storageKey": null,
            "args": null,
            "concreteType": "Tag",
            "plural": false,
            "selections": (v2/*: any*/)
          },
          (v10/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "reminderGroupName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "moduleGroups",
            "storageKey": null,
            "args": null,
            "concreteType": "ProgramModuleGroup",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v5/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "program",
                "storageKey": null,
                "args": null,
                "concreteType": "Program",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v10/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProgramViewPageQuery",
    "id": null,
    "text": "query ProgramViewPageQuery(\n  $programId: ID\n) {\n  currentSession {\n    user {\n      id\n    }\n    id\n  }\n  program(id: $programId) {\n    ...PresentableViewPageHeader_presentable\n    ...ProgramUpdateDialog_program\n    ...ProgramTransferOwnershipDialog_program\n    ...ProgramCloneDialog_program\n    ...ProgramViewPageRouterTabs_program\n    id\n    name\n    description\n    modules {\n      id\n      name\n      description\n      type\n      data\n    }\n    moduleGroups {\n      id\n      name\n    }\n    duration\n    viewerCanUpdate\n  }\n}\n\nfragment PresentableAvatarInput_presentable on Presentable {\n  ...PresentableAvatar_presentable\n  id\n}\n\nfragment PresentableAvatar_presentable on Presentable {\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment PresentableLink_presentable on Presentable {\n  __typename\n  id\n  name\n}\n\nfragment PresentableViewPageHeader_presentable on Presentable {\n  ...PresentableAvatar_presentable\n  name\n  image {\n    url\n    width\n    height\n    id\n  }\n  ... on Owned {\n    owner {\n      __typename\n      ...PresentableLink_presentable\n      id\n    }\n  }\n}\n\nfragment ProgramCloneDialog_program on Program {\n  ...PresentableAvatar_presentable\n  id\n  name\n  viewerCanUpdate\n}\n\nfragment ProgramTransferOwnershipDialog_program on Program {\n  id\n  name\n}\n\nfragment ProgramUpdateDialog_program on Program {\n  ...PresentableAvatarInput_presentable\n  id\n  name\n  description\n  duration\n  isPublic\n  chatEnabled\n  trackChatEnabled\n  modules {\n    name\n    description\n    type\n    data\n    id\n  }\n  tag {\n    id\n  }\n}\n\nfragment ProgramViewPageRouterTabs_program on Program {\n  id\n  viewerCanUpdate\n  reminderGroupName\n  owner {\n    __typename\n    id\n  }\n  moduleGroups {\n    id\n    name\n    program {\n      id\n      viewerCanUpdate\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e227cebeed48467d0e92c697b3f51848';
module.exports = node;
