/*get game info and data
* send the gaming logic to the frontend*/

export async function games(gameid, shuffled) {
	try {
		const gameSection = document.getElementById(`play${gameid}`);
		const board = document.getElementById(`${gameid}board`);
		const gamesMenu = document.getElementById('whatGames');

		if (!gameSection || !board) {
			console.error(`Game elements not found for id "${gameid}"`);
			return;
		}

		showSection(gameSection, gamesMenu);

		// `shuffled` is consumed from the front as cards are dealt/revealed.
		// A pointer avoids repeated O(n) splice(0, 1) calls on a live array.
		let cursor = 0;
		const nextCard = () => shuffled[cursor++];

		const cardButtons = board.querySelectorAll('button');
		cardButtons.forEach((button) => {
			button.textContent = nextCard() ?? '';
		});

		board.onclick = (event) => {
			if (!event.target.classList.contains('options')) return;

			const index = Number(event.target.title);
			const targetCard = board.children[index];
			if (!targetCard) return;

			const card = nextCard();
			if (card === undefined) return; // pool exhausted, nothing left to deal

			targetCard.textContent = card;
		};

	} catch (error) {
		console.error('Error running game pipeline:', error);
	}
}

/** Shows `sectionToShow`, hides `sectionToHide` (if present). */
function showSection(sectionToShow, sectionToHide) {
	if (sectionToHide) sectionToHide.style.display = 'none';
	sectionToShow.style.display = 'block';
}