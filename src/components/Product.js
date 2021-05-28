import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

// Context
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Product(props) {
  const { handleAddToCart, response } = useContext(CartContext);

  console.log(response);
  return (
    <div className="col-md-4 all des">
      <div className="product-item">
        <Link to={`/product`}>
          {props.item ? (
            <img src={props.item.media.source} alt={props.item.name} />
          ) : (
            <Skeleton height={200} />
          )}
        </Link>
        <div className="down-content">
          <Link to={`/products/${props.item.id}`}>
            <h4>{props.item.name}</h4>
          </Link>
          <h6>{props.item.price.formatted_with_symbol}</h6>
          <button
            className="button-primary"
            onClick={() => handleAddToCart(props.item.id, 1)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
