import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <FontAwesomeIcon className="i" icon={faLongArrowAltRight} />
      </button>
    </div>
  );
};
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <FontAwesomeIcon className="i" icon={faLongArrowAltLeft} />
      </button>
    </div>
  );
};
const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItems, index) => {
          return (
            <div className="box" key={index}>
              <div className="product mtop">
                <div className="img">
                  <span className="discount">{productItems.discount}% Off</span>
                  <img src={productItems.cover} alt="" />
                  <div className="product-like">
                    <label>0</label> <br />
                    <i>
                      <AiOutlineHeart onClick={increment} />
                    </i>
                  </div>
                </div>
                <div className="product-details">
                  <h3>{productItems.name}</h3>
                  <div className="rate">
                    <FontAwesomeIcon className="i" icon={faStar} />
                    <FontAwesomeIcon className="i" icon={faStar} />
                    <FontAwesomeIcon className="i" icon={faStar} />
                    <FontAwesomeIcon className="i" icon={faStar} />
                    <FontAwesomeIcon className="i" icon={faStar} />
                  </div>
                  <div className="price">
                    <h4>${productItems.price}.00 </h4>
                    <button onClick={() => addToCart(productItems)}>
                      <FontAwesomeIcon className="i" icon={faPlus} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default FlashCard;
