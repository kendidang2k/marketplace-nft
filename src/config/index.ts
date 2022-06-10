import BigNumber from "bignumber.js/bignumber";
import { AddressMap, ChainId } from "@diviner-protocol/v2-sdk";

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});

export const BSC_BLOCK_TIME = 3;
export const DPT_PER_BLOCK = new BigNumber(10);
export const BLOCKS_PER_YEAR = new BigNumber(
  (60 / BSC_BLOCK_TIME) * 60 * 24 * 365
); // 10512000
export const BASE_URL = "https://luckyswap.finance";
export const BASE_EXCHANGE_URL = "https://luckyswap.finance";
export const BASE_ADD_LIQUIDITY_URL = `${BASE_EXCHANGE_URL}/#/add`;
export const BASE_LIQUIDITY_POOL_URL = `${BASE_EXCHANGE_URL}/#/pool`;
export const LOTTERY_MAX_NUMBER_OF_TICKETS = 25;
export const LOTTERY_MAX_TICKET_IN_ROUND = 300;
export const BASE_API_ADMIN = "https://dashboard.luckyswap.exchange";
export const BASE_API_ADMIN_PRO = "https://dashboard-pro.luckyswap.exchange";
export const PREDICTION_API_URL = "https://api-prediction.diviner.me";
export const CAKE_PRICE = 14; // TODO: this one will call api
export const CAKE_BNB_PRICE = 1;
export const DPT_PER_YEAR = DPT_PER_BLOCK.times(BLOCKS_PER_YEAR);

export const DPT_ADDRESS: AddressMap = {
  [ChainId.BSC]: "0xE69cAef10A488D7AF31Da46c89154d025546e990",
  [ChainId.BSC_TESTNET]: "0x4d87EE06A797Ea69f39Bf47C0505a3866Ced1273",
  [ChainId.MATIC]: "0x09FceE7287f882c5eEAb8032A64FDE54Fc1dD055",
  [ChainId.MATIC_TESTNET]: "0xC2Ab68f3bE82a87DAFfE3386A13958A2B936260D",
};
