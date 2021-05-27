function CartPage() {
  return (
    <div>
      <div className="page-heading products-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-content">
                <h4>Shopping Cart</h4>
                <h2>sixteen products</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cart shopping">
        <div className="container">
          <div className="row">
            <div className="shopping-block">
              <div className="block">
                <div className="product-list">
                  <form method="post">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="">Item Name</th>
                          <th className="">Item Price</th>
                          <th className="">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="">
                          <td className="">
                            <div className="product-info">
                              <img
                                width="80"
                                src="https://i.guim.co.uk/img/media/2ce8db064eabb9e22a69cc45a9b6d4e10d595f06/392_612_4171_2503/master/4171.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=fa5c416cc5ad5ee73b326f246a90134b"
                                alt=""
                              />
                              <a href="#!">SunclassName</a>
                            </div>
                          </td>
                          <td className="">$200.00</td>
                          <td className="">
                            <a className="product-remove" href="#!">
                              Remove
                            </a>
                          </td>
                        </tr>
                        <tr className="">
                          <td className="">
                            <div className="product-info">
                              <img
                                width="80"
                                src="https://i.guim.co.uk/img/media/2ce8db064eabb9e22a69cc45a9b6d4e10d595f06/392_612_4171_2503/master/4171.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=fa5c416cc5ad5ee73b326f246a90134b"
                                alt=""
                              />
                              <a href="#!">Airspace</a>
                            </div>
                          </td>
                          <td className="">$200.00</td>
                          <td className="">
                            <a className="product-remove" href="#!">
                              Remove
                            </a>
                          </td>
                        </tr>
                        <tr className="">
                          <td className="">
                            <div className="product-info">
                              <img
                                width="80"
                                src="https://i.guim.co.uk/img/media/2ce8db064eabb9e22a69cc45a9b6d4e10d595f06/392_612_4171_2503/master/4171.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=fa5c416cc5ad5ee73b326f246a90134b"
                                alt="product"
                              />
                              <a href="#!">Bingo</a>
                            </div>
                          </td>
                          <td className="">$200.00</td>
                          <td className="">
                            <a className="product-remove" href="#!">
                              Remove
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <a href="/" className="filled-button">
                      Proceed To Checkout
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
