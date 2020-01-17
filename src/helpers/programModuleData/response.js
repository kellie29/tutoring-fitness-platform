// @flow

export type BlocksActionResponse = {
  type: 'blocks',
  fields: Array<string>,
};

export type SingleStepActionResponse = BlocksActionResponse;

export type MultiStepActionResponse = {
  type: 'multiStep',
  steps: Array<SingleStepActionResponse>,
};

export type ActionResponse = SingleStepActionResponse | MultiStepActionResponse;
