import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import Image from 'next/image';
import Button from '../UI/Button';
import classes from './CartItem.module.css';

const CartItem = ({ item }) => {
	const { id, name, price, quantity } = item;
	const dispatch = useDispatch();

	const handleAddToCart = () => {
		dispatch(
			cartActions.addItemToCart({
				id,
				name,
				price,
			})
		);
	};

	const handleRemoveFromCart = () => {
		dispatch(cartActions.removeItemFromCart(id));
	};

	const displayedPrice = `$${Number.parseFloat(price).toFixed(2)}`;

	return (
		<li className={classes.item}>
			<Image src={`/sushi/${id}.jpg`} alt={name} width='80' height='80' />
			<b>{name}</b>
			<div>{displayedPrice}</div>
			<div className={classes.btns}>
				<Button onClick={handleRemoveFromCart}>-</Button>
				<p>{quantity}</p>
				<Button onClick={handleAddToCart}>+</Button>
			</div>
		</li>
	);
};

export default CartItem;
