import React, { useEffect, useState,useRef } from 'react'
import './BannerMid.css'
import logo from '../../assets/Logo Full.png'
import { FaFacebook, FaInstagram, FaSearch, FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import { categoryThunk ,loadStateFromLocal} from '../../app/features/categorySlice'
import { pullLocalStorage } from '../utils/LocalStorageOperations'

const BannerMid = () => {
    const dispatch = useDispatch()
    const [typing,setTyping] = useState(false)
    const [input,setInput] = useState('')
    const [DropdownOptions,setDropdownOptions] = useState([])
    const Item = useRef(null)
    const localcats = pullLocalStorage("AllCategory").length
    useEffect(()=>{
       localcats===0 ?dispatch(categoryThunk()): dispatch(loadStateFromLocal())
    },[dispatch])
  
    const categories = useSelector((state)=>state.category.data)
    const productData= useSelector((state)=>state.product.data)
//    let DropdownOptions =[]

function handleChange (e){
    e.preventDefault()
    setTyping(true)
    setInput(e.target.value)
    let TempArr 
    if(e.target.value.length>0){
            TempArr =  productData.filter((i)=>{
            return i.name.toLowerCase().match(e.target.value.toLowerCase())
        })
    }else{
        console.log(e.target.value)
        if(e.target.value===''){

        }
        setDropdownOptions((prevState)=>[])
    }
    setDropdownOptions([])
    setDropdownOptions(TempArr)
 
}
console.log(DropdownOptions)
const chooseOption =(option)=>{
   console.log("Inside..")
//setDropItem((prevState)=>[...prevState,option])
 const inputField = document.getElementById('SearchField')
   inputField.setAttribute('option-data',option.id)
   Item.current.value = option.name
   setTyping(false)
    
}
  return (
    <Container>
        <Row>
            <Col xs={12} sm={2}>
                <div className='logo_div'>
                    <div>
                        <a href='/'>
                            <img className='logo' src={logo} alt='Logo'/>
                        </a>            
                    </div>
                </div>
            </Col>
            <Col xs={12} sm={10}>
            <div className='search_section'>
                    <div className='search_bar'>
                        <div className='form_div'>
                            <form >
                                <div className='search_field'>
                                    <input
                                     id='SearchField'
                                     placeholder='Search for any product ...'
                                     onChange={(e)=>handleChange(e)}
                                     ref={Item}
                                    />
                                </div>
                                <div className='categories_select'>
                                    <select>
                                        <option></option>
                                {categories.length>0&& categories.map((category,index)=>(
                                     <option key={index} value={category.id}>{category.name}</option>
                                ))}
                                     
                                    </select>
                                </div>
                                <div className='submit_section'>
                                   <button type='submit'>
                                     <span className='search_icon'><FaSearch fontSize={11}/></span><span className='search_text'> Search</span>
                                   </button>
                 
                                </div>
                            </form>
                        </div>
                        {typing &&(
                                    <div className='search-dropDown'>
                                              {DropdownOptions?
                                                                    DropdownOptions.length>0 ?DropdownOptions.map((option,index)=>(
                                                                        <div key={index}
                                                                         className='search-option'
                                                                         onClick={()=>chooseOption(option)}>
                                                                            {option.name}
                                                                        </div>
                                                                    )):( <div className='search-option'>No such Product</div>)
                                                :(
                                                   <></>
                                                )}
                                    </div>
                                    )}
                                
                    </div>
                    <div className='social_icons'>
                        <div><h6> Talk to Us Directly </h6></div>
                        <FaFacebook className='social_media_icons'/>
                        <FaInstagram className='social_media_icons'/>
                        <FaWhatsapp className='social_media_icons'/>
                        <FaTelegram className='social_media_icons'/>
                    </div>
                </div>
              
            </Col>
        </Row>
    </Container>
  )
}

export default BannerMid