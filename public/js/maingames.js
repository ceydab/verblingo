/*Game creation logic implementation:
* get the user input
* connect to db and get the data
* send the data to quiz prod*/

import { games } from './games.js';


// Select the section
const gameOptions = document.getElementById("gameoptions");
if (!gameOptions) {
  console.error('No #gameoptions element found');

}
console.log("hello")
// Add an event listener for clicks
gameOptions.addEventListener("click", async(event) => {
  // Check if a button with class 'games' was clicked
  let gameid = "game1"
  if (event.target.classList.contains("games")) {
    const clickedButton = event.target;
    gameid = clickedButton.id
  }
  console.log(gameid)
  // 1. Fetch the already-randomized data array from your server API
  const response = await fetch(`/api/games/${gameid}`);
  console.log("games.js cont")
  if (!response.ok) throw new Error("Failed to fetch game data from API");

  // This 'shuffled' variable is now populated directly by your server
  let shuffled = await response.json();
  console.log(shuffled)
  games(gameid, shuffled)
});

