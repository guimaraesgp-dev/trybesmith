import express from 'express';
import orderRouter from './routes/order.routes';
import productsRouter from './routes/products.routes';

const app = express();

app.use(express.json());
app.use(productsRouter);
app.use(orderRouter);

export default app;
