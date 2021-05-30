import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import formatUSD from "format-usd";

function Product(props) {
  return (
    <div className="col-md-4 all des">
      <div className="product-item">
        <Link to={`/product/${props.item.id}`}>
          {props.item ? (
            <img src={props.item.image_url} alt={props.item.name} />
          ) : (
            <Skeleton height={200} />
          )}
        </Link>
        <div className="down-content">
          <Link to={`/products/${props.item.id}`}>
            <h4>{props.item.name}</h4>
          </Link>
          <h6>{formatUSD({ amount: props.item.price })}</h6>
          <button
            className="snipcart-add-item button-primary"
            data-item-id={props.item.id}
            data-item-price={props.item.price}
            data-item-url={`https://daniel-ecommerce-backend.herokuapp.com/snipcartParser`}
            data-item-description={props.item.sub_description}
            data-item-image={props.item.image_url}
            data-item-name={props.item.name}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
