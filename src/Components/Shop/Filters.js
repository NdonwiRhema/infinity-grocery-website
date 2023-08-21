import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Filters.css'
import Slider from './Slider'
import { useDispatch,useSelector } from 'react-redux'
import { categoryThunk } from '../../app/features/categorySlice'
import { pullLocalStorage } from '../utils/LocalStorageOperations'

const Filters = ({filter,setFilter}) => {
    const dispatch  = useDispatch()
    const [clickState,setClickState] =useState(false)
    const allProducts = pullLocalStorage("ALLProducts")
   
    useEffect(()=>{
        dispatch(categoryThunk())
    },[dispatch])
    const categories = useSelector((state)=>state.category.data)
    function editFilters(id){
      !clickState? setFilter((prevState)=>[...prevState,id]):setFilter((prevState)=>prevState.filter((item)=>item!==id))
    }
  return (
    <div className='filter-container'>
        <span className='filter-reset'>Reset Filters</span>
        <Container>
            <Row>
                <Col xs={6} sm={12}>
                  <div className='filter-category'>
                        <h5>Filter By Category</h5>
                       
                        {categories.length>0 && categories.map((category,index)=>(
                          <div key={index} className='filter-item'>
                             <input type='checkbox'
                              name={category.name}
                              value={category.id}
                              onClick={()=>{
                                    setClickState(!clickState)
                                    editFilters(category.id)
                              }}
                              /><span>{category.name}</span>
                         </div>
                        ))}
                 </div>    
                </Col>
                <Col xs={6} sm={12}>
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
