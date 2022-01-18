import CartIcon from './icons/CartIcon';
import classes from './CartButton.module.css';
const CartButton = () => {
	return (
		<button className={classes.cartBtn}>
			<CartIcon />
		</button>
	);
};

export default CartButton;
