import express from 'express';
import { errorHandler } from './middleware/error.js';
import cookieParser from 'cookie-parser';

const app = express();



app.use(cookieParser());
app.use(express.json());

// All routes Imports
import products from './routes/productRoute.js';
import user from './routes/userRoute.js'
import order from './routes/orderRoute.js'


app.use("/api", products);
app.use("/auth", user);
app.use("/auth/order", order);



// error middleware
app.use(errorHandler);

export default app; 