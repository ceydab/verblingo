// server.js
import express from 'express';
import cors from 'cors';
import { readVerbs } from './db.js';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// serve static frontend files (html, js, css)
const app = express();
// app.use(express.static(__dirname));
app.use(express.static('public'));


app.use(cors()); // allow requests from frontend
app.use(express.json());

app.post('/get-db', async (req, res) => {
  const { features, tenses } = req.body;
  console.log("helo")
  try {
    const data = await readVerbs(features, tenses);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database query failed' });
  }
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
