import React from "react";
import './app.css'
import ButtonAction from "./components/button-action";

const App = () => {
  return(
    <div>
      <div className="header">
        <div className="title">
          <p id="title-header" >Impulsamos negocios <br/> digitales con tu apoyo</p>
          <p id="body-title-header">Se parte de la transformación digital de <br/> emprendedores y PYMES</p>
        </div>
        <div className="buttons-actions">
          <ButtonAction text="Quiero comprar"/>
          <ButtonAction text="Ver productos"/>
        </div>
      </div>
    </div>
  )
}

export default App