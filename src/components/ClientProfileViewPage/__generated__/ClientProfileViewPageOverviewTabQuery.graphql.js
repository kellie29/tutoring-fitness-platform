/**
 * @flow
 * @relayHash 73f965aa6572996e687adfb939d7204d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ClientProfileViewPageOverviewTabProgramTrackRow_programTrack$ref = any;
type PresentableViewPageHeader_presentable$ref = any;
export type ProgramTrackFilterInput = {|
  search?: ?string,
  ownerId?: ?string,
  clientProfileId?: ?string,
|};
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
export type ClientProfileViewPageOverviewTabQueryVariables = {|
  clientProfileId?: ?string,
  programTracksFilter?: ?ProgramTrackFilterInput,
  eventsFilter?: ?ProgramTrackEventFilterInput,
|};
export type ClientProfileViewPageOverviewTabQueryResponse = {|
  +clientProfile: ?{|
    +id: string,
    +name: string,
    +user: ?{|
      +id: string
    |},
    +$fragmentRefs: PresentableViewPageHeader_presentable$ref,
  |},
  +programTracks: {|
    +edgeCount: number,
    +edges: $ReadOnlyArray<{|
      +node: {|
        +id: string,
        +program: {|
          +name: string
        |},
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
        +events: {|
          +edges: $ReadOnlyArray<{|
            +node: {|
              +startDate: any,
              +hasResponse: boolean,
            |}
          |}>
        |},
        +$fragmentRefs: ClientProfileViewPageOverviewTabProgramTrackRow_programTrack$ref,
      |}
    |}>,
  |},
|};
export type ClientProfileViewPageOverviewTabQuery = {|
  variables: ClientProfileViewPageOverviewTabQueryVariables,
  response: ClientProfileViewPageOverviewTabQueryResponse,
|};
*/


