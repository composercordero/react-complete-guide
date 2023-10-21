import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import { useState, useContext } from "react";
import CartProvider from "./store/CartProvider";


function App() {
  
  const [showCart, setShowCart] = useState(false);

    const handleShowCart = () =>{
        setShowCart(true);
    };

    const handleHideCart = () => {
      setShowCart(false);
    };

  return (<>
    <CartProvider>
      {showCart && <Cart onClose={handleHideCart}/>}
      <Header onShowCart= {handleShowCart}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  </>
  );
}

export default App;
