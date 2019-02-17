// Global dependencies
import express from 'express';
import bodyParser from 'body-parser';

// Custom dependencies
// Routes
import mealRoutes from './routes/meal.routes';
import menuRoutes from './routes/menu.routes';
import orderRoutes from './routes/order.routes';

export const app = express();

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

app.get('', (req, res) => res.send('Hello World!!'));

// Route handlers
app.use('/api/v1/meals', mealRoutes);
app.use('/api/v1/menu', menuRoutes);
app.use('/api/v1/orders', orderRoutes);


export const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

// export default app;
