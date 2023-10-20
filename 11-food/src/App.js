import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";


function App() {
  
  const [showCart, setShowCart] = useState(false);

    const handleShowCart = () =>{
        setShowCart(true);
    };

    const handleHideCart = () => {
      setShowCart(false);
    };

  return (<>
    {showCart && <Cart onClose={handleHideCart}/>}
    <Header onShowCart= {handleShowCart}/>
    <main>
      <Meals />
    </main>
  </>
  );
}

export default App;
