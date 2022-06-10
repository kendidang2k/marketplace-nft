import { ethers } from "ethers";
import getRpcUrl from "utils/getRpcUrl";

const RPC_URL = getRpcUrl(process.env.REACT_APP_CHAIN_ID as any);

export const simpleRpcProvider = new ethers.providers.JsonRpcProvider(RPC_URL);

export default null;
