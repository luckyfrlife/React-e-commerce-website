import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pages from "./pages/Pages";
import Data from "./components/flashDeals/Data";
import Cart from "./common/Cart/Cart";
import Sdata from "./components/shops/Sdata";
import { useState } from "react";

function App() {
  const { productItems } = Data;
  const [cartItem, setCardItem] = useState([]);

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCardItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCardItem([...cartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCardItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCardItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  const { shopItems } = Sdata;

  const pages = createBrowserRouter([
    {
      path: "/",
      element: (
        <Pages
          productItems={productItems}
          addToCart={addToCart}
          shopItems={shopItems}
          cartItem={cartItem}
        />
      ),
    },
    {
      path: "/cart",
      element: (
        <Cart
          cartItem={cartItem}
          addToCart={addToCart}
          decreaseQty={decreaseQty}
        />
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={pages} />
    </div>
  );
}

export default App;
