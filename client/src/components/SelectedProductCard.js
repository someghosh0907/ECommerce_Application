import React from "react";
import { FaStar } from "react-icons/fa";

const SelectedProductCard = (props) => {
  return (
    <div>
      <div className="card-main" style={{ display: "flex" ,top:"0px",marginLeft:"230px"}}>
        <div className="images">
          <img
            src={props.image}
            alt="img-v1"
            style={{ width: "300px", height: "300px", marginRight: "50px" ,backgroundColor:"pink"}}
          ></img>
        </div>
        <div
          className="brand-category-pricing"
          style={{
            marginLeft: "17vw",
            width: "50vw",
            height:"20vw",
            backgroundColor: "transparent",
            marginTop:"-150px"
          }}
        >
          <div className="description">
            <h1>{props.description}</h1>
          </div>
          <p>
            <b>{props.rating}</b>
            <FaStar style={{ color: "yellow"}} />
          </p>
          <div className="brand&category">
            {props.brand}-{props.category}
          </div>
          <div className="pricing">
            <b>
              <strike style={{ fontSize: "20px" }}>
                ₹{props.price + 1000}
              </strike>{" "}
              <span style={{ fontSize: "30px", paddingLeft: "10px" }}>
                ₹{props.price}
              </span>
              <span
                style={{
                  fontSize: "30px",
                  paddingLeft: "20px",
                  color: "red",
                  fontWeight: 400,
                }}
              >
                -{props.discount}%{" "}
              </span>
            </b>
          </div>
        </div>
        <div className="stock-rating-discount">
        </div>
      </div>
    </div>
  );
};

export default SelectedProductCard;
//<div className="stock">Stock: {props.stock}</div>