import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import classes from './Cart.module.css';

const Cart = (props) => {
	const cartProducts = useSelector((state) => state.cart.items);
	const list = cartProducts.map((item) => (
		<li key={item.id}>
			{item.name}, {item.quantity}
		</li>
	));
	return (
		<Fragment>
			<div className={classes.overlay} onClick={props.onClick}></div>
			<div className={classes.cart}>
				<ul>{list}</ul>
			</div>
		</Fragment>
	);
};

export default Cart;
