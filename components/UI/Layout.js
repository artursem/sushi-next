import NavHeader from './NavHeader';
import classes from './Layout.module.css';
import Footer from './Footer';
const Layout = ({ children }) => {
	return (
		<div className={classes.layout}>
			<NavHeader />
			<div className={classes.content}>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
