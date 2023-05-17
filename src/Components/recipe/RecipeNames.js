import React from 'react'
import { Col, Row } from 'react-bootstrap'

import './RecipeNames.css'
const RecipeNames = () => {
  return (
    <Row>
        <div className='recipe-names'> All Recipes</div>
        <Col className='names' xs={6} sm={12}>
            <h6> Ndole Recipe </h6>
        </Col>
        <Col className='names' xs={6} sm={12}>
            <h6> Ekwang Recipe </h6>
        </Col>
        <Col className='names' xs={6} sm={12}>
            <h6> Eru Recipe </h6>
        </Col>
        <Col className='names' xs={6} sm={12}>
            <h6> Okok Recipe </h6>
        </Col>
        <Col className='names' xs={6} sm={12}>
            <h6> Mbongo Recipe </h6>
        </Col>
        <Col className='names' xs={6} sm={12}>
            <h6> Achu Recipe </h6>
        </Col>
    </Row>
  )
}

export default RecipeNames
