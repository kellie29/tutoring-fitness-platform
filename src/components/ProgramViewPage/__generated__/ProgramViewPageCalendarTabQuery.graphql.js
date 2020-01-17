/**
 * @flow
 * @relayHash 583b8ec20eb6a80af4c07e44110b97b7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PresentableLink_presentable$ref = any;
type ProgramDetailScreen_program$ref = any;
export type ProgramViewPageCalendarTabQueryVariables = {|
  programId?: ?string
|};
export type ProgramViewPageCalendarTabQueryResponse = {|
  +program: ?{|
    +id: string,
    +name: string,
    +description: string,
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
    +duration: string,
    +viewerCanUpdate: ?boolean,
    +$fragmentRefs: ProgramDetailScreen_program$ref,
  |}
|};
export type ProgramViewPageCalendarTabQuery = {|
  variables: ProgramViewPageCalendarTabQueryVariables,
  response: ProgramViewPageCalendarTabQueryResponse,
|};
*/


/*
query ProgramViewPageCalendarTabQuery(
  $programId: ID
) {
  program(id: $programId) {
    ...ProgramDetailScreen_program
    id
    name
    description
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
    duration
    viewerCanUpdate
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
  "name": "type",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "data",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "duration",
  "args": null,
  "storageKey": null
},
v8 = {
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
    "name": "ProgramViewPageCalendarTabQuery",
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
              (v5/*: any*/),
              (v6/*: any*/)
            ]
          },
          (v7/*: any*/),
          (v8/*: any*/),
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
    "name": "ProgramViewPageCalendarTabQuery",
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
            "name": "modules",
            "storageKey": null,
            "args": null,
            "concreteType": "ProgramModule",
            "plural": true,
            "selections": [
              (v6/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "programModuleGroup",
                "storageKey": null,
                "args": null,
                "concreteType": "ProgramModuleGroup",
                "plural": false,
                "selections": [
                  (v2/*: any*/)
                ]
              },
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/)
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
          (v7/*: any*/),
          (v8/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProgramViewPageCalendarTabQuery",
    "id": null,
    "text": "query ProgramViewPageCalendarTabQuery(\n  $programId: ID\n) {\n  program(id: $programId) {\n    ...ProgramDetailScreen_program\n    id\n    name\n    description\n    owner {\n      __typename\n      ...PresentableLink_presentable\n      id\n    }\n    modules {\n      id\n      name\n      description\n      type\n      data\n    }\n    duration\n    viewerCanUpdate\n  }\n}\n\nfragment PresentableLink_presentable on Presentable {\n  __typename\n  id\n  name\n}\n\nfragment ProgramDetailScreen_program on Program {\n  name\n  description\n  reminderGroupName\n  image {\n    url\n    id\n  }\n  modules {\n    data\n    programModuleGroup {\n      id\n    }\n    id\n  }\n  moduleGroups {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '64dda3fd8f212f3a3ded66f2b0720d57';
module.exports = node;
