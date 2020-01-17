// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (err) => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');

const { getIntrospectionQuery } = require('graphql');
const fetch = require('node-fetch');
const https = require('https');
const prettier = require('prettier');
const path = require('path');
const fse = require('fs-extra');
const { URL } = require('whatwg-url');

const agent = new https.Agent({
  rejectUnauthorized: false,
});

const fetchQuery = async (url, operation, variables) => {
  const fetchHeaders = {
    Accept: 'application/json',
  };

  const fetchOptions = {
    // TODO: Always expect https
    agent: new URL(url).protocol === 'https:' ? agent : undefined,
    method: 'POST',
    headers: {
      ...fetchHeaders,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  };

  const response = await fetch(url, fetchOptions);

  return response.text();
};

async function main() {
  const introspectionQuery = getIntrospectionQuery();

  const apiUrl =
    process.env.REACT_APP_API_URL ||
    (process.env.NODE_ENV === 'production'
      ? 'https://api.obschart.com/'
      : 'https://api-development.obschart.com/');

  console.log(`Generating schema.json from "${apiUrl}"...`);
  const response = await fetchQuery(apiUrl, { text: introspectionQuery });

  const outPath = path.resolve(__dirname, '../schema.json');
  // $FlowFixMe
  const formattedResponse = prettier.format(response, {
    filepath: outPath,
    // $FlowFixMe
    ...prettier.resolveConfig.sync(outPath),
  });

  await fse.writeFile(outPath, formattedResponse);
}

main();
