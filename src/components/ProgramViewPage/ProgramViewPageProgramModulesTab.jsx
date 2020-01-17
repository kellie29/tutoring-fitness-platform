// @flow

import * as React from 'react';
import { type ContextRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import createDashboardPageTab from '../createDashboardPageTab';
import { graphql, createQuery } from '../../api';
import LoadingView from '../LoadingView';
import { useEmulatorState } from '../MobileAppEmulator';
import ProgramProgramModuleList from '../ProgramProgramModuleList';
import MobileAppPreviewView from '../MobileAppPreviewView';

import { type ProgramViewPageProgramModulesTabQuery } from './__generated__/ProgramViewPageProgramModulesTabQuery.graphql';

const useQuery = createQuery<ProgramViewPageProgramModulesTabQuery>(
  graphql`
    query ProgramViewPageProgramModulesTabQuery($programId: ID) {
      program(id: $programId) {
        ...ProgramProgramModuleList_program
        # ...ProgramTrackInvitationScreen_program
        ...ProgramDetailScreen_program
        id
        name
        description
        reminderGroupName
        owner {
          ...PresentableLink_presentable
        }
        modules {
          id
          name
          description
          type
          data
        }
        moduleGroups {
          id
          name
        }
        duration
        viewerCanUpdate
      }
    }
  `,
  {
    fetchPolicy: 'network-only',
  },
);

type Props = {
  ...ContextRouter,
};

export default createDashboardPageTab<any>(function ProgramViewPageProgramModulesTab(props: Props) {
  const { match } = props;

  const query = useQuery({
    programId: match.params.programId,
  });

  const { programModuleGroupId } = match.params;

  const program = query.props?.program || null;

  const [selectedProgramModuleId, setSelectedProgramModuleId] = React.useState(null);

  const [, dispatcher] = useEmulatorState();

  const onProgramModuleCardClick = React.useCallback(
    (programModuleId) => {
      if (programModuleId === selectedProgramModuleId) {
        setSelectedProgramModuleId(null);
      } else {
        setSelectedProgramModuleId(programModuleId);
      }
      dispatcher.setSelectedStep(0);
    },
    [selectedProgramModuleId, dispatcher],
  );

  if (!query.props) {
    return <LoadingView />;
  }

  if (!program) {
    throw new Error('Not found');
  }

  const emulatable = selectedProgramModuleId
    ? {
        type: 'programModule',
        module: program.modules.find(
          (programModule) => programModule.id === selectedProgramModuleId,
        ),
      }
    : { type: 'programDetail', program };

  let title = 'All Modules';
  if (programModuleGroupId) {
    if (programModuleGroupId === 'reminders') {
      title = program?.reminderGroupName ?? 'Reminders';
    } else {
      const programModuleGroup =
        program.moduleGroups &&
        program.moduleGroups.find((moduleGroup) => moduleGroup.id === programModuleGroupId);
      if (programModuleGroup) {
        title = programModuleGroup.name;
      }
    }
  }

  return (
    <MobileAppPreviewView emulatable={emulatable}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
          <Typography
            variant="h6"
            style={{ display: 'inline-flex', alignItems: 'center', fontWeight: '800' }}
          >
            {title}
          </Typography>
        </div>
      </div>
      <div style={{ height: 16 }} />
      <ProgramProgramModuleList
        program={program}
        value={selectedProgramModuleId}
        onValueChange={onProgramModuleCardClick}
        programModuleGroupId={programModuleGroupId}
      />
    </MobileAppPreviewView>
  );
});
