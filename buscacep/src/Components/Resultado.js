import React from "react";
import styles from "./Resultado.module.css";
import { GlobalContext } from '../GlobalContext'
import { FaSearch, FaStar } from "react-icons/fa";

const Resultado = () => {
  const {handleFavoritos, storageCep} = React.useContext(GlobalContext)
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://viacep.com.br/ws/${storageCep}/json/`)
      .then((res) => res.json())
      .then((res) => setDados(res));
  }, [storageCep]);

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
            <a href="/">
              <FaSearch className={styles.icon} /> Nova busca
            </a>
            <a className={styles.iconStar} onClick={handleFavoritos}>
              <FaStar className={styles.icon} /> Adicionar aos favoritos
            </a>
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
