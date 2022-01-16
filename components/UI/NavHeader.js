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
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href='/reservations'>
							<a>Reservations</a>
						</Link>
					</li>
					<li>
						<Link href='/order'>
							<a>Order</a>
						</Link>
					</li>
					<li>
						<Link href='/contact'>
							<a>Contact us</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default NavHeader;
