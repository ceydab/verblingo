/**
 * Pure verb-quiz selection logic — no DOM, no language-specific data.
 *
 * Works with any verb object shaped as:
 *   { verb, meaning, [moodKey]: { [tense]: { [pronoun]: conjugation } }, ... }
 * where `moodKey` is one of the mood keys passed in by the caller (e.g.
 * German: "Indikativ"/"Konjunktiv"/"Imperativ"; Spanish:
 * "Indicativo"/"Subjuntivo"/"Imperativo").
 */

/** Returns a random element of `arr`. */
export function pickRandom(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

/** Returns a shuffled copy of `arr`; does not mutate the input. */
export function shuffle(arr) {
	return [...arr].sort(() => 0.5 - Math.random());
}

/**
 * Picks two decoy conjugations (from other pronouns in the same tense)
 * that are distinct from each other and from the correct answer, so the
 * rendered options never contain a duplicate.
 *
 * @throws {Error} if there aren't at least two other pronouns to draw
 *   decoys from, or if no valid decoy pair can be constructed.
 */
export function pickDecoys(tenseObject, pronounKeys, correctPronoun, correctConjugation) {
	const otherPronouns = pronounKeys.filter((k) => k !== correctPronoun);

	if (otherPronouns.length < 2) {
		throw new Error(
			`pickDecoys: need at least 2 other pronouns to build decoys, got ${otherPronouns.length}`
		);
	}

	const distinctValues = new Set(otherPronouns.map((p) => tenseObject[p]));
	distinctValues.delete(correctConjugation);
	if (distinctValues.size < 2) {
		throw new Error('pickDecoys: not enough distinct conjugations to build two decoys');
	}

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

/**
 * Selects a random verb/mood/tense/pronoun from `verbs`, plus two decoy
 * conjugations, using only the mood keys the caller says are valid for
 * this language.
 *
 * @param {Array<Object>} verbs
 * @param {string[]} moodKeys - e.g. ["Indikativ", "Konjunktiv", "Imperativ"]
 * @throws {Error} if the selected verb has none of the given mood keys.
 */
export function pickQuestion(verbs, moodKeys) {
	const randomVerb = pickRandom(verbs);

	const availableMoodKeys = moodKeys.filter((key) => randomVerb.hasOwnProperty(key));
	if (availableMoodKeys.length === 0) {
		throw new Error(`pickQuestion: verb "${randomVerb.verb}" has none of the given mood keys`);
	}
	const mood = pickRandom(availableMoodKeys);
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