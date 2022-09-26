import React from "react";
import landing from "../images/landing.jpg";
import home1 from "../images/home1.jpg";
import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${landing})` }}>
  
      <div className="headerContainer">
      <h1 style={{color:'white'}}>
        <div>
        </div>BUY FARM FRESH FRUITS & VEGETABLES
        <div className="text-center">AT BEST PRICES</div> </h1>
        {/* <Link to="/login">
            <div className="text-center">
          <button className="btn btn-success">Order Now</button>
          </div>
        </Link> */}

          <div className="text-center">
             <Link to="/Login" className="btn btn-success btl"> Order Now </Link>
          </div>

      </div>
    </div>
  );
}