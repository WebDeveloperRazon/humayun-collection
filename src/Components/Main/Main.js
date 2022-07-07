import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import './Main.css';
import Price from './../Price/Price';

const Main = () => {
    const[books ,setBooks]=useState([]) ;
    const [cart , setCart] = useState([]);
    useEffect(()=>{
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    const handleAddToCart = (book) =>{
        
        const newCart = [...cart , book] ;
        setCart(newCart) ;
    }
    return (
        <div className="container">
          <div className="main">
          {
            books.map(book => <Cart book={book} handleAddToCart={handleAddToCart} key={books.name}></Cart>)
           }
          
          </div>
           <div className="price">
          <Price cart={cart}></Price>
          </div>
         </div>
        
    );
};

export default Main;