// @flow

import express from 'express';
import path from 'path';

import statusRouter from './routers/status';
import appRouter from './routers/app';

const app = express();

app.set('strict routing', true);
app.set('x-powered-by', false);

app.use(express.static(path.resolve(__dirname, './public')));
app.use('/_status', statusRouter);
app.use(appRouter);

const indexHtmlPath = path.resolve(__dirname, './public/index.html');

app.use((req, res) => {
  res.sendFile(indexHtmlPath);
});

export default app;
