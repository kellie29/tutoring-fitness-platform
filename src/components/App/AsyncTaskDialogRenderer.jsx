// @flow

import * as React from 'react';

import { useSelector } from '../../store';
import AsyncTaskDialog from '../AsyncTaskDialog';

export default function AsyncTaskDialogRenderer() {
  const asyncTasks = useSelector((state) => state.asyncTasks);

  return (
    <>
      {Object.keys(asyncTasks).map((id) => {
        const asyncTask = asyncTasks[id];

        return <AsyncTaskDialog key={id} asyncTask={asyncTask} />;
      })}
    </>
  );
}
