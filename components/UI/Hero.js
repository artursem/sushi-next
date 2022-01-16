import classes from './Hero.module.css';

const Hero = () => {
	return (
		<div className={classes.hero}>
			<h3>HINOKI COUNTER</h3>
			<p className={classes.light}>
				Experience our Edomae style tasting menu consisting of 5-6 small plates
				and a selection of seasonal nigiri served by Chef Noz. Guests are seated
				at our 200 year old Hinoki wood counter in a room surrounded by a dozen
				types of cedar woods.
			</p>
		</div>
	);
};

export default Hero;
