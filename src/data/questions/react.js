/**
 * React Question Bank
 *
 * Topics: hooks, components, state, jsx
 * First answer in each answers array is always the correct one (before shuffling).
 */

const reactQuestions = [
	// ==================== EASY ====================
	{
		id: 'react-001',
		text: 'Which definition best describes React?',
		answers: [
			'A library for building user interfaces with declarative code.',
			'A library for managing application state.',
			'A framework for building UIs with imperative code.',
			'A library used only for building mobile applications.'
		],
		difficulty: 'easy',
		category: 'react',
		topic: 'components'
	},
	{
		id: 'react-002',
		text: 'What is the most common way to create a component in React?',
		answers: [
			'By defining a JavaScript function that returns JSX.',
			'By defining a custom HTML tag in JavaScript.',
			'By creating a file with a .jsx extension.',
			'By using the "new" keyword with the component name.'
		],
		difficulty: 'easy',
		category: 'react',
		topic: 'components'
	},
	{
		id: 'react-003',
		text: 'What are props in React?',
		answers: [
			'Inputs that pass data from a parent to a child component.',
			'Functions that update the component state.',
			'Special HTML attributes only available in React.',
			'CSS properties specific to React components.'
		],
		difficulty: 'easy',
		category: 'react',
		topic: 'components'
	},
	{
		id: 'react-004',
		text: 'What purpose do React hooks serve?',
		answers: [
			'They let you use state and other React features in function components.',
			'They create responsive layouts.',
			'They handle errors within the application.',
			'They are part of the Redux library.'
		],
		difficulty: 'easy',
		category: 'react',
		topic: 'hooks'
	},
	{
		id: 'react-005',
		text: 'Which hook adds state to a function component?',
		answers: ['useState', 'useEffect', 'useRef', 'useContext'],
		difficulty: 'easy',
		category: 'react',
		topic: 'hooks'
	},
	{
		id: 'react-006',
		text: 'What is the purpose of the useEffect hook?',
		answers: [
			'To run side effects such as data fetching or subscriptions.',
			'To create new state variables.',
			'To optimize rendering performance.',
			'To handle form submissions.'
		],
		difficulty: 'easy',
		category: 'react',
		topic: 'hooks'
	},
	{
		id: 'react-007',
		text: 'What does the term "React state" mean?',
		answers: [
			'Data held by a component that can change and trigger a re-render.',
			'The lifecycle phase a component is in.',
			'The overall status of the whole application.',
			'A library for managing global state.'
		],
		difficulty: 'easy',
		category: 'react',
		topic: 'state'
	},
	{
		id: 'react-008',
		text: 'What is JSX?',
		answers: [
			'A syntax extension that lets you write HTML-like markup in JavaScript.',
			'A JavaScript library for building UIs.',
			'A specific HTML version created for React.',
			'A tool for making HTTP requests.'
		],
		difficulty: 'easy',
		category: 'react',
		topic: 'jsx'
	},
	{
		id: 'react-009',
		text: 'How do you typically render a list in React?',
		answers: [
			'By using the map() method to return JSX for each item.',
			'By using a for loop that returns JSX.',
			'By using the forEach() method to return JSX.',
			'By using a loop() method to return JSX.'
		],
		difficulty: 'easy',
		category: 'react',
		topic: 'jsx'
	},
	{
		id: 'react-010',
		text: 'How are events handled in React?',
		answers: [
			'With camelCase handlers that receive a function (e.g. onClick={fn}).',
			'By adding listeners with document.addEventListener.',
			'With lowercase handlers like standard HTML (onclick="fn()").',
			'By importing handlers from separate event files.'
		],
		difficulty: 'easy',
		category: 'react',
		topic: 'jsx'
	},
	{
		id: 'react-011',
		text: 'How do you pass a prop called "title" to a component?',
		answers: [
			'<Card title="Hello" />',
			'<Card props.title="Hello" />',
			'<Card :title="Hello" />',
			'<Card [title]="Hello" />'
		],
		difficulty: 'easy',
		category: 'react',
		topic: 'components'
	},
	{
		id: 'react-012',
		text: 'What must a component return to render nothing?',
		answers: ['null', 'undefined', 'false only', 'an empty string only'],
		difficulty: 'easy',
		category: 'react',
		topic: 'jsx'
	},

	// ==================== MEDIUM ====================
	{
		id: 'react-013',
		text: 'What is a React Fragment?',
		answers: [
			'A way to group elements without adding an extra DOM node.',
			'A reusable piece of a component.',
			'A component that only renders once.',
			'A tool for splitting code into chunks.'
		],
		difficulty: 'medium',
		category: 'react',
		topic: 'components'
	},
	{
		id: 'react-014',
		text: 'What is the purpose of React.memo?',
		answers: [
			"To skip re-rendering a component when its props haven't changed.",
			'To store information remembered between renders.',
			'To create a memo between components.',
			'To log component activity for debugging.'
		],
		difficulty: 'medium',
		category: 'react',
		topic: 'components'
	},
	{
		id: 'react-015',
		text: 'What is the purpose of the useRef hook?',
		answers: [
			'To hold a mutable value that persists across renders without causing a re-render.',
			'To reference external libraries.',
			'To reference CSS styles for a component.',
			'To automatically track previous state values.'
		],
		difficulty: 'medium',
		category: 'react',
		topic: 'hooks'
	},
	{
		id: 'react-016',
		text: 'What is a controlled component?',
		answers: [
			'A form input whose value is driven by React state.',
			'A component that cannot be modified by users.',
			'A component that controls other components.',
			'A component with restricted feature access.'
		],
		difficulty: 'medium',
		category: 'react',
		topic: 'state'
	},
	{
		id: 'react-017',
		text: 'What is the Context API used for?',
		answers: [
			'Sharing data across a component tree without prop drilling.',
			'Creating animations between transitions.',
			'Making HTTP requests to APIs.',
			'Optimizing images and media.'
		],
		difficulty: 'medium',
		category: 'react',
		topic: 'state'
	},
	{
		id: 'react-018',
		text: 'What is the difference between state and props?',
		answers: [
			'State is managed inside a component and can change; props are passed in and are read-only.',
			'State is passed from parents; props are defined internally.',
			'State is always public; props are private.',
			'State is for styling; props are for data.'
		],
		difficulty: 'medium',
		category: 'react',
		topic: 'state'
	},
	{
		id: 'react-019',
		text: 'Why is the "key" prop important when rendering lists?',
		answers: [
			'It helps React identify which items changed, were added, or removed.',
			'It is required for CSS styling of list items.',
			'It provides accessibility features for screen readers.',
			'It automatically sorts the list items.'
		],
		difficulty: 'medium',
		category: 'react',
		topic: 'jsx'
	},
	{
		id: 'react-020',
		text: 'What is the Virtual DOM?',
		answers: [
			'An in-memory copy of the UI that React diffs against to update the real DOM efficiently.',
			'A browser feature that only works with React.',
			'A database where React stores components.',
			'The actual HTML DOM the browser renders.'
		],
		difficulty: 'medium',
		category: 'react',
		topic: 'jsx'
	},
	{
		id: 'react-021',
		text: 'Which approach can NOT be used to render content conditionally in JSX?',
		answers: [
			'A #if template directive.',
			'A ternary operator.',
			'The && operator.',
			'An if statement before the return.'
		],
		difficulty: 'medium',
		category: 'react',
		topic: 'jsx'
	},
	{
		id: 'react-022',
		text: 'What does the dependency array of useEffect control?',
		answers: [
			'When the effect re-runs — it runs again if a listed value changed.',
			'Which variables the effect is allowed to read.',
			'The order in which multiple effects run.',
			'Whether the effect runs on the server.'
		],
		difficulty: 'medium',
		category: 'react',
		topic: 'hooks'
	},
	{
		id: 'react-023',
		text: 'Why should you never call a hook inside a condition or loop?',
		answers: [
			'Hooks must run in the same order on every render for React to track them.',
			'It makes the component slower.',
			'Conditions cannot contain function calls.',
			'Hooks can only be called once per file.'
		],
		difficulty: 'medium',
		category: 'react',
		topic: 'hooks'
	},
	{
		id: 'react-024',
		text: 'What is the correct way to update state based on the previous value?',
		answers: [
			'setCount(prev => prev + 1)',
			'setCount(count + 1) inside a loop',
			'count = count + 1',
			'setCount(this.count + 1)'
		],
		difficulty: 'medium',
		category: 'react',
		topic: 'state'
	},
	{
		id: 'react-025',
		text: 'What does the useMemo hook do?',
		answers: [
			'Caches the result of an expensive calculation between renders.',
			'Memorizes a component to skip re-renders.',
			'Stores state that survives unmounting.',
			'Runs a side effect after render.'
		],
		difficulty: 'medium',
		category: 'react',
		topic: 'hooks'
	},

	// ==================== HARD ====================
	{
		id: 'react-026',
		text: 'What are Error Boundaries in React?',
		answers: [
			'Components that catch JS errors in their child tree and show a fallback UI.',
			'CSS rules that prevent layout errors.',
			'Testing utilities that find errors before deployment.',
			'Console warnings shown during development.'
		],
		difficulty: 'hard',
		category: 'react',
		topic: 'components'
	},
	{
		id: 'react-027',
		text: 'What are React Server Components?',
		answers: [
			'Components that render on the server, reducing client JS and allowing direct server-resource access.',
			'Components that communicate with servers via API calls.',
			'Components used only in server-side rendering setups.',
			'Components that store their state on a server.'
		],
		difficulty: 'hard',
		category: 'react',
		topic: 'components'
	},
	{
		id: 'react-028',
		text: 'Why can Error Boundaries only be class components (not hooks)?',
		answers: [
			'There is no hook equivalent for getDerivedStateFromError / componentDidCatch.',
			'Hooks cannot render a fallback UI.',
			'Class components render faster on errors.',
			'It is a lint rule, not a real limitation.'
		],
		difficulty: 'hard',
		category: 'react',
		topic: 'components'
	},
	{
		id: 'react-029',
		text: 'What problem does useCallback solve?',
		answers: [
			'It keeps a function identity stable across renders so memoized children do not re-render needlessly.',
			'It caches the return value of a function.',
			'It delays a function until the next render.',
			'It runs a function only on mount.'
		],
		difficulty: 'hard',
		category: 'react',
		topic: 'hooks'
	},
	{
		id: 'react-030',
		text: 'What will this component log on the first render and after one click?\n\nfunction C() {\n  const [n, setN] = useState(0);\n  useEffect(() => { console.log(n); });\n  return <button onClick={() => setN(n + 1)}>{n}</button>;\n}',
		answers: [
			'0, then 1',
			'0, then 0',
			'1, then 2',
			'nothing on first render, then 1'
		],
		difficulty: 'hard',
		category: 'react',
		topic: 'hooks'
	},
	{
		id: 'react-031',
		text: 'Why might two rapid setCount(count + 1) calls in the same handler only increment once?',
		answers: [
			'Both read the same stale count from the current render; use the updater form to fix it.',
			'React ignores duplicate state updates.',
			'setCount is asynchronous and throws away the first call.',
			'State can only update once per second.'
		],
		difficulty: 'hard',
		category: 'react',
		topic: 'state'
	},
	{
		id: 'react-032',
		text: 'When does useReducer become preferable to useState?',
		answers: [
			'When state transitions are complex or the next state depends on the previous one in structured ways.',
			'When the component has no state at all.',
			'Only in class components.',
			'When you need to fetch data.'
		],
		difficulty: 'hard',
		category: 'react',
		topic: 'state'
	},
	{
		id: 'react-033',
		text: 'What is the difference between useEffect and useLayoutEffect?',
		answers: [
			'useLayoutEffect fires synchronously after DOM mutations but before paint; useEffect fires after paint.',
			'useLayoutEffect only runs on the server.',
			'useEffect runs before render, useLayoutEffect after.',
			'They are identical aliases.'
		],
		difficulty: 'hard',
		category: 'react',
		topic: 'hooks'
	},
	{
		id: 'react-034',
		text: 'Why can using an array index as a list key cause bugs?',
		answers: [
			'If the list reorders or items are inserted/removed, indexes shift and React may reuse the wrong element state.',
			'Indexes are always strings and keys must be numbers.',
			'It disables the Virtual DOM.',
			'React forbids numeric keys entirely.'
		],
		difficulty: 'hard',
		category: 'react',
		topic: 'jsx'
	},
	{
		id: 'react-035',
		text: 'What does the children prop let a component do?',
		answers: [
			'Render whatever JSX is passed between its opening and closing tags (composition).',
			'Access its parent component directly.',
			'Automatically inherit the parent state.',
			'List all child components in the tree.'
		],
		difficulty: 'hard',
		category: 'react',
		topic: 'components'
	},
	{
		id: 'react-036',
		text: 'Why is mutating state directly (e.g. state.push(x)) a problem?',
		answers: [
			'React compares references to decide re-renders, so a mutated same-reference object may not trigger an update.',
			'It permanently freezes the component.',
			'Arrays cannot be stored in state.',
			'It always throws a runtime error.'
		],
		difficulty: 'hard',
		category: 'react',
		topic: 'state'
	},
	{
		id: 'react-037',
		text: 'What is the purpose of a custom hook (a function starting with "use")?',
		answers: [
			'To extract and reuse stateful logic across components while following the rules of hooks.',
			'To replace class components entirely.',
			'To create new HTML elements.',
			'To style components with reusable CSS.'
		],
		difficulty: 'hard',
		category: 'react',
		topic: 'hooks'
	},
	{
		id: 'react-038',
		text: 'What is React Suspense used for?',
		answers: [
			'To declaratively show a fallback UI while waiting for something (lazy-loaded components or async data) to be ready.',
			'To pause all rendering and wait for all promises to resolve.',
			'To catch errors in the component tree.',
			'To defer state updates until the next render cycle.'
		],
		difficulty: 'hard',
		category: 'react',
		topic: 'components'
	},
	{
		id: 'react-039',
		text: 'What is the difference between useImperativeHandle and useRef?',
		answers: [
			'useImperativeHandle customises the ref value exposed to a parent when used with forwardRef; useRef just creates a mutable ref object.',
			'They are identical.',
			'useRef works only on DOM elements; useImperativeHandle works on components.',
			'useImperativeHandle prevents the component from re-rendering when the ref changes.'
		],
		difficulty: 'hard',
		category: 'react',
		topic: 'hooks'
	},
	{
		id: 'react-040',
		text: 'When does React batch state updates, and what changed in React 18?',
		answers: [
			'Before React 18, batching only happened inside React event handlers. React 18 introduced automatic batching everywhere, including in setTimeout, Promises, and native event handlers.',
			'React has always batched all state updates everywhere.',
			'React 18 removed batching to make updates more predictable.',
			'Batching only applies to useReducer, not useState.'
		],
		difficulty: 'hard',
		category: 'react',
		topic: 'state'
	},
	{
		id: 'react-041',
		text: 'What is the difference between controlled and uncontrolled components, and when would you use an uncontrolled one?',
		answers: [
			'Controlled components store input value in React state; uncontrolled use a ref to read the DOM value. Uncontrolled components are useful for simple forms, file inputs, or when integrating with non-React code.',
			'Uncontrolled components cannot be used with forms.',
			'Controlled components are only for class components.',
			'There is no practical difference — both access the DOM value the same way.'
		],
		difficulty: 'hard',
		category: 'react',
		topic: 'state'
	},
	{
		id: 'react-042',
		text: 'What does React.lazy() do and what must accompany it?',
		answers: [
			'It lets you dynamically import a component so its code is only loaded when rendered. It must be wrapped in a <Suspense> boundary with a fallback.',
			'It memoizes a component to prevent re-renders.',
			'It defers rendering of a component until the next idle frame.',
			'It loads a component from a CDN automatically.'
		],
		difficulty: 'hard',
		category: 'react',
		topic: 'components'
	},
	{
		id: 'react-043',
		text: 'What is the purpose of the useId hook?',
		answers: [
			'To generate a stable, unique ID per component instance that is consistent between server and client, useful for accessibility attributes like htmlFor/aria-describedby.',
			'To create a unique key for list items.',
			'To generate a random ID on every render.',
			'To assign a unique ID to the DOM node of a component.'
		],
		difficulty: 'hard',
		category: 'react',
		topic: 'hooks'
	},
	{
		id: 'react-044',
		text: 'What is "prop drilling" and what are two ways to avoid it?',
		answers: [
			'Passing props through many intermediate components that do not use them. Solutions include the Context API for global-ish data, or component composition (passing components as children/props).',
			'Passing too many props to a single component. Solve it by using default props.',
			'Drilling into an object prop with dot notation. Solved with destructuring.',
			'A performance issue caused by large prop objects. Solved with React.memo.'
		],
		difficulty: 'hard',
		category: 'react',
		topic: 'components'
	}
]

export default reactQuestions
