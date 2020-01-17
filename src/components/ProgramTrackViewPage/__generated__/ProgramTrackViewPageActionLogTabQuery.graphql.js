/**
 * @flow
 * @relayHash 653ec18635730dd82feb80f5698216dc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProgramDetailScreen_program$ref = any;
type ProgramTrackActionResponseCard_programTrackActionResponse$ref = any;
export type ProgramTrackViewPageActionLogTabQueryVariables = {|
  programTrackId?: ?string
|};
export type ProgramTrackViewPageActionLogTabQueryResponse = {|
  +programTrack: ?{|
    +id: string,
    +actions: {|
      +edges: $ReadOnlyArray<{|
        +node: {|
          +responses: {|
            +edges: $ReadOnlyArray<{|
              +node: {|
                +id: string,
                +createdAt: any,
                +response: any,
                +action: {|
                  +id: string,
                  +name: string,
                  +description: ?string,
                  +data: any,
                |},
                +$fragmentRefs: ProgramTrackActionResponseCard_programTrackActionResponse$ref,
              |}
            |}>
          |}
        |}
      |}>
    |},
    +program: {|
      +id: string,
      +$fragmentRefs: ProgramDetailScreen_program$ref,
    |},
  |}
|};
export type ProgramTrackViewPageActionLogTabQuery = {|
  variables: ProgramTrackViewPageActionLogTabQueryVariables,
  response: ProgramTrackViewPageActionLogTabQueryResponse,
|};
*/


/*
query ProgramTrackViewPageActionLogTabQuery(
  $programTrackId: ID
) {
  programTrack(id: $programTrackId) {
    id
    actions {
      edges {
        node {
          responses(first: 9999) {
            edges {
              node {
                ...ProgramTrackActionResponseCard_programTrackActionResponse
                id
                createdAt
                response
                action {
                  id
                  name
                  description
                  data
                }
              }
            }
          }
          id
        }
      }
    }
    program {
      ...ProgramDetailScreen_program
      id
    }
  }
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

fragment ProgramTrackActionResponseCard_programTrackActionResponse on ProgramTrackActionResponse {
  id
  createdAt
  action {
    id
    name
  }
  response
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "programTrackId",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "programTrackId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 9999
  }
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "createdAt",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "response",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
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
  "kind": "LinkedField",
  "alias": null,
  "name": "action",
  "storageKey": null,
  "args": null,
  "concreteType": "ProgramTrackAction",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    (v6/*: any*/),
    (v7/*: any*/),
    (v8/*: any*/)
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProgramTrackViewPageActionLogTabQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "programTrack",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ProgramTrack",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "actions",
            "storageKey": null,
            "args": null,
            "concreteType": "ProgramTrackActionConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "ProgramTrackActionEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ProgramTrackAction",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "responses",
                        "storageKey": "responses(first:9999)",
                        "args": (v3/*: any*/),
                        "concreteType": "ProgramTrackActionResponseConnection",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "edges",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "ProgramTrackActionResponseEdge",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "node",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "ProgramTrackActionResponse",
                                "plural": false,
                                "selections": [
                                  (v2/*: any*/),
                                  (v4/*: any*/),
                                  (v5/*: any*/),
                                  (v9/*: any*/),
                                  {
                                    "kind": "FragmentSpread",
                                    "name": "ProgramTrackActionResponseCard_programTrackActionResponse",
                                    "args": null
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
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
                "kind": "FragmentSpread",
                "name": "ProgramDetailScreen_program",
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
    "name": "ProgramTrackViewPageActionLogTabQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "programTrack",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ProgramTrack",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "actions",
            "storageKey": null,
            "args": null,
            "concreteType": "ProgramTrackActionConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "ProgramTrackActionEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ProgramTrackAction",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "responses",
                        "storageKey": "responses(first:9999)",
                        "args": (v3/*: any*/),
                        "concreteType": "ProgramTrackActionResponseConnection",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "edges",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "ProgramTrackActionResponseEdge",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "node",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "ProgramTrackActionResponse",
                                "plural": false,
                                "selections": [
                                  (v2/*: any*/),
                                  (v4/*: any*/),
                                  (v9/*: any*/),
                                  (v5/*: any*/)
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      (v2/*: any*/)
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "program",
            "storageKey": null,
            "args": null,
            "concreteType": "Program",
            "plural": false,
            "selections": [
              (v6/*: any*/),
              (v7/*: any*/),
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
                      (v2/*: any*/)
                    ]
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
                "selections": [
                  (v6/*: any*/),
                  (v2/*: any*/)
                ]
              },
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProgramTrackViewPageActionLogTabQuery",
    "id": null,
    "text": "query ProgramTrackViewPageActionLogTabQuery(\n  $programTrackId: ID\n) {\n  programTrack(id: $programTrackId) {\n    id\n    actions {\n      edges {\n        node {\n          responses(first: 9999) {\n            edges {\n              node {\n                ...ProgramTrackActionResponseCard_programTrackActionResponse\n                id\n                createdAt\n                response\n                action {\n                  id\n                  name\n                  description\n                  data\n                }\n              }\n            }\n          }\n          id\n        }\n      }\n    }\n    program {\n      ...ProgramDetailScreen_program\n      id\n    }\n  }\n}\n\nfragment ProgramDetailScreen_program on Program {\n  name\n  description\n  reminderGroupName\n  image {\n    url\n    id\n  }\n  modules {\n    data\n    programModuleGroup {\n      id\n    }\n    id\n  }\n  moduleGroups {\n    name\n    id\n  }\n}\n\nfragment ProgramTrackActionResponseCard_programTrackActionResponse on ProgramTrackActionResponse {\n  id\n  createdAt\n  action {\n    id\n    name\n  }\n  response\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fadaa52be21db5d96fe8e25579a3331c';
module.exports = node;
