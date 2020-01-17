// @flow

import * as React from 'react';
import { Typography, Box, Divider, IconButton } from '@material-ui/core';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import CloseIcon from '@material-ui/icons/Close';
// import { type SvgIconProps } from '@material-ui/core/SvgIcon';
import invariant from 'invariant';

import { useSelector, useDispatch } from '../../store';
import { graphql, createQuery } from '../../api';
import useFormatMessage from '../useFormatMessage';
import appData from '../../data';

import { type TutorialStepTrackerQuery } from './__generated__/TutorialStepTrackerQuery.graphql';
import TutorialStep from './TutorialStep';

const useQuery = createQuery<TutorialStepTrackerQuery>(
  graphql`
    query TutorialStepTrackerQuery {
      currentSession {
        user {
          id
          name
          image {
            id
          }
        }
      }
      clientProfiles(filter: { ownerId: "me" }, first: 0)
        @connection(key: "TutorialStepTracker_clientProfiles", filters: ["filter"]) {
        edgeCount
        edges {
          node {
            id
          }
        }
      }
    }
  `,
  {
    fetchPolicy: 'network-only',
  },
);

// type StepCompletion =
//   | { completed: true }
//   | { completed: false, to: string, icon: React$ComponentType<SvgIconProps> };

// type Step = {
//   title: string,
// } & StepCompletion;

export default function TutorialStepTracker() {
  const query = useQuery();

  const s = useFormatMessage();
  const dispatch = useDispatch();
  const collapsed = useSelector((state) => state.isTutorialCollapsed);

  const onCloseClick = React.useCallback(() => dispatch({ type: 'tutorialCollapse' }), [dispatch]);

  if (!query.props) return null;

  const { currentSession, clientProfiles } = query.props;
  invariant(currentSession, 'Expected "currentSession".');

  const steps = [
    { title: 'Create an account', completed: true },
    {
      title: 'Complete your profile',
      ...(currentSession.user.image
        ? { completed: true }
        : {
            completed: false,
            to: '/dashboard/profile',
            icon: FingerprintIcon,
          }),
    },
    {
      title: 'Invite a client',
      ...(clientProfiles.edgeCount
        ? { completed: true }
        : { completed: false, to: '/dashboard/clients', icon: GroupAddIcon }),
    },
  ];

  //   if (steps[2].completed) {
  //     steps.push({ title: 'Assigna a program to your client' });
  //   }

  const numSteps = steps.length;
  const completedSteps = steps.reduce(
    (accumulator, currentValue) => accumulator + (currentValue.completed ? 1 : 0),
    0,
  );

  if (numSteps === completedSteps) return null;

  return (
    <div style={{ backgroundColor: '#e6e6e6', padding: 16, position: 'relative' }}>
      {!collapsed ? (
        <IconButton onClick={onCloseClick} style={{ position: 'absolute', right: 4, top: 4 }}>
          <CloseIcon />
        </IconButton>
      ) : null}
      {!collapsed ? (
        <>
          <Typography variant="h5" gutterBottom>
            Welcome, {currentSession.user.name}!
          </Typography>
          <Typography variant="body2" gutterBottom>
            {s('tutorialStepTracker.almostDone')}:
          </Typography>
        </>
      ) : null}
      <Box
        display="flex"
        alignItems="center"
        style={{
          width: '70%',
          ...(collapsed ? { marginLeft: 'auto', marginRight: ' auto' } : { margin: '16px auto' }),
        }}
      >
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {index !== 0 ? (
              <Box
                width="100%"
                alignContent="center"
                style={collapsed ? undefined : { height: 56, alignSelf: 'flex-end' }}
              >
                <Divider
                  variant="middle"
                  style={{
                    border: `0.5px dashed ${appData.colors.primary}`,
                    backgroundColor: 'inherit',
                  }}
                />
              </Box>
            ) : null}
            {step.completed ? (
              <TutorialStep title={step.title} collapsed={collapsed} completed />
            ) : (
              <TutorialStep
                title={step.title}
                collapsed={collapsed}
                completed={false}
                icon={step.icon}
                to={step.to}
              />
            )}
          </React.Fragment>
        ))}
      </Box>
    </div>
  );
}
