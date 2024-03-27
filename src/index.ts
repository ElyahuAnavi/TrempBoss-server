// index.js
import express, { Request, Response } from 'express';
import cors from 'cors';
import { PORT } from './config/environment';
import { jsonErrorHandler } from './middleware/jsonErrorHandler';
import { startTrempCronJob } from './resources/tremps/TrempCronJob';
import allRoutes from './resources/mainRoutes';

const app = express();

app.use(cors());

app.use(express.json());

app.use(jsonErrorHandler);

startTrempCronJob();

app.get('/', async (req: Request, res: Response) => {
  res.send('server runinig');
});

app.use('/api,', allRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

