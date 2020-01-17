/**
 * @flow
 * @relayHash 6c958e3e876e84592e761cfd3005df4a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteProgramTrackInput = {|
  id: string
|};
export type ProgramTrackRowDeleteProgramTrackMutationVariables = {|
  input: DeleteProgramTrackInput
|};
export type ProgramTrackRowDeleteProgramTrackMutationResponse = {|
  +deleteProgramTrack: {|
    +programTrack: {|
      +id: string
    |}
  |}
|};
export type ProgramTrackRowDeleteProgramTrackMutation = {|
  variables: ProgramTrackRowDeleteProgramTrackMutationVariables,
  response: ProgramTrackRowDeleteProgramTrackMutationResponse,
|};
*/


/*
mutation ProgramTrackRowDeleteProgramTrackMutation(
  $input: DeleteProgramTrackInput!
) {
  deleteProgramTrack(input: $input) {
    programTrack {
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteProgramTrackInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteProgramTrack",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteProgramTrackPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "programTrack",
        "storageKey": null,
        "args": null,
        "concreteType": "ProgramTrack",
        "plural": false,
        "selections": [
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
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProgramTrackRowDeleteProgramTrackMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramTrackRowDeleteProgramTrackMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ProgramTrackRowDeleteProgramTrackMutation",
    "id": null,
    "text": "mutation ProgramTrackRowDeleteProgramTrackMutation(\n  $input: DeleteProgramTrackInput!\n) {\n  deleteProgramTrack(input: $input) {\n    programTrack {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c352df64ca451e1b5f7be84fa807ffb3';
module.exports = node;
