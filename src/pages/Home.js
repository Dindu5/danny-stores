import AboutSection from "../components/AboutSection";
import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";
import Product from "../components/Product";
import ProductSkeleton from "../components/ProductSkeleton";

import { Link } from "react-router-dom";

// Context
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function Home() {
  const { products } = useContext(ProductContext);
  const substitute = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <Hero />
      <div className="latest-products">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Latest Products</h2>

                <Link to="/products/">
                  view all products <i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
            {products.length > 0
              ? products.map((product) => {
                  return <Product key={product.id} item={product} />;
                })
              : substitute.map((product) => {
                  return <ProductSkeleton key={product} />;
                })}
          </div>
        </div>
      </div>
      <AboutSection />
      <CallToAction />
    </div>
  );
}

export default Home;
