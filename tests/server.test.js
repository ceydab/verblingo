import request from 'supertest';
import mongoose from 'mongoose';
// Import your express app instance
import app from '../server.js';

describe('GET /api/games/:gameid', () => {

  // Connect to a test database before running tests
  beforeAll(async () => {
    // Highly recommended to use a separate test database URI here!
    const testMongoUri = process.env.MONGO_TEST_URI || 'mongodb://localhost:27017/test_db';
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(testMongoUri);
    }
  });

  // Clean up database connection after tests finish
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should return 200 and a shuffled array of items for a valid game', async () => {
    const res = await request(app).get('/api/games/game1');

    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should handle game2 routing to game1 seamlessly', async () => {
    const res = await request(app).get('/api/games/game2');

    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should return 404 if the game does not exist', async () => {
    const res = await request(app).get('/api/games/nonexistent-game');

    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty('error');
  });
});