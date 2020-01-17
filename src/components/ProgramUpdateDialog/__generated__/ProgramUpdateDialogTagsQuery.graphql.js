/**
 * @flow
 * @relayHash f8826eb1876a58076594665dc27ab2dd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProgramUpdateDialogTagsQueryVariables = {||};
export type ProgramUpdateDialogTagsQueryResponse = {|
  +tags: {|
    +edges: $ReadOnlyArray<{|
      +node: {|
        +id: string,
        +slug: string,
        +name: string,
      |}
    |}>
  |}
|};
export type ProgramUpdateDialogTagsQuery = {|
  variables: ProgramUpdateDialogTagsQueryVariables,
  response: ProgramUpdateDialogTagsQueryResponse,
|};
*/


/*
query ProgramUpdateDialogTagsQuery {
  tags(first: 50) {
    edges {
      node {
        id
        slug
        name
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "tags",
    "storageKey": "tags(first:50)",
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 50
      }
    ],
    "concreteType": "TagConnection",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "TagEdge",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Tag",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "slug",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProgramUpdateDialogTagsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramUpdateDialogTagsQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ProgramUpdateDialogTagsQuery",
    "id": null,
    "text": "query ProgramUpdateDialogTagsQuery {\n  tags(first: 50) {\n    edges {\n      node {\n        id\n        slug\n        name\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5848517b14147db697ee4454cbf63da7';
module.exports = node;
