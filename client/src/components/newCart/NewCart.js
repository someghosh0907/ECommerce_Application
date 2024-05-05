import React, { useState, useEffect} from "react";
import StripeCheckout from "react-stripe-checkout";
//import { userRequest } from "../../userMethods";
import { useNavigate } from "react-router-dom";

const NewCart = ({ cart, removeFromCart, addToCart, clearCart }) => {
  const [CART, setCART] = useState([]);
  console.log(CART)
  const [stripeToken, setStripeToken] = useState(null);
  //const [payment, setPayment] = useState();
  const history = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
  };
  //const [pay,setPay]=useState(0)
  /*const paid=()=>{CART.map((item) => item.price * item.quantity).reduce(
    (total, value) => total + value,
    0
  )}
  setPay(paid)*/
  //const calculate=useMemo(()=>{expensiveCalculations,[CART]})
  //setPay(calculate)
  //STRIPE CLIENT SIDE
  const makePayment = (token) => {
    const body = {
      token,
      CART,
    };
    const header = {
      "Content-Type": "application/json",
    };
    return fetch("http://localhost:3400/payment", {
      method: "POST",
      headers: header,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  /*const expensiveCalculations=()=>CART.map((item) => item.price * item.quantity).reduce(
    (total, value) => total + value,
    0
  )*/
  useEffect(() => {
    setCART(cart);
  }, [cart]);

  /*useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("https://localhost:3400/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        history.push("/success", { data: res.data });
      } catch (error) {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);*/
  return (
    <div>
      {CART?.map((cartItem, cartindex) => {
        return (
          <div>
            <div className="display-prod" style={{ display: "flex" }}>
              <div className="img-class" style={{ display: "flex" }}>
                <img
                  src={cartItem.image}
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
                style={{ top: "0px", marginLeft: "30px" }}
              >
                <span
                  style={{
                    fontSize: "30px",
                    display: "block",
                    marginLeft: "20px",
                  }}
                >
                  <b>{cartItem.description}</b>
                </span>
                <p>
                  <b>Brand</b>:{cartItem.title}
                </p>
                <p>
                  <b>Stock</b>:{cartItem.stock}
                </p>
                <button
                  style={{ height: "20px" }}
                  onClick={() => {
                    const _CART = CART.map((item, index) => {
                      return cartindex === index
                        ? {
                            ...item,
                            quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                          }
                        : item;
                    });
                    setCART(_CART);
                    /*removeFromCart()*/
                  }}
                >
                  -
                </button>
                <span> {cartItem.quantity} </span>
                <button
                  style={{ height: "20px" }}
                  onClick={() => {
                    const _CART = CART.map((item, index) => {
                      return cartindex === index
                        ? { ...item, quantity: item.quantity + 1 }
                        : item;
                    });
                    setCART(_CART);
                    /*addToCart()*/
                  }}
                >
                  +
                </button>
                <span> ₹ {cartItem.price * cartItem.quantity} </span>
              </div>
            </div>
          </div>
        );
      })}

      {cart.length !== 0 && (
        <div className="total" style={{ paddingLeft: "420px" }}>
          {" "}
          <b>
            Total ₹
            <span>
              {CART.map((item) => item.price * item.quantity).reduce(
                (total, value) => total + value,
                0
              )}
            </span>
          </b>
        </div>
      )}
      {cart.length === 0 && (
        <h4 style={{ paddingLeft: "100px", fontSize: "20px" }}>
          Cart Is Empty, Add Some Products
        </h4>
      )}
      <br />
      {cart.length !== 0 && (
        <div className="payout" style={{ marginLeft: "420px" }}>
          <StripeCheckout
            style={{ height: "400px" }}
            name="Checkout"
            image="https://source.unsplash.com/random/1267x720"
            billingAddress
            shippingAddress
            description={`Your total is ₹${CART.map((item) => item.price * item.quantity).reduce(
              (total, value) => total + value,
              0
            )}`}
            amount={cart.total * 100}
            token={onToken}
            stripeKey={
              "pk_test_51NrcT3SBcRIJMUWbHWdkUjCjEWdMyJNEhYgAGUNHgZeqpOnI9OEFdoCAG9g4TX5gAFkYP1cD6ynr2GooVQe0utDO004sGhXRNS"
            }
          >
            <button
              onClick={() => {
                makePayment();
              }}
              style={{
                borderRadius: "9px",
                padding: "5px",
                backgroundColor: "skyblue",
                marginRight: "20px",
                fontSize: "20px",
              }}
            >
              <b>Proceed To Payout</b>
            </button>
          </StripeCheckout>
          <button
            onClick={() => {
              clearCart();
            }}
            style={{
              color: "black",
              borderRadius: "9px",
              backgroundColor: "red",
              padding: "5px",
              fontSize: "20px",
            }}
          >
            <b>Clear Cart</b>
          </button>
        </div>
      )}
    </div>
  );
};

export default NewCart;
