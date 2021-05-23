import { Link } from "react-router-dom";
function Product({ item }) {
  return (
    <div className="col-md-4 all des">
      <div className="product-item">
        <Link to={`/products/${item.id}`}>
          <img src={item.image} alt={item.name} />
        </Link>
        <div className="down-content">
          <Link to={`/products/${item.id}`}>
            <h4>{item.name}</h4>
          </Link>
          <h6>${item.price}</h6>
          <ul className="stars">
            <li>
              <i className="fa fa-star"></i>
            </li>
            <li>
              <i className="fa fa-star"></i>
            </li>
            <li>
              <i className="fa fa-star"></i>
            </li>
            <li>
              <i className="fa fa-star"></i>
            </li>
            <li>
              <i className="fa fa-star"></i>
            </li>
          </ul>
          <button className="button-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
