import "./styles.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Products from "../src/components/Products";
import Product from "../src/components/Product";
import Footer from "../src/components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:id" element={<Product />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
