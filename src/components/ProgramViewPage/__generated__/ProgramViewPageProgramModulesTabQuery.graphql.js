/**
 * @flow
 * @relayHash 36cf6d10a83e57c1c2a6f792bdafaea6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PresentableLink_presentable$ref = any;
type ProgramDetailScreen_program$ref = any;
type ProgramProgramModuleList_program$ref = any;
export type ProgramViewPageProgramModulesTabQueryVariables = {|
  programId?: ?string
|};
export type ProgramViewPageProgramModulesTabQueryResponse = {|
  +program: ?{|
    +id: string,
    +name: string,
    +description: string,
    +reminderGroupName: ?string,
    +owner: {|
      +$fragmentRefs: PresentableLink_presentable$ref
    |},
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
    +$fragmentRefs: ProgramProgramModuleList_program$ref & ProgramDetailScreen_program$ref,
  |}
|};
export type ProgramViewPageProgramModulesTabQuery = {|
  variables: ProgramViewPageProgramModulesTabQueryVariables,
  response: ProgramViewPageProgramModulesTabQueryResponse,
|};
*/


/*
query ProgramViewPageProgramModulesTabQuery(
  $programId: ID
) {
  program(id: $programId) {
    ...ProgramProgramModuleList_program
    ...ProgramDetailScreen_program
    id
    name
    description
    reminderGroupName
    owner {
      __typename
      ...PresentableLink_presentable
      id
    }
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
  "name": "reminderGroupName",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "data",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "duration",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "viewerCanUpdate",
  "args": null,
  "storageKey": null
},
v10 = [
  (v3/*: any*/),
  (v2/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProgramViewPageProgramModulesTabQuery",
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
          (v5/*: any*/),
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
              (v6/*: any*/),
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
              (v2/*: any*/),
              (v3/*: any*/)
            ]
          },
          (v8/*: any*/),
          (v9/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "ProgramProgramModuleList_program",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "ProgramDetailScreen_program",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramViewPageProgramModulesTabQuery",
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
          (v9/*: any*/),
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
                  (v5/*: any*/)
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "programModuleGroup",
                "storageKey": null,
                "args": null,
                "concreteType": "ProgramModuleGroup",
                "plural": false,
                "selections": (v10/*: any*/)
              },
              (v9/*: any*/),
              (v6/*: any*/)
            ]
          },
          (v3/*: any*/),
          (v4/*: any*/),
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
              (v2/*: any*/)
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
            "selections": (v10/*: any*/)
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
              (v2/*: any*/),
              (v3/*: any*/)
            ]
          },
          (v8/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProgramViewPageProgramModulesTabQuery",
    "id": null,
    "text": "query ProgramViewPageProgramModulesTabQuery(\n  $programId: ID\n) {\n  program(id: $programId) {\n    ...ProgramProgramModuleList_program\n    ...ProgramDetailScreen_program\n    id\n    name\n    description\n    reminderGroupName\n    owner {\n      __typename\n      ...PresentableLink_presentable\n      id\n    }\n    modules {\n      id\n      name\n      description\n      type\n      data\n    }\n    moduleGroups {\n      id\n      name\n    }\n    duration\n    viewerCanUpdate\n  }\n}\n\nfragment GenericModuleCard_programModule on ProgramModule {\n  ...ProgramModuleCard_programModule\n  id\n  name\n  description\n  data\n  program {\n    id\n  }\n}\n\nfragment PresentableLink_presentable on Presentable {\n  __typename\n  id\n  name\n}\n\nfragment ProgramDetailScreen_program on Program {\n  name\n  description\n  reminderGroupName\n  image {\n    url\n    id\n  }\n  modules {\n    data\n    programModuleGroup {\n      id\n    }\n    id\n  }\n  moduleGroups {\n    name\n    id\n  }\n}\n\nfragment ProgramModuleCard_programModule on ProgramModule {\n  id\n  name\n  description\n  data\n  program {\n    id\n    reminderGroupName\n  }\n  programModuleGroup {\n    name\n    id\n  }\n  viewerCanUpdate\n}\n\nfragment ProgramProgramModuleList_program on Program {\n  id\n  viewerCanUpdate\n  modules {\n    ...GenericModuleCard_programModule\n    id\n    name\n    description\n    type\n    data\n    programModuleGroup {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd06bdf74a054995cbee3593f9c4cc1d5';
module.exports = node;
