/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ProgramModuleCard_programModule$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type GenericModuleCard_programModule$ref: FragmentReference;
declare export opaque type GenericModuleCard_programModule$fragmentType: GenericModuleCard_programModule$ref;
export type GenericModuleCard_programModule = {|
  +id: string,
  +name: string,
  +description: ?string,
  +data: any,
  +program: ?{|
    +id: string
  |},
  +$fragmentRefs: ProgramModuleCard_programModule$ref,
  +$refType: GenericModuleCard_programModule$ref,
|};
export type GenericModuleCard_programModule$data = GenericModuleCard_programModule;
export type GenericModuleCard_programModule$key = {
  +$data?: GenericModuleCard_programModule$data,
  +$fragmentRefs: GenericModuleCard_programModule$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "GenericModuleCard_programModule",
  "type": "ProgramModule",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
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
      "name": "description",
      "args": null,
      "storageKey": null
    },
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
      "name": "program",
      "storageKey": null,
      "args": null,
      "concreteType": "Program",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "ProgramModuleCard_programModule",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '29b1693a8c96904151e422ded9e3324c';
module.exports = node;
