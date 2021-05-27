import React from "react";
import Product from "../components/Product";

function ProductDetails() {
  const items = [
    {
      id: 1,
      name: "Kids 2pkClothFace Masks",
      price: 125000,
      discount: "-20%",
      old_rate: 168000,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      id: 2,
      name: "Kids 2pkClothFace Masks",
      price: 125000,
      discount: "",
      old_rate: "",
      image:
        "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 3,
      name: "Kids 2pkClothFace Masks",
      price: 125000,
      discount: "",
      old_rate: "",
      image:
        "https://media.gettyimages.com/photos/sport-shoes-isolated-on-white-background-picture-id1023642306?s=612x612",
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="back-text">Back to shop</h4>
          </div>
          <div className="col-md-5">
            <div className="single-product-slider">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                alt="Product"
                data-zoom-image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="single-product-details">
              <h2>Eclipse Crossbody</h2>
              <p className="product-price">$300</p>
              <hr />
              <p className="product-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum ipsum dicta quod, quia doloremque aut deserunt commodi
                quis. Totam a consequatur beatae nostrum, earum consequuntur?
                Eveniet consequatur ipsum dicta recusandae.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt, velit, sunt temporibus, nulla accusamus similique
                sapiente tempora, at atque cumque assumenda minus asperiores est
                esse sequi dolore magnam. Debitis, explicabo.
              </p>
              <div className="product-quantity">
                <span>Quantity:</span>
                <div className="product-quantity-slider">
                  <button className="add-btn">-</button>
                  <input type="text" value="0" name="product-quantity" />
                  <button className="add-btn">+</button>
                </div>
              </div>
              <div className="product-category">
                <span>Categories:</span>
                <ul>
                  <li>
                    <a href="product-single.html">Products</a>
                  </li>
                  <li>
                    <a href="product-single.html">Soap</a>
                  </li>
                </ul>
              </div>
              <button className="button-primary add-to-cart">
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        <h5 className="text-center sub-title">Related Products</h5>
        <hr />

        <div className="row mt-5">
          {items.map((item) => {
            return <Product key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
