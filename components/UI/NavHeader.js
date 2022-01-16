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
					<li>link1</li>
					<li>link1</li>
					<li>link1</li>
					<li>link1</li>
				</ul>
			</nav>
		</header>
	);
};

export default NavHeader;
