/**
 * @flow
 * @relayHash 12df6f74fb3edd65f0e21d6f4cdacaee
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PresentableAvatar_presentable$ref = any;
type PresentableLink_presentable$ref = any;
type ProgramDetailScreen_program$ref = any;
type ProgramProgramModuleList_program$ref = any;
export type ProgramViewPageOverviewTabQueryVariables = {|
  programId?: ?string
|};
export type ProgramViewPageOverviewTabQueryResponse = {|
  +program: ?{|
    +id: string,
    +name: string,
    +description: string,
    +owner: {|
      +$fragmentRefs: PresentableLink_presentable$ref
    |},
    +chatEnabled: boolean,
    +trackChatEnabled: boolean,
    +modules: $ReadOnlyArray<{|
      +id: string,
      +name: string,
      +description: ?string,
      +type: string,
      +data: any,
    |}>,
    +duration: string,
    +viewerCanUpdate: ?boolean,
    +image: ?{|
      +url: any
    |},
    +$fragmentRefs: ProgramDetailScreen_program$ref & ProgramProgramModuleList_program$ref & PresentableAvatar_presentable$ref,
  |}
|};
export type ProgramViewPageOverviewTabQuery = {|
  variables: ProgramViewPageOverviewTabQueryVariables,
  response: ProgramViewPageOverviewTabQueryResponse,
|};
*/


/*
query ProgramViewPageOverviewTabQuery(
  $programId: ID
) {
  program(id: $programId) {
    ...ProgramDetailScreen_program
    ...ProgramProgramModuleList_program
    ...PresentableAvatar_presentable
    id
    name
    description
    owner {
      __typename
      ...PresentableLink_presentable
      id
    }
    chatEnabled
    trackChatEnabled
    modules {
      id
      name
      description
      type
      data
    }
    duration
    viewerCanUpdate
    image {
      url
      id
    }
  }
}

fragment GenericModuleCard_programModule on ProgramModule {
  ...ProgramModuleCard_programModule
  id
  name
  description
  data
  program {
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

fragment PresentableLink_presentable on Presentable {
  __typename
  id
  name
}

fragment ProgramDetailScreen_program on Program {
  name
  description
  reminderGroupName
  image {
    url
    id
  }
  modules {
    data
    programModuleGroup {
      id
    }
    id
  }
  moduleGroups {
    name
    id
  }
}

fragment ProgramModuleCard_programModule on ProgramModule {
  id
  name
  description
  data
  program {
    id
    reminderGroupName
  }
  programModuleGroup {
    name
    id
  }
  viewerCanUpdate
}

fragment ProgramProgramModuleList_program on Program {
  id
  viewerCanUpdate
  modules {
    ...GenericModuleCard_programModule
    id
    name
    description
    type
    data
    programModuleGroup {
      id
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
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "programId"
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "chatEnabled",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "trackChatEnabled",
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
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "reminderGroupName",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProgramViewPageOverviewTabQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "program",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Program",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
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
                "kind": "FragmentSpread",
                "name": "PresentableLink_presentable",
                "args": null
              }
            ]
          },
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
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/)
            ]
          },
          (v9/*: any*/),
          (v10/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "image",
            "storageKey": null,
            "args": null,
            "concreteType": "Image",
            "plural": false,
            "selections": [
              (v11/*: any*/)
            ]
          },
          {
            "kind": "FragmentSpread",
            "name": "ProgramDetailScreen_program",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "ProgramProgramModuleList_program",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "PresentableAvatar_presentable",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramViewPageOverviewTabQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "program",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Program",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          (v12/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "image",
            "storageKey": null,
            "args": null,
            "concreteType": "Image",
            "plural": false,
            "selections": [
              (v11/*: any*/),
              (v2/*: any*/)
            ]
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
              (v8/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "programModuleGroup",
                "storageKey": null,
                "args": null,
                "concreteType": "ProgramModuleGroup",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/)
                ]
              },
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
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
                  (v12/*: any*/)
                ]
              },
              (v10/*: any*/),
              (v7/*: any*/)
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
              (v3/*: any*/),
              (v2/*: any*/)
            ]
          },
          (v2/*: any*/),
          (v10/*: any*/),
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
              (v2/*: any*/),
              (v3/*: any*/)
            ]
          },
          (v5/*: any*/),
          (v6/*: any*/),
          (v9/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProgramViewPageOverviewTabQuery",
    "id": null,
    "text": "query ProgramViewPageOverviewTabQuery(\n  $programId: ID\n) {\n  program(id: $programId) {\n    ...ProgramDetailScreen_program\n    ...ProgramProgramModuleList_program\n    ...PresentableAvatar_presentable\n    id\n    name\n    description\n    owner {\n      __typename\n      ...PresentableLink_presentable\n      id\n    }\n    chatEnabled\n    trackChatEnabled\n    modules {\n      id\n      name\n      description\n      type\n      data\n    }\n    duration\n    viewerCanUpdate\n    image {\n      url\n      id\n    }\n  }\n}\n\nfragment GenericModuleCard_programModule on ProgramModule {\n  ...ProgramModuleCard_programModule\n  id\n  name\n  description\n  data\n  program {\n    id\n  }\n}\n\nfragment PresentableAvatar_presentable on Presentable {\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment PresentableLink_presentable on Presentable {\n  __typename\n  id\n  name\n}\n\nfragment ProgramDetailScreen_program on Program {\n  name\n  description\n  reminderGroupName\n  image {\n    url\n    id\n  }\n  modules {\n    data\n    programModuleGroup {\n      id\n    }\n    id\n  }\n  moduleGroups {\n    name\n    id\n  }\n}\n\nfragment ProgramModuleCard_programModule on ProgramModule {\n  id\n  name\n  description\n  data\n  program {\n    id\n    reminderGroupName\n  }\n  programModuleGroup {\n    name\n    id\n  }\n  viewerCanUpdate\n}\n\nfragment ProgramProgramModuleList_program on Program {\n  id\n  viewerCanUpdate\n  modules {\n    ...GenericModuleCard_programModule\n    id\n    name\n    description\n    type\n    data\n    programModuleGroup {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9403de8add89a29cc130e5ed65de4b90';
module.exports = node;
