import React from 'react'
import'./Category.css'
import Item from './Item'

const Categories = () => {
  const bgImg='https://img.freepik.com/free-vector/realistic-supermarket-social-media-cover-template_23-2149364804.jpg'
  return (
    <div className='holder'>
        <div className='bg-img'> 
          <img className='img' src={bgImg} alt='none'/>      
        </div>
        <div className='opacity'><span></span></div>
        <div className='content'>
          <div className='heading'><h4> Product Categories</h4></div>
          <div className='items'>
              <Item/>
              <Item image={''} title={'Grains'}/>
              <Item  title={'Grains'}/>
              <Item  title={'Meat'}/>
              <Item  title={'Tubers'}/>
              <Item title={'Fish'}/>
              <Item title={'Spices'}/>
              <Item title={'Grains'}/>
              <Item title={'Grains'}/>
              <Item title={'Grains'}/>
          </div>
        </div>
    </div>
  )
}

export default Categories