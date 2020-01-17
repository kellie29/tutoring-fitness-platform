/**
 * @flow
 * @relayHash e44816fa5d4a98190dff45e3bf0c61d3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TagFilterInput = {|
  search?: ?string,
  parentTagId?: ?TableIDFilterInput,
|};
export type TableIDFilterInput = {|
  ne?: ?string,
  eq?: ?string,
|};
export type TagAutocompleteQueryVariables = {|
  filter?: ?TagFilterInput
|};
export type TagAutocompleteQueryResponse = {|
  +tags: {|
    +edges: $ReadOnlyArray<{|
      +node: {|
        +id: string,
        +slug: string,
        +name: string,
        +parent: ?{|
          +id: string,
          +name: string,
        |},
      |}
    |}>
  |}
|};
export type TagAutocompleteQuery = {|
  variables: TagAutocompleteQueryVariables,
  response: TagAutocompleteQueryResponse,
|};
*/


/*
query TagAutocompleteQuery(
  $filter: TagFilterInput
) {
  tags(filter: $filter, first: 50) {
    edges {
      node {
        id
        slug
        name
        parent {
          id
          name
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
    "name": "filter",
    "type": "TagFilterInput",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "tags",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "filter",
        "variableName": "filter"
      },
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
              (v1/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "slug",
                "args": null,
                "storageKey": null
              },
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "parent",
                "storageKey": null,
                "args": null,
                "concreteType": "Tag",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v2/*: any*/)
                ]
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
    "name": "TagAutocompleteQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TagAutocompleteQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "TagAutocompleteQuery",
    "id": null,
    "text": "query TagAutocompleteQuery(\n  $filter: TagFilterInput\n) {\n  tags(filter: $filter, first: 50) {\n    edges {\n      node {\n        id\n        slug\n        name\n        parent {\n          id\n          name\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bfa38d0b6a0041068cc9742b1be4ea81';
module.exports = node;
