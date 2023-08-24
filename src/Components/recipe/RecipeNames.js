import React, {useState,useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'

import './RecipeNames.css'
import { recipeThunk } from '../../app/features/recipeSlice'
import { useDispatch, useSelector } from 'react-redux'
const RecipeNames = ({setRecipeObject}) => {
    const dispatch = useDispatch()
    const [recipeName,setRecipeName]=useState('')
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
        {Fullrecipe.length >0 && Fullrecipe.map((recipe,index)=>(
            <Col key ={index} className={`names ${recipeName===recipe.name&&'activeNames'}`} xs={6} sm={12}>
                <h6 onClick={()=>{
                    setRecipeName(recipe.name)
                    setRecipeObject({id:recipe.id,recipe:recipe})
                    }}> {recipe.name} </h6>
            </Col>
        ))}
            
            
    </Row>
  )
}

export default RecipeNames
