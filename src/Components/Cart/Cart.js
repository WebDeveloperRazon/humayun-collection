import React from 'react';
import './Cart.css' ;
const Cart = (props) => {
    console.log(props)
    const {name , img, author , price } = props.book ;
    return (
        <div className='cart'>
      
        <img src={img} alt="" />
        <h1> {name}</h1>
        <p> Author :  {author}</p>
        <p>Price : BDT {price}</p><br />
        <p><button onClick={()=>props.handleAddToCart(props.book)} >Add to Cart</button></p>

       
        

        </div>
    );
};

export default Cart;