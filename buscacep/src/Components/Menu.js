import React from "react";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <div>
        <a href="/">
          <h1>
            <i>Busca</i>CEP
          </h1>
        </a>
      </div>
      <div className={styles.navLinks}>
        <a href="/">Inicial</a>
        <a href="/favoritos">Favoritos</a>
      </div>
    </nav>
  );
};

export default Menu
