import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import Button from '../UI/Button';
import OrderForm from './OrderForm';
import classes from './Cart.module.css';

const Cart = (props) => {
	const [showForm, setShowForm] = useState(false);
	const cartProducts = useSelector((state) => state.cart.items);
	const total = cartProducts.reduce((sum, val) => {
		return sum + val.totalPrice;
	}, 0);

	const list = cartProducts.map((item) => (
		<CartItem key={item.id} item={item} />
	));

	const handleShowForm = () => {
		setShowForm(true);
	};
	const handleHideForm = () => {
		setShowForm(false);
	};

	const displayedTotal = `$${Number.parseFloat(total).toFixed(2)}`;
	return (
		<Fragment>
			<div className={classes.overlay} onClick={props.onClick}></div>
			<div className={classes.cart}>
				<p>Your order:</p>
				<ul>{list}</ul>
				<div className={classes.total}>
					Total: <b>{displayedTotal}</b>
				</div>
				<div className={classes.order}>
					{showForm ? (
						<OrderForm onClick={handleHideForm} />
					) : (
						<Button full={true} onClick={handleShowForm}>
							ORDER
						</Button>
					)}
				</div>
			</div>
		</Fragment>
	);
};

export default Cart;
