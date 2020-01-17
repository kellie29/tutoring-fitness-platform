// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { graphql, createFragment } from '../../api';

import { type ProgramProgramModuleList_program as Program } from './__generated__/ProgramProgramModuleList_program.graphql';
import GenericModuleCard from './GenericModuleCard';

const useFragment = createFragment<Program>(
  graphql`
    fragment ProgramProgramModuleList_program on Program {
      id
      viewerCanUpdate
      modules {
        ...GenericModuleCard_programModule
        id
        name
        description
        type
        data
        programModuleGroup {
          id
        }
      }
    }
  `,
);

type Props = {|
  program: mixed,
  value: string | null,
  onValueChange: (programModuleId: string | null) => void,
  noEditingUi?: boolean,
  programModuleGroupId?: ?string,
|};

export default function ProgramProgramModuleList(props: Props) {
  const { value, onValueChange, noEditingUi, programModuleGroupId } = props;
  const program = useFragment(props.program);

  const onProgramModuleCardClick = React.useCallback(
    (programModuleId) => {
      if (programModuleId === value) {
        onValueChange(null);
      } else {
        onValueChange(programModuleId);
      }
    },
    [value, onValueChange],
  );

  let sortedModules = [...program.modules].sort((a, b) => {
    const aStartDay = a.data.scheduling?.startDay ?? 0;
    const bStartDay = b.data.scheduling?.startDay ?? 0;

    const dayDiff = aStartDay - bStartDay;
    if (dayDiff) return dayDiff;

    const aStartTime = a.data.scheduling?.startTime ?? 0;
    const bStartTime = b.data.scheduling?.startTime ?? 0;

    const timeDiff = aStartTime - bStartTime;
    return timeDiff;
  });

  if (programModuleGroupId) {
    if (programModuleGroupId === 'reminders') {
      sortedModules = sortedModules.filter((module) => module.data.scheduling);
    } else {
      sortedModules = sortedModules.filter(
        (module) => module.programModuleGroup?.id === programModuleGroupId,
      );
    }
  }

  const { viewerCanUpdate } = program;

  return (
    <Grid container spacing={2}>
      {!noEditingUi && viewerCanUpdate ? (
        <Grid item xs={12}>
          <Card>
            <CardActionArea
              component={Link}
              to={`/dashboard/programs/view/${program.id}/modules/create?type=generic`}
            >
              <CardContent style={{ padding: '8px 16px' }}>
                <Typography variant="h6" style={{ fontWeight: 800, textAlign: 'center' }}>
                  +
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ) : null}
      {!sortedModules.length ? (
        <Grid item xs={12}>
          <Typography variant="body1" align="center">
            <em>{programModuleGroupId ? 'Module group' : 'Program'} has no modules.</em>
          </Typography>
        </Grid>
      ) : (
        <>
          {sortedModules.map((genericModule) => (
            <Grid key={genericModule.id} item xs={12}>
              <GenericModuleCard
                noEditingUi={noEditingUi}
                programModule={genericModule}
                selected={value === genericModule.id}
                onClick={() => onProgramModuleCardClick(genericModule.id)}
              />
            </Grid>
          ))}
        </>
      )}
    </Grid>
  );
}
