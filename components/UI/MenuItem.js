import classes from './MenuItem.module.css';
import Leaf from './icons/Leaf';
import Button from './Button';
const MenuItem = ({ item }) => {
	const displayedPrice = `$${Number.parseFloat(item.price).toFixed(2)}`;
	const handleAddToCart = () => {
		console.log(item.id, item.name);
	};

	return (
		<section className={classes.section}>
			<div
				className={classes.foto}
				style={{
					backgroundImage: `url('/sushi/${item.id}.jpg')`,
				}}
			>
				foto
			</div>
			<div className={classes.name}>
				{item.name}
				{item.vege && <Leaf />}
			</div>
			<div className={classes.price}>{displayedPrice}</div>
			<div className={classes.order}>
				<Button onClick={handleAddToCart}>Order</Button>
			</div>
		</section>
	);
};

export default MenuItem;
