import React, { useState } from 'react'
import { Col, Row, Tab, Tabs} from 'react-bootstrap'
import Heading from '../Heading'
import Product from '../products/Product'
import { FaArrowCircleRight,FaArrowCircleLeft } from 'react-icons/fa'

import './Body.css'

const Body = ({title}) => {
    const[key,setKey] = useState()
    const[Next,setNext] = useState(10)
    const[Prev,setPrev] = useState(0)
    const[end,setEnd]=useState()
    const[start,setStart]=useState(true)
    const styles = {
        paginationcont:{
            marginTop:18,
            innerWidth:50,
            innerHeight:'100px',
            display:'flex',
            justifyContent:'space-between'
        },
        paginateBtn:{
            innerWidth:'50%',
            height:'100%',
            borderRadius:'7px',
            border:'none',
            paddingLeft:18,
            paddingRight:18,
            backgroundColor:'#1c2847',
            color:'#F39317'
        },
        paginateBtnInactive:{
            innerWidth:'50%',
            height:'100%',
            borderRadius:'7px',
            border:'none',
            paddingLeft:18,
            paddingRight:18,
            backgroundColor:'#3b4872',
            color:'gray'
        }
    }
    const NextPage = ()=>{
          
    }
    const PrevPage = ()=>{
       
    }
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
      <Tab eventKey="seasonal" title="Seasonal">
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
    <div style={styles.paginationcont}>
         <button style={start?styles.paginateBtnInactive:styles.paginateBtn} onClick={PrevPage}><span><FaArrowCircleLeft/></span>  Prev</button>
         <button style={end?styles.paginateBtnInactive:styles.paginateBtn} onClick={NextPage}>Next <span><FaArrowCircleRight/></span></button>
    </div>
     
</div>
  )
}

export default Body