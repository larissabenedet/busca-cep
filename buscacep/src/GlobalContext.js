import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [cep, setCep] = React.useState("");
  const [validaCep, setValidaCep] = React.useState(true);
  const [favoritos, setFavoritos] = React.useState(JSON.parse(window.localStorage.getItem("favoritos")) || []);
  const storageCep = window.localStorage.getItem("cep");

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

  function handleFavoritos() {
    setFavoritos([...favoritos, storageCep])
    window.localStorage.setItem("favoritos", JSON.stringify(favoritos))
  }

  return (
    <GlobalContext.Provider
      value={{
        cep,
        setCep,
        validaCep,
        handleSubmit,
        handleFavoritos,
        favoritos,
        storageCep,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
