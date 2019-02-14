import express from 'express';

const app = express();

const PORT = 3000;

app.get('', (req, res) => res.send('ci with travis'));

const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

module.exports = server;
