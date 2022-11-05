import "./App.css";
import MenuPage from "./pages/MenuPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/:collectionName" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
