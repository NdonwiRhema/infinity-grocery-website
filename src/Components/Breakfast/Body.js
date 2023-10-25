import React, { useState } from 'react'
import { Col, Row} from 'react-bootstrap'
import Heading from '../Heading'
import Product from '../products/Product'
import { FaArrowCircleRight,FaArrowCircleLeft } from 'react-icons/fa'

import './Body.css'
import { pullLocalStorage } from '../utils/LocalStorageOperations'


const Body = ({title}) => {
  
    const categories=pullLocalStorage('AllCategory')
    const products=pullLocalStorage('AllProducts')
    const titleCategory = categories.length>0&&categories.filter((item)=>item.name === title).pop()
 
    let productArrays =products.length>0&&products.filter((item)=>item.category === titleCategory.id)
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
        <Row>
                          {productArrays.length>0&&productArrays.map((product,index)=>(
                              <Col key={index} xs={6} sm={4}>
                                  <Product detail={product}/>
                              </Col>
                         ))}
       </Row>
    <div style={styles.paginationcont}>
         <button style={start?styles.paginateBtnInactive:styles.paginateBtn} onClick={PrevPage}><span><FaArrowCircleLeft/></span>  Prev</button>
         <button style={end?styles.paginateBtnInactive:styles.paginateBtn} onClick={NextPage}>Next <span><FaArrowCircleRight/></span></button>
    </div>
     
</div>
  )
}

export default Body