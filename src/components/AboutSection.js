import img from "../assets/images/feature-image.jpg";
function AboutSection() {
  return (
    <div className="best-features">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>About Daniel Stores</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="left-content">
              <h4>Looking for the best products ?</h4>
              <p>
                We are an online store where you can purchase all your
                electronics, as well as home appliances, fashion items for men,
                women, and children; cool gadgets, computers,and more on the go.
                What more? You can have them delivered directly to you. Shop
                online with great ease as you pay with SnipCart Pay which
                guarantees you the safest online shopping payment method,
                allowing you to make stress free payments. Whatever it is you
                wish to buy, Daniel Stores offers you all and lots more at
                prices which you can trust. Daniel stores has payment options
                for everyone irrespective of taste, class, and preferences.
              </p>
              <ul className="featured-list">
                <li>Snip cart payment integration</li>
                <li>Free Shipping</li>
                <li>Order recipts</li>
                <li>Best Prices</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-image">
              <img src={img} alt="About" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
