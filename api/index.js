// Global dependencies
import express from 'express';
import bodyParser from 'body-parser';

// Custom dependencies
// Routes
import mealRoutes from './routes/meal.routes';
import menuRoutes from './routes/menu.routes';

export const app = express();

const PORT = 3100;

app.use(bodyParser.json());

app.get('', (req, res) => res.send('Hello World!!'));

// Route handlers
app.use('/api/v1/meals', mealRoutes);
app.use('/api/v1/menu', menuRoutes);


export const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

// export default app;
