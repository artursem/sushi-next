import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import classes from './Cart.module.css';

const Cart = (props) => {
	const cartProducts = useSelector((state) => state.cart.items);
	const total = cartProducts.reduce((sum, val) => {
		return sum + val.totalPrice;
	}, 0);

	const list = cartProducts.map((item) => (
		<CartItem key={item.id} item={item} />
	));
	return (
		<Fragment>
			<div className={classes.overlay} onClick={props.onClick}></div>
			<div className={classes.cart}>
				<ul>{list}</ul>
				<div>Total: {total}</div>
			</div>
		</Fragment>
	);
};

export default Cart;
