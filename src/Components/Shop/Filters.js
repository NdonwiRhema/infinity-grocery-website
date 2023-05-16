import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Filters.css'
import Slider from './Slider'

const Filters = () => {
  return (
    <div className='filter-container'>
        <span className='filter-reset'>Reset Filters</span>
        <Container>
            <Row>
                <Col xs={6} sm={12}>
                  <div className='filter-category'>
                        <h5>Filter By Category</h5>
                        <div className='filter-item'>
                            <input type='checkbox' name='Vegetables' value={'Vegetables'}/><span>Vegetables</span>
                        </div>
                        <div className='filter-item'>
                            <input type='checkbox' name='Vegetables' value={'Vegetables'}/><span>Meat</span>
                        </div>
                        <div className='filter-item'>
                            <input type='checkbox' name='Vegetables' value={'Vegetables'}/><span>Pulses</span>
                        </div>
                        <div className='filter-item'>
                            <input type='checkbox' name='Vegetables' value={'Vegetables'}/><span>Spices</span>
                        </div>
                        <div className='filter-item'>
                            <input type='checkbox' name='Vegetables' value={'Vegetables'}/><span>Fruits</span>
                        </div>
                        <div className='filter-item'>
                            <input type='checkbox' name='Vegetables' value={'Vegetables'}/><span>Cereals</span>
                        </div>
                        <div className='filter-item'>
                            <input type='checkbox' name='Vegetables' value={'Vegetables'}/><span>Tubers</span>
                        </div>
                        <div className='filter-item'>
                            <input type='checkbox' name='Vegetables' value={'Vegetables'}/><span>Proteins</span>
                        </div>
                        <div className='filter-item'>
                            <input type='checkbox' name='Vegetables' value={'Vegetables'}/><span>Diary</span>
                        </div>
                 </div>    
                </Col>
                <Col xs={6} sm={12}>
                    <div className='filter-price'>
                        <h4>Filter By Price</h4>
                        <div className='price-slider'>
                            <Slider min={0} max={5000}/>
                        </div>
                    </div>
                    <div className='filter-size'>
                        <h4>Filter By Size</h4>
                        <div className='size-select'>
                            <div className='filter-item'>
                                <input type='checkbox' name='Large' value={'large'}/><span>Large</span>
                            </div>
                            <div className='filter-item'>
                                <input type='checkbox' name='Medium' value={'medium'}/><span>Medium</span>
                            </div>
                            <div className='filter-item'>
                                <input type='checkbox' name='Small' value={'small'}/><span>small</span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Filters
