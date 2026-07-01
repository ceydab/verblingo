/**
 * Verb quiz DOM wiring — language-agnostic. Renders questions built by
 * quizLogic.js and handles click/next interactions. Language-specific
 * config (which mood keys exist) is passed in by the caller.
 */
import { pickQuestion } from './quizLogic.js';

const OPTION_COUNT = 3;

/**
 * Wires up and starts the quiz.
 * @param {Array<Object>} db - verb data
 * @param {string[]} moodKeys - language-specific mood keys, e.g.
 *   German: ["Indikativ", "Konjunktiv", "Imperativ"]
 */
export function initQuizUI(db, moodKeys) {
	const askEl = document.getElementById('ask');
	const nextEl = document.getElementById('next');
	const questionEl = document.getElementById('question');
	const definitionEl = document.getElementById('definition');
	const optionsEl = document.getElementById('options');
	const optionEls = Array.from(optionsEl.children); // options_0, options_1, options_2

	/** @type {number|null} index (within optionEls) of the correct answer */
	let correctIndex = null;

	init();

	function init() {
		// Listeners are attached once, not per-question, to avoid piling up
		// duplicate handlers (and duplicate grading) on every new question.
		optionsEl.addEventListener('mousedown', handleAnswerClick);
		nextEl.addEventListener('click', handleNextClick);

		prepareQuestion();
	}

	function handleNextClick() {
		resetOptionStyles();
		prepareQuestion();
	}

	function handleAnswerClick(event) {
		const clickedIndex = optionEls.indexOf(event.target);
		if (clickedIndex === -1 || correctIndex === null) return; // click wasn't on an option, or already answered

		const isCorrect = clickedIndex === correctIndex;
		event.target.style.backgroundColor = isCorrect ? '#70e000' : '#f52900';

		if (isCorrect) {
			nextEl.style.display = 'inline-block';
			correctIndex = null; // lock further answers until "next" is clicked
		} else {
			optionsEl.style.backgroundColor = 'initial';
		}
	}

	function resetOptionStyles() {
		optionEls.forEach((el) => (el.style.backgroundColor = ''));
	}

	function prepareQuestion() {
		askEl.style.display = 'block';
		nextEl.style.display = 'none';

		const { verb, meaning, mood, tense, pronoun, conjugation, decoys } =
			pickQuestion(db, moodKeys);

		questionEl.innerHTML =
			`${mood} ${tense}<br><br>` +
			`<span id="pronounverb">${pronoun} <span id="verb">${verb}</span></span>`;
		definitionEl.textContent = meaning;

		renderOptions(conjugation, decoys);
	}

	/** Renders the correct answer + decoys into the option elements in random order. */
	function renderOptions(conjugation, decoys) {
		const values = shuffleForDisplay([conjugation, ...decoys]);
		correctIndex = values.indexOf(conjugation);

		for (let i = 0; i < OPTION_COUNT; i++) {
			optionEls[i].textContent = values[i];
		}
	}

	function shuffleForDisplay(arr) {
		return [...arr].sort(() => 0.5 - Math.random());
	}
}