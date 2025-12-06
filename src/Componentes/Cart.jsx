import React from 'react'
import {pizzaCart} from '../pizzas.js'
import { useState } from 'react'

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart);

    
    const increase = (id) => {
        setCart(cart.map(pizza => pizza.id === id ? {...pizza, count: pizza.count + 1} : pizza));
    };
    
    const decrease = (id) => {
        setCart(cart.map(pizza => pizza.id === id && pizza.count > 0 ? {...pizza, count: pizza.count - 1} : pizza));
    };
    
    const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);
  
    return (
    <div className="cart-container my-5">
        <h4>Detalles del pedido:</h4>
        <ul className='list-group'>
          {cart.map((pizza) => (
           <li key={pizza.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <img src={pizza.img} alt={pizza.name} width="60" className="me-2" />
              <strong className="text-capitalize">{pizza.name}</strong> - ${pizza.price}
            </div>
            <div>
              <button className="btn btn-sm btn-success me-2" onClick={() => increase(pizza.id)}>+</button>
              <button className="btn btn-sm btn-danger me-2" onClick={() => decrease(pizza.id)}>-</button>
              Cantidad: {pizza.count}
            </div>
          </li>
          ))}
        </ul>
         <h5 className="mt-3">Total: ${total}</h5>
         <button className="btn btn-primary mt-2">Pagar</button>
    
    </div>
    )
}

export default Cart