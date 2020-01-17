// @flow

import { type MultiStepAction } from '../actions';
import { type ProgramModuleDataObject } from '../index';

type DaysOfTheWeek =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

type GenericProgramModuleDataSchedulingConfiguration = $ReadOnly<{|
  noNotifications: boolean,
  eventsViewableBeforeStartDate: boolean,
|}>;

export type GenericProgramModuleDataScheduling = $ReadOnly<{|
  startDay: number,
  startTime: number,
  recurrenceFrequency: 'never' | 'daily' | 'weekly' | 'monthly' | 'yearly',
  recurOnDays: $ReadOnlyArray<DaysOfTheWeek>,
  recurrenceInterval: number,
  recurrenceEnd: 'never' | 'onDay' | 'afterAmount',
  recurrenceEndOnDay: number,
  recurrenceEndAfterAmount: number,
  configuration: GenericProgramModuleDataSchedulingConfiguration,
|}>;
export const initialGenericProgramModuleDataScheduling = {
  startDay: 1,
  startTime: 32400000,
  recurrenceFrequency: 'never',
  recurrenceInterval: 1,
  recurrenceEnd: 'never',
  recurrenceEndOnDay: 1,
  recurrenceEndAfterAmount: 1,
  recurOnDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
  configuration: {
    noNotifications: false,
    eventsViewableBeforeStartDate: false,
  },
};

export type GenericProgramModuleDataData = {|
  scheduling: GenericProgramModuleDataScheduling | null,
  action: MultiStepAction | null,
|};
export const initialGenericProgramModuleDataData: GenericProgramModuleDataData = {
  scheduling: null,
  action: {
    type: 'multiStep',
    steps: [{ name: 'Step 1', action: { type: 'blocks', blocks: [] } }],
  },
};

export type GenericProgramModuleData = ProgramModuleDataObject<
  'generic',
  GenericProgramModuleDataData,
>;
