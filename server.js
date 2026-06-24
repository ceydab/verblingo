// server.js
import express from 'express';
import cors from 'cors';
import { readVerbs, readGames } from './db.js';
import fs from 'fs';
import 'dotenv/config'
const port = process.env.PORT

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


// // --- NEW API ROUTE ---
// app.get('/api/games/:gameid', (req, res) => {
//     let targetId = req.params.gameid;
//
//     // Map game2 to game1 data just like your old frontend logic
//     if (targetId === "game2") { targetId = "game1"; }
//
//     try {
//         // Read your JSON file from the server side
//         // Change this line inside app.get('/api/games/:gameid')
//         const rawData = fs.readFileSync(path.join(__dirname, 'public', 'data', 'games.json'), 'utf8');
//         const allgamecards = JSON.parse(rawData);
//
//         // Find the matching game data
//         const gameData = allgamecards.find(item => item.id === targetId);
//
//         if (!gameData) {
//             return res.status(404).json({ error: `Game ${targetId} not found` });
//         }
//
//         // Shuffle the items directly on the server backend!
//         let shuffled = [...gameData.items].sort(() => 0.5 - Math.random());
//
//         // Send back ONLY the randomized items array
//         res.json(shuffled);
//
//     } catch (error) {
//         console.error("Server Error:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

app.get('/api/games/:gameid', async (req, res) => {
    let targetId = req.params.gameid;
    if (targetId === "game2") { targetId = "game1"; }
    console.log(targetId)
    try {
        // Pull directly from your new MongoDB Atlas collection!
        const gameData = await readGames(targetId);

        if (!gameData) {
            return res.status(404).json({ error: `Game ${targetId} not found` });
        }

        let shuffled = [...gameData.items].sort(() => 0.5 - Math.random());
        res.json(shuffled);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Add this right before app.listen
app.use((err, req, res, next) => {
  console.error(`[Error Log] ${new Date().toISOString()}:`, err.stack);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Something went wrong on our end.',
    }
  });
});

app.listen(port, () => {
  console.log('Server running at http://localhost:3000');
});
