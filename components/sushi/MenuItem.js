import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import Leaf from '../UI/icons/Leaf';
import Button from '../UI/Button';
import classes from './MenuItem.module.css';

const MenuItem = ({ item }) => {
	const { id, name, price, vege } = item;
	const dispatch = useDispatch();

	const displayedPrice = `$${Number.parseFloat(price).toFixed(2)}`;
	const handleAddToCart = () => {
		dispatch(
			cartActions.addItemToCart({
				id,
				name,
				price,
			})
		);
	};

	return (
		<section className={classes.section}>
			<div
				className={classes.foto}
				style={{
					backgroundImage: `url('/sushi/${id}.jpg')`,
				}}
			>
				foto
			</div>
			<div className={classes.name}>
				{name}
				{vege && <Leaf />}
			</div>
			<div className={classes.price}>{displayedPrice}</div>
			<div className={classes.order}>
				<Button onClick={handleAddToCart}>Add to cart</Button>
			</div>
		</section>
	);
};

export default MenuItem;
