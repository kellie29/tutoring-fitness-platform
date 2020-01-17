/**
 * @flow
 * @relayHash 2e379cb470fb08ca8b095c8f00af9676
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProgramProgramModuleList_program$ref = any;
type ProgramTrackInvitationScreen_program$ref = any;
export type ProgramPreviewStepContentQueryVariables = {|
  programId?: ?string
|};
export type ProgramPreviewStepContentQueryResponse = {|
  +program: ?{|
    +modules: $ReadOnlyArray<{|
      +id: string,
      +type: string,
      +name: string,
      +description: ?string,
      +data: any,
    |}>,
    +duration: string,
    +$fragmentRefs: ProgramProgramModuleList_program$ref & ProgramTrackInvitationScreen_program$ref,
  |}
|};
export type ProgramPreviewStepContentQuery = {|
  variables: ProgramPreviewStepContentQueryVariables,
  response: ProgramPreviewStepContentQueryResponse,
|};
*/


/*
query ProgramPreviewStepContentQuery(
  $programId: ID
) {
  program(id: $programId) {
    ...ProgramProgramModuleList_program
    ...ProgramTrackInvitationScreen_program
    modules {
      id
      type
      name
      description
      data
    }
    duration
    id
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

fragment ProgramTrackInvitationScreen_program on Program {
  name
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
  "name": "type",
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
  "name": "description",
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
    "name": "ProgramPreviewStepContentQuery",
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
          {
            "kind": "FragmentSpread",
            "name": "ProgramProgramModuleList_program",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "ProgramTrackInvitationScreen_program",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramPreviewStepContentQuery",
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
          (v8/*: any*/),
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
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
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
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "reminderGroupName",
                    "args": null,
                    "storageKey": null
                  }
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
                "selections": [
                  (v4/*: any*/),
                  (v2/*: any*/)
                ]
              },
              (v8/*: any*/),
              (v3/*: any*/)
            ]
          },
          (v4/*: any*/),
          (v7/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProgramPreviewStepContentQuery",
    "id": null,
    "text": "query ProgramPreviewStepContentQuery(\n  $programId: ID\n) {\n  program(id: $programId) {\n    ...ProgramProgramModuleList_program\n    ...ProgramTrackInvitationScreen_program\n    modules {\n      id\n      type\n      name\n      description\n      data\n    }\n    duration\n    id\n  }\n}\n\nfragment GenericModuleCard_programModule on ProgramModule {\n  ...ProgramModuleCard_programModule\n  id\n  name\n  description\n  data\n  program {\n    id\n  }\n}\n\nfragment ProgramModuleCard_programModule on ProgramModule {\n  id\n  name\n  description\n  data\n  program {\n    id\n    reminderGroupName\n  }\n  programModuleGroup {\n    name\n    id\n  }\n  viewerCanUpdate\n}\n\nfragment ProgramProgramModuleList_program on Program {\n  id\n  viewerCanUpdate\n  modules {\n    ...GenericModuleCard_programModule\n    id\n    name\n    description\n    type\n    data\n    programModuleGroup {\n      id\n    }\n  }\n}\n\nfragment ProgramTrackInvitationScreen_program on Program {\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dfc72d06bbfff6141a9012f15ec95837';
module.exports = node;
