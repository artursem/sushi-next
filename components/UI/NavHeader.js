import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Logo from './icons/Logo';
import GenericButton from './GenericButton';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';
import classes from './NavHeader.module.css';
const NavHeader = () => {
	const router = useRouter();
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenuOpen = () => {
		setMenuOpen((prevState) => !prevState);
		console.log(menuOpen);
	};
	const closeMenu = () => {
		setMenuOpen(false);
	};

	const linksStyle = `${classes.links} ${menuOpen ? classes.show : ''}`;

	return (
		<header className={classes.header}>
			<span className={classes.logo}>
				<Link href='/'>
					<a onClick={closeMenu}>
						<Logo />
						<h1 className={classes.title}>omakase</h1>
					</a>
				</Link>
			</span>
			<nav className={classes.nav}>
				<ul className={linksStyle}>
					<li>
						<Link href='/'>
							<a
								onClick={closeMenu}
								className={router.pathname === '/' ? `${classes.active}` : ``}
							>
								Home
							</a>
						</Link>
					</li>
					<li>
						<Link href='/order'>
							<a
								onClick={closeMenu}
								className={
									router.pathname === '/order' ? `${classes.active}` : ``
								}
							>
								Order
							</a>
						</Link>
					</li>
					<li>
						<Link href='/reservations'>
							<a
								onClick={closeMenu}
								className={
									router.pathname === '/reservations' ? `${classes.active}` : ``
								}
							>
								Reservations
							</a>
						</Link>
					</li>
				</ul>
				<div className={classes.menuBtn}>
					<GenericButton onClick={toggleMenuOpen}>
						{menuOpen ? <CloseIcon /> : <MenuIcon />}
					</GenericButton>
				</div>
			</nav>
		</header>
	);
};

export default NavHeader;
