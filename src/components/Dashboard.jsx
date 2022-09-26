import React from 'react';
import Itemcard from "./Itemcard";
import data from "./Data";
// import Cart from './Cart';
// import { CartProvider } from 'react-use-cart';

import landing from "../images/landing.jpg";
import "../styles/Home.css";
import { Link } from "react-router-dom";


const Dashboard = () => {

    let status=((localStorage.getItem("status")));

    if(status==="log-in")
    {
        return (  
            <>
            <div>
                <h1 className='text-center mt-3'>All Items</h1>
                <section className='py-4 container'>
                    <div className='row justify-content-center'>
    
                        {data.productData.map((item, index)=>{
                            return(
                                <Itemcard
                                 img={item.img} 
                                 title={item.title} 
                                 desc={item.desc} 
                                 price={item.price} 
                                 item={item} 
                                 key={index} />
                            )
                        })}
    
                    </div>
                </section> 
            </div>
            </>
        );

    }

    else
    {
        return (
            <div className="home" style={{ backgroundImage: `url(${landing})` }}>
          
              <div className="headerContainer">
              <h1 style={{color:'white'}}>
                <div>
                </div>BUY FARM FRESH FRUITS & VEGETABLES
                <div className="text-center">AT BEST PRICES</div> </h1>
                {/* <Link to="/Login" className="btn btn-success"> Order Now */}
                    <div className="text-center">
                    <Link to="/Login" className="btn btn-success btl"> Order Now
                  {/* <button className="btn btn-success">Order Now</button> */}
                  </Link>
                  </div>
                {/* </Link> */}
              </div>
            </div>
          );
    }


};

export default Dashboard;





// return (
    //     <>
    //     <div>
    //         <h1 className='text-center mt-3'>All Items</h1>
    //         <section className='py-4 container'>
    //             <div className='row justify-content-center'>

    //                 {data.productData.map((item, index)=>{
    //                     return(
    //                         <Itemcard
    //                          img={item.img} 
    //                          title={item.title} 
    //                          desc={item.desc} 
    //                          price={item.price} 
    //                          item={item} 
    //                          key={index} />
    //                     )
    //                 })}

    //             </div>
    //         </section>
    //     </div>
    //     {/* <CartProvider>
    //     <Cart/>
    //     </CartProvider> */}
    //     </>
    // );

