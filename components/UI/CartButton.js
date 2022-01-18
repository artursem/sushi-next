import CartIcon from './icons/CartIcon';
import classes from './CartButton.module.css';
const CartButton = (props) => {
	return (
		<button className={classes.cartBtn} onClick={props.onClick}>
			<CartIcon />
		</button>
	);
};

export default CartButton;
