import useInput from '../../hooks/use-input';
import Button from '../UI/Button';
import classes from './OrderForm.module.css';

const isNotEmpty = (value) => value.trim() !== '';
const isNumber = (value) => value.length === 9;

const OrderForm = (props) => {
	const {
		value: firstNameValue,
		isValid: firstNameIsValid,
		hasError: firstNameHasError,
		valueChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: resetFirstName,
	} = useInput(isNotEmpty);
	const {
		value: addressValue,
		isValid: addressIsValid,
		hasError: addressHasError,
		valueChangeHandler: addressChangeHandler,
		inputBlurHandler: addressBlurHandler,
		reset: resetAddress,
	} = useInput(isNotEmpty);
	const {
		value: numberValue,
		isValid: numberIsValid,
		hasError: numberHasError,
		valueChangeHandler: numberChangeHandler,
		inputBlurHandler: numberBlurHandler,
		reset: resetNumber,
	} = useInput(isNumber);

	let formIsValid = false;
	if (firstNameIsValid && addressIsValid && numberIsValid) {
		formIsValid = true;
	}

	const formSubmitHandler = (event) => {
		event.preventDefault();

		if (!formIsValid) {
			console.log('not valid');
			return;
		}
		props.onSubmit({
			name: firstNameValue,
			address: addressValue,
			number: numberValue,
		});
		// console.log(firstNameValue, addressValue, numberValue);
		resetFirstName();
		resetAddress();
		resetNumber();
	};

	const firstNameClasses = firstNameHasError
		? `${classes.label} ${classes.error}`
		: `${classes.label}`;
	const addressClasses = addressHasError
		? `${classes.label} ${classes.error}`
		: `${classes.label}`;
	const numberClasses = numberHasError
		? `${classes.label} ${classes.error}`
		: `${classes.label}`;

	return (
		<form onSubmit={formSubmitHandler} className={classes.form}>
			<div className={firstNameClasses}>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					id='name'
					value={firstNameValue}
					onChange={firstNameChangeHandler}
					onBlur={firstNameBlurHandler}
					className={classes.input}
				/>
				{firstNameHasError && (
					<p className={classes.errorText}>Please entere valid name</p>
				)}
			</div>
			<div className={addressClasses}>
				<label htmlFor='name'>Address</label>
				<input
					type='text'
					id='address'
					value={addressValue}
					onChange={addressChangeHandler}
					onBlur={addressBlurHandler}
					className={classes.input}
				/>
				{addressHasError && (
					<p className={classes.errorText}>Please entere valid address</p>
				)}
			</div>
			<div className={numberClasses}>
				<label htmlFor='name'>Phone number</label>
				<input
					type='number'
					id='number'
					value={numberValue}
					onChange={numberChangeHandler}
					onBlur={numberBlurHandler}
					className={classes.input}
				/>
				{numberHasError && (
					<p className={classes.errorText}>Please entere valid number</p>
				)}
			</div>
			<div className={classes.actions}>
				<Button type='submit' full disabled={!formIsValid}>
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
