import AboutSection from "../components/AboutSection";
import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";
import Product from "../components/Product";

function Home() {
  const items = [
    {
      id: 1,
      name: "Kids 2pkClothFace Masks",
      price: 125000,
      discount: "-20%",
      old_rate: 168000,
      description:
        "Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      id: 2,
      name: "Kids 2pkClothFace Masks",
      price: 125000,
      discount: "",
      old_rate: "",
      description:
        "Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.",
      image:
        "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 3,
      name: "Kids 2pkClothFace Masks",
      price: 125000,
      discount: "",
      old_rate: "",
      description:
        "Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.",
      image:
        "https://media.gettyimages.com/photos/sport-shoes-isolated-on-white-background-picture-id1023642306?s=612x612",
    },
    {
      id: 4,
      name: "Kids 2pkClothFace Masks",
      price: 125000,
      discount: "-20%",
      old_rate: 168000,
      description:
        "Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-shoes-1610418585.jpg?crop=0.502xw:1.00xh;0.282xw,0&resize=640:*",
    },
    {
      id: 5,
      name: "Kids 2pkClothFace Masks",
      price: 125000,
      discount: "-20%",
      old_rate: 168000,
      description:
        "Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.",
      image:
        "https://images.unsplash.com/photo-1598313697935-b4d757c226c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      id: 6,
      name: "Kids 2pkClothFace Masks",
      price: 125000,
      discount: "-20%",
      old_rate: 168000,
      image:
        "https://i.shgcdn.com/d28da852-3c05-408e-bde3-4aeb881e1a08/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
    },
    {
      id: 7,
      name: "Kids 2pkClothFace Masks",
      price: 125000,
      discount: "-20%",
      old_rate: 168000,
      description:
        "Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.",
      image:
        "https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg",
    },
    {
      id: 8,
      name: "Kids 2pkClothFace Masks",
      price: 125000,
      discount: "",
      old_rate: "",
      description:
        "Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.",
      image:
        "https://i.guim.co.uk/img/media/2ce8db064eabb9e22a69cc45a9b6d4e10d595f06/392_612_4171_2503/master/4171.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=fa5c416cc5ad5ee73b326f246a90134b",
    },
  ];
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
            {items.map((item) => {
              return <Product key={item.id} item={item} />;
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
