// @flow

import * as React from 'react';
import { Link, matchPath } from 'react-router-dom';
import { Typography, Divider, Button, Tabs, ButtonBase, IconButton } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import invariant from 'invariant';

import { graphql, createFragment } from '../../api';

import { type ProgramViewPageRouterTabs_program as Program } from './__generated__/ProgramViewPageRouterTabs_program.graphql';

const useFragment = createFragment<Program>(graphql`
  fragment ProgramViewPageRouterTabs_program on Program {
    id
    viewerCanUpdate
    reminderGroupName
    owner {
      __id
    }
    moduleGroups {
      id
      name
      program {
        id
        viewerCanUpdate
      }
    }
  }
`);

type Props = {
  program: mixed,
  currentID: string,
};

function Tab({
  isActive,
  to,
  label,
  upperCase = false,
  accessories,
}: {
  isActive: boolean,
  to: string,
  label: string,
  upperCase?: boolean,
  accessories?: React.Node,
}) {
  const theme = useTheme();

  const [accessoriesVisible, setAccessoriesVisible] = React.useState(false);

  return (
    <ButtonBase
      style={{ height: 48, position: 'relative', overflow: 'hidden' }}
      component={Link}
      to={to}
      onMouseEnter={() => setAccessoriesVisible(true)}
      onMouseLeave={() => setAccessoriesVisible(false)}
    >
      {accessoriesVisible ? accessories : null}
      <Typography
        variant="body2"
        style={{
          fontWeight: 'lighter',
          color: isActive ? theme.palette.primary.main : theme.palette.grey[700],
        }}
      >
        {upperCase ? label.toUpperCase() : label}
      </Typography>
    </ButtonBase>
  );
}

function ModuleGroupTab({
  moduleGroup,
  showEditButtons = true,
  isActive,
  upperCase = false,
}: {
  moduleGroup: any,
  showEditButtons?: boolean,
  isActive: boolean,
  upperCase?: boolean,
}) {
  const theme = useTheme();

  const [editButtonsVisible, setEditButtonsVisible] = React.useState(false);

  const { id: programId, viewerCanUpdate } = moduleGroup.program;

  return (
    <>
      <ButtonBase
        style={{
          height: 48,
          position: 'relative',
          overflow: 'hidden',
          paddingLeft: 32,
          paddingRight: 32,
        }}
        component={Link}
        to={`/dashboard/programs/view/${programId}/modules/${moduleGroup.id}`}
        onMouseEnter={() => setEditButtonsVisible(true)}
        onMouseLeave={() => setEditButtonsVisible(false)}
      >
        {showEditButtons && editButtonsVisible ? (
          <>
            <IconButton
              size="small"
              style={{ position: 'absolute', left: 8 }}
              component={Link}
              to={
                viewerCanUpdate
                  ? `/dashboard/programs/view/${programId}/modules/${moduleGroup.id}/updateGroup`
                  : `/dashboard/programs/view/${programId}/copy`
              }
            >
              <EditIcon />
            </IconButton>
            <IconButton
              size="small"
              style={{ position: 'absolute', left: 40 }}
              component={Link}
              to={
                viewerCanUpdate
                  ? `/dashboard/programs/view/${programId}/modules/${moduleGroup.id}/deleteGroup`
                  : `/dashboard/programs/view/${programId}/copy`
              }
            >
              <DeleteIcon />
            </IconButton>
          </>
        ) : null}
        <Typography
          variant="body2"
          style={{
            fontWeight: 'lighter',
            color: isActive ? theme.palette.primary.main : theme.palette.grey[700],
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          {upperCase ? moduleGroup.name.toUpperCase() : moduleGroup.name}
        </Typography>
      </ButtonBase>
    </>
  );
}

let assignID: string;
export default function ProgramViewPageRouterTabs(props: Props) {
  const program = useFragment(props.program);
  // eslint-disable-next-line no-underscore-dangle
  assignID = program.owner.__id;
  const theme = useTheme();

  const tabs = [
    {
      to: `/dashboard/programs/view/${program.id}/participants`,
      order: 1,
    },
    {
      to: `/dashboard/programs/view/${program.id}/calendar`,
      order: 2,
    },
    {
      to: `/dashboard/programs/view/${program.id}/modules/reminders`,
      order: 4,
    },
    ...(program.moduleGroups
      ? program.moduleGroups.map((group, i) => ({
          to: `/dashboard/programs/view/${program.id}/modules/${group.id}`,
          order: 5 + i,
        }))
      : []),
    {
      to: `/dashboard/programs/view/${program.id}/modules`,
      order: 3,
    },
    {
      to: `/dashboard/programs/view/${program.id}`,
      order: 0,
    },
  ];
  const activeTab = tabs.find((tab) => matchPath(location.pathname, { path: tab.to }));
  invariant(activeTab, 'Expected "activeTabDescriptor"');
  const activeTabIndex = activeTab.order;
  const sortedTabs = React.useMemo(() => [...tabs].sort((a, b) => a.order - b.order), [tabs]);

  if (!program) {
    return null;
  }

  return (
    <>
      <Tabs
        orientation="vertical"
        style={{ display: 'flex', flex: 1, overflow: 'hidden' }}
        TabIndicatorProps={{ style: { width: 4 } }}
        variant="fullWidth"
        value={activeTabIndex}
        indicatorColor="primary"
      >
        <Tab to={sortedTabs[0].to} label="Overview" isActive={activeTabIndex === 0} upperCase />
        {props.currentID === assignID && (
          <Tab to={sortedTabs[1].to} label="Clients" isActive={activeTabIndex === 1} upperCase />
        )}
        <Tab to={sortedTabs[2].to} label="Calendar" isActive={activeTabIndex === 2} upperCase />
        <ButtonBase
          style={{ height: 48, position: 'relative' }}
          component={Link}
          to={sortedTabs[3].to}
        >
          <div>
            <Typography
              variant="body2"
              style={{
                fontWeight: 'lighter',
                color: activeTabIndex === 3 ? theme.palette.primary.main : theme.palette.grey[700],
              }}
            >
              MODULES
            </Typography>
            <Divider style={{ position: 'absolute', right: 0, left: 0, bottom: 0 }} />
          </div>
        </ButtonBase>
        <Tab
          to={sortedTabs[4].to}
          label={program.reminderGroupName ?? 'Reminders'}
          isActive={activeTabIndex === 4}
          accessories={
            <IconButton
              size="small"
              style={{ position: 'absolute', left: 8 }}
              component={Link}
              to={
                program.viewerCanUpdate
                  ? `/dashboard/programs/view/${program.id}/modules/reminders/update`
                  : `/dashboard/programs/view/${program.id}/copy`
              }
            >
              <EditIcon />
            </IconButton>
          }
        />
        {program.moduleGroups
          ? program.moduleGroups.map((moduleGroup, index) => (
              <ModuleGroupTab
                key={`moduleGroup-${index}`}
                moduleGroup={moduleGroup}
                isActive={activeTabIndex === index + 5}
              />
            ))
          : null}
        <Button
          component={Link}
          to={
            program.viewerCanUpdate
              ? `/dashboard/programs/view/${program.id}/modules/createGroup`
              : `/dashboard/programs/view/${program.id}/copy`
          }
          style={{ borderRadius: 0 }}
        >
          <AddIcon color="primary" />
          <Typography color="primary" variant="body2">
            New Module Group
          </Typography>
        </Button>
      </Tabs>
    </>
  );
}
