import { useContext, useState } from "react";
import { CartContext } from "../context/cart-context";

export default function Cart({cart}) {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  const [arr, setArr] = useState(cart);
  return (
    <div className="top">
      <h1 className="cart-title">Cart</h1>
      <div className="mapped">
        {arr.map((item) => (
          <div>
          <div className="display-prod" style={{ display: "flex" }}>
            <div className="img-class" style={{ display: "flex" }}>
              <img
                src={item.image}
                alt="cart-img"
                width={240}
                style={{
                  paddingLeft: "60px",
                  paddingRight: "60px",
                  backgroundColor: "white",
                  border: "solid",
                  borderColor: "grey",
                  borderWidth: "0.5px",
                  marginLeft: "30px",
                  marginBottom: "30px",
                }}
              />
            </div>
            <div
              className="product-count-setter"
              style={{ top: "0px",marginLeft:"30px"}}
            >
              <span
                style={{
                  fontSize: "30px",
                  display: "block",
                  marginLeft: "20px",
                }}
              >
                <b>{item.description}</b>
              </span>
              <p>
                <b>Brand</b>:{item.title}
              </p>
              <p>
                <b>Stock</b>:{item.stock}
              </p>
              <button
                style={{ height: "20px" }}
                onClick={() => {
                  removeFromCart()
                }}
              >
                -
              </button>
              <span> {item.quantity} </span>
              <button
                style={{ height: "20px" }}
                onClick={() => {
                  addToCart()
                }}
              >
                +
              </button>
              <span> ₹ {item.price * item.quantity} </span>
            </div>
          </div>
        </div>
        ))}
      </div>

      <div className="total-items">
        <p>₹ {getCartTotal()}</p>
        <button
          className=""
          onClick={() => {
            clearCart();
          }}
        >
          Clear cart
        </button>
      </div>
    </div>
  );
}

/*import React from 'react'
import { useState } from 'react';

const Cartcard = () => {
    const [count, setCount] = useState(1)
    const val = 1;
    const [final, setFinal] = useState(1)
    const inc = (e) => {
        setCount(count + 1)
        setFinal(val + count)
    }
    const dec = (e) => {
        if (count <= 1) {
            setCount(1)
            setFinal(val)
        }
        else if (count > 1) {
            setCount(count - 1)
            setFinal(final - val)
        }
    }

    return (
        <div className='top'>
            <div className='top1' style={{ width: '80px', height: '80px', display: 'flex', justifyContent: 'space-around' }}>
                <div className='img'>img</div>
                <div className='beside-img'>
                    <div className='desc'>desc</div>
                    <div className='discount'>discount</div>
                    <div className='price'>price</div>
                    <div className='stock'>stock</div>
                </div>
            </div>
            <div className='btn' style={{ width: '50px', height: '50px', display: 'flex', justifyContent: 'space-around'}}> 
                <button onClick={inc}>+</button>
                <p>{val}</p>
                <button onClick={dec}>-</button>
            </div>
            <div className='finalprice'>{final}</div>
        </div>
    )
}



<h1 className="total">Total: ${getCartTotal()}</h1>
*/
