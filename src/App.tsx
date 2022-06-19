import { useActiveWeb3React } from "hooks";
import { Home } from "pages/Home";
import { Inventory } from "pages/Inventory";
import { MysteryBox } from "pages/MysteryBox";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const { account } = useActiveWeb3React();
  useEffect(() => {
    if (account) localStorage.setItem("account", account);
  }, [account]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Inventory />} path="/inventory" />
        <Route element={<MysteryBox />} path="/mystery-box" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
