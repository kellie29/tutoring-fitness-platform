// @flow

import invariant from 'invariant';

export type Deferred<TResult, TError: Error = any> = $ReadOnly<{|
  promise: Promise<TResult>,
  resolve: (result: Promise<TResult> | TResult) => void,
  reject: (error: TError) => void,
|}>;

export default function createDeferred<TResult>(): Deferred<TResult> {
  let resolve;
  let reject;
  const promise = new Promise<TResult>((innerResolve, innerReject) => {
    resolve = innerResolve;
    reject = innerReject;
  });

  invariant(resolve, 'Expected "resolve"');
  invariant(reject, 'Expected "reject"');

  return { promise, resolve, reject };
}
