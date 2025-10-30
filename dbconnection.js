console.log("hello")


const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/langweb'

async function connectDB() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to local MongoDB!");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
}

connectDB();


const verbCollection = mongoose.connection.collection('verbs');

async function readData() {
  const docs = await verbCollection.find({}).toArray(); // Fetch all documents
  console.log("📄 Found documents:", docs);
}

setTimeout(readData, 1000);