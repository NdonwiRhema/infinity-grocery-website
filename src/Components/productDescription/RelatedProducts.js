import React from 'react'
import { useSelector } from 'react-redux'

import './RelatedProducts.css'
import { pullLocalStorage } from '../utils/LocalStorageOperations'
import PromoRow from '../promotion/PromoRow'

const RelatedProducts = ({related,start}) => {
    const Products = useSelector((state)=>state.product.data)
    const RelatedProducts = Products.length>0?Products.filter((item)=>item.category === related):pullLocalStorage("AllProducts").filter((item)=>item.category === related)
    const RelatedProductsArr = RelatedProducts.length>5?RelatedProducts.slice(start+1,5):RelatedProducts.filter((item)=>item.id!== start)
    let PromosRelated = []
    RelatedProductsArr.forEach(element => {
     const desc = element.desc.length>50?element.desc.substr(0,50):element.desc
     const lang = element.language==='English (en)'?'en':'fr'
      let tempObj = {
        img:element.picture[0].img,
        title:element.name,
        text:desc,
        price:element.pricePromotion>0?element.pricePromotion+' '+element.currency:element.price+' '+element.currency,
        discountedFrom:element.pricePromotion>0?element.price+' '+element.currency:0,
        language:lang,
        id:element.id
      }
      PromosRelated.push(tempObj)
    });
   
    return (
      <>
        <PromoRow Promos={PromosRelated} type={'relatedProducts'}/>
      </>
      
  )
}

export default RelatedProducts