// @flow

import * as React from 'react';
import { useRouteMatch, Link, useHistory } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, IconButton, Button } from '@material-ui/core';
import { Duration } from 'luxon';
import AddPhotoIcon from '@material-ui/icons/AddPhotoAlternateOutlined';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';

import createDashboardPageTab from '../createDashboardPageTab';
import { graphql, createQuery, createMutation } from '../../api';
import LoadingView from '../LoadingView';
// import { useEmulatorState } from '../MobileAppEmulator';
// import ProgramProgramModuleList from '../ProgramProgramModuleList';
import MobileAppPreviewView from '../MobileAppPreviewView';
import PresentableAvatar from '../PresentableAvatar';
import useAsyncTask from '../useAsyncTask';
import PresentableLink from '../PresentableLink';

import { type ProgramViewPageOverviewTabQuery } from './__generated__/ProgramViewPageOverviewTabQuery.graphql';
import { type ProgramViewPageOverviewTabUpdateProgramMutation } from './__generated__/ProgramViewPageOverviewTabUpdateProgramMutation.graphql';

const useStyles = makeStyles((theme) => ({
  programImage: {
    width: 200,
    height: 200,
    borderRadius: 0,
  },
  pickImage: {
    width: 200,
    height: 200,
    marginTop: 8,
    marginBottom: 16,
    marginRight: 16,
    borderWidth: 2,
    borderColor: theme.palette.grey[700],
    borderStyle: 'dashed',
  },
}));

const useQuery = createQuery<ProgramViewPageOverviewTabQuery>(
  graphql`
    query ProgramViewPageOverviewTabQuery($programId: ID) {
      program(id: $programId) {
        ...ProgramDetailScreen_program
        ...ProgramProgramModuleList_program
        ...PresentableAvatar_presentable
        id
        name
        description
        owner {
          ...PresentableLink_presentable
        }
        chatEnabled
        trackChatEnabled
        modules {
          id
          name
          description
          type
          data
        }
        duration
        viewerCanUpdate
        image {
          url
        }
      }
    }
  `,
  {
    fetchPolicy: 'network-only',
  },
);

const useMutation = createMutation<ProgramViewPageOverviewTabUpdateProgramMutation>(graphql`
  mutation ProgramViewPageOverviewTabUpdateProgramMutation($input: UpdateProgramInput!) {
    updateProgram(input: $input) {
      program {
        ...PresentableAvatar_presentable
      }
    }
  }
`);

