import React from "react";
//import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
//import { authActions } from '../store';

const Login = () => {
  const navigate = useNavigate();
  //const dispatch = useDispatch();
  //state
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  //handle input change
  /*const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };*/

  //form handle
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/user/login", {
        email: inputs.email,
        password: inputs.password,
      });
      if (data?.success) {
        //localStorage.setItem("userId", data?.user._id);
        //dispatch(authActions.login());
        //toast.success("User login Successfully");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      alert("Please Register Before Logging In!!!!");
    }
  }
  return (
    <div className="top" style={{marginLeft:"700px"}}>
      <form onSubmit={handleSubmit}>
        <div
          className="content"
          style={{
            display:"block",
            backgroundColor: "pink",
            width: "420px",
            height: "470px",
            justifyContent: "center",
            alignItems:"center",
            borderRadius: "10px",
            boxShadow: "400",
            top: "30px",
            margin: "40px",
          }}
        >
          <p style={{ color: "black", fontSize: "16px" ,justifyContent:"center",paddingLeft:"170px",paddingTop:"20px"}}>
            <h2>Login</h2>
          </p>
          <input
            type="email"
            value={inputs.email}
            placeholder="E-Mail"
            style={{ borderRadius: "7px",backgroundColor:"whitesmoke",height:"40px",width:"386px",marginBottom:"10px",marginTop:"20px",paddingLeft:"20px" }}
            onChange={(e)=>setInputs(e.target.value)}
          ></input>
          <br/>
          <input
            type="password"
            value={inputs.password}
            placeholder="Password"
            style={{ borderRadius: "7px",backgroundColor:"whitesmoke",height:"40px",width:"386px",marginBottom:"10px" ,paddingLeft:"20px"}}
            onChange={(e)=>setInputs(e.target.value)}
          ></input>
          <br />
          <button
            type="submit"
            style={{
              backgroundColor: "#00FF00",
              padding: "15px 85px",
              borderRadius: "7px",
              marginLeft:"100px"
            }}
          >
            Login
          </button>
          <br />
          <p style={{ color: "black", fontSize: "16px" ,marginLeft:"100px" }} onClick={navigate('/register')}>
            Not Registered?? <span style={{ color: "blue"}}>Register</span>
          </p>
          <p style={{alignItems:"center",marginLeft:"150px" }}>Sign-Up using</p>
          <img
            src="data:image/jpeg;base64,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"
            style={{ backgroundColor: "black", height: "50px",justifyContent:"center" ,marginLeft:"176px" }}
            alt="google-img"
          ></img>
        </div>
      </form>
    </div>
  );
};

export default Login;
