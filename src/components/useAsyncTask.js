// @flow

import uuidv4 from 'uuid/v4';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';

import createDeferred from '../helpers/createDeferred';
import { useDispatchers } from '../store';

type AsyncTaskFn<TArgs: $ReadOnlyArray<any>, TResult> = (...args: TArgs) => Promise<TResult>;

type RunFn<TArgs: $ReadOnlyArray<any>> = (...args: TArgs) => Promise<boolean>;

export type AsyncTask<TResult, TError: Error> = $ReadOnly<{|
  result: TResult | Promise<TResult> | null,
  error: TError | null,
  retry: (() => void) | null,
  abort: () => void,
|}>;

export default function useAsyncTask<TArgs: $ReadOnlyArray<any>, TResult>(
  asyncTaskFn: AsyncTaskFn<TArgs, TResult>,
): RunFn<TArgs> {
  const dispatchers = useDispatchers();

  const run = async (...taskFnArgs) => {
    const id = uuidv4();
    const deferred = createDeferred();
    const abortController = new AbortController();

    abortController.signal.onabort = () => {
      deferred.resolve(true);
    };

    deferred.promise.then(() => {
      dispatchers.deleteAsyncTask(id);
    });

    dispatchers.setAsyncTask(id, {
      result: null,
      error: null,
      retry: null,
      abort: () => abortController.abort(),
    });

    const runTaskFn = async () => {
      try {
        const resultPromise = asyncTaskFn(...taskFnArgs);
        dispatchers.updateAsyncTask(id, { result: resultPromise });
        const result = await resultPromise;
        dispatchers.updateAsyncTask(id, { result, error: null, retry: null });
        deferred.resolve(false);
      } catch (error) {
        console.error(error);
        dispatchers.updateAsyncTask(id, {
          result: null,
          error,
          retry: () => {
            runTaskFn();
          },
        });
      }
    };

    runTaskFn();

    return deferred.promise;
  };

  return run;
}
