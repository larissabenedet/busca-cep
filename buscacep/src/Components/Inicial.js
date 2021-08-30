import React from "react";
import { GlobalContext } from "../GlobalContext";
import styles from "./Inicial.module.css";

function Inicial() {
  const { cep, setCep, validaCep, handleSubmit } = React.useContext(GlobalContext);

  return (
    <div className={styles.inicial}>
      <h2 className={styles.titulo}>Busca CEP</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cep">Digite um CEP:</label>
        <input
          type="text"
          id="cep"
          name="cep"
          placeholder="Exemplo: 64034606"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          required
          style={{ border: !validaCep && "solid 1px red" }}
        />
        {!validaCep && <p>Erro: CEP inválido.</p>}
        <button>Buscar</button>
      </form>
    </div>
  );
}

export default Inicial;