/*
query ClientProfileViewPageOverviewTabQuery(
  $clientProfileId: ID
  $programTracksFilter: ProgramTrackFilterInput
  $eventsFilter: ProgramTrackEventFilterInput
) {
  clientProfile(id: $clientProfileId) {
    ...PresentableViewPageHeader_presentable
    id
    name
    user {
      id
    }
  }
  programTracks(first: 9999, filter: $programTracksFilter) {
    edgeCount
    edges {
      node {
        ...ClientProfileViewPageOverviewTabProgramTrackRow_programTrack_bvTSy
        id
        program {
          name
          id
        }
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
        events(filter: $eventsFilter, first: 9999) {
          edges {
            node {
              startDate
              hasResponse
              id
            }
          }
        }
      }
    }
  }
}

fragment ClientProfileViewPageOverviewTabProgramTrackRow_programTrack_bvTSy on ProgramTrack {
  id
  program {
    ...NodeListItem_node
    id
    name
    createdAt
  }
  startDate
  endDate
  clientProfile {
    id
  }
  events(filter: $eventsFilter, first: 9999) {
    edges {
      node {
        startDate
        hasResponse
        id
      }
    }
  }
}

fragment NodeListItem_node on Node {
  ...NodeListItem_presentable
  ... on Owned {
    owner {
      __typename
      ...PresentableAvatar_presentable
      ...PresentableLink_presentable
      ... on Presentable {
        name
      }
      id
    }
  }
  createdAt
}

fragment NodeListItem_presentable on Presentable {
  presentableTypeName: __typename
  ...PresentableAvatar_presentable
  ...PresentableCardMedia_presentable
  name
  image {
    url
    id
  }
  description
}

fragment PresentableAvatar_presentable on Presentable {
  name
  image {
    url
    id
  }
}

fragment PresentableCardMedia_presentable on Presentable {
  ...PresentableAvatar_presentable
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "clientProfileId",
    "type": "ID",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "programTracksFilter",
    "type": "ProgramTrackFilterInput",
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
    "variableName": "clientProfileId"
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
v4 = [
  (v2/*: any*/)
],
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": (v4/*: any*/)
},
v6 = {
  "kind": "Literal",
  "name": "first",
  "value": 9999
},
v7 = [
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "programTracksFilter"
  },
  (v6/*: any*/)
],
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "edgeCount",
  "args": null,
  "storageKey": null
},
v9 = [
  {
    "kind": "Literal",
    "name": "filter",
    "value": {
      "type": {
        "eq": "multiStep"
      }
    }
  },
  (v6/*: any*/)
],
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "data",
  "args": null,
  "storageKey": null
},
v11 = [
  (v6/*: any*/)
],
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "response",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "createdAt",
  "args": null,
  "storageKey": null
},
v14 = [
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "eventsFilter"
  },
  (v6/*: any*/)
],
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "startDate",
  "args": null,
  "storageKey": null
},
v16 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
],
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "hasResponse",
  "args": null,
  "storageKey": null
},
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": null,
  "storageKey": null
},
v19 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v20 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "image",
  "storageKey": null,
  "args": null,
  "concreteType": "Image",
  "plural": false,
  "selections": [
    (v18/*: any*/),
    (v2/*: any*/)
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ClientProfileViewPageOverviewTabQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "clientProfile",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ClientProfile",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v5/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "PresentableViewPageHeader_presentable",
            "args": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "programTracks",
        "storageKey": null,
        "args": (v7/*: any*/),
        "concreteType": "ProgramTrackConnection",
        "plural": false,
        "selections": [
          (v8/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "ProgramTrackEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "ProgramTrack",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "program",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Program",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/)
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "actions",
                    "storageKey": "actions(filter:{\"type\":{\"eq\":\"multiStep\"}},first:9999)",
                    "args": (v9/*: any*/),
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
                              (v3/*: any*/),
                              (v10/*: any*/),
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "sourceProgramModule",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "ProgramModule",
                                "plural": false,
                                "selections": [
                                  (v10/*: any*/)
                                ]
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "responses",
                                "storageKey": "responses(first:9999)",
                                "args": (v11/*: any*/),
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
                                          (v12/*: any*/),
                                          (v13/*: any*/)
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
                                "args": (v14/*: any*/),
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
                                          (v15/*: any*/),
                                          {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "actionResponses",
                                            "storageKey": "actionResponses(first:1)",
                                            "args": (v16/*: any*/),
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
                                                      (v12/*: any*/)
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
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "events",
                    "storageKey": null,
                    "args": (v14/*: any*/),
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
                              (v15/*: any*/),
                              (v17/*: any*/)
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "kind": "FragmentSpread",
                    "name": "ClientProfileViewPageOverviewTabProgramTrackRow_programTrack",
                    "args": [
                      {
                        "kind": "Variable",
                        "name": "eventsFilter",
                        "variableName": "eventsFilter"
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
    "name": "ClientProfileViewPageOverviewTabQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "clientProfile",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ClientProfile",
        "plural": false,
        "selections": [
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
              (v18/*: any*/),
              (v2/*: any*/),
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
              (v19/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
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
          (v2/*: any*/),
          (v5/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "programTracks",
        "storageKey": null,
        "args": (v7/*: any*/),
        "concreteType": "ProgramTrackConnection",
        "plural": false,
        "selections": [
          (v8/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "ProgramTrackEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "ProgramTrack",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "program",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Program",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": "presentableTypeName",
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      },
                      (v3/*: any*/),
                      (v20/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "description",
                        "args": null,
                        "storageKey": null
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
                          (v3/*: any*/),
                          (v20/*: any*/),
                          (v19/*: any*/),
                          (v2/*: any*/)
                        ]
                      },
                      (v13/*: any*/),
                      (v2/*: any*/)
                    ]
                  },
                  (v15/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "endDate",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "clientProfile",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ClientProfile",
                    "plural": false,
                    "selections": (v4/*: any*/)
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "events",
                    "storageKey": null,
                    "args": (v14/*: any*/),
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
                              (v15/*: any*/),
                              (v17/*: any*/),
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
                    "name": "actions",
                    "storageKey": "actions(filter:{\"type\":{\"eq\":\"multiStep\"}},first:9999)",
                    "args": (v9/*: any*/),
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
                              (v3/*: any*/),
                              (v10/*: any*/),
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "sourceProgramModule",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "ProgramModule",
                                "plural": false,
                                "selections": [
                                  (v10/*: any*/),
                                  (v2/*: any*/)
                                ]
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "responses",
                                "storageKey": "responses(first:9999)",
                                "args": (v11/*: any*/),
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
                                          (v12/*: any*/),
                                          (v13/*: any*/),
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
                                "args": (v14/*: any*/),
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
                                          (v15/*: any*/),
                                          {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "actionResponses",
                                            "storageKey": "actionResponses(first:1)",
                                            "args": (v16/*: any*/),
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
                                                      (v12/*: any*/),
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
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ClientProfileViewPageOverviewTabQuery",
    "id": null,
    "text": "query ClientProfileViewPageOverviewTabQuery(\n  $clientProfileId: ID\n  $programTracksFilter: ProgramTrackFilterInput\n  $eventsFilter: ProgramTrackEventFilterInput\n) {\n  clientProfile(id: $clientProfileId) {\n    ...PresentableViewPageHeader_presentable\n    id\n    name\n    user {\n      id\n    }\n  }\n  programTracks(first: 9999, filter: $programTracksFilter) {\n    edgeCount\n    edges {\n      node {\n        ...ClientProfileViewPageOverviewTabProgramTrackRow_programTrack_bvTSy\n        id\n        program {\n          name\n          id\n        }\n        actions(filter: {type: {eq: \"multiStep\"}}, first: 9999) {\n          edges {\n            node {\n              id\n              name\n              data\n              sourceProgramModule {\n                data\n                id\n              }\n              responses(first: 9999) {\n                edges {\n                  node {\n                    response\n                    createdAt\n                    id\n                  }\n                }\n              }\n              events(filter: $eventsFilter, first: 9999) {\n                edges {\n                  node {\n                    id\n                    startDate\n                    actionResponses(first: 1) {\n                      edges {\n                        node {\n                          response\n                          id\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n        events(filter: $eventsFilter, first: 9999) {\n          edges {\n            node {\n              startDate\n              hasResponse\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment ClientProfileViewPageOverviewTabProgramTrackRow_programTrack_bvTSy on ProgramTrack {\n  id\n  program {\n    ...NodeListItem_node\n    id\n    name\n    createdAt\n  }\n  startDate\n  endDate\n  clientProfile {\n    id\n  }\n  events(filter: $eventsFilter, first: 9999) {\n    edges {\n      node {\n        startDate\n        hasResponse\n        id\n      }\n    }\n  }\n}\n\nfragment NodeListItem_node on Node {\n  ...NodeListItem_presentable\n  ... on Owned {\n    owner {\n      __typename\n      ...PresentableAvatar_presentable\n      ...PresentableLink_presentable\n      ... on Presentable {\n        name\n      }\n      id\n    }\n  }\n  createdAt\n}\n\nfragment NodeListItem_presentable on Presentable {\n  presentableTypeName: __typename\n  ...PresentableAvatar_presentable\n  ...PresentableCardMedia_presentable\n  name\n  image {\n    url\n    id\n  }\n  description\n}\n\nfragment PresentableAvatar_presentable on Presentable {\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment PresentableCardMedia_presentable on Presentable {\n  ...PresentableAvatar_presentable\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment PresentableLink_presentable on Presentable {\n  __typename\n  id\n  name\n}\n\nfragment PresentableViewPageHeader_presentable on Presentable {\n  ...PresentableAvatar_presentable\n  name\n  image {\n    url\n    width\n    height\n    id\n  }\n  ... on Owned {\n    owner {\n      __typename\n      ...PresentableLink_presentable\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ecd2c0b6afd6f5d68d2325ff2f998d58';
module.exports = node;
