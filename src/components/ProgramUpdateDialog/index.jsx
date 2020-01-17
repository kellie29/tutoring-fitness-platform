// @flow

import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Duration } from 'luxon';

import useInputValue from '../useInputValue';
import useInputCustomValue from '../useInputCustomValue';
import { graphql, createQuery, createFragment, createMutation } from '../../api';
import useAsyncTask from '../useAsyncTask';
import Select from '../Select2';
import useCurrentUserSubscription from '../useCurrentUserSubscription';
import createDashboardDialog, { DashboardDialogHeader } from '../createDashboardDialog';
import PresentableAvatarInput from '../PresentableAvatarInput';

import { type ProgramUpdateDialogUpdateProgramMutation } from './__generated__/ProgramUpdateDialogUpdateProgramMutation.graphql';
import { type ProgramUpdateDialog_program as Program } from './__generated__/ProgramUpdateDialog_program.graphql';

const useTagsQuery = createQuery(graphql`
  query ProgramUpdateDialogTagsQuery {
    tags(first: 50) {
      edges {
        node {
          id
          slug
          name
        }
      }
    }
  }
`);

const useMutation = createMutation<ProgramUpdateDialogUpdateProgramMutation>(graphql`
  mutation ProgramUpdateDialogUpdateProgramMutation($input: UpdateProgramInput!) {
    updateProgram(input: $input) {
      program {
        ...ProgramUpdateDialog_program
      }
    }
  }
`);

const useFragment = createFragment<Program>(graphql`
  fragment ProgramUpdateDialog_program on Program {
    ...PresentableAvatarInput_presentable
    id
    name
    description
    duration
    isPublic
    chatEnabled
    trackChatEnabled
    modules {
      name
      description
      type
      data
    }
    tag {
      id
    }
  }
`);

type Props = {|
  program: mixed,
|};

export default createDashboardDialog<void, Props>(function ProgramUpdateDialog(props) {
  const { open, onCancel, onComplete } = props;

  const program = useFragment(props.program);
  const currentUserSubscription = useCurrentUserSubscription();
  const allowUpdatingIsPublic = currentUserSubscription?.slug === 'master';
  const allowUpdatingTag = currentUserSubscription?.slug === 'master';

  const [name, nameInputProps] = useInputValue(program.name);
  const [photoFile, setPhotoFile] = React.useState(null);
  const [description, descriptionInputProps] = useInputValue(program.description);
  const [durationWeeks, durationWeeksInputProps] = useInputCustomValue<number>(
    Duration.fromISO(program.duration).as('weeks'),
    (s) => Number.parseFloat(s),
    (v) => String(v),
  );
  const [isPublic, setIsPublic] = React.useState<boolean>(program.isPublic);
  const [tagId, setTagId] = React.useState<string | null>(program.tag?.id || null);
  const [chatEnabled, setChatEnabled] = React.useState(program.chatEnabled);
  const [trackChatEnabled, setTrackChatEnabled] = React.useState(program.trackChatEnabled);
  const tagsQuery = useTagsQuery();
  const updateProgram = useMutation();
  const updateProgramTask = useAsyncTask(async () => {
    await updateProgram({
      input: {
        id: program.id,
        name,
        image: photoFile || undefined,
        description,
        duration: Duration.fromObject({ weeks: durationWeeks }).toISO(),
        isPublic: allowUpdatingIsPublic ? isPublic : undefined,
        tagId: allowUpdatingTag ? tagId : undefined,
        chatEnabled,
        trackChatEnabled,
      },
    });

    onComplete();
  });

  const onChatEnabledChange = React.useCallback((event) => {
    const { checked } = event.target;
    setChatEnabled(checked);
  }, []);

  const onTrackChatEnabledChange = React.useCallback((event) => {
    const { checked } = event.target;
    setTrackChatEnabled(checked);
  }, []);

  const onSaveClick = React.useCallback(async () => {
    updateProgramTask();
  }, [updateProgramTask]);

  return (
    <>
      <Dialog fullWidth open={open} onClose={onCancel}>
        <DashboardDialogHeader>Edit Program</DashboardDialogHeader>
        <DialogContent dividers>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <PresentableAvatarInput
                presentable={program}
                imageFile={photoFile}
                onImageFileChange={setPhotoFile}
                avatarStyle={{ width: 64, height: 64 }}
              />
              <div style={{ flexBasis: 32 }} />
              <TextField label="Name" required {...nameInputProps} style={{ flex: 1 }} />
            </div>
            <div style={{ height: 32 }} />
            <TextField
              label="Description"
              required
              variant="filled"
              multiline
              rows="4"
              {...descriptionInputProps}
            />
            <div style={{ height: 32 }} />
            <TextField label="Duration (weeks)" type="number" {...durationWeeksInputProps} />
            <div style={{ height: 32 }} />
            <FormControlLabel
              control={
                <Checkbox color="primary" checked={chatEnabled} onChange={onChatEnabledChange} />
              }
              label="Enable chat group"
            />
            <div style={{ height: 16 }} />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={trackChatEnabled}
                  onChange={onTrackChatEnabledChange}
                />
              }
              label="Enable one-on-one chats"
            />
            {allowUpdatingTag && (
              <>
                <div style={{ height: 32 }} />
                <Select
                  label="Tag"
                  // required
                  value={tagId || ''}
                  onChange={(event) => setTagId(event.target.value)}
                >
                  {tagsQuery.props && [
                    <option key="none" value="" />,
                    ...tagsQuery.props.tags.edges.map(({ node: tag }) => (
                      <option key={tag.id} value={tag.id}>
                        {tag.name}
                      </option>
                    )),
                  ]}
                </Select>
              </>
            )}
            {allowUpdatingIsPublic && (
              <>
                <div style={{ height: 32 }} />
                <FormControlLabel
                  label="Public"
                  control={
                    <Checkbox
                      checked={isPublic}
                      onChange={(event) => setIsPublic(event.target.checked)}
                      color="primary"
                    />
                  }
                />
              </>
            )}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={onSaveClick}>
            Save Program
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
});
