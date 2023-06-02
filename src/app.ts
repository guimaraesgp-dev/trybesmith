import express from 'express';
import orderRouter from './routes/order.routes';
import productsRouter from './routes/products.routes';
import loginController from './controller/login.controller';

const app = express();

app.use(express.json());
app.use(productsRouter);
app.use(orderRouter);
app.post('/login', loginController.login);

export default app;
