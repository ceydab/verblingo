/* German verb conjugation quiz.
 * All selection logic lives in quizLogic.js and all DOM wiring lives in
 * quizUI.js — this file only supplies the German-specific mood keys.
 * Adding another language (e.g. Spanish) means adding a similarly small
 * file, not duplicating this one. */
import { initQuizUI } from './quizUI.js';

const DE_MOOD_KEYS = ['Indikativ', 'Konjunktiv', 'Imperativ'];

export function quizTypeOne(db) {
	initQuizUI(db, DE_MOOD_KEYS);
}
