import classes from './Menu.module.css';
import MenuItem from '../UI/MenuItem';

const Menu = (props) => {
	const menuItems = props.menu.map((item) => {
		return <MenuItem item={item} key={item.id} />;
	});

	return <ul className={classes.menu}>{menuItems}</ul>;
};

export default Menu;
