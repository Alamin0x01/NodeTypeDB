import cors from 'cors';
import express, { Application, Request, Response } from 'express';
const app: Application = express();
import { userRoutes } from './app/modules/user/user.route';

// parsers
app.use(express.json());
app.use(cors());

// routes
app.use('/api/users', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('NodeTypeDB app is running');
});

export default app;
