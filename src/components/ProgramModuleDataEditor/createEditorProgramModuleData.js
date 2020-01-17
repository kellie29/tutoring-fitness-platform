// @flow

import {
  type ProgramModuleData,
  type AbstractProgramModuleData,
  programModuleDataFactory,
  type ProgramModuleDataBaseData,
} from '../../helpers/programModuleData';

export type EditorProgramModuleData = AbstractProgramModuleData;

export function editorProgramModuleDataFromProgramModuleData(
  programModuleData: ProgramModuleData,
): EditorProgramModuleData {
  return programModuleDataFactory.abstract(programModuleData);
}

export function programModuleDataFromEditorProgramModuleData(
  editorProgramModuleData: EditorProgramModuleData,
): ProgramModuleData | null {
  return programModuleDataFactory.concrete(editorProgramModuleData);
}

export default function createEditorProgramModuleData(
  baseData?: ProgramModuleDataBaseData,
): EditorProgramModuleData {
  return programModuleDataFactory.createAbstract(null, {}, baseData);
}
