import React from "react";
import video1 from "../Videos/v1.mp4";

const NewLaunch = () => {
  return (
    <div>
      <div className="topmost" style={{marginLeft: 20}}>
        <p className="v1">
          <video
            style={{ height: "900px",paddingRight:"9px"}}
            src={video1}
            type="video/mp4"
            controls
            autoPlay
            loop
          ></video>
        </p>
        <div className="v1-img">
          <p className="img1">
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/94f80bf1-d568-47ed-b482-6d459571e4ea/air-jordan-1-high-method-of-make-shoes-wvNP62.png"
              alt="img1"
              style={{ height:"440px" ,width:"450px"}}
            ></img>
          </p>
          <p className="img1">
            <img
              src="https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/wtofx58wbwrvcyjx0kkq/air-jordan-1-high-og-blackred-release-date.jpg"
              alt="img1"
              style={{ height:"440px" ,width:"450px"}}
            ></img>
          </p>
        </div>
        <div className="hero-content" style={{ height:"900px" ,width:"900px" ,backgroundColor:"#FDC400",marginTop:16,justifyContent:"center"}}>
          <h1 style={{fontSize:100}}><b>New Arrivals</b></h1>
          <h3 style={{fontSize:40,paddingLeft:20}}>Discover The New Sneaker' Collection For February'23</h3>
          <h3 style={{fontSize:40,color:"blue",paddingLeft:20}}>#GetVibin'</h3>
        </div>
      </div>
    </div>
  );
};

export default NewLaunch;
