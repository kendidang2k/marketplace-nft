import { Home } from "pages/Home";
import { Inventory } from "pages/Inventory";
import { MysteryBox } from "pages/MysteryBox";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
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
