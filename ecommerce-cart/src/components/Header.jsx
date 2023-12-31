import React from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingBag} from 'react-icons/fi'
import { useSelector } from "react-redux";

function Header() {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <nav>
        <h2>A Store</h2>
        <div className="links">
            <Link to='/'>Home</Link>
            <Link to='/cart' className='cart-icon'>
                <FiShoppingBag/>
                <p>{cartItems.length}</p>
            </Link>
        </div>
    </nav>
  )
}

export default Header