console.log("db.js began")
import mongoose from 'mongoose'
const uri = 'mongodb://localhost:27017/langweb'

async function connectDB() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to local MongoDB!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}

connectDB();

export function readVerbs(features, tenses) {

  const verbCollection = mongoose.connection.collection('verbs')
  const db = verbCollection.find({$or: features},{projection:tenses}).toArray(); // Fetch all documents
  return db
}
//
// export function readGames(gameid) {
//   const gameCollection = mongoose.connection.collection('games')
//   const db = gameCollection.find({gameid: true},).toArray(); // Fetch all documents
//   return db
// }
