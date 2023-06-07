import React, {useState,useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'

import './RecipeNames.css'
import { recipeThunk } from '../../app/features/recipeSlice'
import { useDispatch, useSelector } from 'react-redux'
const RecipeNames = () => {
    const dispatch = useDispatch()
    const [recipeName,setRecipeName]=useState('ndole')
useEffect(()=>{
    dispatch(recipeThunk())
    
},[recipeName,dispatch])
   // redux states
    const recipeSelector = useSelector((state)=>state.recipe.data)
    let Fullrecipe= recipeSelector? recipeSelector.slice(0,10):[]
    console.log(Fullrecipe)
  return (
    <Row>
        <div className='recipe-names'> All Recipes</div>
            <Col className={`names ${recipeName==='ndole'&&'activeNames'}`} xs={6} sm={12}>
                <h6 onClick={()=>setRecipeName('ndole')}> Ndole Recipe </h6>
            </Col>
            <Col className={`names ${recipeName==='ekwang'&&'activeNames'}`} xs={6} sm={12}>
                <h6 onClick={()=>setRecipeName('ekwang')}> Ekwang Recipe </h6>
            </Col>
            <Col className={`names ${recipeName==='eru'&&'activeNames'}`} xs={6} sm={12}>
                <h6 onClick={()=>setRecipeName('eru')}> Eru Recipe </h6>
            </Col>
            <Col className={`names ${recipeName==='okok'&&'activeNames'}`} xs={6} sm={12}>
                <h6 onClick={()=>setRecipeName('okok')}> Okok Recipe </h6>
            </Col>
            <Col className={`names ${recipeName==='mbongo'&&'activeNames'}`} xs={6} sm={12}>
                <h6 onClick={()=>setRecipeName('mbongo')}> Mbongo Recipe </h6>
            </Col>
            <Col className={`names ${recipeName==='Achu'&&'activeNames'}`} xs={6} sm={12}>
                <h6 onClick={()=>setRecipeName('Achu')}> Achu Recipe </h6>
            </Col>
    </Row>
  )
}

export default RecipeNames
