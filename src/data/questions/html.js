/**
 * HTML Question Bank
 *
 * Topics: forms, semantics, accessibility, media
 * First answer in each answers array is always the correct one (before shuffling).
 */

const htmlQuestions = [
	// ==================== EASY ====================
	{
		id: 'html-001',
		text: 'Which attribute makes an input field mandatory before a form can be submitted?',
		answers: ['required', 'mandatory', 'validate', 'necessary'],
		difficulty: 'easy',
		category: 'html',
		topic: 'forms'
	},
	{
		id: 'html-002',
		text: 'Which input type is designed for email addresses with built-in validation?',
		answers: ['email', 'text', 'mail', 'address'],
		difficulty: 'easy',
		category: 'html',
		topic: 'forms'
	},
	{
		id: 'html-003',
		text: 'Which input type lets a user pick a date from a calendar UI?',
		answers: ['date', 'calendar', 'day', 'datetime-picker'],
		difficulty: 'easy',
		category: 'html',
		topic: 'forms'
	},
	{
		id: 'html-004',
		text: 'Which element creates a dropdown list of options?',
		answers: ['<select>', '<dropdown>', '<list>', '<options>'],
		difficulty: 'easy',
		category: 'html',
		topic: 'forms'
	},
	{
		id: 'html-005',
		text: 'Which element is used for the main heading of a page?',
		answers: ['<h1>', '<header>', '<heading>', '<main>'],
		difficulty: 'easy',
		category: 'html',
		topic: 'semantics'
	},
	{
		id: 'html-006',
		text: 'What is the correct semantic element for navigation links?',
		answers: ['<nav>', '<navigation>', '<menu>', '<links>'],
		difficulty: 'easy',
		category: 'html',
		topic: 'semantics'
	},
	{
		id: 'html-007',
		text: 'Which element represents the main content area of a document?',
		answers: ['<main>', '<content>', '<body>', '<primary>'],
		difficulty: 'easy',
		category: 'html',
		topic: 'semantics'
	},
	{
		id: 'html-008',
		text: 'What does the "alt" attribute provide for images?',
		answers: [
			'Alternative text for screen readers and when the image fails to load.',
			'Alternative styling for the image.',
			'An alternative image source for mobile.',
			'Alternative colors for the image.'
		],
		difficulty: 'easy',
		category: 'html',
		topic: 'accessibility'
	},
	{
		id: 'html-009',
		text: 'Which element is used to embed video content?',
		answers: ['<video>', '<media>', '<movie>', '<embed>'],
		difficulty: 'easy',
		category: 'html',
		topic: 'media'
	},
	{
		id: 'html-010',
		text: 'Which attribute makes a video or audio element start playing automatically?',
		answers: ['autoplay', 'auto', 'play', 'immediate'],
		difficulty: 'easy',
		category: 'html',
		topic: 'media'
	},
	{
		id: 'html-011',
		text: 'Which element embeds an image in a page?',
		answers: ['<img>', '<image>', '<picture> only', '<src>'],
		difficulty: 'easy',
		category: 'html',
		topic: 'media'
	},
	{
		id: 'html-012',
		text: 'Which attribute specifies the file(s) a link or resource points to for an image?',
		answers: ['src', 'href', 'link', 'path'],
		difficulty: 'easy',
		category: 'html',
		topic: 'media'
	},

	// ==================== MEDIUM ====================
	{
		id: 'html-013',
		text: 'What is the purpose of the <label> element in forms?',
		answers: [
			'To associate a text label with a form control for accessibility.',
			'To create a container for form elements.',
			'To style inputs with CSS.',
			'To submit the form when clicked.'
		],
		difficulty: 'medium',
		category: 'html',
		topic: 'forms'
	},
	{
		id: 'html-014',
		text: 'Which attribute disables the browser from validating a form on submit?',
		answers: ['novalidate', 'no-validate', 'skip-validation', 'validateoff'],
		difficulty: 'medium',
		category: 'html',
		topic: 'forms'
	},
	{
		id: 'html-015',
		text: 'How do you explicitly link a <label> to an input by id?',
		answers: [
			'Set the label\'s "for" attribute to the input\'s id.',
			'Set the label\'s "name" attribute to the input\'s id.',
			'Wrap the input in a <span>.',
			'Give both the same class.'
		],
		difficulty: 'medium',
		category: 'html',
		topic: 'forms'
	},
	{
		id: 'html-016',
		text: 'Which semantic element represents a standalone piece of content that could be distributed independently?',
		answers: ['<article>', '<section>', '<div>', '<aside>'],
		difficulty: 'medium',
		category: 'html',
		topic: 'semantics'
	},
	{
		id: 'html-017',
		text: 'Which element is for content tangentially related to the main content, like a sidebar?',
		answers: ['<aside>', '<sidebar>', '<related>', '<secondary>'],
		difficulty: 'medium',
		category: 'html',
		topic: 'semantics'
	},
	{
		id: 'html-018',
		text: 'Which ARIA attribute provides a label for an element with no visible text?',
		answers: ['aria-label', 'aria-text', 'aria-name', 'aria-title'],
		difficulty: 'medium',
		category: 'html',
		topic: 'accessibility'
	},
	{
		id: 'html-019',
		text: 'What is the purpose of the "tabindex" attribute?',
		answers: [
			'To control the tab (keyboard focus) order of elements.',
			'To create tabs in the interface.',
			'To set the number of table columns.',
			'To indent paragraphs.'
		],
		difficulty: 'medium',
		category: 'html',
		topic: 'accessibility'
	},
	{
		id: 'html-020',
		text: 'What is the purpose of the <picture> element?',
		answers: [
			'To provide multiple image sources for responsive/art-directed images.',
			'To display a gallery of pictures.',
			'To add a frame around an image.',
			'To create an image slideshow.'
		],
		difficulty: 'medium',
		category: 'html',
		topic: 'media'
	},
	{
		id: 'html-021',
		text: 'What does the "srcset" attribute on an <img> do?',
		answers: [
			'Offers multiple image files so the browser can pick one for the screen resolution.',
			'Sets backup image sources if the first fails.',
			'Creates an image carousel.',
			'Specifies image dimensions.'
		],
		difficulty: 'medium',
		category: 'html',
		topic: 'media'
	},
	{
		id: 'html-022',
		text: 'What is the difference between <input type="button"> and <button>?',
		answers: [
			'<button> can contain HTML/markup as its content; the input button only has a text value.',
			'They are identical.',
			'<button> cannot be used inside forms.',
			'The input button supports icons but <button> does not.'
		],
		difficulty: 'medium',
		category: 'html',
		topic: 'forms'
	},
	{
		id: 'html-023',
		text: 'Which element groups related form controls with a caption?',
		answers: [
			'<fieldset> with a <legend>',
			'<group> with a <title>',
			'<section> with an <h2>',
			'<form> with a <label>'
		],
		difficulty: 'medium',
		category: 'html',
		topic: 'forms'
	},

	// ==================== HARD ====================
	{
		id: 'html-024',
		text: 'What is the difference between the "name" and "id" attributes on form inputs?',
		answers: [
			'name is submitted with the form data; id is used to identify the element in the DOM.',
			'id is submitted with the form data; name identifies the DOM element.',
			'They serve the exact same purpose.',
			'name is only for radio buttons; id is for all inputs.'
		],
		difficulty: 'hard',
		category: 'html',
		topic: 'forms'
	},
	{
		id: 'html-025',
		text: 'What is the semantic difference between <strong> and <b>?',
		answers: [
			'<strong> conveys importance; <b> is stylistic bold with no added meaning.',
			'<b> conveys importance; <strong> is only visual.',
			'There is no difference.',
			'<strong> is deprecated in HTML5.'
		],
		difficulty: 'hard',
		category: 'html',
		topic: 'semantics'
	},
	{
		id: 'html-026',
		text: 'Which ARIA role/attribute pattern fits a button that opens a dropdown menu?',
		answers: [
			'A button with aria-haspopup and aria-expanded.',
			'role="menu" on the button.',
			'role="dropdown".',
			'role="popup".'
		],
		difficulty: 'hard',
		category: 'html',
		topic: 'accessibility'
	},
	{
		id: 'html-027',
		text: 'What does aria-live="polite" tell assistive technologies?',
		answers: [
			'Announce updates when the user is idle, without interrupting.',
			'Never announce changes.',
			'Announce changes immediately, interrupting current speech.',
			'Announce changes only when the element is focused.'
		],
		difficulty: 'hard',
		category: 'html',
		topic: 'accessibility'
	},
	{
		id: 'html-028',
		text: 'Which element provides timed text tracks (subtitles/captions) for media?',
		answers: ['<track>', '<caption>', '<subtitle>', '<text>'],
		difficulty: 'hard',
		category: 'html',
		topic: 'media'
	},
	{
		id: 'html-029',
		text: 'Why prefer a <button> over a <div> with a click handler for actions?',
		answers: [
			'The button is focusable and keyboard-operable and exposes the correct role to assistive tech by default.',
			'A div cannot have click handlers.',
			'Buttons render faster than divs.',
			'Divs cannot be styled with CSS.'
		],
		difficulty: 'hard',
		category: 'html',
		topic: 'accessibility'
	},
	{
		id: 'html-030',
		text: 'What does the "defer" attribute on a <script> do?',
		answers: [
			'Downloads the script in parallel and runs it after HTML parsing, in order.',
			'Runs the script immediately, blocking parsing.',
			'Prevents the script from ever running.',
			'Runs the script before the HTML is parsed.'
		],
		difficulty: 'hard',
		category: 'html',
		topic: 'semantics'
	},
	{
		id: 'html-031',
		text: 'What is the difference between the "defer" and "async" script attributes?',
		answers: [
			'defer preserves execution order and runs after parsing; async runs as soon as it loads, order not guaranteed.',
			'They are identical.',
			'async waits for parsing, defer does not.',
			'defer only works for inline scripts.'
		],
		difficulty: 'hard',
		category: 'html',
		topic: 'semantics'
	},
	{
		id: 'html-032',
		text: 'What is the purpose of the "autocomplete" attribute on inputs?',
		answers: [
			'It hints which stored value the browser may auto-fill (e.g. "email", "current-password").',
			'It validates the input format.',
			'It disables the field until focused.',
			'It submits the form automatically.'
		],
		difficulty: 'hard',
		category: 'html',
		topic: 'forms'
	},
	{
		id: 'html-033',
		text: 'Why should form inputs have associated labels beyond visual styling?',
		answers: [
			'Screen readers announce the label, and clicking the label focuses the control.',
			'Labels are required for the form to submit.',
			'Labels prevent CSS conflicts.',
			'Labels cache the input value.'
		],
		difficulty: 'hard',
		category: 'html',
		topic: 'accessibility'
	},
	{
		id: 'html-034',
		text: 'What is the difference between "aria-hidden=true" and the HTML "hidden" attribute?',
		answers: [
			'aria-hidden removes the element only from the accessibility tree while keeping it visually rendered; hidden hides it visually and from the accessibility tree.',
			'They are identical in effect.',
			'hidden removes only from the accessibility tree; aria-hidden hides visually.',
			'aria-hidden also removes the element from the layout flow.'
		],
		difficulty: 'hard',
		category: 'html',
		topic: 'accessibility'
	},
	{
		id: 'html-035',
		text: 'What is the purpose of the "role" attribute in ARIA?',
		answers: [
			'To explicitly declare the semantic role of an element to assistive technologies when the native element is insufficient.',
			'To apply CSS roles to elements.',
			'To define the rendering order of elements.',
			'To assign JavaScript event handlers to elements.'
		],
		difficulty: 'hard',
		category: 'html',
		topic: 'accessibility'
	},
	{
		id: 'html-036',
		text: 'What does the "enctype" attribute on a form control?',
		answers: [
			'The MIME type used to encode the form data when submitting — required to be "multipart/form-data" for file uploads.',
			'The character encoding of the page.',
			'Whether the form uses GET or POST.',
			'The encryption algorithm for form data in transit.'
		],
		difficulty: 'hard',
		category: 'html',
		topic: 'forms'
	},
	{
		id: 'html-037',
		text: 'What is the difference between GET and POST as form method values?',
		answers: [
			'GET appends data to the URL query string (visible, limited size); POST sends data in the request body (hidden, no size limit).',
			'POST appends data to the URL; GET sends it in the body.',
			'They are functionally identical for forms.',
			'GET is only for read operations; POST always writes to a database.'
		],
		difficulty: 'hard',
		category: 'html',
		topic: 'forms'
	},
	{
		id: 'html-038',
		text: 'What does the "loading=lazy" attribute on an <img> do?',
		answers: [
			'Defers loading the image until it is near the viewport, reducing initial page load.',
			'Loads the image at low resolution first, then full resolution.',
			'Prevents the image from loading on slow connections.',
			'Caches the image indefinitely in the browser.'
		],
		difficulty: 'hard',
		category: 'html',
		topic: 'media'
	},
	{
		id: 'html-039',
		text: 'What does the "crossorigin" attribute on <img> or <script> enable?',
		answers: [
			'CORS requests so the resource can be accessed with credentials or used in a canvas without tainting it.',
			'Loading resources from any domain without restriction.',
			'Encrypting the request to the resource.',
			'Caching the resource across origins.'
		],
		difficulty: 'hard',
		category: 'html',
		topic: 'media'
	},
	{
		id: 'html-040',
		text: 'What is the "Content Security Policy" meta tag used for?',
		answers: [
			'To restrict which sources browsers may load scripts, styles, and other resources from, mitigating XSS attacks.',
			'To set the character encoding of the page.',
			'To prevent search engines from indexing the page.',
			'To define the viewport size for mobile devices.'
		],
		difficulty: 'hard',
		category: 'html',
		topic: 'semantics'
	},
	{
		id: 'html-041',
		text: 'What is the difference between <section> and <article>?',
		answers: [
			'<article> is self-contained content that makes sense independently; <section> groups thematically related content that is part of a larger whole.',
			'<section> is for standalone content; <article> is for grouped content.',
			'They are interchangeable.',
			'<article> can only contain text; <section> can contain any elements.'
		],
		difficulty: 'hard',
		category: 'html',
		topic: 'semantics'
	},
	{
		id: 'html-042',
		text: 'What does the "pattern" attribute on an input do?',
		answers: [
			'Validates the input value against a regular expression before form submission.',
			'Applies a visual pattern to the input field.',
			'Masks the input value like a password field.',
			'Sets a placeholder pattern text inside the input.'
		],
		difficulty: 'hard',
		category: 'html',
		topic: 'forms'
	},
	{
		id: 'html-043',
		text: 'What is "focus management" and why does it matter in accessible SPAs?',
		answers: [
			'Programmatically moving keyboard focus to the right element after route changes or modal opens, so screen reader users know where they are.',
			'Applying CSS focus styles to all interactive elements.',
			'Preventing focus from leaving a form until it is submitted.',
			'Disabling focus on decorative elements.'
		],
		difficulty: 'hard',
		category: 'html',
		topic: 'accessibility'
	}
]

export default htmlQuestions
