// @flow

import * as React from 'react';
import { Interval } from 'luxon';

import {
  type BlocksActionMultipleChoiceFieldBlock,
  type BlocksActionScaleFieldBlock,
  type BlocksActionNumberFieldBlock,
} from '../../helpers/programModuleData';
import hueFromIndex from '../../helpers/hueFromIndex';

import ScaleFieldBlockChart from './ScaleFieldBlockChart';
import MultipleChoiceFieldBlockChart from './MultipleChoiceFieldBlockChart';
import NumberFieldBlockChart from './NumberFieldBlockChart';

type Event = {|
  event: $ReadOnly<{
    startDate: string,
  }>,
  response: string | null,
|};

type Props = {|
  block:
    | BlocksActionMultipleChoiceFieldBlock
    | BlocksActionScaleFieldBlock
    | BlocksActionNumberFieldBlock,
  events: $ReadOnlyArray<Event>,
  interval: Interval,
|};

export default function BlocksActionFieldBlockChart(props: Props) {
  const { block, events, interval } = props;

  switch (block.type) {
    case 'scaleField': {
      const lines = [
        {
          events: events
            .filter(({ response }) => response)
            .map(({ event, response }) => ({
              startDate: event.startDate,
              response: response ? Number.parseInt(response, 10) : 0,
            })),
        },
      ];

      return <ScaleFieldBlockChart lines={lines} interval={interval} />;
    }
    case 'multipleChoiceField': {
      const lines = block.choices.map((choice, choiceIndex) => ({
        events: events
          .filter(({ response }) => response && Number.parseInt(response, 10) === choiceIndex)
          .map(({ event }) => ({
            startDate: event.startDate,
            response: choiceIndex,
          })),
        title: choice.title,
        color: `hsl(${hueFromIndex(choiceIndex)}, 98%, 67%)`,
      }));

      return <MultipleChoiceFieldBlockChart lines={lines} interval={interval} />;
    }
    case 'numberField': {
      const lines = [
        {
          events: events
            .filter(({ response }) => response)
            .map(({ event, response }) => ({
              startDate: event.startDate,
              response: response ? Number.parseInt(response, 10) : 0,
            })),
        },
      ];

      return <NumberFieldBlockChart lines={lines} interval={interval} />;
    }
    default: {
      throw new Error(`Invalid block type "${block.type}"`);
    }
  }
}
