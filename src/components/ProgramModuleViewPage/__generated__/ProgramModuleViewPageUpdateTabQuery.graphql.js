/**
 * @flow
 * @relayHash ece5fa92e3919a50f85853099b66439e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PresentableAvatarInput_presentable$ref = any;
type ProgramModuleEditor_programModule$ref = any;
type ProgramTrackInvitationScreen_program$ref = any;
export type ProgramModuleViewPageUpdateTabQueryVariables = {|
  programModuleId?: ?string
|};
export type ProgramModuleViewPageUpdateTabQueryResponse = {|
  +programModule: ?{|
    +id: string,
    +name: string,
    +description: ?string,
    +type: string,
    +data: any,
    +program: ?{|
      +$fragmentRefs: ProgramTrackInvitationScreen_program$ref
    |},
    +isPublic: boolean,
    +tag: ?{|
      +id: string
    |},
    +$fragmentRefs: ProgramModuleEditor_programModule$ref & PresentableAvatarInput_presentable$ref,
  |}
|};
export type ProgramModuleViewPageUpdateTabQuery = {|
  variables: ProgramModuleViewPageUpdateTabQueryVariables,
  response: ProgramModuleViewPageUpdateTabQueryResponse,
|};
*/


/*
query ProgramModuleViewPageUpdateTabQuery(
  $programModuleId: ID
) {
  programModule(id: $programModuleId) {
    ...ProgramModuleEditor_programModule
    ...PresentableAvatarInput_presentable
    id
    name
    description
    type
    data
    program {
      ...ProgramTrackInvitationScreen_program
      id
    }
    isPublic
    tag {
      id
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

fragment ProgramTrackInvitationScreen_program on Program {
  name
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
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isPublic",
  "args": null,
  "storageKey": null
},
v8 = [
  (v2/*: any*/)
],
v9 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "tag",
  "storageKey": null,
  "args": null,
  "concreteType": "Tag",
  "plural": false,
  "selections": (v8/*: any*/)
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProgramModuleViewPageUpdateTabQuery",
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
                "kind": "FragmentSpread",
                "name": "ProgramTrackInvitationScreen_program",
                "args": null
              }
            ]
          },
          (v7/*: any*/),
          (v9/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "ProgramModuleEditor_programModule",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "PresentableAvatarInput_presentable",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramModuleViewPageUpdateTabQuery",
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "programModuleGroup",
            "storageKey": null,
            "args": null,
            "concreteType": "ProgramModuleGroup",
            "plural": false,
            "selections": (v8/*: any*/)
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
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/)
                ]
              },
              (v2/*: any*/),
              (v3/*: any*/)
            ]
          },
          (v7/*: any*/),
          (v9/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProgramModuleViewPageUpdateTabQuery",
    "id": null,
    "text": "query ProgramModuleViewPageUpdateTabQuery(\n  $programModuleId: ID\n) {\n  programModule(id: $programModuleId) {\n    ...ProgramModuleEditor_programModule\n    ...PresentableAvatarInput_presentable\n    id\n    name\n    description\n    type\n    data\n    program {\n      ...ProgramTrackInvitationScreen_program\n      id\n    }\n    isPublic\n    tag {\n      id\n    }\n  }\n}\n\nfragment PresentableAvatarInput_presentable on Presentable {\n  ...PresentableAvatar_presentable\n  id\n}\n\nfragment PresentableAvatar_presentable on Presentable {\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment ProgramModuleEditor_programModule on ProgramModule {\n  id\n  name\n  description\n  type\n  data\n  ...PresentableAvatarInput_presentable\n  programModuleGroup {\n    id\n  }\n  program {\n    reminderGroupName\n    moduleGroups {\n      id\n      name\n    }\n    id\n  }\n}\n\nfragment ProgramTrackInvitationScreen_program on Program {\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ce06cb5cc2c7461a4b213dddb03b1951';
module.exports = node;
