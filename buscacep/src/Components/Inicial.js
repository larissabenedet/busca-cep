import React from "react";
import styles from "./Inicial.module.css";

const Inicial = () => {
  const [cep, setCep] = React.useState("");
  const [validaCep, setValidaCep] = React.useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    if (cep !== "") {
      
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        setValidaCep(true);
        window.localStorage.setItem("cep", cep);
        window.location.href = "/resultado";
      } else {
        setValidaCep(false);
      }
    }
  }

  return (
    <div className={styles.inicial}>
      <h2 className={styles.titulo}>Busca CEP</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cep">Digite um CEP:</label>
        <input
          type="text"
          id="cep"
          name="cep"
          placeholder="Exemplo: 88801010"
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
};

export default Inicial;
