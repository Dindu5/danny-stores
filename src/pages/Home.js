import AboutSection from "../components/AboutSection";
import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";
import Product from "../components/Product";

// Context
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function Home() {
  const { loading, products } = useContext(ProductContext);
  // const items = [
  //   {
  //     id: 1,
  //     name: "Kids 2pkClothFace Masks",
  //     price: 125000,
  //     discount: "-20%",
  //     old_rate: 168000,
  //     description:
  //       "Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.",
  //     assets: [
  //       {
  //         image:
  //           "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "Kids 2pkClothFace Masks",
  //     price: 125000,
  //     discount: "",
  //     old_rate: "",
  //     description:
  //       "Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.",
  //     assets: [
  //       {
  //         image:
  //           "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     name: "Kids 2pkClothFace Masks",
  //     price: 125000,
  //     discount: "",
  //     old_rate: "",
  //     description:
  //       "Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.",
  //     assets: [
  //       {
  //         image:
  //           "https://media.gettyimages.com/photos/sport-shoes-isolated-on-white-background-picture-id1023642306?s=612x612",
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     name: "Kids 2pkClothFace Masks",
  //     price: 125000,
  //     discount: "-20%",
  //     old_rate: 168000,
  //     description:
  //       "Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.",
  //     assets: [
  //       {
  //         img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-shoes-1610418585.jpg?crop=0.502xw:1.00xh;0.282xw,0&resize=640:*",
  //       },
  //     ],
  //   },
  // ];

  console.log("products", products);
  return (
    <div>
      <Hero />
      <div className="latest-products">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Latest Products</h2>
                <a href="products.html">
                  view all products <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
            {products.map((product) => {
              return (
                <Product key={product.id} item={product} loading={loading} />
              );
            })}
          </div>
        </div>
      </div>
      <AboutSection />
      <CallToAction />
    </div>
  );
}

export default Home;
