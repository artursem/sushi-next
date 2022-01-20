import classes from './GenericButton.module.css';
const GenericButton = (props) => {
	return (
		<button type='button' className={classes.button} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export default GenericButton;
