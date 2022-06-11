import { ChainId } from "@diviner-protocol/v2-sdk";
import addresses from "config/constants/contracts";
import tokens from "config/constants/tokens";
import { Address } from "config/constants/types";
import { getChainId } from "./web3React";

// TODO : Improve
export const getAddress = (address: Address, chainId?: ChainId): string => {
  const tempChainId = getChainId();
  // const mainNetChainId = 56
  const envChainId = process.env.REACT_APP_CHAIN_ID;
  return address[envChainId];
};

export const getMulticallAddress = (chainId?: ChainId) => {
  return getAddress(addresses.mulltiCall, chainId);
};
export const getWbnbAddress = (chainId?: ChainId) => {
  return getAddress(tokens.wbnb.address, chainId);
};

export const getBusdAddress = (chainId?: ChainId) => {
  return getAddress(tokens.busd.address, chainId);
};

export const getFaucetAddress = (chainId?: ChainId) => {
  return getAddress(addresses.faucet, chainId);
};

export const getNFTsTransferProxyAddress = (chainId?: ChainId) => {
  return getAddress(addresses.nftsTransferProxy, chainId);
};
export const getTokenTransferProxyAddress = (chainId?: ChainId) => {
  return getAddress(addresses.tokenTransferProxy, chainId);
};
