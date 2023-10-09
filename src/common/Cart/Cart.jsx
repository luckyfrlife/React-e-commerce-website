import React from "react";
import "./Style.css";
import Header from "../header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import Footer from "../footer/Footer";

const Cart = ({ cartItem, addToCart, decreaseQty }) => {
  if (!cartItem || !Array.isArray(cartItem)) {
    cartItem = [];
  }
  const totalPrice = cartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  return (
    <>
      <Header cartItem={cartItem} />
      <section className="cart-items">
        <div className="container d_flex">
          <div className="cart-details">
            {cartItem.length === 0 && (
              <h1 className="no-items product">No Items are added in cart</h1>
            )}
            {cartItem.map((item) => {
              const prodcutQty = item.price * item.qty;
              return (
                <div className="cart-list product d_flex" key={item.id}>
                  <div className="img">
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <h4>
                      {item.price}. 00 * {item.qty}
                      <span>${prodcutQty}.00</span>
                    </h4>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart">
                      <button className="removeCart">
                        <FontAwesomeIcon className="id" icon={faXmark} />
                      </button>
                    </div>
                    <div className="cartControl d_flex">
                      <button
                        className="incCart"
                        onClick={() => addToCart(item)}>
                        <FontAwesomeIcon className="i" icon={faPlus} />
                      </button>
                      <button
                        className="desCart"
                        onClick={() => decreaseQty(item)}>
                        <FontAwesomeIcon className="i" icon={faMinus} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-total product">
            <h2>Cart Summary</h2>
            <div className="d_flex">
              <h4>Total Price : </h4>
              <h3>${totalPrice}.00</h3>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
