import express, { json } from 'express';
import dotenv from 'dotenv';
import { corsMiddleware } from './middlewares/cors.js';
import { PORT } from './config/port.config.js';
import { connectDB } from './config/db.config.js';

import { indexRoutes } from './routes/index.routes.js';
import { errorHandler, errorRoute } from './err/index.js';


const app = express();


dotenv.config();

app.use(json());
app.disable('x-powered-by')

connectDB();
app.use(corsMiddleware())

app.use("/api", indexRoutes);

app.use(errorHandler);
app.use(errorRoute)

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
})