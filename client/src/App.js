import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SelectedProduct from "./components/SelectedProduct";
import Cart from "./components/Cart";
import About from "./components/About";
import PathSelector from "./components/PathSelector";
import Contact from "./components/Contact";
import NewCart from "./components/newCart/NewCart";
import { useState,useEffect } from "react";
import axios from "axios";
import foot from "./components/footer.png"
import Success from "./components/Success"

function App() {
  const [prod, setProd] = useState([]);

  const getProd = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3400/api/v1/product/all-products`
      );
      if (data?.success) {
        setProd(data?.products);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProd();
  }, []);

  const [cart, setCart] = useState([]);
  var cartSize=cart.length
  console.log(cartSize)
  console.log(cart.quantity)
  /*const addToCart = (item) => {
    console.log("added to cart");
    setCart([...cart,{...item,quantity:1}])
    console.log(cart)
  };*/
  const addToCart = (item) => {
    const isItemInCart = cart.find((cartItem) => cartItem._id === item._id);

    if (isItemInCart) {
      setCart(
        cart.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem 
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
      console.log(cart) 
    }
  };

  const totalItem=()=>{
    return
  }

  const removeFromCart = (item) => {
    const isItemInCart = cart.find((cartItem) => cartItem._id === item._id);

    if (isItemInCart.quantity === 1) {
      setCart(cart.filter((cartItem) => cartItem._id !== item._id));
    } else {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCart([]);
  };


  return (
    <>
      <div>
          <Header cartSize={cartSize}/>
          <PathSelector/>
          <Routes>
            <Route path="/" element={<Home prod={prod}  addToCart={addToCart}/>} />
            <Route path="/newcart" element={<NewCart cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} clearCart={clearCart}/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/product-page/:id" element={<SelectedProduct addToCart={addToCart}/>} />
            <Route path="/success" element={<Success/>} />
          </Routes>
          <img src={foot} alt="img-foot" style={{marginTop:"30px"}}></img>
      </div>
    </>
  );
}

export default App;
//<Route path="/newcart" element={<NewCart cart={cart} />} />
//<Footer />