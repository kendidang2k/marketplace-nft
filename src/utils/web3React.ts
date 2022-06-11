import { Web3Provider } from "@ethersproject/providers";
import { ConnectorNames } from "@diviner-protocol/uikit";
import { ChainId } from "@diviner-protocol/v2-sdk";
import { bscConnector, injected, walletconnect } from "connectors";
import { ethers } from "ethers";

// const injected = new InjectedConnector({ supportedChainIds: [chainId] })
// const injected = new InjectedConnector({ supportedChainIds: [56, 97, 137, 80001] })

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.BSC]: bscConnector,
};

export default function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 15_000;
  return library;
}

export const getChainId = (): ChainId => {
  return parseInt(
    process.env.REACT_APP_CHAIN_ID || window.localStorage.getItem("chainId")
  ) as ChainId;
};
