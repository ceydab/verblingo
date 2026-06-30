import mongoose from 'mongoose'
import 'dotenv/config'
import logger from './logger.js'

const uri = process.env.MONGO_URI
if (!uri) {
  /* Checks if the environment variable exists*/
  logger.fatal('MONGO_URI is not defined. Check your .env file.')
  process.exit(1)
}
export async function connectDB() {
   /* Using mongoodse connect to mongodb*/
  try {
    await mongoose.connect(uri);
    logger.info('Connected to MongoDB')
  } catch (error) {
    logger.error({ err: error }, 'MongoDB connection error')
    throw error // let the caller (server entrypoint) decide whether to exit
  }
}


export async function readVerbs(features, tenses) {
 /* read the verbs collection
 * throws if not found */
  try {
  const verbCollection = mongoose.connection.collection('verbs');
  const db = await verbCollection.find({$or: features},{projection:tenses}).toArray(); // Fetch all documents
  return db
  } catch(error){
    logger.error({ err: error, features, tenses }, 'Failed to read verbs')
    throw error
  }
}

export async function readGames(gameid) {
   /* read the games collection, bring a single game
   * throws if not found*/
  try {
  const gameCollection = mongoose.connection.collection('games')
  const db = await gameCollection.findOne({id: gameid}); // Fetch all documents
  return db
  } catch (error){
    logger.error({ err: error, gameid }, 'Failed to read game')
    throw error
  }
}
