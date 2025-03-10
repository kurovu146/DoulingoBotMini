import express from 'express';
import userRoutes from './routers/user.routes.js';
import doulingoRoutes from './routers/doulingo.routes.js';

const app = express();
app.use(express.json());

// Định nghĩa route
app.use('/api/users', userRoutes);

// Định nghĩa route
app.use('/api/doulingo', doulingoRoutes);

export default app;
