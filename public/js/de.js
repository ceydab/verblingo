/* Verb conjugation question logic implementation
* gets the data extracted based on the user input
* assigns the question elements and options randomly
* based on the answer, marks the question as correct or wrong
* lets the next button appear*/
export function quizTypeOne(db) {
	const MOOD_KEYS = ["Indikativ", "Konjunktiv", "Imperativ"];
	const OPTION_COUNT = 3;

	const askEl = document.getElementById("ask");
	const nextEl = document.getElementById("next");
	const questionEl = document.getElementById("question");
	const definitionEl = document.getElementById("definition");
	const optionsEl = document.getElementById("options");
	const optionEls = Array.from(optionsEl.children); // options_0, options_1, options_2

	/** @type {number|null} index (within optionEls) of the correct answer */
	let correctIndex = null;

	init();

	function init() {
		// Listeners are attached once, not per-question, to avoid piling up
		// duplicate handlers (and duplicate grading) on every new question.
		optionsEl.addEventListener("mousedown", handleAnswerClick);
		nextEl.addEventListener("click", handleNextClick);

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
		event.target.style.backgroundColor = isCorrect ? "#70e000" : "#f52900";

		if (isCorrect) {
			nextEl.style.display = "inline-block";
			correctIndex = null; // lock further answers until "next" is clicked
		} else {
			optionsEl.style.backgroundColor = "initial";
		}
	}

	function resetOptionStyles() {
		optionEls.forEach((el) => (el.style.backgroundColor = ""));
	}

	function prepareQuestion() {
		askEl.style.display = "block";
		nextEl.style.display = "none";

		const { verb, meaning, mood, tense, pronoun, conjugation, decoys } =
			pickQuestion(db);

		questionEl.innerHTML =
			`${mood} ${tense}<br><br>` +
			`<span id="pronounverb">${pronoun} <span id="verb">${verb}</span></span>`;
		definitionEl.textContent = meaning;

		renderOptions(conjugation, decoys);
	}

	/**
	 * Selects a random verb/mood/tense/pronoun, plus two distinct decoy
	 * conjugations drawn from other pronouns in the same tense.
	 */
	function pickQuestion(verbs) {
		const randomVerb = pickRandom(verbs);

		const moodKeys = MOOD_KEYS.filter((key) => randomVerb.hasOwnProperty(key));
		const mood = pickRandom(moodKeys);
		const moodObject = randomVerb[mood];

		const tense = pickRandom(Object.keys(moodObject));
		const tenseObject = moodObject[tense];

		const pronounKeys = Object.keys(tenseObject);
		const pronoun = pickRandom(pronounKeys);
		const conjugation = tenseObject[pronoun];

		const decoys = pickDecoys(tenseObject, pronounKeys, pronoun, conjugation);

		return {
			verb: randomVerb.verb,
			meaning: randomVerb.meaning,
			mood,
			tense,
			pronoun,
			conjugation,
			decoys,
		};
	}

	/**
	 * Picks two decoy conjugations (from other pronouns) that are distinct
	 * from each other and from the correct answer, avoiding duplicate
	 * options in the UI.
	 */
	function pickDecoys(tenseObject, pronounKeys, correctPronoun, correctConjugation) {
		const otherPronouns = pronounKeys.filter((k) => k !== correctPronoun);

		let decoyA, decoyB;
		do {
			const [pA, pB] = shuffle(otherPronouns);
			decoyA = tenseObject[pA];
			decoyB = tenseObject[pB];
		} while (
			decoyA === correctConjugation ||
			decoyB === correctConjugation ||
			decoyA === decoyB
		);

		return [decoyA, decoyB];
	}

	/** Renders the correct answer + decoys into the option elements in random order. */
	function renderOptions(conjugation, decoys) {
		const values = shuffle([conjugation, ...decoys]);
		correctIndex = values.indexOf(conjugation);

		for (let i = 0; i < OPTION_COUNT; i++) {
			optionEls[i].textContent = values[i];
		}
	}

	function pickRandom(arr) {
		return arr[Math.floor(Math.random() * arr.length)];
	}

	function shuffle(arr) {
		return [...arr].sort(() => 0.5 - Math.random());
	}
}