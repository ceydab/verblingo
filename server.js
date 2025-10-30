// server.js
import express from 'express';
import cors from 'cors';
import { readData } from './db.js';

const app = express();
app.use(cors()); // allow requests from frontend
app.use(express.json());

app.post('/get-db', async (req, res) => {
  const { features, tenses } = req.body;
  console.log("helo")
  try {
    const data = await readData(features, tenses);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database query failed' });
  }
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
