import React from "react";
import "./style.css"

const ButtonAction = ({ style = false, textLabel = "no hay texto" }) => {
    return(
        <div className="button-action">
            <p id={style ? "button-action-text1" : "button-action-text2"}>{textLabel}</p>
        </div>
    )
}
export default ButtonAction