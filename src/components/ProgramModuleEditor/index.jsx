// @flow

import * as React from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Grid } from '@material-ui/core';

import {
  initialGenericProgramModuleDataScheduling,
  type GenericProgramModuleDataData,
} from '../../helpers/programModuleData';
import { graphql, createFragment } from '../../api';
import ProgramModuleDataEditor from '../ProgramModuleDataEditor';
import PresentableAvatarInput from '../PresentableAvatarInput';
import useInputValue from '../useInputValue';

import { type ProgramModuleEditor_programModule as ProgramModule } from './__generated__/ProgramModuleEditor_programModule.graphql';

const useFragment = createFragment<ProgramModule>(graphql`
  fragment ProgramModuleEditor_programModule on ProgramModule {
    id
    name
    description
    type
    data
    ...PresentableAvatarInput_presentable
    programModuleGroup {
      id
    }
    program {
      reminderGroupName
      moduleGroups {
        id
        name
      }
    }
  }
`);

export type EditorData = {|
  id: string,
  name: string,
  image?: any,
  description: string | null,
  type: 'generic',
  data: GenericProgramModuleDataData,
  programModuleGroupId: string | null,
|};

type Props = {|
  programModule: mixed,
  onChange: (editorData: EditorData) => void,
|};

export default function ProgramModuleEditor(props: Props) {
  const { onChange } = props;

  const programModule = useFragment(props.programModule);
  const { program } = programModule;
  const programModuleGroups = program?.moduleGroups;
  const [imageFile, setImageFile] = React.useState(undefined);
  const [name, nameInputProps] = useInputValue(programModule.name);
  const [description, descriptionInputProps] = useInputValue(programModule.description || '');
  const type: 'generic' = 'generic';
  const [data, setData] = React.useState(programModule.data);
  const [programModuleGroupId, setProgramModuleGroupId] = React.useState(
    programModule.programModuleGroup?.id ?? null,
  );
  const programModuleData = React.useMemo(
    () => ({
      id: programModule.id,
      name: programModule.name,
      type,
      data,
    }),
    [data, programModule.id, programModule.name],
  );

  const onProgramModuleDataChange = React.useCallback((nextProgramModuleData) => {
    setData(nextProgramModuleData.data);
  }, []);

  React.useEffect(() => {
    onChange({
      id: programModule.id,
      name,
      description,
      type,
      data,
      programModuleGroupId,
      image: imageFile,
    });
  }, [
    data,
    description,
    name,
    imageFile,
    onChange,
    programModule.id,
    programModule.type,
    programModuleGroupId,
  ]);

  const onProgramModuleGroupChange = React.useCallback(
    (event) => {
      const { value } = event.target;
      setProgramModuleGroupId(value);
      setData({
        ...data,
        scheduling: value === 'reminder' ? initialGenericProgramModuleDataScheduling : null,
      });
    },
    [data],
  );

  let moduleGroupValue;
  if (data.scheduling) {
    moduleGroupValue = 'reminder';
  } else if (programModuleGroupId) {
    moduleGroupValue = programModuleGroupId;
  } else {
    moduleGroupValue = 'none';
  }

  return (
    <Grid container spacing={3} justify="center">
      <Grid item container spacing={3}>
        <Grid item>
          <PresentableAvatarInput
            presentable={programModule}
            imageFile={imageFile ?? null}
            onImageFileChange={setImageFile}
            avatarStyle={{
              width: 96,
              height: 96,
            }}
          />
        </Grid>
        <Grid item style={{ flexGrow: 1 }}>
          <Grid item container spacing={3}>
            <Grid item style={{ flexGrow: 1 }}>
              <TextField label="Module Name" {...nameInputProps} fullWidth />
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel htmlFor="category-select">Module Group</InputLabel>
                <Select
                  value={moduleGroupValue}
                  inputProps={{ id: 'category-select' }}
                  onChange={onProgramModuleGroupChange}
                >
                  <MenuItem value="none">
                    <em>Ungrouped</em>
                  </MenuItem>
                  <MenuItem value="reminder">{program?.reminderGroupName ?? 'Reminders'}</MenuItem>
                  {programModuleGroups
                    ? programModuleGroups.map((group) => (
                        <MenuItem value={group.id}>{group.name}</MenuItem>
                      ))
                    : []}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item>
            <TextField label="Description" fullWidth {...descriptionInputProps} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <ProgramModuleDataEditor
          programModuleData={programModuleData}
          onChange={onProgramModuleDataChange}
        />
      </Grid>
    </Grid>
  );
}
