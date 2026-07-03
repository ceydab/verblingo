/*Test the conjugation quiz algorithm*/
import { describe, it, expect } from '@jest/globals';
import { pickRandom, shuffle, pickDecoys, pickQuestion } from '../public/js/quizLogic.js';

describe('pickRandom', () => {
	it('returns an element that is actually in the array', () => {
		const arr = ['a', 'b', 'c'];
		for (let i = 0; i < 20; i++) {
			expect(arr).toContain(pickRandom(arr));
		}
	});

	it('returns the only element when the array has length 1', () => {
		expect(pickRandom(['solo'])).toBe('solo');
	});
});

describe('shuffle', () => {
	it('does not mutate the original array', () => {
		const original = [1, 2, 3, 4, 5];
		const copy = [...original];
		shuffle(original);
		expect(original).toEqual(copy);
	});

	it('returns an array with the same elements', () => {
		const original = [1, 2, 3, 4, 5];
		const result = shuffle(original);
		expect(result.sort()).toEqual(original.sort());
	});
});

describe('pickDecoys', () => {
	const tenseObject = {
		ich: 'gehe',
		du: 'gehst',
		er: 'geht',
		wir: 'gehen',
		ihr: 'geht2', // deliberately distinct from "er" for this fixture
	};
	const pronounKeys = Object.keys(tenseObject);

	it('never returns the correct conjugation as a decoy', () => {
		for (let i = 0; i < 50; i++) {
			const [decoyA, decoyB] = pickDecoys(tenseObject, pronounKeys, 'ich', 'gehe');
			expect(decoyA).not.toBe('gehe');
			expect(decoyB).not.toBe('gehe');
		}
	});

	it('never returns two identical decoys', () => {
		for (let i = 0; i < 50; i++) {
			const [decoyA, decoyB] = pickDecoys(tenseObject, pronounKeys, 'ich', 'gehe');
			expect(decoyA).not.toBe(decoyB);
		}
	});

	it('only draws decoys from conjugations that exist in tenseObject', () => {
		const validValues = Object.values(tenseObject);
		const [decoyA, decoyB] = pickDecoys(tenseObject, pronounKeys, 'ich', 'gehe');
		expect(validValues).toContain(decoyA);
		expect(validValues).toContain(decoyB);
	});

	it('throws if there are fewer than 2 other pronouns to draw from', () => {
		const smallTenseObject = { ich: 'gehe', du: 'gehst' };
		expect(() =>
			pickDecoys(smallTenseObject, Object.keys(smallTenseObject), 'ich', 'gehe')
		).toThrow();
	});

	it('throws instead of looping forever when fewer than 2 distinct decoy values exist', () => {
		// All other pronouns share the same conjugated form as each other —
		// no valid pair of distinct decoys can ever be built.
		const degenerateTenseObject = { ich: 'gehe', du: 'X', er: 'X', wir: 'X' };
		expect(() =>
			pickDecoys(degenerateTenseObject, Object.keys(degenerateTenseObject), 'ich', 'gehe')
		).toThrow();
	});
});

describe('pickQuestion', () => {
	const moodKeys = ['Indikativ', 'Konjunktiv', 'Imperativ'];

	const verbs = [
		{
			verb: 'gehen',
			meaning: 'to go',
			Indikativ: {
				Präsens: { ich: 'gehe', du: 'gehst', er: 'geht', wir: 'gehen', ihr: 'geht2' },
			},
			Konjunktiv: {
				'Konjunktiv I': { ich: 'gehe', du: 'gehest', er: 'gehe2', wir: 'gehen2', ihr: 'gehet' },
			},
		},
		{
			// A verb that only has one of the mood keys — checks that
			// pickQuestion respects hasOwnProperty rather than assuming
			// every mood exists on every verb.
			verb: 'sein',
			meaning: 'to be',
			Imperativ: {
				Präsens: { du: 'sei', ihr: 'seid', Sie: 'seien Sie' },
			},
		},
	];

	it('only selects mood keys that exist on the chosen verb', () => {
		const singleMoodVerbs = [verbs[1]]; // only has Imperativ
		for (let i = 0; i < 20; i++) {
			const result = pickQuestion(singleMoodVerbs, moodKeys);
			expect(result.mood).toBe('Imperativ');
		}
	});

	it('returns a conjugation and two decoys that are all distinct', () => {
		const result = pickQuestion(verbs, moodKeys);
		const [decoyA, decoyB] = result.decoys;
		expect(decoyA).not.toBe(result.conjugation);
		expect(decoyB).not.toBe(result.conjugation);
		expect(decoyA).not.toBe(decoyB);
	});

	it('returns verb metadata matching the selected verb', () => {
		const singleVerbList = [verbs[0]];
		const result = pickQuestion(singleVerbList, moodKeys);
		expect(result.verb).toBe('gehen');
		expect(result.meaning).toBe('to go');
	});

	it('throws if the selected verb has none of the given mood keys', () => {
		const noMatchingMoodVerb = [{ verb: 'x', meaning: 'y', SomeOtherMood: {} }];
		expect(() => pickQuestion(noMatchingMoodVerb, moodKeys)).toThrow();
	});
});