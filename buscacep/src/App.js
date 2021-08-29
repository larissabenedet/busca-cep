import React from "react";
import styles from "./App.module.css";
import Menu from "./Components/Menu";
import Inicial from "./Components/Inicial";
import Resultado from "./Components/Resultado";
import Favoritos from "./Components/Favoritos";
import { GlobalStorage } from "./GlobalContext";

function App() {
  const pathname = window.location.pathname;
  
  return (
    <GlobalStorage>
      <Menu />
      <div className={styles.conteudo}>
        {pathname === "/resultado" && <Resultado />}
        {pathname === "/favoritos" && <Favoritos />}
        {pathname === "/" && <Inicial/>}
      </div>
    </GlobalStorage>
  );
}

export default App;
