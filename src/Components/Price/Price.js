import React from 'react';

const Price = (props) => {
    const {cart} = props ;
    let name , price =0 ;
    for(let n of cart){
        name =  n.name ;
        price += n.price ;
    }
    return (
        <div className="price">
             <h2 > Pricing Section</h2><hr />
           <p>Ordered Item = {props.cart.length}</p>
           <p> Book name =  {name} </p>
           <p>Total Price = {price}</p>
        </div>
    );
};

export default Price;