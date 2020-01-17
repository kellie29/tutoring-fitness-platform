// @flow

import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CopyIcon from '@material-ui/icons/FileCopyOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import Chip from '@material-ui/core/Chip';
import { useTheme } from '@material-ui/core/styles';
import { Tooltip } from '@material-ui/core';

import { graphql, createFragment } from '../../api';
import ActionBar from '../ActionBar';

import { type ProgramModuleCard_programModule as ProgramModule } from './__generated__/ProgramModuleCard_programModule.graphql';

const useFragment = createFragment<ProgramModule>(graphql`
  fragment ProgramModuleCard_programModule on ProgramModule {
    id
    name
    description
    data
    program {
      id
      reminderGroupName
    }
    programModuleGroup {
      name
    }
    viewerCanUpdate
  }
`);

type Props = {
  programModule: mixed,
  selected: boolean,
  onClick: () => void,
  body?: React.Node | null,
  noEditingUi?: boolean,
};

export default function ProgramModuleCard(props: Props) {
  const { selected, onClick, body, noEditingUi } = props;

  const programModule = useFragment(props.programModule);

  const theme = useTheme();

  let moduleGroupName;
  if (programModule.data.scheduling) {
    moduleGroupName = programModule.program?.reminderGroupName ?? 'Reminders';
  } else if (programModule.programModuleGroup) {
    moduleGroupName = programModule.programModuleGroup.name;
  }

  const moduleGroupNameChipLabel = (
    <>
      <Typography variant="body2" style={{ display: 'flex', justifyContent: 'center' }}>
        Group: {moduleGroupName || 'Ungrouped'}
      </Typography>
      {!moduleGroupName ? (
        <ErrorIcon
          style={{
            width: 16,
            height: 16,
            color: theme.palette.warning.main,
            marginLeft: 4,
          }}
        />
      ) : null}
    </>
  );
  const moduleGroupNameChip = moduleGroupName ? (
    <Chip label={moduleGroupNameChipLabel} style={{ marginRight: 16 }} />
  ) : (
    <Tooltip
      title="This module will not be visible to your client. Add it to a group to make it visible."
      placement="top"
    >
      <Chip label={moduleGroupNameChipLabel} style={{ marginRight: 16 }} />
    </Tooltip>
  );

  return (
    <Card raised={selected}>
      <CardActionArea>
        <CardContent onClick={onClick}>
          <div style={{ display: 'flex', placeItems: 'center', placeContent: 'center' }}>
            <Typography variant="h6" style={{ fontWeight: 600 }}>
              {programModule.name}
            </Typography>
            {!noEditingUi && (
              <>
                <div style={{ flexGrow: 1 }} />
                {moduleGroupNameChip}
                {programModule.program && (
                  <ActionBar
                    variant="icon"
                    iconSize="small"
                    actions={[
                      {
                        key: 'duplicate',
                        type: 'link',
                        label: <CopyIcon />,
                        to: programModule.viewerCanUpdate
                          ? `/dashboard/programs/view/${programModule.program.id}/modules/duplicate/${programModule.id}`
                          : `/dashboard/programs/view/${programModule.program.id}/copy`,
                      },
                      {
                        key: 'update',
                        type: 'link',
                        label: <EditIcon />,
                        to: programModule.viewerCanUpdate
                          ? `/dashboard/programs/view/${programModule.program.id}/modules/update/${programModule.id}`
                          : `/dashboard/programs/view/${programModule.program.id}/copy`,
                      },
                      {
                        key: 'delete',
                        type: 'link',
                        label: <DeleteIcon />,
                        to: programModule.viewerCanUpdate
                          ? `/dashboard/programs/view/${programModule.program.id}/modules/delete/${programModule.id}`
                          : `/dashboard/programs/view/${programModule.program.id}/copy`,
                      },
                    ]}
                  />
                )}
              </>
            )}
          </div>
          {body && (
            <>
              <div style={{ height: 16 }} />
              <Typography variant="body2">{body}</Typography>
            </>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
