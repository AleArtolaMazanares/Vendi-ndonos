import React from "react";
import "./style.css"

const ButtonAction = ({text = 'no hay texto'}) => {
    return(
        <div className="button-action">
            <p id="button-action-text">{text}</p>
        </div>
    )
}

export default ButtonAction