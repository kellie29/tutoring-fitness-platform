// @flow

// $FlowFixMe
import RelayRequestBatch from 'react-relay-network-modern/lib/RelayRequestBatch';
// $FlowFixMe
import { type Middleware } from 'react-relay-network-modern/lib/definition';
import { extractFiles } from 'extract-files';

export default function uploadMiddleware(): Middleware {
  return (next) => async (req) => {
    if (req instanceof RelayRequestBatch) {
      throw new Error('RelayRequestBatch is not supported');
    }

    const operations = {
      query: req.operation.text,
      variables: req.variables,
    };

    const { clone: extractedOperations, files } = extractFiles(operations);

    if (files.size) {
      const formData = new FormData();

      formData.append('operations', JSON.stringify(extractedOperations));

      const pathMap = {};
      let i = 0;
      files.forEach((paths) => {
        // eslint-disable-next-line no-plusplus
        pathMap[++i] = paths;
      });
      formData.append('map', JSON.stringify(pathMap));

      i = 0;
      files.forEach((paths, file) => {
        // eslint-disable-next-line no-plusplus
        formData.append(++i, file, file.name);
      });

      req.fetchOpts.method = 'POST';
      req.fetchOpts.body = formData;
    }

    const res = await next(req);

    return res;
  };
}
