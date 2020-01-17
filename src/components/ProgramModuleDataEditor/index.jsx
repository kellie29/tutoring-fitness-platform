// @flow

import * as React from 'react';

import {
  type ProgramModuleData,
  type ProgramModuleDataTypes,
} from '../../helpers/programModuleData';

import programModuleDataReducer from './programModuleDataReducer';
import GenericModuleDataEditor from './GenericModuleDataEditor';

export {
  default as createEditorProgramModuleData,
  programModuleDataFromEditorProgramModuleData,
  editorProgramModuleDataFromProgramModuleData,
} from './createEditorProgramModuleData';
export type { EditorProgramModuleData } from './createEditorProgramModuleData';

export const moduleTypeToString: $ObjMap<ProgramModuleDataTypes, () => string> = {
  generic: 'Generic',
};

export type ModuleEditorProps<TData> = {|
  data: TData,
  onChange: (data: TData) => void,
|};

export type DataEditorProps<TData> = {|
  data: TData | null,
  onChange: (data: TData | null) => void,
  parentData: $ReadOnlyArray<[any, any]>,
|};

export const moduleTypeToDataEditor: $ObjMap<
  ProgramModuleDataTypes,
  () => React.AbstractComponent<ModuleEditorProps<any>>,
> = {
  generic: GenericModuleDataEditor,
};

type EditorContextValue = $ReadOnly<{|
  programModuleData: ProgramModuleData,
|}>;

const editorContext = React.createContext<EditorContextValue | null>(null);

type Props = {|
  programModuleData: ProgramModuleData,
  onChange: (programModuleData: ProgramModuleData) => void,
|};

export default function ProgramModuleDataEditor(props: Props) {
  const { programModuleData, onChange } = props;

  const dispatch = React.useCallback(
    (action) => {
      const nextValue = programModuleDataReducer(programModuleData, action);
      onChange(nextValue);
    },
    [onChange, programModuleData],
  );

  const contextValue = React.useMemo(
    () => ({
      programModuleData,
    }),
    [programModuleData],
  );

  const onDataChange = React.useCallback(
    (data) => {
      dispatch({
        type: 'changeDataForType',
        payload: {
          type: programModuleData.type,
          data,
        },
      });
    },
    [dispatch, programModuleData.type],
  );

  const ModuleDataEditor = moduleTypeToDataEditor[programModuleData.type];

  return (
    <editorContext.Provider value={contextValue}>
      <ModuleDataEditor data={programModuleData.data} onChange={onDataChange} />
    </editorContext.Provider>
  );
}
