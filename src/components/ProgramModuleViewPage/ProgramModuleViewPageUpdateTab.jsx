// @flow

import * as React from 'react';
import { type ContextRouter } from 'react-router-dom';
import invariant from 'invariant';
import Button from '@material-ui/core/Button';
import { FormControlLabel, Checkbox } from '@material-ui/core';

import { graphql, createQuery, createMutation } from '../../api';
import LoadingView from '../LoadingView';
import ProgramModuleEditor from '../ProgramModuleEditor';
import useAsyncTask from '../useAsyncTask';
import useCurrentUserSubscription from '../useCurrentUserSubscription';
import MobileAppPreviewView from '../MobileAppPreviewView';
import TagAutocomplete from '../TagAutocomplete';

import { type ProgramModuleViewPageUpdateTabQuery } from './__generated__/ProgramModuleViewPageUpdateTabQuery.graphql';
import { type ProgramModuleViewPageUpdateTabUpdateProgramModuleMutation } from './__generated__/ProgramModuleViewPageUpdateTabUpdateProgramModuleMutation.graphql';

const useQuery = createQuery<ProgramModuleViewPageUpdateTabQuery>(graphql`
  query ProgramModuleViewPageUpdateTabQuery($programModuleId: ID) {
    programModule(id: $programModuleId) {
      ...ProgramModuleEditor_programModule
      ...PresentableAvatarInput_presentable
      id
      name
      description
      type
      data
      program {
        ...ProgramTrackInvitationScreen_program
      }
      # owner {
      #   ...PresentableLink_presentable
      # }
      # viewerCanUpdate
      isPublic
      tag {
        id
      }
    }
  }
`);

const useMutation = createMutation<ProgramModuleViewPageUpdateTabUpdateProgramModuleMutation>(graphql`
  mutation ProgramModuleViewPageUpdateTabUpdateProgramModuleMutation(
    $input: UpdateProgramModuleInput!
  ) {
    updateProgramModule(input: $input) {
      programModule {
        id
        type
        name
        image {
          id
        }
        description
        data
        isPublic
        tag {
          id
        }
      }
    }
  }
`);

type Props = {
  ...ContextRouter,
};

export default function ProgramModuleViewPageUpdateTab(props: Props) {
  const { match } = props;

  const query = useQuery({
    programModuleId: match.params.programModuleId,
  });
  const programModule = query.props?.programModule || null;
  const currentUserSubscription = useCurrentUserSubscription();
  const allowUpdatingIsPublic = currentUserSubscription?.slug === 'master';
  const allowUpdatingTag = currentUserSubscription?.slug === 'master';

  const [updatedModule, setUpdatedModule] = React.useState(null);
  // TODO: Use a proper form library
  const [isPublic, setIsPublic] = React.useState<boolean | void>();
  const [tagId, setTagId] = React.useState<string | null | void>();
  React.useEffect(() => {
    if (programModule) {
      setIsPublic(programModule.isPublic);
      setTagId(programModule.tag?.id || null);
    }
  }, [programModule]);
  const updateProgramModule = useMutation();
  const updateProgramModuleTask = useAsyncTask(async () => {
    invariant(updatedModule, 'Expected "updatedModule"');
    await updateProgramModule({
      input: {
        id: updatedModule.id,
        type: updatedModule.type,
        name: updatedModule.name,
        description: updatedModule.description,
        data: updatedModule.data,
        isPublic: allowUpdatingIsPublic ? isPublic : undefined,
        tagId: allowUpdatingTag ? tagId : undefined,
        image: updatedModule.image,
      },
    });
  });

  const onModuleChange = React.useCallback((module) => {
    setUpdatedModule(module);
  }, []);

  const onSaveClick = React.useCallback(() => {
    updateProgramModuleTask();
  }, [updateProgramModuleTask]);

  if (!query.props) {
    return <LoadingView />;
  }

  if (!programModule) {
    throw new Error('Not found');
  }

  return (
    <MobileAppPreviewView emulatable={{ type: 'programModule', module: updatedModule }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {tagId !== undefined && (
          <>
            <div style={{ height: 16 }} />
            <TagAutocomplete
              filter={{ parentTagId: { eq: 'me' } }}
              onValueChange={setTagId}
              value={tagId}
              disableClearable
            />
          </>
        )}
        <div style={{ height: 16 }} />
        <ProgramModuleEditor programModule={programModule} onChange={onModuleChange} />
        {allowUpdatingTag && tagId !== undefined && (
          <>
            <div style={{ height: 32 }} />
            <TagAutocomplete
              filter={{ parentTagId: null }}
              onValueChange={setTagId}
              value={tagId}
            />
          </>
        )}
        {allowUpdatingIsPublic && isPublic !== undefined && (
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={onSaveClick}
            disabled={!updatedModule}
          >
            Save Module
          </Button>
        </div>
      </div>
    </MobileAppPreviewView>
  );
}
