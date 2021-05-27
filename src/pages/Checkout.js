import React from "react";

function Checkout() {
  return (
    <div>
      <div class="checkout shopping mt-20">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="block billing-details">
                <h4 class="widget-title">Billing Details</h4>
                <hr />
                <form class="checkout-form">
                  <div class="form-group">
                    <label for="full_name">Full Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="full_name"
                      placeholder=""
                    />
                  </div>
                  <div class="form-group">
                    <label for="user_address">Address</label>
                    <input
                      type="text"
                      class="form-control"
                      id="user_address"
                      placeholder=""
                    />
                  </div>
                  <div class="checkout-country-code clearfix">
                    <div class="form-group">
                      <label for="user_post_code">Zip Code</label>
                      <input
                        type="text"
                        class="form-control"
                        id="user_post_code"
                        name="zipcode"
                        value=""
                      />
                    </div>
                    <div class="form-group">
                      <label for="user_city">City</label>
                      <input
                        type="text"
                        class="form-control"
                        id="user_city"
                        name="city"
                        value=""
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="user_country">Country</label>
                    <input
                      type="text"
                      class="form-control"
                      id="user_country"
                      placeholder=""
                    />
                  </div>
                </form>
              </div>
              <div class="block">
                <h4 class="widget-title">Payment Method</h4>
                <hr />
                <p>Credit Cart Details (Secure payment)</p>
                <div class="checkout-product-details">
                  <div class="payment">
                    <div class="card-details">
                      <form class="checkout-form">
                        <div class="form-group">
                          <label for="card-number">
                            Card Number <span class="required">*</span>
                          </label>
                          <input
                            id="card-number"
                            class="form-control"
                            type="tel"
                            placeholder="•••• •••• •••• ••••"
                          />
                        </div>
                        <div class="form-group half-width padding-right">
                          <label for="card-expiry">
                            Expiry (MM/YY) <span class="required">*</span>
                          </label>
                          <input
                            id="card-expiry"
                            class="form-control"
                            type="tel"
                            placeholder="MM / YY "
                          />
                        </div>
                        <div class="form-group half-width padding-left">
                          <label for="card-cvc">
                            Card Code <span class="required">*</span>
                          </label>
                          <input
                            id="card-cvc"
                            class="form-control"
                            type="tel"
                            maxlength="4"
                            placeholder="CVC"
                          />
                        </div>
                        <button class="button-primary mt-5">Place Order</button>
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
                  <div class="media product-card">
                    <a class="pull-left" href="product-single.html">
                      <img
                        class="media-object"
                        src="https://media.gettyimages.com/photos/sport-shoes-isolated-on-white-background-picture-id1023642306?s=612x612"
                        alt="product"
                      />
                    </a>
                    <div class="media-body">
                      <h4 class="media-heading">
                        <a href="product-single.html">
                          Ambassador Heritage 1921
                        </a>
                      </h4>
                      <p class="price">1 x $249</p>
                      <span class="remove">Remove</span>
                    </div>
                  </div>
                  <div class="discount-code">
                    <p>
                      Have a discount ?{" "}
                      <a
                        data-toggle="modal"
                        data-target="#coupon-modal"
                        href="#!"
                      >
                        enter it here
                      </a>
                    </p>
                  </div>
                  <ul class="summary-prices">
                    <li>
                      <span>Subtotal:</span>
                      <span class="price">$190</span>
                    </li>
                    <li>
                      <span>Shipping:</span>
                      <span>Free</span>
                    </li>
                  </ul>
                  <div class="summary-total">
                    <span>Total</span>
                    <span>$250</span>
                  </div>
                  <div class="verified-icon">
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
