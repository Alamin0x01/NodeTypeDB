import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { userRoutes } from './modules/user/user.route';

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'NodeTypeDB API is running!',
  });
});

export default app;
