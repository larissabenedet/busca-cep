import React from "react";
import { GlobalContext } from "../GlobalContext";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./Favoritos.module.css";
import { FaMapMarkerAlt, FaAngleDoubleRight } from "react-icons/fa";

const Favoritos = () => {
  const { favoritos, handleCepFavorito } = React.useContext(GlobalContext);

  const properties = {
    duration: 3000,
    slidesToShow: window.matchMedia("(max-width:885px)").matches ? 1 : favoritos.length > 3 ? 3 : favoritos.length,
    slidesToScroll: window.matchMedia("(max-width:885px)").matches ? 1 : favoritos.length > 3 ? 3 : favoritos.length,
    autoplay: false
  };

  if (favoritos.length <= 0 || !favoritos)
    return (
      <div className={styles.favoritos}>
        <h2 className={styles.titulo}>
          Você ainda não adicionou nenhum endereço aos favoritos.
        </h2>
      </div>
    );
  return (
    <div className={styles.favoritos}>
      <h2 className={styles.titulo}>Favoritos</h2>
      <div className={styles.wrapperSlider}>
        <Slide easing="ease" {...properties}>
          {favoritos.map((endereco) => {
            return (
              <div key={endereco}>
                <div className={styles.slide}>
                  <FaMapMarkerAlt className={styles.iconMap} />
                  <span className={styles.cep}>CEP: {endereco}</span>
                  <span
                    className={styles.botao}
                    onClick={() => handleCepFavorito(endereco)}
                  >
                    Mais informações{" "}
                    <FaAngleDoubleRight className={styles.iconSeta} />
                  </span>
                </div>
              </div>
            );
          })}
        </Slide>
      </div>
    </div>
  );
};

export default Favoritos;
