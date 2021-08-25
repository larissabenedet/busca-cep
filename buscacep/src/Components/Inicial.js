import React from "react";
import styles from "./Inicial.module.css";

const Inicial = () => {
  const [cep, setCep] = React.useState("");

  return (
    <div className={styles.inicial}>
      <h2 className={styles.titulo}>Busca CEP</h2>
      <form>
        <label htmlFor="cep">Digite um CEP válido:</label>
        <input
          type="text"
          id="cep"
          placeholder="Exemplo: 888810475"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          required
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default Inicial