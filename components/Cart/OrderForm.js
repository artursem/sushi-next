import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import classes from './OrderForm.module.css';
import Button from '../UI/Button';

const OrderForm = (props) => {
	const nameRef = useRef();
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit} className={classes.form}>
			<label htmlFor='fullName' className={classes.label}>
				Name:
				<input id='fullName' type='text' className={classes.input} />
			</label>
			<label htmlFor='address' className={classes.label}>
				Address:
				<input id='address' type='text' className={classes.input} />
			</label>
			<label htmlFor='phone' className={classes.label}>
				Phone number:
				<input
					id='phone'
					type='number'
					min='9'
					className={`${classes.input} ${classes.error}`}
				/>
			</label>
			<div className={classes.actions}>
				<Button type='submit' full>
					Submit
				</Button>
				<Button full secondary onClick={props.onClick}>
					Cancel
				</Button>
			</div>
		</form>
	);
};

export default OrderForm;
