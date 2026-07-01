# Verblingo (WebApp)
This is a web app project focused on German language practice.

The app is composed of the following functionalities:

1. Conjugations: The user can practice verb conjugations. The user chooses the options from the list, such as what tenses to practice, what type of verbs (regular-irregular etc.) to practice. Then, the user is presented with a conjugation quiz.

    1.1 Programming: The database is generated manually and uploaded to mongodb. Algorithm: Query specific verbs from MongoDB instantly based on selected grammatical features and tenses.


2. Speaking Games: The users can find games to play in order to practice their speaking skills. The user is presented with several games. For each game, there is a short explanation as to how to play and the items that the users need to speak about.

    2.1 Programming: Interactive client-side games populated on-demand via a backend randomization API.

## Architecture Overview

The project is structured as an Express monolith following industry best practices for separation of concerns:

```text
verblingo/
├── data-prep/                      # Isolated data scripts and data files (Jupyter notebooks)
├── public/                         # Static frontend sandbox served to the browser
│   ├── assets/                     # Media and image files
│   ├── css/                        # Page-specific stylesheets
│   ├── js/                         # Frontend behavior and API consumption scripts
│   │   ├── quizLogic.js            # Pure, language-agnostic quiz selection logic
│   │   ├── quizUI.js               # DOM wiring for the quiz, shared across languages
│   │   ├── de.js                   # German-specific config (mood keys) over quizUI
│   │   ├── games.js                # Speaking games DOM wiring
│   │   ├── maingames.js            # Games menu bootstrap
│   │   ├── main.js                 # Quiz bootstrap
│   │   └── userinput.js 
│   └── *.html                      # Main application pages
├── src/  
│   ├── config/db.js                # Centralized MongoDB connection logic via Mongoose
│   ├── middleware/validate.js      # MongoDB data validation based on schemas
│   ├── schemas/                    # Expected data schemas in JSON
│   ├── utils/logger.js
│   ├── server.js                   # Express Server routing and API endpoints        
├── tests/                                          
├── package.json                    
└── README.md                       
```

## Tech Stack
- Frontend: Vanilla JavaScript (ES Modules), HTML5, CSS3

- Backend: Node.js, Express.js

- Database: MongoDB, Mongoose ORM

- Validation: Zod

- Logging: structured server-side logging (see src/utils/logger.js)

- Testing: Jest, @playwright/test, Supertest


## Setup and Requirements
Node.js v22.x
1. Clone the repository
```
git clone https://github.com/ceydab/verblingo.git
cd verblingo
```

2. Install dependencies
``` 
npm install 
```

3. Configure environment variables with a .env file in the root
```
MONGO_URI=
PORT = 
```

4. Start the server
```
npm start
```

## API Connection

Endpoint POST /get-db: 
Queries the MongoDB database for verbs matching specific configurations.

Endpoint: GET /api/games/:gameid:
Description: Extracts data points for the specified game ID, shuffles the array securely on the server, and delivers a randomized subset to the UI.
## Testing
This project has three layers of test coverage, all under tests/:

Unit tests (Jest) — pure logic in isolation, e.g. verb/decoy selection in quizLogic.js.

Integration tests (Jest + Supertest) — API endpoints (/get-db, /api/games/:gameid), including validation and status codes.

End-to-end tests (Playwright) — full browser flows for both the conjugation quiz and the speaking games.

Run unit and integration tests:
```
npm test
```
Run end-to-end tests after starting the server:
```
npx playwright test
```
Run all tests after starting the server:
```
npm run test:all
```