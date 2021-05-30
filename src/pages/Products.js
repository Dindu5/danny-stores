import { useEffect, useState } from "react";
import Product from "../components/Product";
import baseUrl from "../api";

// Context
import { useContext, useRef } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductSkeleton from "../components/ProductSkeleton";
import axios from "axios";

function Products() {
  const { products } = useContext(ProductContext);
  const [categories, setCategories] = useState([]);
  const [currentProducts, setCurrentProducts] = useState([]);
  const substitute = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // const [category, setcategory] = useState('all')

  const list = useRef();

  useEffect(() => {
    const fetchProductCategories = () => {
      axios
        .get(`${baseUrl}/categories/`)
        .then((res) => {
          console.log("res", res);
          console.log(res.data);
          setCategories(res.data);
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

    fetchProductCategories();
    setCurrentProducts(products);
  }, [products]);

  const fetchCategory = (id) => {
    axios
      .get(`${baseUrl}/categories/${id}`)
      .then((res) => {
        console.log("res", res);
        setCurrentProducts(res.data.products);
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

  const captureClick = (e) => {
    const listElements = Array.from(list.current.children);
    listElements.forEach((listElement) => {
      listElement.classList.remove("active");
    });
    console.log(e);
    e.target.classList.add("active");
  };

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
                <ul onClick={(e) => captureClick(e)} ref={list}>
                  <li
                    className="active"
                    onClick={() => {
                      setCurrentProducts(products);
                    }}
                  >
                    All Products
                  </li>
                  {categories.length > 0 &&
                    categories.map((category) => (
                      <li
                        key={category.id}
                        onClick={() => fetchCategory(category.id)}
                      >
                        {category.name}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="col-md-12">
              <div className="filters-content">
                <div className="row grid">
                  {currentProducts.length > 0
                    ? currentProducts.map((product) => {
                        return <Product key={product.id} item={product} />;
                      })
                    : substitute.map((product) => {
                        return <ProductSkeleton key={product} />;
                      })}
                </div>
              </div>
            </div>
            {/* <div className="col-md-12">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
