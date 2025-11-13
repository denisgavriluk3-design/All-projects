import React from 'react'
import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Order from './order';

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return (<div>
    {props.orders.map(el => (
            <Order onDelete={props.onDelete} key={el.id} item={el} />
    ))}
    <p className='summa'>summa: {new Intl.NumberFormat().format(summa)}$</p>
  </div>)
}

const showNothing = () => {
  return (<div className='empty'><h2>dont have product</h2></div>)
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
      <span className='logo'>house staff</span>
      <ul className='nav'>
        <li>about aus</li>
        <li>contact</li>
        <li>cabinet</li>
      </ul>
      <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

      {cartOpen && (
        <div className='shop-cart'>
          {props.orders.length > 0 ? showOrders(props) : showNothing()}
        </div>
      )}
      <div className='presentation'></div>
    </header>
  );
}
