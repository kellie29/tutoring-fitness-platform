/**
 * @flow
 * @relayHash e229900b8870bf333d624037a95c6e9e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProgramTrackEventFilterInput = {|
  startDate?: ?DateTimeFilterInput,
  programTrackId?: ?string,
  programId?: ?string,
  clientProfileId?: ?string,
|};
export type DateTimeFilterInput = {|
  after?: ?any,
  before?: ?any,
|};
export type ProgramTrackViewPageOverviewTabQueryVariables = {|
  programTrackId?: ?string,
  eventsFilter?: ?ProgramTrackEventFilterInput,
|};
export type ProgramTrackViewPageOverviewTabQueryResponse = {|
  +programTrack: ?{|
    +id: string,
    +actions: {|
      +edges: $ReadOnlyArray<{|
        +node: {|
          +id: string,
          +name: string,
          +data: any,
          +sourceProgramModule: {|
            +data: any
          |},
          +responses: {|
            +edges: $ReadOnlyArray<{|
              +node: {|
                +response: any,
                +createdAt: any,
              |}
            |}>
          |},
          +events: {|
            +edges: $ReadOnlyArray<{|
              +node: {|
                +id: string,
                +startDate: any,
                +actionResponses: {|
                  +edges: $ReadOnlyArray<{|
                    +node: {|
                      +response: any
                    |}
                  |}>
                |},
              |}
            |}>
          |},
        |}
      |}>
    |},
  |}
|};
export type ProgramTrackViewPageOverviewTabQuery = {|
  variables: ProgramTrackViewPageOverviewTabQueryVariables,
  response: ProgramTrackViewPageOverviewTabQueryResponse,
|};
*/


/*
query ProgramTrackViewPageOverviewTabQuery(
  $programTrackId: ID
  $eventsFilter: ProgramTrackEventFilterInput
) {
  programTrack(id: $programTrackId) {
    id
    actions(filter: {type: {eq: "multiStep"}}, first: 9999) {
      edges {
        node {
          id
          name
          data
          sourceProgramModule {
            data
            id
          }
          responses(first: 9999) {
            edges {
              node {
                response
                createdAt
                id
              }
            }
          }
          events(filter: $eventsFilter, first: 9999) {
            edges {
              node {
                id
                startDate
                actionResponses(first: 1) {
                  edges {
                    node {
                      response
                      id
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "programTrackId",
    "type": "ID",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "eventsFilter",
    "type": "ProgramTrackEventFilterInput",
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
v3 = {
  "kind": "Literal",
  "name": "first",
  "value": 9999
},
v4 = [
  {
    "kind": "Literal",
    "name": "filter",
    "value": {
      "type": {
        "eq": "multiStep"
      }
    }
  },
  (v3/*: any*/)
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
  "name": "data",
  "args": null,
  "storageKey": null
},
v7 = [
  (v3/*: any*/)
],
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "response",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "createdAt",
  "args": null,
  "storageKey": null
},
v10 = [
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "eventsFilter"
  },
  (v3/*: any*/)
],
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "startDate",
  "args": null,
  "storageKey": null
},
v12 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProgramTrackViewPageOverviewTabQuery",
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
            "storageKey": "actions(filter:{\"type\":{\"eq\":\"multiStep\"}},first:9999)",
            "args": (v4/*: any*/),
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
                      (v2/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "sourceProgramModule",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "ProgramModule",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/)
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "responses",
                        "storageKey": "responses(first:9999)",
                        "args": (v7/*: any*/),
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
                                  (v8/*: any*/),
                                  (v9/*: any*/)
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "events",
                        "storageKey": null,
                        "args": (v10/*: any*/),
                        "concreteType": "ProgramTrackEventConnection",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "edges",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "ProgramTrackEventEdge",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "node",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "ProgramTrackEvent",
                                "plural": false,
                                "selections": [
                                  (v2/*: any*/),
                                  (v11/*: any*/),
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "actionResponses",
                                    "storageKey": "actionResponses(first:1)",
                                    "args": (v12/*: any*/),
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
                                              (v8/*: any*/)
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
  "operation": {
    "kind": "Operation",
    "name": "ProgramTrackViewPageOverviewTabQuery",
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
            "storageKey": "actions(filter:{\"type\":{\"eq\":\"multiStep\"}},first:9999)",
            "args": (v4/*: any*/),
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
                      (v2/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "sourceProgramModule",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "ProgramModule",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/),
                          (v2/*: any*/)
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "responses",
                        "storageKey": "responses(first:9999)",
                        "args": (v7/*: any*/),
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
                                  (v8/*: any*/),
                                  (v9/*: any*/),
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
                        "name": "events",
                        "storageKey": null,
                        "args": (v10/*: any*/),
                        "concreteType": "ProgramTrackEventConnection",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "edges",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "ProgramTrackEventEdge",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "node",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "ProgramTrackEvent",
                                "plural": false,
                                "selections": [
                                  (v2/*: any*/),
                                  (v11/*: any*/),
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "actionResponses",
                                    "storageKey": "actionResponses(first:1)",
                                    "args": (v12/*: any*/),
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
                                              (v8/*: any*/),
                                              (v2/*: any*/)
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
  "params": {
    "operationKind": "query",
    "name": "ProgramTrackViewPageOverviewTabQuery",
    "id": null,
    "text": "query ProgramTrackViewPageOverviewTabQuery(\n  $programTrackId: ID\n  $eventsFilter: ProgramTrackEventFilterInput\n) {\n  programTrack(id: $programTrackId) {\n    id\n    actions(filter: {type: {eq: \"multiStep\"}}, first: 9999) {\n      edges {\n        node {\n          id\n          name\n          data\n          sourceProgramModule {\n            data\n            id\n          }\n          responses(first: 9999) {\n            edges {\n              node {\n                response\n                createdAt\n                id\n              }\n            }\n          }\n          events(filter: $eventsFilter, first: 9999) {\n            edges {\n              node {\n                id\n                startDate\n                actionResponses(first: 1) {\n                  edges {\n                    node {\n                      response\n                      id\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '259c4891df9ae7dee8aee5a1f2680473';
module.exports = node;
