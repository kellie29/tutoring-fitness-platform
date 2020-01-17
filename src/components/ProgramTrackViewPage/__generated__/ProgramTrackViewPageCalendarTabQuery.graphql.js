/**
 * @flow
 * @relayHash e1d8ab2e480aef8f54ad270052e25c02
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProgramTrackInvitationScreen_program$ref = any;
export type ProgramTrackViewPageCalendarTabQueryVariables = {|
  programTrackId?: ?string
|};
export type ProgramTrackViewPageCalendarTabQueryResponse = {|
  +programTrack: ?{|
    +id: string,
    +startDate: any,
    +events: {|
      +edges: $ReadOnlyArray<{|
        +node: {|
          +id: string,
          +name: string,
          +startDate: any,
          +endDate: any,
          +action: {|
            +id: string,
            +name: string,
            +description: ?string,
            +data: any,
          |},
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
    +program: {|
      +duration: string,
      +modules: $ReadOnlyArray<{|
        +id: string,
        +type: string,
        +name: string,
        +description: ?string,
        +data: any,
      |}>,
      +$fragmentRefs: ProgramTrackInvitationScreen_program$ref,
    |},
  |}
|};
export type ProgramTrackViewPageCalendarTabQuery = {|
  variables: ProgramTrackViewPageCalendarTabQueryVariables,
  response: ProgramTrackViewPageCalendarTabQueryResponse,
|};
*/


/*
query ProgramTrackViewPageCalendarTabQuery(
  $programTrackId: ID
) {
  programTrack(id: $programTrackId) {
    id
    startDate
    events {
      edges {
        node {
          id
          name
          startDate
          endDate
          action {
            id
            name
            description
            data
          }
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
    program {
      ...ProgramTrackInvitationScreen_program
      duration
      modules {
        id
        type
        name
        description
        data
      }
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
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "startDate",
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
  "name": "endDate",
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
  "name": "data",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "action",
  "storageKey": null,
  "args": null,
  "concreteType": "ProgramTrackAction",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    (v4/*: any*/),
    (v6/*: any*/),
    (v7/*: any*/)
  ]
},
v9 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
],
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "response",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "duration",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "modules",
  "storageKey": null,
  "args": null,
  "concreteType": "ProgramModule",
  "plural": true,
  "selections": [
    (v2/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "type",
      "args": null,
      "storageKey": null
    },
    (v4/*: any*/),
    (v6/*: any*/),
    (v7/*: any*/)
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProgramTrackViewPageCalendarTabQuery",
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
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "events",
            "storageKey": null,
            "args": null,
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
                      (v4/*: any*/),
                      (v3/*: any*/),
                      (v5/*: any*/),
                      (v8/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "actionResponses",
                        "storageKey": "actionResponses(first:1)",
                        "args": (v9/*: any*/),
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
                                  (v10/*: any*/)
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
              (v11/*: any*/),
              (v12/*: any*/),
              {
                "kind": "FragmentSpread",
                "name": "ProgramTrackInvitationScreen_program",
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
    "name": "ProgramTrackViewPageCalendarTabQuery",
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
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "events",
            "storageKey": null,
            "args": null,
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
                      (v4/*: any*/),
                      (v3/*: any*/),
                      (v5/*: any*/),
                      (v8/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "actionResponses",
                        "storageKey": "actionResponses(first:1)",
                        "args": (v9/*: any*/),
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
                                  (v10/*: any*/),
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
              (v4/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProgramTrackViewPageCalendarTabQuery",
    "id": null,
    "text": "query ProgramTrackViewPageCalendarTabQuery(\n  $programTrackId: ID\n) {\n  programTrack(id: $programTrackId) {\n    id\n    startDate\n    events {\n      edges {\n        node {\n          id\n          name\n          startDate\n          endDate\n          action {\n            id\n            name\n            description\n            data\n          }\n          actionResponses(first: 1) {\n            edges {\n              node {\n                response\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n    program {\n      ...ProgramTrackInvitationScreen_program\n      duration\n      modules {\n        id\n        type\n        name\n        description\n        data\n      }\n      id\n    }\n  }\n}\n\nfragment ProgramTrackInvitationScreen_program on Program {\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f91cbff8906c8cb334b2df5c73a38294';
module.exports = node;
