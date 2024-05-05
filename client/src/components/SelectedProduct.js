import React, { useState, useEffect } from "react";
import axios from "axios";
import SelectedProductCard from "./SelectedProductCard";
import "./SelectedProduct.css";
import { useNavigate, useParams } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const SelectedProduct = ({ addToCart }) => {
  //const navi = useNavigate();
  const [product, setProduct] = useState([]);
  const arr = [product];
  //const [selectedProd,setSelectedProd]=useState([])
  //var session=sessionStorage.getItem('sendId')
  const { id } = useParams();
  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3400/api/v1/product/product-page/${id}`
      );
      if (data?.success) {
        setProduct(data?.productById);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(product);
  return (
    <div className="selectprod">
      <div className="card-main">
        <div className="return-ele" style={{ backgroundColor: "white" }}>
          {arr.map((getpro, i) => {
            return (
              <div className="card-prod">
                <div className="content">
                  <SelectedProductCard
                    key={i}
                    description={getpro.description}
                    title={getpro.title}
                    image={getpro.image}
                    brand={getpro.brand}
                    category={getpro.category}
                    stock={getpro.stock}
                    price={getpro.price}
                    discount={getpro.discount}
                    rating={getpro.rating}
                  />
                </div>
                <div className="buttons"  style={{height:"50px",width:"1680px",paddingLeft:"540px",display:"flex"}}>
                  <button id="button2" onClick={() => addToCart(getpro)}>
                    + Add To Cart
                  </button>
                  <button id="button1" style={{marginLeft:"20px"}}>Buy Now</button>
                </div>
                <div className="assurance-img">
                  <div className="top"><p><FontAwesomeIcon icon="fa-solid fa-shield-halved" /></p></div>
                  <div className="down"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectedProduct;
