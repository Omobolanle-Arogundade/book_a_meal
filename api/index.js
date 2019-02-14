// Global dependencies
import express from 'express';
import bodyParser from 'body-parser';

// Custom dependencies
// Routes
import mealRoutes from './routes/meal.routes';

const app = express();

const PORT = 3100;

app.use(bodyParser.json());

app.get('', (req, res) => res.send('ci with travis'));

// Route handler
app.use('/api/v1/meals', mealRoutes);


const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

module.exports = server;
