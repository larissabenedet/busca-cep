import React from "react";
import styles from "./App.module.css";
import Menu from "./Components/Menu";
import Resultado from "./Components/Resultado";
import Favoritos from "./Components/Favoritos";

function App() {
  const pathname = window.location.pathname;
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
    <>
      <Menu />
      <div className={styles.conteudo}>
        {pathname === "/resultado" && <Resultado />}
        {pathname === "/favoritos" && <Favoritos />}
        {pathname === "/" && (
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
        )}
      </div>
    </>
  );
}

export default App;
