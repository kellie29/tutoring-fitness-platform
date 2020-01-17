/* eslint-disable no-restricted-syntax */
// @flow

const fs = require('fs');
const JSZip = require('jszip');
const glob = require('glob-promise');
const _ = require('lodash');

async function main() {
  const fileGlobs = [
    './build/**/*',
    './package.json',
    './yarn.lock',
    './.nvmrc',
    './scripts/downloadSchema.js',
    './config/env.js',
    './config/paths.js',
    './.env',
  ];

  const files = _.flatten(
    await Promise.all(
      fileGlobs.map((pattern) =>
        glob(pattern, {
          dot: true,
          nodir: true,
        }),
      ),
    ),
  );

  const zip = new JSZip();
  for (const file of files) {
    zip.file(file, fs.createReadStream(file));
  }

  zip.folder('./src');

  const zipWriteStream = zip
    .generateNodeStream({ streamFiles: true })
    .pipe(fs.createWriteStream('./ebArtifact.zip'));

  await new Promise((resolve, reject) => {
    zipWriteStream.once('error', reject);
    zipWriteStream.once('finish', resolve);
  });

  console.log('./ebArtifact.zip written.');
}

main();
