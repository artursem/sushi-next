import React from 'react';
import classes from './BlockChef.module.css';

const BlockChef = () => {
	return (
		<section className={classes.section}>
			<div className={classes.img}></div>
			<p className={classes.text}>
				A chef that really needs no introduction, Masa Takayama’s esteemed
				three-star sushi temple — notorious for its no-photo policy — reigns
				atop the Deutsche Bank Center, commanding what some consider to be
				America’s best, and priciest, omakase.
			</p>
		</section>
	);
};

export default BlockChef;
