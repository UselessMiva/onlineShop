import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import Order from "./Order"

const showOrders = (props) => {
  let sum = 0
  props.orders.forEach(el => {
     sum += (el.price)
  });
  return(<div>
    {props.orders.map(el => (
              <Order onDelete={props.onDelete} key={el.id} item={el} />
            ))}
            <p className='sum'>Сумма: {
  sum}$</p>
  </div>)
}
const showEmpty = () => {
  return (<h2 className='empty'>Корзина пуста</h2>)
}
export default function Header(props) {
  let [cartOpen, setCartOpen] =useState(false)
  return (
<header>
    <div>
        <span className='logo'>Online Shop</span>
        <ul className='nav'>
            <li>Про нас</li>
            <li>Контакты</li>
            <li>Кабинет</li>
        </ul>
        <FaCartShopping onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shoppingCart ${cartOpen && 'active'}`}/>

        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ? showOrders(props) : showEmpty() }
          </div>
        ) }
   
    </div>
    <div className='presentation'></div>
</header>
  )
}
