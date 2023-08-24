import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RecipeNames from './recipe/RecipeNames'
import RecipeSection from './recipe/RecipeSection'

const RecipeBody = () => {
  const[recipeObject,setRecipeObject] = useState({
    id:'',
    recipe:'',
  })
  return (
    <Container >
        <Row>
            <Col xs={12} sm={2}>
                <RecipeNames setRecipeObject={setRecipeObject}/>
            </Col>
            <Col xs={12} sm={10}>
                <RecipeSection recipeObject={recipeObject}/>
            </Col>
        </Row>
    </Container>
  )
}

export default RecipeBody