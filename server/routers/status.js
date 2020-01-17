// @flow

import express from 'express';

const router = new express.Router();

// $FlowFixMe
router.get('*', (req, res) => {
  res.json({
    status: 'fine',
  });
});

export default router;
