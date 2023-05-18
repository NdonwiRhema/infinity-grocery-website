import React, { useState } from 'react'
import { Col, Row, Tab, Tabs,Pagination} from 'react-bootstrap'
import Heading from '../Heading'
import Product from '../products/Product'

import './Body.css'

const Body = ({title}) => {
    let active = 2;
    let items = [];

for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}
    const[key,setKey] = useState()
  return (
    <div className=''>
        <Heading text={title}/>
        <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="diary" title="Diary">
            <Row>
                <Col xs={6} sm={4}>
                    <Product/>
                </Col>
                <Col xs={6} sm={4}>
                    <Product/>
                </Col>
                <Col xs={6} sm={4}>
                    <Product/>
                </Col>
                <Col xs={6} sm={4}>
                    <Product/>
                </Col>
                <Col xs={6} sm={4}>
                    <Product/>
                </Col>
            </Row>
      </Tab>
      <Tab eventKey="derivatives" title="Derivatives">
      <Row>
                <Col xs={6} sm={4}>
                    <Product/>
                </Col>
                <Col xs={6} sm={4}>
                    <Product/>
                </Col>
                <Col xs={6} sm={4}>
                    <Product/>
                </Col>
                <Col xs={6} sm={4}>
                    <Product/>
                </Col>
                <Col xs={6} sm={4}>
                    <Product/>
                </Col>
            </Row>
      </Tab>
      <Tab eventKey="tubers" title="Tubers">
      <Row>
                <Col xs={6} sm={4}>
                    <Product/>
                </Col>
                <Col xs={6} sm={4}>
                    <Product/>
                </Col>
                <Col xs={6} sm={4}>
                    <Product/>
                </Col>
                <Col xs={6} sm={4}>
                    <Product/>
                </Col>
                <Col xs={6} sm={4}>
                    <Product/>
                </Col>
            </Row>
      </Tab>
      
    </Tabs>
    <div className='paging'>
        <Pagination>{items}</Pagination>
    </div>
     
</div>
  )
}

export default Body