import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import './FooterLink.css'

const FooterLink = ({text,link}) => {
  return (
    <div className='linker'>
      <FaAngleRight/>
      <a href={link}>{text}</a>
    </div>
  )
}

export default FooterLink
