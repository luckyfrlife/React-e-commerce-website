import React from "react";
import Header from "../common/header/Header";
import Home from "../components/mainpage/Home";
import FlashDeals from "../components/flashDeals/FlashDeals";
import TopCate from "../components/top/TopCate";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Discount from "../components/discount/Discount";
import Shop from "../components/shops/Shop";
import Annocument from "../components/annocument/Annu";
import Wrapper from "../components/wrapper/Wrapper";
import Footer from "../common/footer/Footer";

const Pages = ({ productItems, cartItem, addToCart, shopItems }) => {
  return (
    <>
      <Header cartItem={cartItem} />
      <Home cartItem={cartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annocument />
      <Wrapper />
      <Footer />
    </>
  );
};

export default Pages;
