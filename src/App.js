import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductAll from "./page/ProductAll";
import PrivateRoute from "./routes/PrivateRoute";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";

// npx json-server --watch db.json --port 4000
// npm start
// 참고 : 코딩알려주는누나 리액트 강의

function App() {
  let [authenticate, setAuthenticate] = useState(true);

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />

        <Route
          path="/product"
          element={<PrivateRoute authenticate={authenticate} />}
        />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
