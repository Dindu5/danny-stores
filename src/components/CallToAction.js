import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <div className="call-to-action">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="inner-content">
              <div className="row">
                <div className="col-md-8">
                  <h4>
                    Daniel Stores <em>offers</em> the best deals
                  </h4>
                  <p>
                    You can now shop several genuine & 100% Authentic products
                    from Top Brands: Samsung, Apple, Microsoft , Michelin Tyres,
                    Scanfrost HP , P&G Intel, Xiaomiand more shipped to you
                    directly from official distributors with full warranty and
                    returns available up to 15 days.
                  </p>
                </div>
                <div className="col-md-4">
                  <Link to="/products" className="filled-button">
                    Go to store
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
