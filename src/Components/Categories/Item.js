import React from 'react'
import './Item.css'


const Item = ({image,title}) => {
    const img = !image?'https://img.freepik.com/free-photo/basket-full-vegetables_1112-316.jpg?w=740&t=st=1684076931~exp=1684077531~hmac=7ce3652265dc0cbcd666589519b7680d600b3b3082392edec78542c76290729d':image
    const heading = !title?'Vegetables':title
    return (
    <div className='item-holder'>
        <div className='item-image'>
            <img src={img} alt=''/>
        </div>
        <div className='item-text'>
            <h5>{heading}</h5>
        </div>
    </div>
  )
}

export default Item