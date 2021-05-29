import React from "react";
import Product from "../components/Product";

// Context
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function Products() {
  const { loading, products } = useContext(ProductContext);
  // const substitute = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <div className="page-heading products-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-content">
                <h4>new arrivals</h4>
                <h2>sixteen products</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="filters">
                <ul>
                  <li className="active" data-filter="*">
                    All Products
                  </li>
                  <li data-filter=".des">Featured</li>
                  <li data-filter=".dev">Flash Deals</li>
                  <li data-filter=".gra">Last Minute</li>
                </ul>
              </div>
            </div>
            <div className="col-md-12">
              <div className="filters-content">
                <div className="row grid">
                  {products.map((product) => {
                    return (
                      <Product
                        key={product.id}
                        item={product}
                        loading={loading}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <ul className="pages">
                <li>
                  <a href="/">1</a>
                </li>
                <li className="active">
                  <a href="/">2</a>
                </li>
                <li>
                  <a href="/">3</a>
                </li>
                <li>
                  <a href="/">4</a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-angle-double-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
