import useAccount from "hooks/useAccount";
import { useEffect } from "react";
import "./App.css";
import ConnectWalletModal from "./components/organisms/ConnectWalletModal/ConnectWalletModal";
import GlobalModal from "./components/organisms/GlobalModal/GlobalModal";

function App() {
  useEffect(() => {
    GlobalModal.show(<ConnectWalletModal onClose={GlobalModal.hide} />);
  }, []);
  const account = useAccount();
  return (
    <div className="App">
      <GlobalModal />
      Hello world !!!
      <p>Your address is {account}</p>
    </div>
  );
}

export default App;
