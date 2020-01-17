/**
 * @flow
 * @relayHash d61f15819c0fc154629ebf8c2a0ed820
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProgramModuleListPageTagQueryVariables = {|
  tagId?: ?string
|};
export type ProgramModuleListPageTagQueryResponse = {|
  +tag: ?{|
    +slug: string
  |}
|};
export type ProgramModuleListPageTagQuery = {|
  variables: ProgramModuleListPageTagQueryVariables,
  response: ProgramModuleListPageTagQueryResponse,
|};
*/


/*
query ProgramModuleListPageTagQuery(
  $tagId: ID
) {
  tag(id: $tagId) {
    slug
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "tagId",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "tagId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "slug",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProgramModuleListPageTagQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "tag",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Tag",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramModuleListPageTagQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "tag",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Tag",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProgramModuleListPageTagQuery",
    "id": null,
    "text": "query ProgramModuleListPageTagQuery(\n  $tagId: ID\n) {\n  tag(id: $tagId) {\n    slug\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6f075ac8aec0a0da41756ba2d8f44734';
module.exports = node;
