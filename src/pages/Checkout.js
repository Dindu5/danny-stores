import { commerce } from "../lib/commerce";
import { CartContext } from "../context/CartContext";
import { useContext, useEffect, useState } from "react";

function Checkout() {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    user_address: "",
    email_address: "",
    zip_code: "",
  });
  const [shippingCountries, setshippingCountries] = useState([]);
  const [shippingCountry, setshippingCountry] = useState("");
  const [shippingSubDivisions, setshippingSubDivisions] = useState([]);
  const [shippingSubdivision, setshippingSubdivision] = useState("");
  const [shippingOptions, setshippingOptions] = useState([]);
  const [shippingOption, setshippingOption] = useState("");
  // Context
  const { cart, checkoutToken, generateToken } = useContext(CartContext);

  const checkoutTokenID = checkoutToken && checkoutToken.id;

  // Handling countries
  useEffect(() => {
    generateToken();
    fetchShippingCountries();
  }, []);

  const fetchShippingCountries = async () => {
    try {
      const { countries } = await commerce.services.localeListShippingCountries(
        checkoutTokenID
      );
      setshippingCountries(countries);
      setshippingCountry(Object.keys(countries)[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const countryList = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));

  // Handling subdivisions
  const fetchSubDivisions = async (countryCode) => {
    try {
      const { subdivisions } = await commerce.services.localeListSubdivisions(
        countryCode
      );
      console.log("here", subdivisions);
      setshippingSubDivisions(subdivisions);
      setshippingSubdivision(Object.keys(subdivisions)[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (shippingCountry) fetchSubDivisions(shippingCountry);
  }, [shippingCountry]);

  const subDivisionList = Object.entries(shippingSubDivisions).map(
    ([code, name]) => ({
      id: code,
      label: name,
    })
  );

  // Handling shipping options
  const fetchShippingOptions = async (
    checkoutTokenID,
    country,
    region = null
  ) => {
    try {
      const options = await commerce.checkout.getShippingOptions(
        checkoutTokenID,
        { country, region }
      );
      setshippingOptions(options);
      setshippingOption(options[0].id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        checkoutTokenID,
        shippingCountry,
        shippingSubdivision
      );
  }, [shippingSubdivision]);

  const options = shippingOptions.map((option) => ({
    id: option.id,
    label: `${option.description} - (${option.price.formatted_with_symbol})`,
  }));

  console.log(cart);
  console.log(checkoutToken);

  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(e);
    const items = {
      ...values,
      country: shippingCountry,
      division: shippingSubdivision,
      option: shippingOption,
    };
    console.log(items);
  };

  return (
    <div>
      <div className="checkout shopping mt-20">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="block billing-details">
                <h4 className="widget-title">Billing Details</h4>
                <hr />
                <form onSubmit={submitForm} className="checkout-form">
                  <div className="checkout-name clearfix">
                    <div className="form-group">
                      <label htmlFor="first_name">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="first_name"
                        name="first_name"
                        placeholder=""
                        onChange={handleInput}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="last_name">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="last_name"
                        name="last_name"
                        placeholder=""
                        onChange={handleInput}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="user_address">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="user_address"
                      name="user_address"
                      placeholder=""
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email_address">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email_address"
                      placeholder=""
                      name="email_address"
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div className="checkout-country-code clearfix">
                    <div className="form-group">
                      <label htmlFor="user_post_code">Zip Code</label>
                      <input
                        type="text"
                        className="form-control"
                        id="user_post_code"
                        name="zip_code"
                        onChange={handleInput}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="user_country">Country</label>
                      <select
                        className="form-control"
                        name="user_country"
                        id="user_country"
                        value={shippingCountry}
                        onChange={(e) => {
                          setshippingCountry(e.target.value);
                        }}
                      >
                        {countryList.map((country) => (
                          <option key={country.id} value={country.id}>
                            {country.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="user_subdivision">Sub Division</label>
                    <select
                      className="form-control"
                      name="user_subdivision"
                      id="user_subdivision"
                      value={shippingSubdivision}
                      onChange={(e) => {
                        setshippingSubdivision(e.target.value);
                      }}
                    >
                      {subDivisionList.map((division) => (
                        <option key={division.id} value={division.id}>
                          {division.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="shipping_options">Shipping Options</label>
                    <select
                      className="form-control"
                      name="shipping_options"
                      id="shipping_options"
                      value={shippingOption}
                      onChange={(e) => {
                        setshippingOption(e.target.value);
                      }}
                    >
                      {options.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </form>
              </div>

              <div className="block">
                <h4 className="widget-title">Payment Method</h4>
                <hr />
                <p>Credit Cart Details (Secure payment)</p>
                <div className="checkout-product-details">
                  <div className="payment">
                    <div className="card-details">
                      <form className="checkout-form">
                        <div className="form-group">
                          <label htmlFor="card-number">
                            Card Number <span className="required">*</span>
                          </label>
                          <input
                            id="card-number"
                            className="form-control"
                            type="tel"
                            placeholder="•••• •••• •••• ••••"
                          />
                        </div>
                        <div className="form-group half-width padding-right">
                          <label htmlFor="card-expiry">
                            Expiry (MM/YY) <span className="required">*</span>
                          </label>
                          <input
                            id="card-expiry"
                            className="form-control"
                            type="tel"
                            placeholder="MM / YY "
                          />
                        </div>
                        <div className="form-group half-width padding-left">
                          <label htmlFor="card-cvc">
                            Card Code <span className="required">*</span>
                          </label>
                          <input
                            id="card-cvc"
                            className="form-control"
                            type="tel"
                            maxLength="4"
                            placeholder="CVC"
                          />
                        </div>
                        <button
                          type="submit"
                          onClick={submitForm}
                          className="button-primary mt-5"
                        >
                          Place Order
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="product-checkout-details">
                <div class="block">
                  <h4 class="widget-title">Order Summary</h4>
                  {cart.line_items ? (
                    cart.line_items.map((item) => (
                      <div class="media product-card" key={item.id}>
                        <a class="pull-left" href="product-single.html">
                          <img
                            class="media-object"
                            src={item.media.source}
                            alt={item.name}
                          />
                        </a>
                        <div class="media-body">
                          <h4 class="media-heading">
                            <a href="product-single.html">{item.name}</a>
                          </h4>
                          <p class="price">
                            {item.quantity} x {item.price.formatted_with_symbol}
                          </p>
                          <span class="remove">Remove</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <h5>Cart is empty</h5>
                  )}

                  <div className="discount-code">
                    <p>
                      Have a discount ?
                      <a
                        data-toggle="modal"
                        data-target="#coupon-modal"
                        href="#!"
                      >
                        enter it here
                      </a>
                    </p>
                  </div>
                  <ul className="summary-prices">
                    <li>
                      <span>Subtotal:</span>
                      <span className="price">
                        {cart.subtotal && cart.subtotal.formatted_with_symbol}
                      </span>
                    </li>
                    <li>
                      <span>Shipping:</span>
                      {shippingOptions &&
                        shippingOptions.map((option) => (
                          <span key={option.id}>
                            {option.price.formatted_with_symbol}
                          </span>
                        ))}
                    </li>
                  </ul>
                  <div className="summary-total">
                    <span>Total</span>
                    <span>$250</span>
                  </div>
                  <div className="verified-icon">
                    <img src="images/shop/verified.png" alt="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
