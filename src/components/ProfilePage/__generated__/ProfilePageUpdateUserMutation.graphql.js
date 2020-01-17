/**
 * @flow
 * @relayHash 394b7844796bece684000ea34b89b028
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateUserInput = {|
  id: string,
  name?: ?string,
  image?: ?any,
  country?: ?string,
  occupation?: ?string,
  birthDate?: ?any,
  email?: ?string,
  password?: ?string,
  notificationsEnabled?: ?boolean,
  timeZone?: ?string,
|};
export type ProfilePageUpdateUserMutationVariables = {|
  input: UpdateUserInput
|};
export type ProfilePageUpdateUserMutationResponse = {|
  +updateUser: {|
    +user: {|
      +id: string,
      +name: string,
      +country: string,
      +occupation: ?string,
      +email: string,
      +image: ?{|
        +id: string,
        +width: number,
        +height: number,
        +aspectRatio: number,
        +url: any,
      |},
    |}
  |}
|};
export type ProfilePageUpdateUserMutation = {|
  variables: ProfilePageUpdateUserMutationVariables,
  response: ProfilePageUpdateUserMutationResponse,
|};
*/


/*
mutation ProfilePageUpdateUserMutation(
  $input: UpdateUserInput!
) {
  updateUser(input: $input) {
    user {
      id
      name
      country
      occupation
      email
      image {
        id
        width
        height
        aspectRatio
        url
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateUserInput!",
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
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateUserPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "country",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "occupation",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "email",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "image",
            "storageKey": null,
            "args": null,
            "concreteType": "Image",
            "plural": false,
            "selections": [
              (v1/*: any*/),
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
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "aspectRatio",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "url",
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
    "name": "ProfilePageUpdateUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProfilePageUpdateUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ProfilePageUpdateUserMutation",
    "id": null,
    "text": "mutation ProfilePageUpdateUserMutation(\n  $input: UpdateUserInput!\n) {\n  updateUser(input: $input) {\n    user {\n      id\n      name\n      country\n      occupation\n      email\n      image {\n        id\n        width\n        height\n        aspectRatio\n        url\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0a9a62251ba7bf8120c4a95be44b2463';
module.exports = node;
