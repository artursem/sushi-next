import { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import CartItem from './CartItem';
import Button from '../UI/Button';
import OrderForm from './OrderForm';
import GenericButton from '../UI/GenericButton';
import classes from './Cart.module.css';
import CloseIcon from '../UI/icons/CloseIcon';

const Cart = (props) => {
	const [showForm, setShowForm] = useState(false);
	const cartProducts = useSelector((state) => state.cart.items);
	const dispatch = useDispatch();

	const list = cartProducts.map((item) => (
		<CartItem key={item.id} item={item} />
	));

	const handleShowForm = () => {
		setShowForm(true);
	};
	const handleHideForm = () => {
		setShowForm(false);
	};
	const handleSubmit = async (customerData) => {
		const response = await fetch(
			'https://sushi-e3a8a-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
			{
				method: 'POST',
				body: JSON.stringify({
					customer: customerData,
					order: cartProducts,
				}),
			}
		);
		// add error handling ########################################################
		if (response.ok) {
			dispatch(cartActions.dropCart());
			props.onHideCart();
		} else {
			throw new Error('Something went wrong');
		}
	};

	const total = cartProducts.reduce((sum, val) => {
		return sum + val.totalPrice;
	}, 0);
	const displayedTotal = `$${Number.parseFloat(total).toFixed(2)}`;

	let cartContent = (
		<div className={classes.emptyCart}>
			<p>
				Your cart is empty.
				<br /> Please, add some items.
			</p>
		</div>
	);

	if (cartProducts.length > 0) {
		cartContent = (
			<Fragment>
				<p>Your order:</p>
				<ul>{list}</ul>
				<div className={classes.total}>
					Total: <b>{displayedTotal}</b>
				</div>
				<div className={classes.order}>
					{showForm ? (
						<OrderForm onClick={handleHideForm} onSubmit={handleSubmit} />
					) : (
						<Button full={true} onClick={handleShowForm}>
							ORDER
						</Button>
					)}
				</div>
			</Fragment>
		);
	}

	return (
		<Fragment>
			<div className={classes.overlay} onClick={props.onHideCart}></div>
			<div className={classes.cart}>
				<div className={classes.closeBtnSection}>
					<GenericButton onClick={props.onHideCart}>
						<CloseIcon />
					</GenericButton>
				</div>
				{cartContent}
			</div>
		</Fragment>
	);
};

export default Cart;
