import React from "react";
import { ModalProvider } from "@diviner-protocol/uikit";
import { Web3ReactProvider, createWeb3ReactRoot } from "@web3-react/core";
import getLibrary from "utils/web3React";
// eslint-disable-next-line
const Web3ProviderNetwork = createWeb3ReactRoot("NETWORK");

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <ModalProvider>{children}</ModalProvider>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  );
};

export default Providers;
