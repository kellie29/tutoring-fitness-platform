// @flow

import * as React from 'react';

import LoadingDialog from './LoadingDialog';
import ErrorDialog from './ErrorDialog';
import { type AsyncTask } from './useAsyncTask';

type Props = {
  asyncTask: AsyncTask<any, any>,
};

export default function AsyncTaskDialog(props: Props) {
  const { asyncTask } = props;
  const { result, error, retry, abort } = asyncTask;
  const loading = result ? typeof result.then === 'function' : false;

  const onCancelClick = React.useCallback(() => {
    abort();
  }, [abort]);

  return (
    <>
      <ErrorDialog
        open={!!error}
        errorMessage={error && error.message}
        retry={retry}
        onCancelClick={onCancelClick}
      />
      <LoadingDialog open={loading} />
    </>
  );
}
