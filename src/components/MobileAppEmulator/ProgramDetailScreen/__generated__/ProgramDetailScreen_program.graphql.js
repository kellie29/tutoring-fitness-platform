/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProgramDetailScreen_program$ref: FragmentReference;
declare export opaque type ProgramDetailScreen_program$fragmentType: ProgramDetailScreen_program$ref;
export type ProgramDetailScreen_program = {|
  +name: string,
  +description: string,
  +reminderGroupName: ?string,
  +image: ?{|
    +url: any
  |},
  +modules: $ReadOnlyArray<{|
    +data: any,
    +programModuleGroup: ?{|
      +id: string
    |},
  |}>,
  +moduleGroups: ?$ReadOnlyArray<{|
    +name: string
  |}>,
  +$refType: ProgramDetailScreen_program$ref,
|};
export type ProgramDetailScreen_program$data = ProgramDetailScreen_program;
export type ProgramDetailScreen_program$key = {
  +$data?: ProgramDetailScreen_program$data,
  +$fragmentRefs: ProgramDetailScreen_program$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "ProgramDetailScreen_program",
  "type": "Program",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
      "args": null,
      "storageKey": null
    },
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
        }
      ]
    },
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
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "moduleGroups",
      "storageKey": null,
      "args": null,
      "concreteType": "ProgramModuleGroup",
      "plural": true,
      "selections": [
        (v0/*: any*/)
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '1adaa51fc00cb7caf23b77499a64fbd2';
module.exports = node;
