// Global dependencies
import express from 'express';
import bodyParser from 'body-parser';

// Custom dependencies
// Routes
import mealRoutes from './routes/meal.routes';
import menuRoutes from './routes/menu.routes';

const app = express();

const PORT = 3100;

app.use(bodyParser.json());

app.get('', (req, res) => res.send('ci with travis'));

// Route handlers
app.use('/api/v1/meals', mealRoutes);
app.use('/api/v1/menu', menuRoutes);


const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

module.exports = server;
