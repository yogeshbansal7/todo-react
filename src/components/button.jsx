const Button = (props) => {
    console.log('Button - Component');
    return (
    <button className="btn btn-outline-dark" onClick={props.onButtonClick}>{props.buttonText}</button>
)};

export default Button;