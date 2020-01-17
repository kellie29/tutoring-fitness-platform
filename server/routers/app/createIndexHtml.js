// @flow

import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

const indexHtmlPath = path.resolve(__dirname, './public/index.html');
const html = fs.readFileSync(indexHtmlPath);

type Config = {|
  title: string,
  url: string,
  image: string,
  description: string,
|};

export default function createIndexHtml(config: Config) {
  const { title, url, image, description } = config;

  const dom = new JSDOM(html);

  const { document } = dom.window;
  document.querySelector('meta[property="og:title"]').setAttribute('content', title);
  document.querySelector('meta[property="og:url"]').setAttribute('content', url);
  document.querySelector('meta[property="og:image"]').setAttribute('content', image);
  document.querySelector('meta[property="og:description"]').setAttribute('content', description);

  document.querySelector('meta[name="twitter:title"]').setAttribute('content', title);
  document.querySelector('meta[name="twitter:description"]').setAttribute('content', description);
  document.querySelector('meta[name="twitter:image"]').setAttribute('content', image);

  const newHtml = dom.serialize();

  return newHtml;
}
