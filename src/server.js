/*Set the api connection*/
import express from 'express';
import cors from 'cors';
import {connectDB, readVerbs, readGames } from './config/db.js';
import 'dotenv/config'
import logger from './utils/logger.js'

import { validate } from './middleware/validate.js'
import { getDbBodySchema } from './schemas/verb_schema.js'
import { gameIdParamSchema } from './schemas/game_schema.js'

const PORT = process.env.PORT
if (!PORT) {
    /* Make sure port exists in env*/
  logger.fatal('PORT is not defined. Check your .env file.')
  process.exit(1)
}

await connectDB()

// serve static frontend files (html, js, css)
const app = express();

app.use(express.static('public'));
app.use(cors()); // allow requests from frontend
app.use(express.json());

/* Wraps an async route handler so thrown errors are forwarded to next(err)
 instead of needing try/catch repeated in every route.*/
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next)


app.post('/get-db',
    validate(getDbBodySchema, 'body'),
    async (req, res) => {

    const { features, tenses } = req.body;
    const data = await readVerbs(features, tenses);
    res.json(data);
});

app.get('/api/games/:gameid',
    validate(gameIdParamSchema, 'params'),
    async (req, res) => {

    let targetId = req.params.gameid;
    if (targetId === "game2") { targetId = "game1"; } //game1 and game2 use the same data

    try {
        // Pull directly from your new MongoDB Atlas collection!
        const gameData = await readGames(targetId);

        if (!gameData) {
            return res.status(404).json({ error: `Game ${targetId} not found` });
        }

        const shuffled = [...gameData.items].sort(() => 0.5 - Math.random());
        res.json(shuffled);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});


/* Centralized error handler — catches anything forwarded via next(err),
 including errors from asyncHandler and Express's own body-parser errors
 (e.g. malformed JSON). */
app.use((err, req, res, next) => {
  logger.error({ err, path: req.path, method: req.method }, 'Unhandled request error')
  res.status(err.status || 500).json({
    error: {
      message: err.status ? err.message : 'Something went wrong on our end.',
    },
  })
})

export default app;

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        logger.info(`Server running at http://localhost:${PORT}`);
    });
}