import React from 'react';
//import {Link} from "react-router-dom";
import {NavLink} from 'react-router-dom'
import "../styles/Navbar.css";

function Navbar(props) {

    let status=((localStorage.getItem("status")));

    if(status==="log-in")
    {
        return (
            <div className='navbar'>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className='container-fluid'>
                        <button className='navbar-toggler' type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls='navbarSupportedContent'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='text-light'>
                           <h4>Shopicart</h4>
                        </div> 
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                               
                                <li className="nav-item">
                                    {/* <Link to="/">Home</Link> */}
                                    <NavLink className="nav-link"  to="/">Home</NavLink>
                                </li>
            
                                <li className="nav-item">
                                    {/* <Link to="/login">Login</Link> */}
                                    <NavLink className="nav-link"  to="/logout">Logout</NavLink>
                                </li>
                                
                            </ul> 
                            </div>
                            </div>
                        </nav>
            </div>
            
                );
        }
                else {
                return (
                    <div className='navbar'>
                            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                            <div className='container-fluid'>
                                <button className='navbar-toggler' type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls='navbarSupportedContent'>
                                    <span className='navbar-toggler-icon'></span>
                                </button>
                                <div className='text-light'>
                                   <h4>Shopicart</h4>
                                </div> 
                                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                       
                                        <li className="nav-item">
                                            {/* <Link to="/">Home</Link> */}
                                            <NavLink className="nav-link"  to="/">Home</NavLink>
                                        </li>
                    
                                        <li className="nav-item">
                                            {/* <Link to="/login">Login</Link> */}
                                            <NavLink className="nav-link"  to="/login">Login</NavLink>
                                        </li>
                    
                                    </ul> 
                                    </div>
                                    </div>
                                </nav>
                    </div>
                    
                        );

                }


//     return (
// <div className='navbar'>
//         <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//         <div className='container-fluid'>
//             <button className='navbar-toggler' type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls='navbarSupportedContent'>
//                 <span className='navbar-toggler-icon'></span>
//             </button>
//             <div className='text-light'>
//                <h4>Shopicart</h4>
//             </div> 
//             <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
//                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                   
//                     <li className="nav-item">
//                         {/* <Link to="/">Home</Link> */}
//                         <NavLink className="nav-link"  to="/">Home</NavLink>
//                     </li>

//                     <li className="nav-item">
//                         {/* <Link to="/login">Login</Link> */}
//                         <NavLink className="nav-link"  to="/login">Login</NavLink>
//                     </li>

//                     <li className="nav-item">
//                         {/* <Link to="/login">Login</Link> */}
//                         <NavLink className="nav-link"  to="/logout">Logout</NavLink>
//                     </li>
                    
//                 </ul> 
//                 </div>
//                 </div>
//             </nav>
// </div>

//     );

}



export default Navbar;