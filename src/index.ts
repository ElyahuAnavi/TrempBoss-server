// index.js
import express, { Request, Response } from 'express';
import cors from 'cors';
import allRoutes from './resources/mainRoutes';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import hpp from 'hpp';
import { PORT } from './config/environment';
import { jsonErrorHandler } from './middleware/jsonErrorHandler';
import { startTrempCronJob } from './resources/tremps/TrempCronJob';

const app = express();

app.use(cors());

app.use(helmet());

const limiter = rateLimit({
  max: 100, // Limit each IP to 100 requests per windowMs
  windowMs: 60 * 60 * 1000, // 1 hour window
  message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);

app.use(express.json({ limit: '10kb' })); // Body parser, reading data from body into req.body with a limit of 10kb

app.use(mongoSanitize());

app.use(hpp({
  whitelist: ['duration', 'ratingsQuantity', 'ratingsAverage', 'maxGroupSize', 'difficulty', 'price']
}));

app.use(jsonErrorHandler);

startTrempCronJob();

app.get('/', async (req: Request, res: Response) => {
  res.send('server runinig');
});

app.use('/api,', allRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

