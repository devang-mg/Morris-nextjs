import Link from 'next/link'
import Image from 'next/image'
import Logo from '../icons/Logo'

const Nav = ({ whiteBg = false }) => {
	return (
		<div className={`w-full ${whiteBg ? 'nav-white-bg' : ''}`}>
			<nav id="top" className={whiteBg ? 'nav-service-page' : ''}>
				<Link href="/">
					<Logo className="h-8 lg:h-[50px]" />
				</Link>

				<div className="nav-buttons">
					<Link href="/#top">
						<button aria-label="nav-btns" name="nav-btns" className="">
							Home
						</button>
					</Link>
					<Link href="/#about">
						<button aria-label="nav-btns" name="nav-btns" className="">
							About us
						</button>
					</Link>
					<Link href="/#service">
						<button aria-label="nav-btns" name="nav-btns" className="">
							Services
						</button>
					</Link>
					<Link href="/#contact">
						<button aria-label="nav-btns" name="nav-btns" className="">
							Contact us
						</button>
					</Link>
				</div>
			</nav>
		</div>
	)
}

export default Nav
