import React from 'react'
import Carousels from '../Components/Carousels'
import StyleHeading from '../Components/StyleHeading'
import Heading from '../Components/Heading'
import PromoRow from '../Components/promotion/PromoRow'

const PromotionScreen = () => {
    const slides = [
        {
        id:1,
        caption:'Weekly Deals',
        captionText:'Make the largest number of purchases from the comfort of your home.',
        image:'https://img.freepik.com/premium-psd/vegetable-grocery-facebook-cover-design-template_354609-61.jpg?w=2000',
      },
      {
        id:2,
        caption:'Weekly Deals',
        captionText:'Vegetable Basket. Buy more vegetables than you need for Less',
        image:'https://img.freepik.com/premium-psd/vegetable-grocery-web-banner-design-template_354609-58.jpg',
      },
      {
        id:3,
        caption:'Weekly Deals',
        captionText:'Realize recipes here ',
        image:'https://img.freepik.com/premium-psd/food-menu-restaurant-web-banner-design-template_519207-169.jpg',
      },
      ]
  return (
    <div>
          <Carousels data={slides} promo={true}/>
          <StyleHeading text1={'Promo'} text2={'Deals'}/>
          <Heading text={'Weekly Deals'}/>
          
          <PromoRow/>
          <Heading text={'Seasonal Deals'}/>
          {/* <SeasonalPromo/> */}
          <PromoRow/>

    </div>
  )
}

export default PromotionScreen
