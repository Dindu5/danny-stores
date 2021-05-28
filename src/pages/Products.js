import React from "react";
import Product from "../components/Product";

// Context
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function Products() {
  const { loading, products } = useContext(ProductContext);
  // const items = [
  //   {
  //     id: 1,
  //     name: "Kids 2pkClothFace Masks",
  //     price: 125000,
  //     discount: "-20%",
  //     old_rate: 168000,
  //     image:
  //       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
  //   },
  //   {
  //     id: 2,
  //     name: "Kids 2pkClothFace Masks",
  //     price: 125000,
  //     discount: "",
  //     old_rate: "",
  //     image:
  //       "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //   },
  //   {
  //     id: 3,
  //     name: "Kids 2pkClothFace Masks",
  //     price: 125000,
  //     discount: "",
  //     old_rate: "",
  //     image:
  //       "https://media.gettyimages.com/photos/sport-shoes-isolated-on-white-background-picture-id1023642306?s=612x612",
  //   },
  //   {
  //     id: 4,
  //     name: "Kids 2pkClothFace Masks",
  //     price: 125000,
  //     discount: "-20%",
  //     old_rate: 168000,
  //     image:
  //       "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-shoes-1610418585.jpg?crop=0.502xw:1.00xh;0.282xw,0&resize=640:*",
  //   },
  //   {
  //     id: 5,
  //     name: "Kids 2pkClothFace Masks",
  //     price: 125000,
  //     discount: "-20%",
  //     old_rate: 168000,
  //     image:
  //       "https://images.unsplash.com/photo-1598313697935-b4d757c226c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  //   },
  //   {
  //     id: 6,
  //     name: "Kids 2pkClothFace Masks",
  //     price: 125000,
  //     discount: "-20%",
  //     old_rate: 168000,
  //     image:
  //       "https://i.shgcdn.com/d28da852-3c05-408e-bde3-4aeb881e1a08/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
  //   },
  //   {
  //     id: 7,
  //     name: "Kids 2pkClothFace Masks",
  //     price: 125000,
  //     discount: "-20%",
  //     old_rate: 168000,
  //     image:
  //       "https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg",
  //   },
  //   {
  //     id: 8,
  //     name: "Kids 2pkClothFace Masks",
  //     price: 125000,
  //     discount: "",
  //     old_rate: "",
  //     image:
  //       "https://i.guim.co.uk/img/media/2ce8db064eabb9e22a69cc45a9b6d4e10d595f06/392_612_4171_2503/master/4171.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=fa5c416cc5ad5ee73b326f246a90134b",
  //   },
  // ];

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
