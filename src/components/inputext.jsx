import React from 'react'

function InputText(props) {

    let backgroundcolor = props.color 
    
    return (
        <input  style={{width : "43rem" , background : backgroundcolor , paddingLeft: "1rem"}} type="text" readonly value={props.value}
        onKeyUp={props.onKeyUpInput}
        onChange={props.onInputTextChange}></input>
    )
}

export default InputText;
