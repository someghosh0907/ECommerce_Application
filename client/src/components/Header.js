import React, { useEffect, useState } from "react";
//import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
//import { authActions } from '../store'
import { Link } from "react-router-dom";
//import { useSelector } from 'react-redux/es/hooks/useSelector'
import "./header.css";
import { CiLogin } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
//import { FaSearch } from "react-icons/fa";
import App1 from "./searchbar/App1";
import logo from "./logo-vogue.png";

const Header = (cart) => {
  console.log(typeof(cart));
  //const [kart, setKart] = useState([cart]);
  //const dispatch = useDispatch()
  const navi = useNavigate();
  //GLOBAL STATE(REDUX)
  //const isLogin = useSelector((state) => state.isLogin)
  //console.log(isLogin)
  //NORMAL STATE
  /*const [value,setValue]=useState()*/
  /*const handleLogout = () => {
        try {
            dispatch(authActions.logout())
            alert('Logout Successful')
            navi('/login')
        }
        catch (err) {
            console.log(err)
        }
    }*/
  useEffect(() => {}, [cart]);
  return (
    <div className="header">
      <div className="nav-bar">
        <div className="pages">
          <img src={logo} alt="logo-vogue" onClick={() => navi("/")}></img>
        </div>
        <div className="title-box">
          <div className="title" style={{ color: "black" }}></div>
        </div>
        <div className="nav-elements" style={{ marginTop: "22px" }}>
          <Link
            style={{
              borderRadius: 5,
              marginLeft: 250,
              color: "black",
              textDecoration: "none",
              fontSize: "20px",
              marginTop: 10,
            }}
            id="loginbutton"
            to="/newcart"
          >
            <FaCartShopping />
            
          </Link>
          <Link
            style={{
              color: "black",
              fontSize: "20px",
              paddingLeft: 15,
              textDecoration: "none",
            }}
            to="/login"
          >
            <span
              style={{
                border: "solid",
                borderWidth: "1px",
                borderRadius: "10px",
                padding: "5px",
                color: "rgb(59 130 246)",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
              onClick={() => navi("/login")}
            >
              <b>Login</b>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
