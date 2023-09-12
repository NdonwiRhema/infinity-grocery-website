import React, { useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Filters.css'
import { useDispatch,useSelector } from 'react-redux'
import { categoryThunk } from '../../app/features/categorySlice'
// import { pullLocalStorage } from '../utils/LocalStorageOperations'
import { French } from '../utils/FrenchTranslation'

const Filters = ({setFilter}) => {
    const dispatch  = useDispatch()
    const language = useSelector((state)=>state.language.data)
    useEffect(()=>{
        dispatch(categoryThunk(language))
    },[dispatch,language])
   const categories = useSelector((state)=>state.category.data)
    
  function editFilters(e){
      e.target.checked? setFilter((prevState)=>[...prevState,e.target.value]):setFilter((prevState)=>prevState.filter((item)=>item!==e.target.value))
      }

  return (
    <div className='filter-container'>
        <span className='filter-reset'
        onClick={()=>setFilter([])}
        >
          {language === 'en'?'Reset Filters':French.shop[0].resetFilters}
          </span>
        <Container>
            <Row>
                <Col xs={6} sm={12}>
                  <div className='filter-category'>
                        <h5>{language === 'en'?'Filter By Category':French.shop[0].filter}</h5>
                       
                        {categories.length>0 && categories.map((category,index)=>(
                          <div key={index} className='filter-item'>
                             <input
                              id={category.id}
                              type='checkbox'
                              name={category.name}
                              value={category.id}
                              onClick={(e)=>{editFilters(e)}}
                              /><span>{category.name}</span>
                         </div>
                        ))}
                 </div>    
                </Col>
                <Col xs={6} sm={12}>
                  <div className='filter-size'>
                        <h4>{language === 'en'?'Filter By Size':French.shop[0].filterSize}</h4>
                        <div className='size-select'>
                            <div className='filter-item'>
                                <input type='checkbox' name='Large' value={'large'}/><span>Large</span>
                            </div>
                            <div className='filter-item'>
                                <input type='checkbox' name='Medium' value={'medium'}/><span>{language === 'en'?'Medium':French.shop[0].medium}</span>
                            </div>
                            <div className='filter-item'>
                                <input type='checkbox' name='Small' value={'small'}/><span>{language === 'en'?'Small':French.shop[0].small}</span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Filters
