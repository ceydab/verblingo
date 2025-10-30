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

const verbCollection = mongoose.connection.collection('verbs')
export function readData(features, tenses) {

  const db = verbCollection.find({$or: features},{projection:tenses}).toArray(); // Fetch all documents
  return db
}
