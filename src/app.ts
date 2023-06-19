import express from 'express';
import productsMiddlewares from './middlewares/products.middlewares';
import productControllers from './controllers/products.controllers';
import ordersControllers from './controllers/orders.controllers';
import loginMiddlewares from './middlewares/login.middlewares';
import loginControllers from './controllers/login.controller';
import ordersMiddlewares from './middlewares/orders.middlewares';
import authMiddlewares from './middlewares/auth.middlewares';

const app = express();

app.use(express.json());

app.post(
  '/products',
  productsMiddlewares.validateName,
  productsMiddlewares.validatePrice,
  productControllers.createProducts,
);
app.get('/products', productControllers.allProducts);
app.get('/orders', ordersControllers.allOrders);
app.post('/login', loginMiddlewares.validateLogin, loginControllers.loginV);
app.post(
  '/orders',
  authMiddlewares.validateLogin,
  ordersMiddlewares.validateUserId,
  ordersMiddlewares.validateProductsIds,
  ordersControllers.newOrder,
);

export default app;