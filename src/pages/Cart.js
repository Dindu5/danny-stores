// import { Link } from "react-router-dom";

// // Context
// import { useContext, useEffect } from "react";

// function CartPage() {
//   const {
//     cart,
//     handleEmptyCart,
//     handleRemoveFromCart,
//     handleUpdateCartQty,
//     generateToken,
//   } = useContext(CartContext);

//   return (
//     <div>
//       <div className="page-heading products-heading header-text">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12">
//               <div className="text-content">
//                 <h4>Shopping Cart</h4>
//                 <h2>Danny Stores</h2>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="cart shopping">
//         <div className="container">
//           <div className="row">
//             <div className="shopping-block">
//               <div className="block">
//                 <div className="product-list">
//                   <table className="table">
//                     <thead>
//                       <tr>
//                         <th className="">Item Name</th>
//                         <th>Quantity</th>
//                         <th className="">Item Price</th>
//                         <th className="">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {cart.line_items ? (
//                         cart.line_items.map((item) => {
//                           return (
//                             <tr className="" key={item.id}>
//                               <td className="">
//                                 <div className="product-info">
//                                   <Link to={`/product/${item.id}`}>
//                                     <img
//                                       width="80"
//                                       src={item.media.source}
//                                       alt={item.product_name}
//                                     />
//                                   </Link>
//                                   <Link to={`/product/${item.id}`}>
//                                     {item.product_name}
//                                   </Link>
//                                 </div>
//                               </td>
//                               <td>
//                                 <div className="product-quantity-slider">
//                                   <button
//                                     className="add-btn"
//                                     onClick={() =>
//                                       handleUpdateCartQty(
//                                         item.id,
//                                         item.quantity - 1
//                                       )
//                                     }
//                                   >
//                                     -
//                                   </button>
//                                   <input
//                                     type="text"
//                                     placeholder={item.quantity}
//                                     onChange={(e) =>
//                                       handleUpdateCartQty(
//                                         item.id,
//                                         e.target.value.trim()
//                                       )
//                                     }
//                                   />
//                                   <button
//                                     className="add-btn"
//                                     onClick={() =>
//                                       handleUpdateCartQty(
//                                         item.id,
//                                         item.quantity + 1
//                                       )
//                                     }
//                                   >
//                                     +
//                                   </button>
//                                 </div>
//                               </td>
//                               <td className="">
//                                 {item.line_total.formatted_with_symbol}
//                               </td>
//                               <td className="">
//                                 <button
//                                   className="secondary-button"
//                                   onClick={() => handleRemoveFromCart(item.id)}
//                                 >
//                                   Remove
//                                 </button>
//                               </td>
//                             </tr>
//                           );
//                         })
//                       ) : (
//                         <h3>No items in cart</h3>
//                       )}
//                     </tbody>
//                   </table>
//                   <hr className="mt-3" />
//                   <div className="mt-5">
//                     <h5>
//                       <strong>
//                         Cart Total Price :
//                         {cart.subtotal
//                           ? cart.subtotal.formatted_with_symbol
//                           : 0}
//                       </strong>
//                     </h5>
//                   </div>
//                   <div className="d-flex mt-4">
//                     <button
//                       className="secondary-button mr-3"
//                       onClick={() => handleEmptyCart()}
//                     >
//                       Clear Cart
//                     </button>
//                     <Link to="/checkout" className="button-primary">
//                       Proceed To Checkout
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartPage;
