import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.get('', (req, res) => res.send('ci with travis'));


const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

module.exports = server;
