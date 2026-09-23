/**
 * CSS Question Bank
 *
 * Topics: selectors, flexbox, grid, animations
 * First answer in each answers array is always the correct one (before shuffling).
 */

export default [
	// ==================== EASY ====================
	{
		id: 'css-001',
		text: 'Which pseudo-class targets an element while the user hovers over it?',
		answers: [':hover', ':active', ':focus', ':visited'],
		difficulty: 'easy',
		category: 'css',
		topic: 'selectors'
	},
	{
		id: 'css-002',
		text: 'Which selector targets all elements with a "data-type" attribute?',
		answers: ['[data-type]', '.data-type', '#data-type', '*data-type'],
		difficulty: 'easy',
		category: 'css',
		topic: 'selectors'
	},
	{
		id: 'css-003',
		text: 'Which symbol selects an element by its id?',
		answers: ['#', '.', '*', '@'],
		difficulty: 'easy',
		category: 'css',
		topic: 'selectors'
	},
	{
		id: 'css-004',
		text: 'Which property creates a flex container?',
		answers: [
			'display: flex',
			'flex: container',
			'flex-type: flex',
			'container: flex'
		],
		difficulty: 'easy',
		category: 'css',
		topic: 'flexbox'
	},
	{
		id: 'css-005',
		text: 'Which property controls the direction of items in a flex container?',
		answers: ['flex-direction', 'flex-flow', 'flex-order', 'flex-align'],
		difficulty: 'easy',
		category: 'css',
		topic: 'flexbox'
	},
	{
		id: 'css-006',
		text: 'Which property creates a grid container?',
		answers: [
			'display: grid',
			'grid: container',
			'display: grid-container',
			'grid-type: grid'
		],
		difficulty: 'easy',
		category: 'css',
		topic: 'grid'
	},
	{
		id: 'css-007',
		text: 'Which property defines the space between grid items?',
		answers: ['gap', 'grid-spacing', 'grid-margin', 'grid-gap-size'],
		difficulty: 'easy',
		category: 'css',
		topic: 'grid'
	},
	{
		id: 'css-008',
		text: 'Which at-rule defines the steps of a CSS animation?',
		answers: ['@keyframes', '@animation', '@transition', '@animate'],
		difficulty: 'easy',
		category: 'css',
		topic: 'animations'
	},
	{
		id: 'css-009',
		text: 'Which property defines the name of a CSS animation?',
		answers: [
			'animation-name',
			'animation-title',
			'animation-id',
			'keyframe-name'
		],
		difficulty: 'easy',
		category: 'css',
		topic: 'animations'
	},
	{
		id: 'css-010',
		text: 'What does the CSS "transition" property do?',
		answers: [
			'Smoothly animates changes to property values over a set duration.',
			'Moves an element from one position to another instantly.',
			"Transforms an element's shape and size.",
			'Translates text into other languages.'
		],
		difficulty: 'easy',
		category: 'css',
		topic: 'animations'
	},
	{
		id: 'css-011',
		text: 'Which value of animation-iteration-count repeats an animation forever?',
		answers: ['infinite', 'forever', 'loop', 'continuous'],
		difficulty: 'easy',
		category: 'css',
		topic: 'animations'
	},
	{
		id: 'css-012',
		text: 'Which selector targets every <p> element on the page?',
		answers: ['p', '.p', '#p', '*p'],
		difficulty: 'easy',
		category: 'css',
		topic: 'selectors'
	},

	// ==================== MEDIUM ====================
	{
		id: 'css-013',
		text: 'What does the selector "div > p" match?',
		answers: [
			'All <p> elements that are direct children of a <div>.',
			'All <p> elements inside a <div> at any depth.',
			'All <div> elements followed by <p> elements.',
			'All <div> and <p> elements on the page.'
		],
		difficulty: 'medium',
		category: 'css',
		topic: 'selectors'
	},
	{
		id: 'css-014',
		text: 'What does the selector "p + span" match?',
		answers: [
			'The first <span> immediately following a <p> (adjacent sibling).',
			'All <span> elements inside a <p>.',
			'All <span> siblings of a <p>.',
			'All <span> elements after any <p>.'
		],
		difficulty: 'medium',
		category: 'css',
		topic: 'selectors'
	},
	{
		id: 'css-015',
		text: 'What does "justify-content: space-between" do in a row flex container?',
		answers: [
			'Spreads items evenly with the first at the start and the last at the end.',
			'Centers all items.',
			'Adds equal space around every item.',
			'Aligns items to the start.'
		],
		difficulty: 'medium',
		category: 'css',
		topic: 'flexbox'
	},
	{
		id: 'css-016',
		text: 'With default flex-direction, what does "align-items: center" do?',
		answers: [
			'Centers items on the cross (vertical) axis.',
			'Centers items on the main (horizontal) axis.',
			'Centers the whole container on the page.',
			'Centers text within each item.'
		],
		difficulty: 'medium',
		category: 'css',
		topic: 'flexbox'
	},
	{
		id: 'css-017',
		text: 'What does "flex-wrap: wrap" do?',
		answers: [
			'Lets flex items flow onto multiple lines when they run out of space.',
			'Wraps text within each flex item.',
			'Adds a border around the container.',
			'Wraps the container around its items.'
		],
		difficulty: 'medium',
		category: 'css',
		topic: 'flexbox'
	},
	{
		id: 'css-018',
		text: 'What does "grid-template-columns: 1fr 2fr" create?',
		answers: [
			'Two columns where the second is twice as wide as the first.',
			'Three columns with fractional widths.',
			'Two equal-width columns.',
			'One column spanning two rows.'
		],
		difficulty: 'medium',
		category: 'css',
		topic: 'grid'
	},
	{
		id: 'css-019',
		text: 'What does "repeat(3, 1fr)" produce in grid-template-columns?',
		answers: [
			'Three equal-width columns.',
			'Repeats the whole layout three times.',
			'One column three fractions wide.',
			'Three rows of one fraction each.'
		],
		difficulty: 'medium',
		category: 'css',
		topic: 'grid'
	},
	{
		id: 'css-020',
		text: 'What does "grid-column: 1 / 3" mean?',
		answers: [
			'The item spans from column line 1 to column line 3.',
			'The item is placed in columns 1 through 3 inclusive.',
			'The item takes up one third of the width.',
			'The item is split into three columns.'
		],
		difficulty: 'medium',
		category: 'css',
		topic: 'grid'
	},
	{
		id: 'css-021',
		text: 'What does "animation-fill-mode: forwards" do?',
		answers: [
			'Keeps the element in its final keyframe state after the animation ends.',
			'Plays the animation from start to end once.',
			'Plays the animation only in the forward direction.',
			'Fills the timeline from the start.'
		],
		difficulty: 'medium',
		category: 'css',
		topic: 'animations'
	},
	{
		id: 'css-022',
		text: 'What is the difference between "transform" and "transition"?',
		answers: [
			'transform changes appearance immediately; transition animates changes over time.',
			'transition changes appearance; transform adds animation.',
			'They are the same property.',
			'transform is 3D only; transition is 2D only.'
		],
		difficulty: 'medium',
		category: 'css',
		topic: 'animations'
	},
	{
		id: 'css-023',
		text: "Which property lets a single flex item override the container's align-items?",
		answers: ['align-self', 'self-align', 'item-align', 'flex-align'],
		difficulty: 'medium',
		category: 'css',
		topic: 'flexbox'
	},
	{
		id: 'css-024',
		text: 'What does ":nth-child(2n)" select?',
		answers: [
			'Every even-numbered child.',
			'Only the second child.',
			'Every odd-numbered child.',
			'Every second child counting from the end.'
		],
		difficulty: 'medium',
		category: 'css',
		topic: 'selectors'
	},

	// ==================== HARD ====================
	{
		id: 'css-025',
		text: 'Which has the highest specificity?',
		answers: [
			'An inline style attribute.',
			'An ID selector.',
			'A class selector.',
			'An element (type) selector.'
		],
		difficulty: 'hard',
		category: 'css',
		topic: 'selectors'
	},
	{
		id: 'css-026',
		text: 'What is the specificity order from lowest to highest?',
		answers: [
			'Element, Class, ID, Inline',
			'Inline, ID, Class, Element',
			'Class, Element, ID, Inline',
			'ID, Inline, Class, Element'
		],
		difficulty: 'hard',
		category: 'css',
		topic: 'selectors'
	},
	{
		id: 'css-027',
		text: 'What is "flex: 1 0 auto" shorthand for?',
		answers: [
			'flex-grow: 1; flex-shrink: 0; flex-basis: auto',
			'flex-grow: 1; flex-basis: 0; flex-shrink: auto',
			'flex-shrink: 1; flex-grow: 0; flex-basis: auto',
			'flex-basis: 1; flex-grow: 0; flex-shrink: auto'
		],
		difficulty: 'hard',
		category: 'css',
		topic: 'flexbox'
	},
	{
		id: 'css-028',
		text: 'What does "grid-auto-flow: dense" do?',
		answers: [
			'Backfills earlier gaps with later items that fit.',
			'Creates a grid with smaller gaps.',
			'Compresses items to their minimum size.',
			'Makes all tracks narrower.'
		],
		difficulty: 'hard',
		category: 'css',
		topic: 'grid'
	},
	{
		id: 'css-029',
		text: 'How do you place an item into a named grid area?',
		answers: [
			'grid-area: area-name',
			'grid-place: area-name',
			'grid-position: area-name',
			'grid-location: area-name'
		],
		difficulty: 'hard',
		category: 'css',
		topic: 'grid'
	},
	{
		id: 'css-030',
		text: 'Which cubic-bezier approximates a smooth ease-in-out?',
		answers: [
			'cubic-bezier(0.42, 0, 0.58, 1)',
			'cubic-bezier(0, 0, 1, 1)',
			'cubic-bezier(1, 0, 0, 1)',
			'cubic-bezier(0.5, 0.5, 0.5, 0.5)'
		],
		difficulty: 'hard',
		category: 'css',
		topic: 'animations'
	},
	{
		id: 'css-031',
		text: 'What is the difference between "em" and "rem" units?',
		answers: [
			"em is relative to the element's own font-size; rem is relative to the root font-size.",
			'They are identical.',
			'rem is relative to the parent; em is relative to the root.',
			'em is for fonts only; rem is for spacing only.'
		],
		difficulty: 'hard',
		category: 'css',
		topic: 'selectors'
	},
	{
		id: 'css-032',
		text: 'How does margin collapsing behave between two stacked block elements?',
		answers: [
			'Adjacent vertical margins combine into the larger of the two, not their sum.',
			'The margins always add together.',
			'The smaller margin always wins.',
			'Vertical margins never interact.'
		],
		difficulty: 'hard',
		category: 'css',
		topic: 'selectors'
	},
	{
		id: 'css-033',
		text: 'What is the difference between the main axis and cross axis in flexbox?',
		answers: [
			'The main axis follows flex-direction; the cross axis is perpendicular to it.',
			'The main axis is always horizontal; the cross axis is always vertical.',
			'They are the same thing named differently.',
			'The cross axis follows flex-direction; the main axis is perpendicular.'
		],
		difficulty: 'hard',
		category: 'css',
		topic: 'flexbox'
	},
	{
		id: 'css-034',
		text: 'What does "position: sticky" do?',
		answers: [
			'The element scrolls normally until it hits a threshold, then stays fixed within its container.',
			'It removes the element from the document flow entirely.',
			'It fixes the element to the viewport at all times.',
			'It is an alias for position: absolute.'
		],
		difficulty: 'hard',
		category: 'css',
		topic: 'grid'
	}
]
