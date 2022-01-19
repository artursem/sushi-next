import classes from './Button.module.css';

const Button = (props) => {
	const btnClasses = `${classes.btn} ${props.full ? classes.full : ''} 
	${props.secondary ? classes.btnSecondary : ''}
	`;
	return (
		<button
			className={btnClasses}
			onClick={props.onClick}
			type={props.type || 'button'}
			disabled={props.disabled ? true : false}
		>
			{props.children}
		</button>
	);
};

export default Button;
