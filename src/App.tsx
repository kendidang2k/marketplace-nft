import Home from "pages/Home";
import { Inventory } from "pages/Inventory";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Inventory />} path="/inventory" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
