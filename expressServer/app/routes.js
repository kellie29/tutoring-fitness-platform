const cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: 'dlqzwgofi',
  api_key: '728221487777187',
  api_secret: 'YbNtvLvoSgKvc5whZIYUXpQd9PM',
});
module.exports = function(app) {
  app.post('/uploadimage', async (req, res, next) => {
    try {
      const result = await cloudinary.v2.uploader.upload(req.body.data);
      res.send(result.url);
    } catch (err) {
      res.sendStatus(404);
    }
  });
  app.get('*', function(req, res) {
    res.sendFile(`${__dirname}/public/index.html`);
  });
};
