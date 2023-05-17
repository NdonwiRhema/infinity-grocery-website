import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RecipeNames from './recipe/RecipeNames'
import RecipeSection from './recipe/RecipeSection'

const RecipeBody = () => {
  return (
    <Container >
        <Row>
            <Col xs={12} sm={2}>
                <RecipeNames/>
            </Col>
            <Col xs={12} sm={10}>
                <RecipeSection/>
            </Col>
        </Row>
    </Container>
  )
}

export default RecipeBody