/**
 * @flow
 * @relayHash 145904f41ab56fbb3db44e352815be4c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PresentableAvatar_presentable$ref = any;
export type SelectedProgramModuleItemQueryVariables = {|
  id?: ?string
|};
export type SelectedProgramModuleItemQueryResponse = {|
  +programModule: ?{|
    +id: string,
    +name: string,
    +$fragmentRefs: PresentableAvatar_presentable$ref,
  |}
|};
export type SelectedProgramModuleItemQuery = {|
  variables: SelectedProgramModuleItemQueryVariables,
  response: SelectedProgramModuleItemQueryResponse,
|};
*/


/*
query SelectedProgramModuleItemQuery(
  $id: ID
) {
  programModule(id: $id) {
    ...PresentableAvatar_presentable
    id
    name
  }
}

fragment PresentableAvatar_presentable on Presentable {
  name
  image {
    url
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
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
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SelectedProgramModuleItemQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "programModule",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ProgramModule",
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
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SelectedProgramModuleItemQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "programModule",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ProgramModule",
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
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "SelectedProgramModuleItemQuery",
    "id": null,
    "text": "query SelectedProgramModuleItemQuery(\n  $id: ID\n) {\n  programModule(id: $id) {\n    ...PresentableAvatar_presentable\n    id\n    name\n  }\n}\n\nfragment PresentableAvatar_presentable on Presentable {\n  name\n  image {\n    url\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '327f83862a575684c1e6395019f56977';
module.exports = node;
