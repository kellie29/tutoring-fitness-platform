// @flow

import { type BlocksAction } from './blocks';
import { type MultiStepAction } from './multiStep';
import { type ReferenceAction } from './reference';

export * from './blocks';
export * from './multiStep';
export * from './reference';

export type ProgramModuleDataActionTypes = {|
  blocks: BlocksAction,
  multiStep: MultiStepAction,
  reference: ReferenceAction,
|};
export type ProgramModuleDataAction = $Values<ProgramModuleDataActionTypes>;
export type ProgramModuleDataActionType = $PropertyType<ProgramModuleDataAction, 'type'>;
export const programModuleDataActionTypes: Array<ProgramModuleDataActionType> = [
  'blocks',
  'multiStep',
  'reference',
];
