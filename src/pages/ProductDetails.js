import { useState, useEffect, useContext } from "react";
import Product from "../components/Product";
import { commerce } from "../lib/commerce";
import parse from "html-react-parser";
import Skeleton from "react-loading-skeleton";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductDetails(props) {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const id = props.match.params.id;
  const { cart, generateToken, handleAddToCart } = useContext(CartContext);
  useEffect(() => {
    generateToken();
  }, [cart]);

  const fetchItem = async (productID) => {
    setLoading(true);
    try {
      const product = await commerce.products.retrieve(productID);
      setItem(product);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchItem(props.match.params.id);
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
              {item.media ? (
                <img src={item.media.source} alt={item.name} />
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
                  {item.price.formatted_with_symbol}
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
              <button
                className="button-primary add-to-cart"
                onClick={() => handleAddToCart(item.id, 1)}
              >
                Add To Cart
              </button>
              <div>
                <Link className="button-primary add-to-cart" to="/cart">
                  Go to Cart
                </Link>
              </div>
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
