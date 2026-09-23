import { DIFFICULTY_CONFIG } from '../../data/constants.js'
import {
	countAvailableQuestions,
	getTopicsForCategory
} from '../../services/questionService.js'
import './TopicFilter.scss'

/**
 * Topic filter component
 * Displays available topics for a selected category and allows multiple selection
 * Shows a warning when insufficient questions are available for the selected difficulty
 *
 * @param {Object} props
 * @param {string} props.category - Selected category
 * @param {string[]} props.selectedTopics - Currently selected topics
 * @param {Function} props.onTopicsChange - Handler for topic selection changes
 * @param {string} props.difficulty - Selected difficulty (for question count check)
 */
export function TopicFilter({
	category,
	selectedTopics,
	onTopicsChange,
	difficulty
}) {
	const topics = getTopicsForCategory(category)
	const isAllSelected = selectedTopics.length === 0

	// How many questions the quiz will actually have: the difficulty's target
	// capped by how many questions of that difficulty (and topic) exist.
	const availableCount = difficulty
		? countAvailableQuestions(category, difficulty, selectedTopics)
		: 0
	const targetCount = DIFFICULTY_CONFIG[difficulty]?.questionCount ?? 0
	const quizLength = Math.min(availableCount, targetCount)
	const showCount = Boolean(difficulty) && availableCount > 0

	/**
	 * Handles toggling of individual topics
	 * @param {string} topic - Topic to toggle
	 */
	const handleTopicToggle = topic => {
		if (selectedTopics.includes(topic)) {
			onTopicsChange(selectedTopics.filter(t => t !== topic))
		} else {
			onTopicsChange([...selectedTopics, topic])
		}
	}

	/**
	 * Handles selecting all topics (clears specific selections)
	 */
	const handleSelectAll = () => {
		onTopicsChange([])
	}

	return (
		<div
			className="topic-filter"
			role="group"
			aria-labelledby="topic-filter-label"
		>
			<h3 id="topic-filter-label">Topics</h3>
			<div
				className="topic-filter__options"
				role="group"
				aria-label="Topic selection"
			>
				<button
					type="button"
					className={`topic-filter__option ${isAllSelected ? 'topic-filter__option--selected' : ''}`}
					onClick={handleSelectAll}
					aria-pressed={isAllSelected}
				>
					All Topics
				</button>
				{topics.map(topic => {
					const isSelected = selectedTopics.includes(topic)
					return (
						<button
							key={topic}
							type="button"
							className={`topic-filter__option ${isSelected ? 'topic-filter__option--selected' : ''}`}
							onClick={() => handleTopicToggle(topic)}
							aria-pressed={isSelected}
						>
							{topic}
						</button>
					)
				})}
			</div>
			{difficulty && availableCount === 0 && (
				<p className="topic-filter__warning" role="alert">
					No {difficulty} questions available for this selection. Try other
					topics or a different difficulty.
				</p>
			)}
			{showCount && (
				<p className="topic-filter__count">
					This quiz will have {quizLength}{' '}
					{quizLength === 1 ? 'question' : 'questions'}.
				</p>
			)}
		</div>
	)
}
