import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NavLink className="navbar-brand" exact to="/">
            <h2>
              Sixteen <em>Clothing</em>
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
                  <span className="cart-number">0</span>
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
