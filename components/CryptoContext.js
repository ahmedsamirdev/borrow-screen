import React, { createContext, useState } from "react";

const CryptoContext = createContext();

function CryptoContextProvider(props) {
  const [hasCrypto, setHasCrypto] = useState(true);

  const toggleCrypto = () => {
    setHasCrypto(!hasCrypto);
  };

  return (
    <>
      <CryptoContext.Provider value={{ hasCrypto, toggleCrypto }}>
        {props.children}
      </CryptoContext.Provider>
    </>
  );
}

export { CryptoContext, CryptoContextProvider };
