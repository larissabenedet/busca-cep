import React from "react";
import { GlobalContext } from "../GlobalContext";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./Favoritos.module.css";

const Favoritos = () => {
  const { favoritos } = React.useContext(GlobalContext);

  const properties = {
    duration: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
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
                  <span className={styles.cep}>CEP: {endereco}</span>
                  <button>Mais informações</button>
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
