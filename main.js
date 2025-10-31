console.log("main.js began")
import { prepareVerbs } from './userinput.js';
//node server.js before we start
import {quizTypeOne} from "./de.js";

const btn = document.getElementById("start")
btn.addEventListener('click', async () => {
  // 1. Get current user input
  const { features, tenses } = prepareVerbs();

  // 2. Process it in db.js
  const response = await fetch('http://localhost:3000/get-db', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ features, tenses })
  });

  const db = await response.json();
  console.log('DB data from MongoDB:', db);

  // 3. Use the result
  quizTypeOne(db)

  // Example: show on page
  // document.body.insertAdjacentHTML('beforeend', `<p>${db.message}</p>`);
});
