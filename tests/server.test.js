/*Test the API connection*/
import { describe, it, beforeAll, afterAll, expect } from '@jest/globals';
import request from 'supertest';
import mongoose from 'mongoose';
// Import your express app instance
import app from '../src/server.js';

describe('GET /api/games/:gameid', () => {
  const FIXTURE_MARKER = '__test_fixture__'; // tags our docs so cleanup only touches these

  const fixtureGame = {
    id: 'game1',
    items: ['testItemA', 'testItemB', 'testItemC'],
    _fixtureTag: FIXTURE_MARKER,
  };
  // Connect to a test database before running tests
  beforeAll(async () => {
    // Highly recommended to use a separate test database URI here!
    const testMongoUri = process.env.MONGO_TEST_URI || 'mongodb://localhost:27017/test_db';
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(testMongoUri);
    }
    await mongoose.connection.collection('games').insertOne(fixtureGame);
  });

  // Clean up database connection after tests finish
  afterAll(async () => {
    await mongoose.connection.collection('games').deleteMany({ _fixtureTag: FIXTURE_MARKER });
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
describe('POST /get-db', () => {
  const FIXTURE_MARKER = '__test_fixture__'; // tags our docs so cleanup only touches these

  const fixtureVerbs = [
    {
      verb: 'testenX', // unlikely to collide with real seeded verbs
      meaning: 'to test (fixture)',
      regular: true,
      root_change: false,
      separable: false,
      reflexive: false,
      Indikativ: { Präsens: { ich: 'testeX', du: 'testestX' } },
      _fixtureTag: FIXTURE_MARKER,
    },
  ];

  beforeAll(async () => {
    const testMongoUri = process.env.MONGO_TEST_URI || 'mongodb://localhost:27017/test_db';
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(testMongoUri);
    }
    await mongoose.connection.collection('verbs').insertMany(fixtureVerbs);
  });

  afterAll(async () => {
    await mongoose.connection.collection('verbs').deleteMany({ _fixtureTag: FIXTURE_MARKER });
    await mongoose.connection.close();
  });

  it('should return 200 and include the seeded verb for a matching features payload', async () => {
    const res = await request(app)
      .post('/get-db')
      .send({
        features: [{ regular: true }],
        tenses: { verb: 1, meaning: 1, Indikativ: { Präsens: 1 } },
      });

    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.some((v) => v.verb === 'testenX')).toBe(true);
  });


  it('should return 400 if features is missing', async () => {
    const res = await request(app)
      .post('/get-db')
      .send({ tenses: { verb: 1 } });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
  });

  it('should return 400 if tenses is missing', async () => {
    const res = await request(app)
      .post('/get-db')
      .send({ features: [{ regular: true }] });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
  });

  it('should return 400 if features is not an array', async () => {
    const res = await request(app)
      .post('/get-db')
      .send({ features: 'not-an-array', tenses: { verb: 1 } });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
  });

  it('should not include the fixture verb when queried with a non-matching feature', async () => {
    // We can't assert the *overall* result is empty — the real collection may
    // have other documents matching `root_change: true`. We only control (and
    // can only make guarantees about) our own fixture, so we assert on that.
    const res = await request(app)
      .post('/get-db')
      .send({
        features: [{ root_change: true }], // fixture has root_change: false
        tenses: { verb: 1, meaning: 1 },
      });

    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.some((v) => v.verb === 'testenX')).toBe(false);
  });
});