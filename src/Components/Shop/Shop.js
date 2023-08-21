import React, { useEffect, useState } from 'react'
import{FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'
import { useSelector,useDispatch } from 'react-redux'
import {productThunk} from '../../app/features/productSlice'
import { Col,Row } from 'react-bootstrap'
import Product from '../products/Product'
import { pullLocalStorage } from '../utils/LocalStorageOperations'
import FilteredRows from '../products/FilteredRows'
import Heading from '../Heading'
import'./Shop.css'

const Shop = ({filter}) => {
    const dispatch = useDispatch()
    const allProducts = pullLocalStorage("ALLProducts")
    const[prodList,setProdList] =useState()
    const[Next,setNext] = useState(10)
    const[Prev,setPrev] = useState(0)
    const[end,setEnd]=useState()
    const[start,setStart]=useState(true)

   useEffect(()=>{
       allProducts.length ===0 && dispatch(productThunk())
   },[dispatch])

   const products= useSelector((state)=>state.product.data)
   let filterArray=[]
    filter.forEach(element => {
        let tempArr = products.filter((item)=> item.category === element)
        filterArray.push(tempArr)
    });
        let Fullproducts = filter.length >0 ? filterArray.slice(Prev,Next): products.slice(Prev,Next)
        let FilteredProducts=[]
        if(filter.length>0){
            for (let index = 0; index < Fullproducts.length; index++) {
                const element = Fullproducts[index];
                FilteredProducts.push(element)
            }
        }
     console.log(Fullproducts)
     console.log(filter)
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
    <> 
        <Row>
            {filter.length===0&&Fullproducts.map((product,index)=>(
                <Col xs={6} sm={4} key={index}>
                    <Product detail={product}/>
                </Col>
            ))
            }
            <div style={styles.paginationcont}>
                <button style={start?styles.paginateBtnInactive:styles.paginateBtn} onClick={PrevPage}><span><FaArrowCircleLeft/></span>  Prev</button>
                <button style={end?styles.paginateBtnInactive:styles.paginateBtn} onClick={NextPage}>Next <span><FaArrowCircleRight/></span></button>
            </div>
        </Row>
        {
             filter.length>0 &&(
                <>
                    <Heading text={'Matching...'}/>
                <div className='filter-products-holder'>
                   
                 {
                     FilteredProducts.map((product,index)=>(
                        <FilteredRows array={product} key={index}/>
                    ))
                 }
                </div>
                </>
             )
            }
    </>
       
  )
}

export default Shop
