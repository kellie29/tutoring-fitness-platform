// @flow

import { type ProgramModuleDataAction } from '.';

export type MultiStepActionStep = {|
  name: string,
  action: ProgramModuleDataAction | null,
|};

export type MultiStepAction = {|
  type: 'multiStep',
  steps: $ReadOnlyArray<MultiStepActionStep>,
|};
