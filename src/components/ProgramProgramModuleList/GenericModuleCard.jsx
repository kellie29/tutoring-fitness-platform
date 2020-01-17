// @flow

import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { graphql, createFragment } from '../../api';
import { type GenericProgramModuleDataData } from '../../helpers/programModuleData';

import ProgramModuleCard from './ProgramModuleCard';
import { type GenericModuleCard_programModule as ProgramModule } from './__generated__/GenericModuleCard_programModule.graphql';

const useFragment = createFragment<ProgramModule>(graphql`
  fragment GenericModuleCard_programModule on ProgramModule {
    ...ProgramModuleCard_programModule
    id
    name
    description
    data
    program {
      id
    }
  }
`);

type Props = {|
  programModule: mixed,
  selected: boolean,
  onClick: () => void,
  noEditingUi?: boolean,
|};

export default function GenericModuleCard(props: Props) {
  const { selected, onClick, noEditingUi } = props;

  const programModule = useFragment(props.programModule);
  const genericData: GenericProgramModuleDataData = programModule.data;

  return (
    <ProgramModuleCard
      noEditingUi={noEditingUi}
      programModule={programModule}
      selected={selected}
      onClick={onClick}
      body={
        <>
          {genericData.scheduling && (
            <>
              <FormattedMessage
                id="GenericModuleCard.reminderStart"
                defaultMessage={`
        {recurrenceFrequency, select,
          never {On day {startDay, number} at {startTime, time, short}}
          other {Starts on day {startDay, number} at {startTime, time, short}}
        }
      `}
                values={genericData.scheduling}
              />
              {genericData.scheduling.recurrenceFrequency !== 'never' && (
                <>
                  <br />
                  <FormattedMessage
                    id="GenericModuleCard.reminderRepeat"
                    defaultMessage={`
                      Repeats every {recurrenceFrequency, select,
                        daily {{recurrenceInterval, plural,
                          one {day}
                          other {{recurrenceInterval, number} days}
                        }}
                        weekly {{recurrenceInterval, plural,
                          one {week}
                          other {{recurrenceInterval, number} weeks}
                        }}
                        monthly {{recurrenceInterval, plural,
                          one {month}
                          other {{recurrenceInterval, number} months}
                        }}
                        yearly {{recurrenceInterval, plural,
                          one {year}
                          other {{recurrenceInterval, number} years}
                        }}
                      }
                      {recurrenceEnd, select,
                        onDay {until day {recurrenceEndOnDay, number}}
                        afterAmount {for {recurrenceEndAfterAmount, number} times}
                        never {}
                      }
                  `}
                    values={genericData.scheduling}
                  />
                </>
              )}
            </>
          )}
        </>
      }
    />
  );
}
