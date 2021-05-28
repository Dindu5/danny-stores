import { NavLink } from "react-router-dom";

// Context
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  console.log(cart);

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NavLink className="navbar-brand" exact to="/">
            <h2>
              Danny <em>Stores</em>
            </h2>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item" activeClassName="active">
                <NavLink className="nav-link" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/products">
                  Our Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/cart">
                  Cart
                  <span className="cart-number">{cart.total_items}</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/checkout">
                  Checkout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
