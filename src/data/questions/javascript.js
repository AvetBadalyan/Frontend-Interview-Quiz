/**
 * JavaScript Question Bank
 *
 * Topics: closures, promises, dom, arrays
 * First answer in each answers array is always the correct one (before shuffling).
 */

export default [
	// ==================== EASY ====================
	{
		id: 'js-001',
		text: 'What is a closure in JavaScript?',
		answers: [
			'A function that keeps access to its outer scope even after the outer function returns.',
			'A way to close a browser window with JavaScript.',
			'A method to end a loop early.',
			'A technique for hiding HTML elements.'
		],
		difficulty: 'easy',
		category: 'javascript',
		topic: 'closures'
	},
	{
		id: 'js-002',
		text: 'Which is a common use case for closures?',
		answers: [
			'Creating private variables and data encapsulation.',
			'Making HTTP requests.',
			'Styling DOM elements.',
			'Converting data types.'
		],
		difficulty: 'easy',
		category: 'javascript',
		topic: 'closures'
	},
	{
		id: 'js-003',
		text: 'What are the three states of a Promise?',
		answers: [
			'Pending, Fulfilled, Rejected',
			'Start, Process, End',
			'Open, Closed, Error',
			'Loading, Success, Failure'
		],
		difficulty: 'easy',
		category: 'javascript',
		topic: 'promises'
	},
	{
		id: 'js-004',
		text: 'What does the .then() method return?',
		answers: [
			'A new Promise.',
			'undefined.',
			'The original Promise.',
			'A callback function.'
		],
		difficulty: 'easy',
		category: 'javascript',
		topic: 'promises'
	},
	{
		id: 'js-005',
		text: 'What does DOM stand for?',
		answers: [
			'Document Object Model',
			'Data Object Management',
			'Document Oriented Middleware',
			'Dynamic Object Manipulation'
		],
		difficulty: 'easy',
		category: 'javascript',
		topic: 'dom'
	},
	{
		id: 'js-006',
		text: 'Which method selects the first element matching a CSS selector?',
		answers: [
			'document.querySelector()',
			'document.getElementById()',
			'document.getElementsByClassName()',
			'document.selectElement()'
		],
		difficulty: 'easy',
		category: 'javascript',
		topic: 'dom'
	},
	{
		id: 'js-007',
		text: 'Which method creates a new DOM element?',
		answers: [
			'document.createElement()',
			'document.newElement()',
			'document.addElement()',
			'document.makeElement()'
		],
		difficulty: 'easy',
		category: 'javascript',
		topic: 'dom'
	},
	{
		id: 'js-008',
		text: 'What does Array.map() return?',
		answers: [
			'A new array with the result of the callback on each element.',
			'The original array, modified in place.',
			'A single value computed from the array.',
			'undefined.'
		],
		difficulty: 'easy',
		category: 'javascript',
		topic: 'arrays'
	},
	{
		id: 'js-009',
		text: 'What does Array.filter() do?',
		answers: [
			'Returns a new array of elements that pass a test function.',
			'Removes elements from the original array.',
			'Sorts the array by a condition.',
			'Combines two arrays.'
		],
		difficulty: 'easy',
		category: 'javascript',
		topic: 'arrays'
	},
	{
		id: 'js-010',
		text: 'What does the spread operator (...) do with an array?',
		answers: [
			'Expands the array into individual elements.',
			'Combines all elements into a string.',
			'Removes duplicate elements.',
			'Reverses the array.'
		],
		difficulty: 'easy',
		category: 'javascript',
		topic: 'arrays'
	},
	{
		id: 'js-011',
		text: 'Which keyword declares a block-scoped variable that cannot be reassigned?',
		answers: ['const', 'let', 'var', 'static'],
		difficulty: 'easy',
		category: 'javascript',
		topic: 'closures'
	},
	{
		id: 'js-012',
		text: 'What does "typeof []" return?',
		answers: ['"object"', '"array"', '"list"', '"undefined"'],
		difficulty: 'easy',
		category: 'javascript',
		topic: 'arrays'
	},

	// ==================== MEDIUM ====================
	{
		id: 'js-013',
		text: 'What is logged?\n\nfunction outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    return count;\n  };\n}\nconst counter = outer();\nconsole.log(counter());\nconsole.log(counter());',
		answers: [
			'1, then 2',
			'0, then 1',
			'1, then 1',
			'undefined, then undefined'
		],
		difficulty: 'medium',
		category: 'javascript',
		topic: 'closures'
	},
	{
		id: 'js-014',
		text: 'What is the lexical environment in the context of closures?',
		answers: [
			'The scope where a function was defined, holding the variables it can access.',
			'The global window object.',
			'The current call stack.',
			'The document object.'
		],
		difficulty: 'medium',
		category: 'javascript',
		topic: 'closures'
	},
	{
		id: 'js-015',
		text: 'What is the purpose of Promise.all()?',
		answers: [
			'Wait for all promises to resolve, or reject as soon as any one rejects.',
			'Run promises one at a time in sequence.',
			'Cancel all pending promises.',
			'Create a promise from an array literal.'
		],
		difficulty: 'medium',
		category: 'javascript',
		topic: 'promises'
	},
	{
		id: 'js-016',
		text: 'What does async/await provide over .then() chains?',
		answers: [
			'More readable, synchronous-looking asynchronous code.',
			'Better performance for API calls.',
			'The ability to use callbacks.',
			'Automatic error handling without try/catch.'
		],
		difficulty: 'medium',
		category: 'javascript',
		topic: 'promises'
	},
	{
		id: 'js-017',
		text: 'What is event bubbling?',
		answers: [
			'An event fires on the target, then propagates up through its ancestors.',
			'Multiple events combine into one.',
			'An event is prevented from firing.',
			'Events are queued in order.'
		],
		difficulty: 'medium',
		category: 'javascript',
		topic: 'dom'
	},
	{
		id: 'js-018',
		text: 'What is event delegation?',
		answers: [
			'Attaching one listener to a parent to handle events from its children.',
			'Preventing an event from propagating.',
			'Assigning an event to many elements at once.',
			'Removing listeners after they fire.'
		],
		difficulty: 'medium',
		category: 'javascript',
		topic: 'dom'
	},
	{
		id: 'js-019',
		text: 'What is the difference between innerHTML and textContent?',
		answers: [
			'innerHTML parses the string as HTML; textContent treats it as plain text.',
			'textContent is faster but innerHTML is more secure.',
			'innerHTML only works in old IE.',
			'They are aliases.'
		],
		difficulty: 'medium',
		category: 'javascript',
		topic: 'dom'
	},
	{
		id: 'js-020',
		text: 'What is the difference between .map() and .forEach()?',
		answers: [
			'.map() returns a new array; .forEach() returns undefined.',
			'.forEach() returns a new array; .map() returns undefined.',
			'They are identical.',
			'.map() is for objects; .forEach() is for arrays.'
		],
		difficulty: 'medium',
		category: 'javascript',
		topic: 'arrays'
	},
	{
		id: 'js-021',
		text: 'What does [1, 2, 3].reduce((acc, val) => acc + val, 0) return?',
		answers: ['6', '[1, 2, 3]', '0', 'undefined'],
		difficulty: 'medium',
		category: 'javascript',
		topic: 'arrays'
	},
	{
		id: 'js-022',
		text: 'Which array method mutates the original array?',
		answers: ['.push()', '.map()', '.filter()', '.concat()'],
		difficulty: 'medium',
		category: 'javascript',
		topic: 'arrays'
	},
	{
		id: 'js-023',
		text: 'What does Array.find() return?',
		answers: [
			'The first element that passes the test, or undefined.',
			'An array of all matching elements.',
			'The index of the first match.',
			'A boolean.'
		],
		difficulty: 'medium',
		category: 'javascript',
		topic: 'arrays'
	},
	{
		id: 'js-024',
		text: 'What is the difference between "==" and "==="?',
		answers: [
			'=== checks value and type; == allows type coercion.',
			'== checks value and type; === allows coercion.',
			'They are identical.',
			'=== only works with numbers.'
		],
		difficulty: 'medium',
		category: 'javascript',
		topic: 'closures'
	},

	// ==================== HARD ====================
	{
		id: 'js-025',
		text: 'What problem does a closure solve here?\n\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1000);\n}',
		answers: [
			'Without a closure/let, all timeouts log the same final value of i (3).',
			'Closures stop the loop from running.',
			'Closures make setTimeout synchronous.',
			'There is no problem with this code.'
		],
		difficulty: 'hard',
		category: 'javascript',
		topic: 'closures'
	},
	{
		id: 'js-026',
		text: 'How do you fix the loop to log 0, 1, 2?',
		answers: [
			'Use let instead of var, or wrap the body in an IIFE.',
			'Use var instead of let.',
			'Remove the setTimeout.',
			'Add a return inside the loop.'
		],
		difficulty: 'hard',
		category: 'javascript',
		topic: 'closures'
	},
	{
		id: 'js-027',
		text: 'What is the difference between Promise.all() and Promise.allSettled()?',
		answers: [
			'allSettled waits for every promise regardless of outcome; all rejects immediately if any rejects.',
			'There is no difference.',
			'all is faster than allSettled.',
			'allSettled only works with async/await.'
		],
		difficulty: 'hard',
		category: 'javascript',
		topic: 'promises'
	},
	{
		id: 'js-028',
		text: 'What does this output?\n\nPromise.resolve(1)\n  .then(x => x + 1)\n  .then(x => { throw new Error("fail"); })\n  .catch(() => 3)\n  .then(x => console.log(x));',
		answers: ['3', '1', '2', 'Error: fail'],
		difficulty: 'hard',
		category: 'javascript',
		topic: 'promises'
	},
	{
		id: 'js-029',
		text: 'What does event.stopPropagation() do?',
		answers: [
			'Stops the event from bubbling up to ancestor elements.',
			'Prevents the default action of the event.',
			'Removes the event listener.',
			'Cancels all pending events.'
		],
		difficulty: 'hard',
		category: 'javascript',
		topic: 'dom'
	},
	{
		id: 'js-030',
		text: 'What does the output of [...new Set([1, 2, 2, 3, 3, 3])] look like?',
		answers: [
			'[1, 2, 3]',
			'[1, 2, 2, 3, 3, 3]',
			'[3, 2, 1]',
			'Set { 1, 2, 3 }'
		],
		difficulty: 'hard',
		category: 'javascript',
		topic: 'arrays'
	},
	{
		id: 'js-031',
		text: 'What is the difference between event bubbling and capturing?',
		answers: [
			'Capturing goes from the root down to the target; bubbling goes from the target up to the root.',
			'They are the same phase.',
			'Bubbling goes down; capturing goes up.',
			'Only bubbling exists in modern browsers.'
		],
		difficulty: 'hard',
		category: 'javascript',
		topic: 'dom'
	},
	{
		id: 'js-032',
		text: 'What does the following log?\n\nconsole.log(0.1 + 0.2 === 0.3);',
		answers: ['false', 'true', 'undefined', 'throws a RangeError'],
		difficulty: 'hard',
		category: 'javascript',
		topic: 'closures'
	},
	{
		id: 'js-033',
		text: 'What is the difference between "let" and "var" regarding scope and hoisting?',
		answers: [
			'let is block-scoped and not usable before declaration (temporal dead zone); var is function-scoped and hoisted as undefined.',
			'They behave identically.',
			'var is block-scoped; let is function-scoped.',
			'let is not hoisted at all; var cannot be hoisted.'
		],
		difficulty: 'hard',
		category: 'javascript',
		topic: 'closures'
	},
	{
		id: 'js-034',
		text: 'What does the following output?\n\nconst arr = [1, 2, 3];\nconst copy = arr;\ncopy.push(4);\nconsole.log(arr.length);',
		answers: ['4', '3', 'undefined', 'throws an error'],
		difficulty: 'hard',
		category: 'javascript',
		topic: 'arrays'
	},
	{
		id: 'js-035',
		text: 'In the microtask/macrotask model, what runs first?\n\nconsole.log("A");\nsetTimeout(() => console.log("B"), 0);\nPromise.resolve().then(() => console.log("C"));\nconsole.log("D");',
		answers: ['A, D, C, B', 'A, B, C, D', 'A, D, B, C', 'A, C, D, B'],
		difficulty: 'hard',
		category: 'javascript',
		topic: 'promises'
	}
]
