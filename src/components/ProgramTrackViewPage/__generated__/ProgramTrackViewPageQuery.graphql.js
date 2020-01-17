/**
 * @flow
 * @relayHash e9cca4360870bf24cf5395cbcbefebac
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PresentableAvatar_presentable$ref = any;
type PresentableLink_presentable$ref = any;
type ProgramTrackEventRow_programTrackEvent$ref = any;
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
export type ProgramTrackViewPageQueryVariables = {|
  programTrackId?: ?string,
  trackEventsFilter: ProgramTrackEventFilterInput,
|};
export type ProgramTrackViewPageQueryResponse = {|
  +programTrack: ?{|
    +id: string,
    +name: string,
    +image: ?{|
      +url: any
    |},
    +program: {|
      +id: string,
      +name: string,
      +$fragmentRefs: PresentableAvatar_presentable$ref,
    |},
    +user: ?{|
      +id: string,
      +name: string,
      +$fragmentRefs: PresentableLink_presentable$ref,
    |},
    +events: {|
      +edges: $ReadOnlyArray<{|
        +node: {|
          +id: string,
          +$fragmentRefs: ProgramTrackEventRow_programTrackEvent$ref,
        |}
      |}>
    |},
    +actions: {|
      +edges: $ReadOnlyArray<{|
        +node: {|
          +id: string
        |}
      |}>
    |},
  |}
|};
export type ProgramTrackViewPageQuery = {|
  variables: ProgramTrackViewPageQueryVariables,
  response: ProgramTrackViewPageQueryResponse,
|};
*/


/*
query ProgramTrackViewPageQuery(
  $programTrackId: ID
  $trackEventsFilter: ProgramTrackEventFilterInput!
) {
  programTrack(id: $programTrackId) {
    id
    name
    image {
      url
      id
    }
    program {
      ...PresentableAvatar_presentable
      id
      name
    }
    user {
      ...PresentableLink_presentable
      id
      name
    }
    events(filter: $trackEventsFilter) {
      edges {
        node {
          id
          ...ProgramTrackEventRow_programTrackEvent
        }
      }
    }
    actions {
      edges {
        node {
          id
        }
      }
    }
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

fragment ProgramTrackActionResponseRow_programTrackActionResponse on ProgramTrackActionResponse {
  id
  response
  createdAt
  action {
    data
    id
  }
}

fragment ProgramTrackEventRow_programTrackEvent on ProgramTrackEvent {
  id
  name
  actionResponses(first: 1) {
    edges {
      node {
        id
        ...ProgramTrackActionResponseRow_programTrackActionResponse
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
    "name": "trackEventsFilter",
    "type": "ProgramTrackEventFilterInput!",
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": null,
  "storageKey": null
},
v5 = [
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "trackEventsFilter"
  }
],
v6 = {
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
            (v2/*: any*/)
          ]
        }
      ]
    }
  ]
},
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "image",
  "storageKey": null,
  "args": null,
  "concreteType": "Image",
  "plural": false,
  "selections": [
    (v4/*: any*/),
    (v2/*: any*/)
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProgramTrackViewPageQuery",
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
            "name": "image",
            "storageKey": null,
            "args": null,
            "concreteType": "Image",
            "plural": false,
            "selections": [
              (v4/*: any*/)
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
              (v3/*: any*/),
              {
                "kind": "FragmentSpread",
                "name": "PresentableAvatar_presentable",
                "args": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
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
            "name": "events",
            "storageKey": null,
            "args": (v5/*: any*/),
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
                      {
                        "kind": "FragmentSpread",
                        "name": "ProgramTrackEventRow_programTrackEvent",
                        "args": null
                      }
                    ]
                  }
                ]
              }
            ]
          },
          (v6/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramTrackViewPageQuery",
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
              (v3/*: any*/),
              (v7/*: any*/),
              (v2/*: any*/)
            ]
          },
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "events",
            "storageKey": null,
            "args": (v5/*: any*/),
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
                      (v3/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "actionResponses",
                        "storageKey": "actionResponses(first:1)",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "first",
                            "value": 1
                          }
                        ],
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
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "response",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "createdAt",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "action",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "ProgramTrackAction",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "data",
                                        "args": null,
                                        "storageKey": null
                                      },
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
          },
          (v6/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProgramTrackViewPageQuery",
    "id": null,
    "text": "query ProgramTrackViewPageQuery(\n  $programTrackId: ID\n  $trackEventsFilter: ProgramTrackEventFilterInput!\n) {\n  programTrack(id: $programTrackId) {\n    id\n    name\n    image {\n      url\n      id\n    }\n    program {\n      ...PresentableAvatar_presentable\n      id\n      name\n    }\n    user {\n      ...PresentableLink_presentable\n      id\n      name\n    }\n    events(filter: $trackEventsFilter) {\n      edges {\n        node {\n          id\n          ...ProgramTrackEventRow_programTrackEvent\n        }\n      }\n    }\n    actions {\n      edges {\n        node {\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment PresentableAvatar_presentable on Presentable {\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment PresentableLink_presentable on Presentable {\n  __typename\n  id\n  name\n}\n\nfragment ProgramTrackActionResponseRow_programTrackActionResponse on ProgramTrackActionResponse {\n  id\n  response\n  createdAt\n  action {\n    data\n    id\n  }\n}\n\nfragment ProgramTrackEventRow_programTrackEvent on ProgramTrackEvent {\n  id\n  name\n  actionResponses(first: 1) {\n    edges {\n      node {\n        id\n        ...ProgramTrackActionResponseRow_programTrackActionResponse\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd6c0d9dcb1f6d0b39d32bb24b1a9da51';
module.exports = node;
