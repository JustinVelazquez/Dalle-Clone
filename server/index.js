import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

// Connects to our DB
import connectDB from './mongodb/connect.js';

// imports our Routes
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

//Init Express and middleware
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
  res.send('Hello from server index');
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () =>
      console.log('Server has listening on port http://localhost:8080')
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
