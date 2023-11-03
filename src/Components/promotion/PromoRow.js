import React from 'react'
import PromoSlide from './PromoSlide'
import './PromoRow.css'
import { useSelector } from 'react-redux'


const PromoRow = ({type,Promos}) => {
  const language = useSelector(state=>state.language.data)
  const PromoArr = Promos.filter((item)=>item.language === language)
  const RenderArr  = PromoArr
  return (
    <div className='Row'>
      {RenderArr.length>0?RenderArr.map((item,index)=>(<PromoSlide option={item} type={type} key={index}/>)):(
        <></>
      )}
    </div>
  )
}

export default PromoRow