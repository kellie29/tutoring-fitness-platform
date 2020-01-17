/**
 * @flow
 * @relayHash d74a1504c9d8af897610e3c78ff05007
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProgramModuleEditor_programModule$ref = any;
export type ProgramModuleUpdateDialogQueryVariables = {|
  programModuleId?: ?string
|};
export type ProgramModuleUpdateDialogQueryResponse = {|
  +programModule: ?{|
    +id: string,
    +name: string,
    +description: ?string,
    +type: string,
    +data: any,
    +programModuleGroup: ?{|
      +id: string,
      +name: string,
    |},
    +$fragmentRefs: ProgramModuleEditor_programModule$ref,
  |}
|};
export type ProgramModuleUpdateDialogQuery = {|
  variables: ProgramModuleUpdateDialogQueryVariables,
  response: ProgramModuleUpdateDialogQueryResponse,
|};
*/


/*
query ProgramModuleUpdateDialogQuery(
  $programModuleId: ID
) {
  programModule(id: $programModuleId) {
    ...ProgramModuleEditor_programModule
    id
    name
    description
    type
    data
    programModuleGroup {
      id
      name
    }
  }
}

fragment PresentableAvatarInput_presentable on Presentable {
  ...PresentableAvatar_presentable
  id
}

fragment PresentableAvatar_presentable on Presentable {
  name
  image {
    url
    id
  }
}

fragment ProgramModuleEditor_programModule on ProgramModule {
  id
  name
  description
  type
  data
  ...PresentableAvatarInput_presentable
  programModuleGroup {
    id
  }
  program {
    reminderGroupName
    moduleGroups {
      id
      name
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "programModuleId",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "programModuleId"
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
  "name": "description",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
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
  (v2/*: any*/),
  (v3/*: any*/)
],
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "programModuleGroup",
  "storageKey": null,
  "args": null,
  "concreteType": "ProgramModuleGroup",
  "plural": false,
  "selections": (v7/*: any*/)
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProgramModuleUpdateDialogQuery",
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
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v8/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "ProgramModuleEditor_programModule",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramModuleUpdateDialogQuery",
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
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
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
          (v8/*: any*/),
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
                "alias": null,
                "name": "reminderGroupName",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "moduleGroups",
                "storageKey": null,
                "args": null,
                "concreteType": "ProgramModuleGroup",
                "plural": true,
                "selections": (v7/*: any*/)
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
    "name": "ProgramModuleUpdateDialogQuery",
    "id": null,
    "text": "query ProgramModuleUpdateDialogQuery(\n  $programModuleId: ID\n) {\n  programModule(id: $programModuleId) {\n    ...ProgramModuleEditor_programModule\n    id\n    name\n    description\n    type\n    data\n    programModuleGroup {\n      id\n      name\n    }\n  }\n}\n\nfragment PresentableAvatarInput_presentable on Presentable {\n  ...PresentableAvatar_presentable\n  id\n}\n\nfragment PresentableAvatar_presentable on Presentable {\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment ProgramModuleEditor_programModule on ProgramModule {\n  id\n  name\n  description\n  type\n  data\n  ...PresentableAvatarInput_presentable\n  programModuleGroup {\n    id\n  }\n  program {\n    reminderGroupName\n    moduleGroups {\n      id\n      name\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3efc852e8cada3bdc859bee4f1fefb4a';
module.exports = node;
