import React from 'react'
import styles from "./App.module.css";
import Favoritos from './Components/Favoritos';
import Inicial from './Components/Inicial';
import Menu from './Components/Menu'

function App() {
  const pathname = window.location.pathname
  return (
    <>
    <Menu />
    <div className={styles.conteudo}>
      {pathname === '/' && <Inicial/>}
      {pathname === '/favoritos' && <Favoritos/>}
    </div>
    </>
    
  );
}

export default App;