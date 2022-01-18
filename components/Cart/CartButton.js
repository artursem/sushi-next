import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartIcon from '../UI/icons/CartIcon';
import classes from './CartButton.module.css';
const CartButton = (props) => {
	const items = useSelector((state) => state.cart.items);
	const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
	const numberOfCartItems = items.reduce((curNumber, item) => {
		return curNumber + item.quantity;
	}, 0);

	const btnClasses = `${classes.cartBtn} ${
		btnIsHighlighted ? classes.bump : ''
	}`;

	useEffect(() => {
		if (items.length === 0) {
			return;
		}
		setBtnIsHighlighted(true);

		const timer = setTimeout(() => {
			setBtnIsHighlighted(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [items]);
	return (
		<button className={btnClasses} onClick={props.onClick}>
			{numberOfCartItems > 0 && (
				<div className={classes.bubble}>{numberOfCartItems}</div>
			)}
			<CartIcon />
		</button>
	);
};

export default CartButton;
