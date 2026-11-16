import quizLogo from '../../assets/quiz-logo.webp'
import { useSound } from '../../context/SoundContext.jsx'
import { Toggle } from '../ui/Toggle.jsx'
import './Header.scss'

/**
 * Header component with app title and sound toggle
 *
 * Displays the app logo, title, and a sound effects toggle.
 * The sound toggle persists preference to localStorage.
 */
export function Header() {
	const { enabled, setEnabled } = useSound()

	return (
		<header className="header" role="banner">
			<div className="header__logo">
				{/* Natural dimensions declared so browser reserves space; CSS sets display size */}
				<img src={quizLogo} alt="" aria-hidden="true" width="500" height="534" />
				<h1>Frontend Quiz</h1>
			</div>
			<div className="header__controls">
				<Toggle checked={enabled} onChange={setEnabled} label="Sound effects" />
			</div>
		</header>
	)
}
