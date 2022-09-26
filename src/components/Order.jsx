import React from 'react';
import { useCart } from 'react-use-cart';
import { Link } from "react-router-dom";
import Bag from "@material-ui/icons/LocalMall";
import Bag2 from '@material-ui/icons/LocalMallOutlined';
// import Thumbs from '@material-ui/icons/Recommend';
// import Up from '@material-ui/icons/RecommendOutlined';


const Order = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
        metadata,
        clearCartMetadata,
        updateCartMetadata,
    } = useCart();

    const [value, setValue] = React.useState('');

    const handleChange=(event)=>{
        setValue(event.target.value);
    }

    let status=((localStorage.getItem("status")));

    let deliveryCharge=50;
    let total=cartTotal+deliveryCharge;
    // updateCartMetadata(Cart2);

    if(status==="log-in")
    {

     if(isEmpty) return <>
     <h1 className='text-center'> Order Placed  <br/>
    Thanks for your order. Will be delivered soon..  </h1>
    <br/>
    <div className='text-center'><Bag style={{color:'green'}}/> </div>
    </>

    return (
        <>
         <h3 className='text-center'>Items</h3>
        <section className='py-4 container'>
            <div className='row justify-content-center'>
                <div className='col-8'>
                    <table className='table table-light table-hover m-0'>
                        <tbody>
                            {items.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <>
                                            <td>
                                                <img src={item.img} style={{ height: '6rem', width: '10rem' }} />
                                            <br/>
                                            {item.title} </td>
                                            <td> Rs. {item.price} / quantity </td>
                                            <td>Quantity ({item.quantity}) </td>
                                            
                                        </>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>


            </div>
        </section>
        <hr />
        {/* <div className='row justify-content-center'>
                <div className='col-8'> */}
        <div className='py-4 row container justify-content-center'>
            <div className='col-6'>
               
                <div className='col-auto ms-auto '>
                    <h3> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Your Bill</h3>
                    <h4> Price(items-{totalItems}): Rs. {cartTotal} </h4>
                    <h4> Delivery Charge: Rs. {deliveryCharge} </h4>
                    <h4> Total Amount: Rs. {total} </h4>
                </div>
                <div className='col-auto ms-auto'>
                   &nbsp; &nbsp; <input className='text-center' type="text" placeholder="Your Card Number" 
                   name="cn" value={value} onChange={handleChange} />
                </div>
                <div className='col-auto ms-auto'>
                    <button className='btn btn-primary m-2'
                    disabled={!value}
                     onClick={() => emptyCart()}>
                        Palce Order
                    </button> 
                    <Link to="/cart">
                     <button className="btn btn-danger m-2">Cancel</button>
                 </Link>
                </div>
               
            </div>
            </div>
            </>
       
         );
    }

    else
    {
        window.location='/login';
    }
    
};

export default Order;