import { useWeb3React } from "@web3-react/core";
import { useActiveWeb3React } from "hooks";

const useAccount = () => {
  const { account } = useActiveWeb3React();
  const localAccount = localStorage.getItem("account");
  return account || localAccount;
};
export default useAccount;
