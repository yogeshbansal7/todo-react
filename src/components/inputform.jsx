const InputText = (props) => (
  <div className="input_container mt-5 mb-5">
    <div className="input_in_container input-group mb-3">
      <input
        type="text"
        onKeyUp={props.onKeyUpInput}
        onChange={props.onInputTextChange}
        className="form-control"
        placeholder="Enter Task to add"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        value={props.value}
      />
      <button
        onClick={props.onButtonClick}
        className="btn btn-outline-dark"
        type="button"
        id="button-addon2"
      >
        {props.buttonText}
      </button>
    </div>
  </div>
);

export default InputText;
