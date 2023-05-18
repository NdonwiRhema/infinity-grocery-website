import React from 'react'
import './BannerNav.css'
import logo from '../../assets/bottomlogo.png'
import { FaShoppingCart } from 'react-icons/fa'
import { Container,Navbar,Nav} from 'react-bootstrap'

const BannerNav = () => {
  return (
    <div className='Navcontainer'>
        <div className='Nav_div'>
        <Navbar  expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                 <img alt="" src={logo} width="30"   height="30" className="d-inline-block align-top" />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                           <Nav.Link href="#home">
                                <a className="anchor-active nav-anchor" href="/">Home</a>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <a className=" nav-anchor" href='/shop'>Shop</a>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <a className=" nav-anchor" href='/recipe'>Recipes</a>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <a className=" nav-anchor" href='/breakfast'>Breakfast</a>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <a className=" nav-anchor" href='/fruit'>Fruits</a>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <a className=" nav-anchor" href='/protein'>Proteins</a>
                            </Nav.Link>
                          
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
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