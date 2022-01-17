import Link from 'next/link';
import classes from './NavHeader.module.css';
import Logo from './icons/Logo';
const NavHeader = () => {
	return (
		<header className={classes.header}>
			<span className={classes.logo}>
				<Logo />
				<h1 className={classes.title}>omakase</h1>
			</span>
			<nav>
				<ul className={classes.links}>
					<li>
						<Link href='/'>
							<a className={classes.link}>Home</a>
						</Link>
					</li>
					<li>
						<Link href='/reservations'>
							<a className={classes.link}>Reservations</a>
						</Link>
					</li>
					<li>
						<Link href='/order'>
							<a className={classes.link}>Order</a>
						</Link>
					</li>
					<li>
						<Link href='/contact'>
							<a className={classes.link}>Contact us</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default NavHeader;
