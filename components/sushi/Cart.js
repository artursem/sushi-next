import classes from './Cart.module.css';
import { Fragment } from 'react';

const Cart = (props) => {
	return (
		<Fragment>
			<div className={classes.overlay} onClick={props.onClick}></div>
			<div className={classes.cart}>list of items</div>
		</Fragment>
	);
};

export default Cart;
