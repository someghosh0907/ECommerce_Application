import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Productcard";
import Slider from "./image-slider/Slider";
import NewLaunch from "./categories/NewLaunch";
import "./home.css";

const Home = ({ prod, addToCart }) => {
  const navi = useNavigate();
  //const [cart, setCart] = useState([]);
  //const [prod, setProd] = useState([]);
  console.log(prod);

  //console.log(prod);

  //VIEW SELECTED PRODUCT IN NEXT PAGE
  const viewProduct = (id) => {
    sessionStorage.setItem("sendId", id);
    navi(`/product-page/` + id);
    console.log("senditem");
  };

  //ADD TO CART THE ITEM
  return (
    <div className="outbox">
      <div className="new-launch">
      <NewLaunch />
      </div>
      <div
        className="box"
        style={{ backgroundImage: "linear-gradient(blue, white)", margin: 20 }}
      >
        <Slider />
        <div className="slider-word" style={{ paddingLeft: 10 }}>
          <h1 style={{ fontSize: 100 }}>
            <b>Offers Every Week</b>
          </h1>
          <h3 style={{ fontSize: 40, paddingLeft: 20 }}>
            Get upto flat 30% off on all{" "}
            <span style={{ color: "red" }}>new products</span>
          </h3>
        </div>
      </div>
      <p
        style={{
          marginLeft: "250px",
          fontSize: "20px"
        }}
      >
        <b>
          Best Se
          <span
            style={{
              fontSize: "20px",
              textDecoration: "underline",
              textDecorationColor: "red",
            }}
          >
            llers
          </span>
        </b>
      </p>
      <div className="card">
        {prod.map((el) => {
          return (
            <div className="card1">
              <Card
                key={el._id}
                title={el.title}
                image={el.image}
                brand={el.brand}
                category={el.category}
                stock={el.stock}
                price={el.price}
                discount={el.discount}
                rating={el.rating}
              />
              <div className="prod-buttons">
                <button id="button1" onClick={(e) => viewProduct(el._id)}>
                  View
                </button>
                <button id="button2" onClick={(e) => addToCart(el, el.title)}>
                  + Add To Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
/*
<div>
        <div className="category">
          <Link to="./Home/cpu" component={"/Cpu"}>
            <b>CPU</b>
          </Link>
          <Link to="./Home/gpu" component={"/Gpu"}>
            <b>GPU</b>
          </Link>
          <Link to="./Home/mobo" component={"/Mobo"}>
            <b>Motherboard</b>
          </Link>
          <Link to="./Home/psu" component={"/Psu"}>
            <b>PSU</b>
          </Link>
          <Link to="./Home/ram" component={"/Ram"}>
            <b>RAM</b>
          </Link>
        </div>
      </div>

const viewCart=(id)=>{
        localStorage.setItem('cartItems',id)
        navi(`/add-item-cart/`+id)
        console.log('added to cart')
  }
  <button onClick={(e) =>viewCart(el._id)}>+ Add To Cart</button>
  */
