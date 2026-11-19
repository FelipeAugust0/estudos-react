import React, { useState, useEffect } from "react";

function ContadorCurtidas() {
  const [curtidas, setCurtidas] = useState(0);

  useEffect(() => {
    if (curtidas >= 5) {
      console.log("Curtidas em alta!");
      alert("Curtidas em alta!");
    }
  }, [curtidas]);

  const incrementar = () => {
    setCurtidas(curtidas + 1);
  };

  return (
    <div className="container">
      <h2 className="titulo">Contador de Curtidas</h2>
      <p className="contador">Total de curtidas: <span>{curtidas}</span></p>
      <button className="botao" onClick={incrementar}>
        Curtir
      </button>
    </div>
  );
}

export default ContadorCurtidas;
