import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBookPage from "./pages/AddBookPage";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/tambah-buku" exact element={<AddBookPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
