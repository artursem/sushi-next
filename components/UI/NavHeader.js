import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from './NavHeader.module.css';
import Logo from './icons/Logo';
const NavHeader = () => {
	const router = useRouter();
	return (
		<header className={classes.header}>
			<span className={classes.logo}>
				<Link href='/'>
					<a>
						<Logo />
						<h1 className={classes.title}>omakase</h1>
					</a>
				</Link>
			</span>
			<nav className={classes.nav}>
				<ul className={classes.links}>
					<li>
						<Link href='/'>
							<a className={router.pathname === '/' ? `${classes.active}` : ``}>
								Home
							</a>
						</Link>
					</li>
					<li>
						<Link href='/order'>
							<a
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
								className={
									router.pathname === '/reservations' ? `${classes.active}` : ``
								}
							>
								Reservations
							</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default NavHeader;
