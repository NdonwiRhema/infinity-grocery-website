import React, { useEffect, useState } from 'react'
import{FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'
import { useSelector,useDispatch } from 'react-redux'
import { fetchProducts } from '../../app/features/productSlice'
import { Col,Row } from 'react-bootstrap'
import Product from '../products/Product'

const Shop = () => {
    const dispatch = useDispatch()
    const[prodList,setProdList] =useState()
    const[Next,setNext] = useState(10)
    const[Prev,setPrev] = useState(0)
    const[end,setEnd]=useState()
    const[start,setStart]=useState(true)

   useEffect(()=>{
    const holdArr = dispatch(fetchProducts())
    setProdList(holdArr.data)
   },[prodList,dispatch])

    
   const productsSelector = useSelector((state)=>state.product)
    const products = productsSelector.data
    let Fullproducts = products.slice(Prev,Next)
    console.log(Fullproducts)
    
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
        if(products.length>0){
                setPrev(Prev+10)
                setStart(false)
                Next<products.length?setNext(Next+10):setEnd(true)
                Fullproducts = products.slice(Prev,Next)
                console.log('Prev ; '+Prev+' Next: '+Next)
        }
       
    }
    const PrevPage = ()=>{
       if(Prev > 10){
        Prev>10?setPrev(Prev-10):setStart(true)
        setNext(Next-10)
        Fullproducts = products.slice(Prev,Next)
        console.log('Prev ; '+Prev+' Next: '+Next)
        console.log(Fullproducts)
       }
       else{
        setStart(true)
       }
    }
  return (
        <Row>
            {Fullproducts.map((product,index)=>(
                <Col xs={6} sm={4} key={index}>
                    <Product detail={product}/>
                </Col>
            ))}
            <div style={styles.paginationcont}>
                <button style={start?styles.paginateBtnInactive:styles.paginateBtn} onClick={PrevPage}><span><FaArrowCircleLeft/></span>  Prev</button>
                <button style={end?styles.paginateBtnInactive:styles.paginateBtn} onClick={NextPage}>Next <span><FaArrowCircleRight/></span></button>
            </div>
           
        </Row>
  )
}

export default Shop
