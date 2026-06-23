
import {games} from "../../games.json"


// Select the section
const gameOptions = document.getElementById("gameoptions");
if (!gameOptions) {
  console.error('No #gameoptions element found');

}
console.log("hello")
// Add an event listener for clicks
gameOptions.addEventListener("click", (event) => {
  // Check if a button with class 'games' was clicked
  if (event.target.classList.contains("games")) {
    const clickedButton = event.target;
    games(clickedButton.id)
  }
});

