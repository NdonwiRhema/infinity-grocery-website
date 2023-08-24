import React from 'react'

import './BannerNav.css'
import logo from '../../assets/bottomlogo.png'
import { FaShoppingCart } from 'react-icons/fa'
import { Container,Navbar,Nav} from 'react-bootstrap'
 import { useSelector } from 'react-redux'

const BannerNav = ({activeTab}) => {
    // const CartNums = JSON.parse(localStorage.getItem('cart'))
    // const Nums = CartNums?CartNums.length:0
    const Nums = useSelector((state)=>state.cart.totalItems)
    const cartTotal = useSelector((state)=>state.cart.cartTotal)
 
    return (
    <div className='Navcontainer'>
        <div className='Nav_div'>
        <Navbar  expand="lg">
            <Container>
                <Navbar.Brand href="/">
                 <img alt="" src={logo} width="30"   height="30" className="d-inline-block align-top" />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                           <Nav.Link href="#home">
                                <a className={`${activeTab ==='home'?'anchor-active nav-anchor':' nav-anchor'}`} href="/" >Home</a>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <a className={`${activeTab==='shop'?'anchor-active nav-anchor':' nav-anchor'}`} href='/shop' >Shop</a>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <a className={`${activeTab==='recipes'?'anchor-active nav-anchor':' nav-anchor'}`} href='/recipe'>Recipes</a>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <a className={`${activeTab==='breakfast'?'anchor-active nav-anchor':' nav-anchor'}`} href='/breakfast' >Breakfast</a>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <a className={`${activeTab==='fruits'?'anchor-active nav-anchor':' nav-anchor'}`} href='/fruit'>Fruits</a>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <a className={`${activeTab==='proteins'?'anchor-active nav-anchor':' nav-anchor'}`} href='/protein'>Proteins</a>
                            </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
        <div className='cart_div'>
            <div className='cart_value'>
                <FaShoppingCart fontSize={12}/>
                <h6>XAF {cartTotal} ({Nums} Item(s))</h6>
            </div>
            <div className='cart_heading'>
                <h6><a href='/cart'>Cart Items</a></h6>
            </div>
        </div>
    </div>
  )
}

export default BannerNav