import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext, useEffect } from "react";
import axios from "axios";

// Page Imports
import Home from "./pages/Home";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";

// Reusable components
import Navbar from "./components/Navbar";

// Global Stylesheets
import "./assets/styles/styles.css";
import "./assets/styles/general.css";
import Footer from "./components/Footer";

// Context
import { ProductContext } from "./context/ProductContext";
import { useAlert } from "react-alert";

import baseUrl from "./api";

function App() {
  const alert = useAlert();
  const { setProducts } = useContext(ProductContext);

  useEffect(() => {
    const fetchPro = () => {
      axios
        .get(`${baseUrl}/products`)
        .then((res) => {
          console.log("res", res);
          setProducts(res.data);
        })
        .catch((err) => {
          if (err.request) {
            console.log(err);
            console.log(err.response);
          } else {
            console.log(err.response);
          }
          alert.error("Something went wrong fetching products!");
        });
    };
    fetchPro();
  }, [alert, setProducts]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/product/:id" exact component={ProductDetails} />
          <Route path="*" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
