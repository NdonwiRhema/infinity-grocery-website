import React from 'react'
import './BannerNav.css'
import { FaShoppingCart } from 'react-icons/fa'

const BannerNav = () => {
  return (
    <div className='Navcontainer'>
        <div className='Nav_div'>
                  <ul class="nav">
                        <li class="nav-item">
                            <a class="anchor-active nav-anchor" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class=" nav-anchor " href="/">Cereals</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-anchor " href="/">Proteins</a>
                        </li>
                        <li class="nav-item">
                            <a class=" nav-anchor" href='/'>Fruits</a>
                        </li>
                        <li class="nav-item">
                            <a class=" nav-anchor" href='/'>Breakfast</a>
                        </li>
                        <li class="nav-item">
                            <a class=" nav-anchor" href='/'>Recipes</a>
                        </li>
                        <li class="nav-item">
                            <a class=" nav-anchor" href='/'>Shop</a>
                        </li>
                    </ul>  
        </div>
        <div className='cart_div'>
            <div className='cart_value'>
                <FaShoppingCart fontSize={12}/>
                <h6>XAF 0.00 (0 Item(s))</h6>
            </div>
            <div className='cart heading'>
                <h6>Cart Items</h6>
            </div>
        </div>
    </div>
  )
}

export default BannerNav