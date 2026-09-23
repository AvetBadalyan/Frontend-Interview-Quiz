/**
 * Question service — selects, filters, and counts quiz questions
 * by category, difficulty, and topic.
 */

import { getQuestionsByCategory } from '../data/questions/index.js'
import { shuffle } from '../utils/shuffle.js'

/**
 * Builds the pool of questions for a category, filtered strictly by
 * difficulty and (optionally) by topic. Only questions of the requested
 * difficulty are ever included — there is no cross-difficulty backfill, so
 * an "easy" quiz contains easy questions only.
 *
 * @param {string} category - 'html' | 'css' | 'javascript' | 'react' | 'jstricky'
 * @param {'easy' | 'medium' | 'hard'} difficulty - Required difficulty
 * @param {string[]} topics - Topic filters (empty array = all topics)
 * @returns {Object[]}
 */
function getPool(category, difficulty, topics) {
	let pool = getQuestionsByCategory(category).filter(
		q => q.difficulty === difficulty
	)

	if (topics && topics.length > 0) {
		pool = pool.filter(q => q.topic && topics.includes(q.topic))
	}

	return pool
}

/**
 * Selects a shuffled set of questions for a quiz session.
 *
 * Strictly limited to the chosen difficulty. Returns up to `count` questions;
 * if fewer are available, it returns all of them (never pads with questions
 * from another difficulty).
 *
 * @param {string} category
 * @param {'easy' | 'medium' | 'hard'} difficulty
 * @param {string[]} topics - Topic filters (empty array = all topics)
 * @param {number} count - Maximum number of questions to select
 * @returns {Object[]} Selected, shuffled questions
 */
export function selectQuestions(category, difficulty, topics, count) {
	const pool = getPool(category, difficulty, topics)
	return shuffle(pool).slice(0, count)
}

/**
 * Gets available topics for a category by examining the question bank.
 *
 * @param {string} category
 * @returns {string[]} Unique topic tags found in the category's questions
 */
export function getTopicsForCategory(category) {
	const questions = getQuestionsByCategory(category)
	const topics = new Set(questions.map(q => q.topic).filter(Boolean))
	return Array.from(topics)
}

/**
 * Counts questions available for a given category, difficulty, and topics.
 * Difficulty-aware, so it reflects exactly how many questions a quiz with
 * these settings would draw from.
 *
 * @param {string} category
 * @param {'easy' | 'medium' | 'hard'} difficulty
 * @param {string[]} topics - Topic filters (empty array = all topics)
 * @returns {number}
 */
export function countAvailableQuestions(category, difficulty, topics) {
	return getPool(category, difficulty, topics).length
}
