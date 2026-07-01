/*Game creation logic implementation:
* get the user input
* connect to db and get the data
* send the data to quiz prod*/

import { games } from './games.js';

const DEFAULT_GAME_ID = 'game1'
// Select the section
const gameOptions = document.getElementById("gameoptions");
if (!gameOptions) {
  console.error('No #gameoptions element found');
} else {
	gameOptions.addEventListener('click', handleGameOptionClick);
}

async function handleGameOptionClick(event) {
  const clickedButton = event.target.closest('.games')
  const gameId = clickedButton ? clickedButton.id : DEFAULT_GAME_ID;
  try {
    const shuffled = await fetchGameData(gameId)
    games(gameId, shuffled)
  } catch (error) {
    console.error('Failed to start game:', error);
  }
}

async function fetchGameData(gameId) {
	const response = await fetch(`/api/games/${gameId}`);
	if (!response.ok) {
		throw new Error(`Failed to fetch game data (status ${response.status})`);
	}
	return response.json();
}