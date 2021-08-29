import React from "react";
import styles from "./Menu.module.css";

const Menu = () => {
  const pathname = window.location.pathname;

  return (
    <nav className={styles.menu}>
      <div>
        <a href="/">
          <h1>BuscaCEP</h1>
        </a>
      </div>
      <div className={styles.navLinks}>
        <a href="/">
          <span className={pathname === "/" ? styles.ativo : undefined}>Inicial</span>
        </a>
        <a href="/favoritos">
          <span className={pathname === "/favoritos" ? styles.ativo : undefined}>
            Favoritos
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Menu;
