import Header from "components/organisms/Header/Header";
import useAccount from "hooks/useAccount";
import { useEffect } from "react";
import "../src/styles/index.scss";
import ConnectWalletModal from "./components/organisms/ConnectWalletModal/ConnectWalletModal";
import GlobalModal from "./components/organisms/GlobalModal/GlobalModal";

function App() {
  useEffect(() => {
    GlobalModal.show(<ConnectWalletModal onClose={GlobalModal.hide} />);
  }, []);
  const account = useAccount();
  return (
    <div className="App">
      <Header />
      <GlobalModal />
      Hello world !!!
      <p>Your address is {account}</p>
    </div>
  );
}

export default App;
