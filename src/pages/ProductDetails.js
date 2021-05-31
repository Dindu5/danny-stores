import { useState, useEffect } from "react";
import Product from "../components/Product";

import parse from "html-react-parser";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

import baseUrl from "../api";
import axios from "axios";
import formatUSD from "format-usd";

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
    <div>
      <div className="container">
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
              {item.image_url ? (
                <img src={item.image_url} alt={item.name} />
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
                <p className="product-price">
                  {formatUSD({ amount: item.price })}
                </p>
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
              <div className="product-category mb-5">
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
              {item.image_url ? (
                <button
                  className="snipcart-add-item button-primary"
                  data-item-id={item.id}
                  data-item-price={item.price}
                  data-item-url={`https://daniel-ecommerce-backend.herokuapp.com/snipcartParser`}
                  data-item-description={item.sub_description}
                  data-item-image={item.image_url}
                  data-item-name={item.name}
                >
                  Add to cart
                </button>
              ) : (
                <Skeleton height={30} />
              )}
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
