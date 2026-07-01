/*Final verb conjugation logic implementation:
* get the user input
* connect to db and get the data
* send the data to quiz prod*/
import { prepareVerbs } from '../js/userinput.js';
import {quizTypeOne} from "../js/de.js";

// const DB_ENDPOINT = '/get-db';
const DB_ENDPOINT = window.__APP_CONFIG__.dbEndpoint;
const startBtn = document.getElementById('start');
startBtn.addEventListener('click', handleStart);

async function handleStart() {
	const { features, tenses } = prepareVerbs();

	setLoading(true);
	try {
		const db = await fetchVerbDb(features, tenses);
		quizTypeOne(db);
	} catch (error) {
		console.error('Failed to load quiz data:', error);
		showError('Could not load the quiz. Please try again.');
	} finally {
		setLoading(false);
	}
}

/**
 * Fetches verb data matching the given features/tenses.
 * @throws {Error} if the request fails or the server returns an error status.
 */
async function fetchVerbDb(features, tenses) {
	const response = await fetch(DB_ENDPOINT, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ features, tenses }),
	});

	if (!response.ok) {
		throw new Error(`Server responded with ${response.status}`);
	}

	return response.json();
}

function setLoading(isLoading) {
	startBtn.disabled = isLoading;
	startBtn.textContent = isLoading ? 'Loading…' : 'Start';
}

function showError(message) {
	// Swap this out for a nicer UI element if one exists on the page.
	alert(message);
}