import React from 'react'
import './BannerMid.css'
import logo from '../../assets/Logo Full.png'
import { FaFacebook, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa'

const BannerMid = () => {
  return (
    <div className='container'>
       <div className='row'>
            <div className='col-sm-2 logo_div'>
                <div >
                    <a href='/'>
                        <img className='logo' src={logo} alt='Logo'/>
                    </a>            
                </div>
            </div>
            <div className='col-sm-10'>
                <div className='search_section'>
                    <div className='search_bar'>
                        <div className='form_div'>
                            <form >
                                <div className='search_field'>
                                    <input placeholder='Search for any product ...'/>
                                </div>
                                <div className='categories_select'>
                                    <select>
                                        <option>Categories</option>
                                        <option>Vegetables</option>
                                        <option>Pulses</option>
                                        <option>Cereals</option>
                                    </select>
                                </div>
                                <div className='submit_section'>
                                   <button type='submit'>Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='social_icons'>
                        <div><h6> Talk to Us Directly </h6></div>
                        <FaFacebook className='social_media_icons'/>
                        <FaInstagram className='social_media_icons'/>
                        <FaWhatsapp className='social_media_icons'/>
                        <FaTelegram className='social_media_icons'/>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default BannerMid