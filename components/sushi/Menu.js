import { Fragment, useState } from 'react';
import CartButton from '../UI/CartButton';
import Cart from './Cart';
import MenuItem from '../UI/MenuItem';
import classes from './Menu.module.css';

const Menu = (props) => {
	const [showCart, setShowCart] = useState(false);
	const handleShowCart = () => {
		console.log('show');
		setShowCart(true);
	};
	const handleHideCart = () => {
		setShowCart(false);
	};

	const menuItems = props.menu.map((item) => {
		return <MenuItem item={item} key={item.id} />;
	});

	return (
		<Fragment>
			<CartButton onClick={handleShowCart} />
			{showCart && <Cart onClick={handleHideCart} />}
			<ul className={classes.menu}>{menuItems}</ul>
		</Fragment>
	);
};

export default Menu;
