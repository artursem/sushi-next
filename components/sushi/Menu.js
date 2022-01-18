import { Fragment } from 'react';
import CartButton from '../UI/CartButton';
import MenuItem from '../UI/MenuItem';
import classes from './Menu.module.css';

const Menu = (props) => {
	const menuItems = props.menu.map((item) => {
		return <MenuItem item={item} key={item.id} />;
	});

	return (
		<Fragment>
			<CartButton />
			<ul className={classes.menu}>{menuItems}</ul>
		</Fragment>
	);
};

export default Menu;
