import { useState, useEffect, useContext } from "react";
import Product from "../components/Product";

import parse from "html-react-parser";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

import baseUrl from "../api";
import axios from "axios";
import formatNaira from "format-to-naira";

function ProductDetails(props) {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchProduct = () => {
      setLoading(true);
      axios
        .get(`${baseUrl}/products/${id}`)
        .then((res) => {
          console.log("res", res);
          setItem(res.data);
          console.log(res.data);
          setLoading(false);
        })
        .catch((err) => {
          if (err.request) {
            console.log(err);
            console.log(err.response);
          } else {
            console.log(err.response);
          }
          // alert.error("Something went wrong fetching products!");
        });
    };
    fetchProduct();
  }, [id]);

  return (
    <div className="pt-5">
      <div className="container pt-5">
        <div className="row pt-5">
          <div className="col-12 mt-3 mb-5">
            <button className="d-block secondary-button">
              <Link style={{ color: "white" }} to="/products/">
                Back to shop
              </Link>
            </button>
          </div>
          <div className="col-md-5">
            <div className="single-product-slider">
              {item.image ? (
                <img src={`${baseUrl}${item.image.url}`} alt={item.name} />
              ) : (
                <Skeleton height={300} />
              )}
            </div>
          </div>
          <div className="col-md-7">
            <div className="single-product-details">
              {item.name ? (
                <h2>{item.name}</h2>
              ) : (
                <Skeleton height={40} className="mb-2" />
              )}
              {item.price ? (
                <p className="product-price">{formatNaira(item.price)}</p>
              ) : (
                <Skeleton height={30} />
              )}

              <hr />
              <p className="product-description">
                {item.description ? (
                  parse(item.description)
                ) : (
                  <Skeleton height={420} />
                )}
              </p>
              <div className="product-quantity">
                <span>Quantity:</span>
              </div>
              <div className="product-category">
                <span>Categories:</span>
                <ul>
                  {item.categories &&
                    item.categories.map((category) => (
                      <li>
                        <a href="product-single.html">{category.name}</a>
                      </li>
                    ))}
                </ul>
              </div>
              <button
                className="button-primary add-to-cart"
                onClick={() => handleAddToCart(item.id, 1)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        <h5 className="text-center sub-title">Related Products</h5>
        <hr />

        <div className="row mt-5">
          {item.related_products &&
            item.related_products.map((product) => {
              return (
                <Product key={product.id} item={product} loading={loading} />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