export default createDashboardPageTab<any>(function ProgramViewPageOverviewTab() {
  const history = useHistory();
  const match = useRouteMatch();

  const classes = useStyles();
  const theme = useTheme();

  const [editImageButtonsVisible, setEditImageButtonsVisible] = React.useState(false);

  const query = useQuery({
    programId: match.params.programId,
  });
  const updateProgram = useMutation();
  const program = query.props?.program || null;

  const editImageInputRef = React.useRef();

  const handleMouseHoverState = React.useCallback(
    (isHovering: boolean) => {
      if (program?.viewerCanUpdate) {
        setEditImageButtonsVisible(isHovering);
      }
    },
    [program],
  );

  const updateProgramTask = useAsyncTask(async (file) => {
    if (program) {
      if (file !== undefined) {
        await updateProgram({
          input: {
            id: program.id,
            image: file,
          },
        });
      }
    }
  });

  const onRemoveImageClicked = React.useCallback(async () => {
    updateProgramTask(null);
  }, [updateProgramTask]);

  const onEditImageClicked = React.useCallback(() => {
    if (program) {
      if (program.viewerCanUpdate) {
        if (editImageInputRef.current) editImageInputRef.current.click();
      } else {
        history.push(`/dashboard/programs/view/${program.id}/copy`);
      }
    }
  }, [editImageInputRef, program, history]);

  const onImageChange = React.useCallback(
    async (event) => {
      const file = event.target.files[0];
      updateProgramTask(file);
    },
    [updateProgramTask],
  );

  if (!query.props) {
    return <LoadingView />;
  }

  if (!program) {
    throw new Error('Not found');
  }

  const emulatable = { type: 'programDetail', program };

  return (
    <MobileAppPreviewView emulatable={emulatable}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
          <Typography
            variant="h6"
            style={{ display: 'inline-flex', alignItems: 'center', fontWeight: '800' }}
          >
            Overview
          </Typography>
        </div>
      </div>
      <div style={{ height: 16 }} />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ width: 240 }}>
            <Typography style={{ fontWeight: 'bold' }}>Name:</Typography>
          </div>
          <Typography style={{ flex: 1 }}>{program.name}</Typography>
        </div>
        <div style={{ height: 32 }} />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ width: 240 }}>
            <Typography style={{ fontWeight: 'bold' }}>Description:</Typography>
          </div>
          <Typography style={{ textAlign: 'justify', flex: 1 }}>{program.description}</Typography>
        </div>
        <div style={{ height: 32 }} />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ width: 240 }}>
            <Typography style={{ fontWeight: 'bold' }}>Duration: </Typography>
          </div>
          <Typography style={{ flex: 1 }}>
            {Duration.fromISO(program.duration).as('weeks')} weeks
          </Typography>
        </div>
        <div style={{ height: 32 }} />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ width: 240 }}>
            <Typography style={{ fontWeight: 'bold' }}>Program Image:</Typography>
            <Typography variant="body2">
              {
                "You can choose an image that best represents your program. It will be displayed as the header of your program on your client's phone."
              }
            </Typography>
          </div>
          <div style={{ flexDirection: 'row', display: 'flex' }}>
            {program.viewerCanUpdate ? (
              <label htmlFor="editImage">
                <input
                  ref={editImageInputRef}
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="editImage"
                  type="file"
                  onChange={onImageChange}
                />
              </label>
            ) : null}
            {program.image ? (
              <div
                className={classNames(classes.programImage)}
                style={{ display: 'flex', position: 'relative' }}
                onMouseEnter={() => handleMouseHoverState(true)}
                onMouseLeave={() => handleMouseHoverState(false)}
              >
                <PresentableAvatar
                  presentable={program}
                  style={{
                    flex: 1,
                    width: '100%',
                    height: '100%',
                    borderRadius: 0,
                  }}
                />
                {editImageButtonsVisible ? (
                  <>
                    <IconButton
                      style={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        backgroundColor: 'rgba(0,0,0, 0.2)',
                        width: 24,
                        height: 24,
                        padding: 0,
                      }}
                      onClick={onRemoveImageClicked}
                    >
                      <CloseIcon style={{ color: 'white', width: 16, height: 16 }} />
                    </IconButton>
                    <IconButton
                      style={{
                        position: 'absolute',
                        left: 8,
                        top: 8,
                        backgroundColor: 'rgba(0,0,0, 0.2)',
                        width: 24,
                        height: 24,
                        padding: 0,
                      }}
                      onClick={onEditImageClicked}
                    >
                      <EditIcon style={{ color: 'white', width: 16, height: 16 }} />
                    </IconButton>
                  </>
                ) : null}
              </div>
            ) : (
              <div
                className={classNames(classes.pickImage)}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: theme.palette.grey[500],
                  cursor: 'pointer',
                }}
                onClick={onEditImageClicked}
              >
                <AddPhotoIcon
                  style={{
                    color: 'white',
                    backgroundColor: theme.palette.grey[500],
                    width: 80,
                    height: 80,
                  }}
                />
              </div>
            )}
          </div>
        </div>
        <div style={{ height: 32 }} />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ width: 240 }}>
            <Typography style={{ fontWeight: 'bold' }}>Prepared by:</Typography>
          </div>
          <Typography style={{ flex: 1 }}>
            <PresentableLink presentable={program.owner} />
          </Typography>
        </div>
        <div style={{ height: 32 }} />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ width: 240 }}>
            <Typography style={{ fontWeight: 'bold' }}>Group Chat:</Typography>
          </div>
          <Typography style={{ flex: 1 }}>
            {program.chatEnabled ? 'Enabled' : 'Disabled'}
          </Typography>
        </div>
        <div style={{ height: 32 }} />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ width: 240 }}>
            <Typography style={{ fontWeight: 'bold' }}>One-on-one Chats:</Typography>
          </div>
          <Typography style={{ flex: 1 }}>
            {program.trackChatEnabled ? 'Enabled' : 'Disabled'}
          </Typography>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            color="default"
            component={Link}
            to={
              program.viewerCanUpdate
                ? `/dashboard/programs/view/${program.id}/update`
                : `/dashboard/programs/view/${program.id}/copy`
            }
            style={{ marginTop: 16, alignSelf: 'right' }}
          >
            Edit
          </Button>
        </div>
      </div>
      <div style={{ height: 16 }} />
    </MobileAppPreviewView>
  );
});
