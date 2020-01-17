// @flow

import invariant from 'invariant';

const publicUrlEnvVar = process.env.PUBLIC_URL;
invariant(typeof publicUrlEnvVar === 'string', 'Expected PUBLIC_URL to be a string');
export const publicUrl = publicUrlEnvVar;

const apiUrlEnvVar = process.env.REACT_APP_API_URL;
invariant(typeof apiUrlEnvVar === 'string', 'Expected REACT_APP_API_URL to be a string');
export const apiUrl = apiUrlEnvVar;
