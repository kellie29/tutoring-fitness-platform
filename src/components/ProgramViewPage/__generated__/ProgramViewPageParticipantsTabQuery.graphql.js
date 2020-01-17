/**
 * @flow
 * @relayHash 3365918e5e215621d23fdacff4d7513e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProgramDetailScreen_program$ref = any;
type ProgramViewPageParticipantsTabProgramTrackRow_programTrack$ref = any;
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
export type ProgramViewPageParticipantsTabQueryVariables = {|
  programId?: ?string,
  eventsFilter?: ?ProgramTrackEventFilterInput,
|};
export type ProgramViewPageParticipantsTabQueryResponse = {|
  +program: ?{|
    +id: string,
    +tracks: {|
      +edgeCount: number,
      +edges: $ReadOnlyArray<{|
        +node: {|
          +id: string,
          +$fragmentRefs: ProgramViewPageParticipantsTabProgramTrackRow_programTrack$ref,
        |}
      |}>,
    |},
    +invitations: {|
      +edges: $ReadOnlyArray<{|
        +node: {|
          +id: string,
          +token: string,
          +firebaseShortLink: ?string,
        |}
      |}>
    |},
    +$fragmentRefs: ProgramDetailScreen_program$ref,
  |}
|};
export type ProgramViewPageParticipantsTabQuery = {|
  variables: ProgramViewPageParticipantsTabQueryVariables,
  response: ProgramViewPageParticipantsTabQueryResponse,
|};
*/


/*
query ProgramViewPageParticipantsTabQuery(
  $programId: ID
  $eventsFilter: ProgramTrackEventFilterInput
) {
  program(id: $programId) {
    ...ProgramDetailScreen_program
    id
    tracks(first: 9999) {
      edgeCount
      edges {
        node {
          id
          ...ProgramViewPageParticipantsTabProgramTrackRow_programTrack_bvTSy
        }
      }
    }
    invitations(first: 1) {
      edges {
        node {
          id
          token
          firebaseShortLink
        }
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

fragment ProgramViewPageParticipantsTabProgramTrackRow_programTrack_bvTSy on ProgramTrack {
  id
  program {
    ...NodeListItem_node
    id
    name
    createdAt
  }
  startDate
  endDate
  user {
    ...NodeListItem_presentable
    id
  }
  clientProfile {
    ...NodeListItem_presentable
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "programId",
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
  "kind": "Literal",
  "name": "first",
  "value": 9999
},
v4 = [
  (v3/*: any*/)
],
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "edgeCount",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "invitations",
  "storageKey": "invitations(first:1)",
  "args": [
    {
      "kind": "Literal",
      "name": "first",
      "value": 1
    }
  ],
  "concreteType": "ProgramInvitationConnection",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "ProgramInvitationEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "ProgramInvitation",
          "plural": false,
          "selections": [
            (v2/*: any*/),
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "token",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "firebaseShortLink",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v9 = {
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
v10 = {
  "kind": "ScalarField",
  "alias": "presentableTypeName",
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "startDate",
  "args": null,
  "storageKey": null
},
v12 = [
  (v10/*: any*/),
  (v7/*: any*/),
  (v9/*: any*/),
  (v8/*: any*/),
  (v2/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProgramViewPageParticipantsTabQuery",
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "tracks",
            "storageKey": "tracks(first:9999)",
            "args": (v4/*: any*/),
            "concreteType": "ProgramTrackConnection",
            "plural": false,
            "selections": [
              (v5/*: any*/),
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
                        "kind": "FragmentSpread",
                        "name": "ProgramViewPageParticipantsTabProgramTrackRow_programTrack",
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
          },
          (v6/*: any*/),
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
    "name": "ProgramViewPageParticipantsTabQuery",
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
          (v7/*: any*/),
          (v8/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "reminderGroupName",
            "args": null,
            "storageKey": null
          },
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
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "data",
                "args": null,
                "storageKey": null
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
              (v7/*: any*/),
              (v2/*: any*/)
            ]
          },
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "tracks",
            "storageKey": "tracks(first:9999)",
            "args": (v4/*: any*/),
            "concreteType": "ProgramTrackConnection",
            "plural": false,
            "selections": [
              (v5/*: any*/),
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
                          (v10/*: any*/),
                          (v7/*: any*/),
                          (v9/*: any*/),
                          (v8/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "owner",
                            "storageKey": null,
                            "args": null,
                            "concreteType": null,
                            "plural": false,
                            "selections": [
                              (v7/*: any*/),
                              (v9/*: any*/),
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "__typename",
                                "args": null,
                                "storageKey": null
                              },
                              (v2/*: any*/)
                            ]
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "createdAt",
                            "args": null,
                            "storageKey": null
                          },
                          (v2/*: any*/)
                        ]
                      },
                      (v11/*: any*/),
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
                        "name": "user",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": (v12/*: any*/)
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "clientProfile",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "ClientProfile",
                        "plural": false,
                        "selections": (v12/*: any*/)
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "events",
                        "storageKey": null,
                        "args": [
                          {
                            "kind": "Variable",
                            "name": "filter",
                            "variableName": "eventsFilter"
                          },
                          (v3/*: any*/)
                        ],
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
                                  (v11/*: any*/),
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "hasResponse",
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
          },
          (v6/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProgramViewPageParticipantsTabQuery",
    "id": null,
    "text": "query ProgramViewPageParticipantsTabQuery(\n  $programId: ID\n  $eventsFilter: ProgramTrackEventFilterInput\n) {\n  program(id: $programId) {\n    ...ProgramDetailScreen_program\n    id\n    tracks(first: 9999) {\n      edgeCount\n      edges {\n        node {\n          id\n          ...ProgramViewPageParticipantsTabProgramTrackRow_programTrack_bvTSy\n        }\n      }\n    }\n    invitations(first: 1) {\n      edges {\n        node {\n          id\n          token\n          firebaseShortLink\n        }\n      }\n    }\n  }\n}\n\nfragment NodeListItem_node on Node {\n  ...NodeListItem_presentable\n  ... on Owned {\n    owner {\n      __typename\n      ...PresentableAvatar_presentable\n      ...PresentableLink_presentable\n      ... on Presentable {\n        name\n      }\n      id\n    }\n  }\n  createdAt\n}\n\nfragment NodeListItem_presentable on Presentable {\n  presentableTypeName: __typename\n  ...PresentableAvatar_presentable\n  ...PresentableCardMedia_presentable\n  name\n  image {\n    url\n    id\n  }\n  description\n}\n\nfragment PresentableAvatar_presentable on Presentable {\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment PresentableCardMedia_presentable on Presentable {\n  ...PresentableAvatar_presentable\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment PresentableLink_presentable on Presentable {\n  __typename\n  id\n  name\n}\n\nfragment ProgramDetailScreen_program on Program {\n  name\n  description\n  reminderGroupName\n  image {\n    url\n    id\n  }\n  modules {\n    data\n    programModuleGroup {\n      id\n    }\n    id\n  }\n  moduleGroups {\n    name\n    id\n  }\n}\n\nfragment ProgramViewPageParticipantsTabProgramTrackRow_programTrack_bvTSy on ProgramTrack {\n  id\n  program {\n    ...NodeListItem_node\n    id\n    name\n    createdAt\n  }\n  startDate\n  endDate\n  user {\n    ...NodeListItem_presentable\n    id\n  }\n  clientProfile {\n    ...NodeListItem_presentable\n    id\n  }\n  events(filter: $eventsFilter, first: 9999) {\n    edges {\n      node {\n        startDate\n        hasResponse\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ec56772ab8a17ef1474bbae5ede1d651';
module.exports = node;
