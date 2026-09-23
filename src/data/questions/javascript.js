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
		difficulty: 'medium',
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
		difficulty: 'easy',
		category: 'javascript',
		topic: 'arrays'
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
			'Stops the event from propagating further through the DOM (bubbling up or capturing down).',
			'Prevents the default action of the event.',
			'Removes the event listener.',
			'Cancels all pending events.'
		],
		difficulty: 'medium',
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
		difficulty: 'medium',
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
	},
	{
		id: 'js-036',
		text: 'What does Object.freeze() do, and what does it NOT prevent?',
		answers: [
			'It prevents adding, removing, or reassigning own properties — but it does not deep-freeze: nested object properties can still be mutated.',
			'It makes the object and all nested objects completely immutable.',
			'It only prevents adding new properties; existing ones can still be changed.',
			'It converts the object to a primitive value.'
		],
		difficulty: 'hard',
		category: 'javascript',
		topic: 'arrays'
	},
	{
		id: 'js-037',
		text: 'What is the output of this code?\n\nconst obj = {};\nobj.__proto__.greet = "hello";\nconst obj2 = {};\nconsole.log(obj2.greet);',
		answers: [
			'"hello" — because greet was added to Object.prototype, which all plain objects inherit.',
			'undefined — obj2 has no greet property.',
			'ReferenceError',
			'"hello" only if obj2 was created after obj.'
		],
		difficulty: 'hard',
		category: 'javascript',
		topic: 'closures'
	},
	{
		id: 'js-038',
		text: 'What is the difference between null and undefined in JavaScript?',
		answers: [
			'undefined means a variable has been declared but not assigned a value; null is an intentional assignment representing "no value".',
			'They are identical — both mean "no value".',
			'null means undeclared; undefined means declared but empty.',
			'undefined is only produced by the engine; you can never assign it manually.'
		],
		difficulty: 'hard',
		category: 'javascript',
		topic: 'closures'
	},
	{
		id: 'js-039',
		text: 'What is the prototype chain, and how does property lookup work?',
		answers: [
			"When a property is not found on an object, JavaScript looks up its prototype, then the prototype's prototype, until null is reached.",
			"Every object has a copy of all its prototype's properties.",
			'The prototype chain only applies to class instances, not plain objects.',
			'Property lookup starts at Object.prototype and works down to the object.'
		],
		difficulty: 'hard',
		category: 'javascript',
		topic: 'closures'
	},
	{
		id: 'js-040',
		text: 'What does Array.prototype.flat() do, and what is the default depth?',
		answers: [
			'Recursively flattens nested arrays to a given depth; the default depth is 1.',
			'Flattens all nesting regardless of depth by default.',
			'Converts an array to a comma-separated string.',
			'Removes all falsy values from the array.'
		],
		difficulty: 'hard',
		category: 'javascript',
		topic: 'arrays'
	},
	{
		id: 'js-041',
		text: 'What does "this" refer to inside an arrow function?',
		answers: [
			'The value of "this" from the enclosing lexical scope where the arrow function was defined — it cannot be rebound.',
			'The object the arrow function is a method of.',
			'The global object, always.',
			'undefined, always.'
		],
		difficulty: 'hard',
		category: 'javascript',
		topic: 'closures'
	},
	{
		id: 'js-042',
		text: 'What is a WeakMap and how does it differ from Map?',
		answers: [
			'WeakMap keys must be objects and are held weakly — if no other reference to the key exists, it can be garbage-collected. Map keys can be any type and are held strongly.',
			'WeakMap is just a Map with fewer features.',
			'WeakMap keys are strings; Map keys are objects.',
			'WeakMap prevents keys from being overwritten; Map allows it.'
		],
		difficulty: 'hard',
		category: 'javascript',
		topic: 'arrays'
	},
	{
		id: 'js-043',
		text: 'What is the Temporal Dead Zone (TDZ)?',
		answers: [
			'The period between the start of a block scope and the point where a let or const declaration is initialised — accessing the variable during this period throws a ReferenceError.',
			'The time between when a Promise is created and when it resolves.',
			'A scope where var variables are temporarily undefined.',
			'A period where setTimeout callbacks are queued but not yet executed.'
		],
		difficulty: 'hard',
		category: 'javascript',
		topic: 'closures'
	},
	{
		id: 'js-044',
		text: 'What does structuredClone() do that JSON.parse(JSON.stringify()) does not handle correctly?',
		answers: [
			'structuredClone correctly clones Dates, Maps, Sets, ArrayBuffers, circular references, and undefined values; JSON round-trip converts Dates to strings, loses Maps/Sets/undefined, and throws on circular refs.',
			'structuredClone is faster but otherwise identical to JSON round-trip.',
			'structuredClone only works on primitive values.',
			'JSON.parse(JSON.stringify()) is always the better option for deep cloning.'
		],
		difficulty: 'hard',
		category: 'javascript',
		topic: 'arrays'
	},
	{
		id: 'js-045',
		text: 'What does the "in" operator check?',
		answers: [
			'Whether a property exists on an object or anywhere in its prototype chain.',
			'Whether a value exists inside an array.',
			'Whether a variable is defined in the current scope.',
			'Whether an object is an instance of a class.'
		],
		difficulty: 'hard',
		category: 'javascript',
		topic: 'closures'
	}
]
