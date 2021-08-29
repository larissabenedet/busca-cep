import React from "react";
import styles from "./Resultado.module.css";
import { GlobalContext } from '../GlobalContext'
import { FaSearch, FaStar } from "react-icons/fa";

const Resultado = () => {
  const {handleFavoritos, storageCep, dados} = React.useContext(GlobalContext)

  return (
    <div className={styles.resultado}>
      <h2 className={styles.titulo}>Resultado de busca</h2>
      {!dados && <p>Carregando...</p>}
      {dados && (
        <>
          <table className={styles.tableResponsive}>
            <thead>
              <tr>
                <th className={styles.tablePadding}>CEP</th>
                <th>Logradouro</th>
                <th>Bairro</th>
                <th>Cidade/UF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.tablePadding}>{dados.cep}</td>
                <td>{dados.logradouro}</td>
                <td>{dados.bairro}</td>
                <td>
                  {dados.localidade}/{dados.uf}
                </td>
              </tr>
            </tbody>
          </table>

          <div className={styles.links}>
            <a href="/"><button><FaSearch className={styles.icon} /> Nova busca</button></a>
            <button onClick={handleFavoritos} className={styles.iconStar}><FaStar className={styles.icon} /> Adicionar aos favoritos</button>
          </div>

          <div className={styles.mapa}>
            <h2 className={styles.titulo}>Mapa</h2>
            <iframe
              width="100%"
              height="450"
              loading="lazy"
              allowFullScreen
              title={storageCep}
              src={`https://www.google.com/maps/embed/v1/search?q=${storageCep}&key=AIzaSyCsBSH6PpjWGJC5B4SCVvgnBmFC6lkC7Bo`}
            ></iframe>
          </div>
        </>
      )}
    </div>
  );
};

export default Resultado;
