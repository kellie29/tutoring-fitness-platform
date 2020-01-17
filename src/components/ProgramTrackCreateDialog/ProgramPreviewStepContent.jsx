// @flow

import * as React from 'react';
import { DateTime, Duration } from 'luxon';

import { createQuery, graphql } from '../../api';
import MobileAppEmulator, { EmulatorStateProvider } from '../MobileAppEmulator';
import ModuleCalendar from '../ModuleCalendar';

const useQuery = createQuery(graphql`
  query ProgramPreviewStepContentQuery($programId: ID) {
    program(id: $programId) {
      ...ProgramProgramModuleList_program
      ...ProgramTrackInvitationScreen_program
      modules {
        id
        type
        name
        description
        data
      }
      duration
    }
  }
`);

type Props = {|
  programId: string,
  startDate: DateTime,
|};

export default function ProgramPreviewStepContent(props: Props) {
  const { programId, startDate } = props;

  const query = useQuery({ programId });
  const program = query.props?.program;

  const [selectedEvent, setSelectedEvent] = React.useState(null);

  const onEventClick = React.useCallback(
    (event) => {
      // if (!selectedEvent || (event && event.id !== selectedEvent.id)) {
      if (
        !selectedEvent ||
        (event && event.programModuleData.id !== selectedEvent.programModuleData.id)
      ) {
        setSelectedEvent(event);
      } else {
        setSelectedEvent(null);
      }
    },
    [selectedEvent],
  );

  const selectedProgramModuleId = selectedEvent?.programModuleData.id;

  let emulatable;
  if (program) {
    emulatable = selectedProgramModuleId
      ? {
          type: 'programModule',
          module: program.modules.find(
            (programModule) => programModule.id === selectedProgramModuleId,
          ),
        }
      : { type: 'programInvitation', program };
  }

  return (
    <EmulatorStateProvider>
      <div style={{ display: 'flex', height: '100%', overflow: 'hidden' }}>
        <div style={{ flex: 1, overflow: 'hidden', overflowY: 'auto' }}>
          {program ? (
            <ModuleCalendar
              startDate={startDate}
              modules={program.modules}
              durationDays={Duration.fromISO(program.duration).as('days')}
              selectedEvent={selectedEvent}
              onEventClick={onEventClick}
            />
          ) : null}
        </div>
        <div style={{ flex: '0 0 16px' }} />
        {emulatable && (
          <MobileAppEmulator
            emulatable={emulatable}
            style={{ height: '100%', overflow: 'hidden' }}
          />
        )}
      </div>
    </EmulatorStateProvider>
  );
}
