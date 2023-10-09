import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faStar } from "@fortawesome/free-solid-svg-icons";

const ShopCart = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  console.log(shopItems);
  return (
    <>
      {shopItems.map((shopItems, index) => {
        return (
          <div className="box" key={index}>
            <div className="product mtop">
              <div className="img">
                <span className="discount">{shopItems.discount}% Off</span>
                <img src={shopItems.cover} alt="" />
                <div className="product-like">
                  <label>0</label> <br />
                  <i>
                    <AiOutlineHeart onClick={increment} />
                  </i>
                </div>
              </div>
              <div className="product-details">
                <h3>{shopItems.name}</h3>
                <div className="rate">
                  <FontAwesomeIcon className="i" icon={faStar} />
                  <FontAwesomeIcon className="i" icon={faStar} />
                  <FontAwesomeIcon className="i" icon={faStar} />
                  <FontAwesomeIcon className="i" icon={faStar} />
                  <FontAwesomeIcon className="i" icon={faStar} />
                </div>
                <div className="price">
                  <h4>${shopItems.price}.00 </h4>
                  <button onClick={() => addToCart(shopItems)}>
                    <FontAwesomeIcon className="i" icon={faPlus} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShopCart;
