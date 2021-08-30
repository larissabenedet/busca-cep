import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [cep, setCep] = React.useState("");
  const [validaCep, setValidaCep] = React.useState(true);
  const [favoritos, setFavoritos] = React.useState(
    JSON.parse(window.localStorage.getItem("favoritos")) || []
  );
  const [dados, setDados] = React.useState(null);
  const [buttonState, setButtonState] = React.useState(false);
  const storageCep = window.localStorage.getItem("cep");

  React.useEffect(() => {
    // fetch com o cep informado
    if (storageCep)
      fetch(`https://viacep.com.br/ws/${storageCep}/json/`)
        .then((res) => res.json())
        .then((res) => setDados(res));
  }, [storageCep]);

  React.useEffect(() => {
    // atualiza a lista de favoritos no browser
    window.localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  function handleSubmit(e) {
    // valida o cep informado e chama a página resultado
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
    // adiciona um novo cep favorito a lista de favoritos
    setFavoritos([...favoritos, storageCep]);
    setButtonState(true)
  }

  function handleCepFavorito(cep) {
    // seta no browser o cep favorito selecionado, e redireciona para a página resultado
    window.localStorage.setItem("cep", cep);
    window.location.href = "/resultado";
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
        dados,
        handleCepFavorito,
        buttonState
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
