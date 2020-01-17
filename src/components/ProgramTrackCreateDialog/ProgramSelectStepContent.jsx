// @flow

import * as React from 'react';

import ProgramFilterSelectView from '../ProgramFilterSelectView';

type Props = {
  value: string | null,
  onValueChange: (value: string | null) => void,
};

export default function ProgramSelectStepContent(props: Props) {
  const { value, onValueChange } = props;

  return <ProgramFilterSelectView value={value} onValueChange={onValueChange} />;
}
