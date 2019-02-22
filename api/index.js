// Global dependencies
import express from 'express';
import bodyParser from 'body-parser';

// Custom dependencies
// Routes
import mealRoutes from './routes/meal.routes';
import menuRoutes from './routes/menu.routes';
import orderRoutes from './routes/order.routes';

export const app = express();

const PORT = process.env.PORT || 3100;

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Route handlers
app.use('/api/v1/meals', mealRoutes);
app.use('/api/v1/menu', menuRoutes);
app.use('/api/v1/orders', orderRoutes);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to Book a Meal API',
}));


export const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

// export default app;
