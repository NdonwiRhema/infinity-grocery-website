import React,{useState} from 'react'

import './RecipeSection.css'
import { Tab, Table, Tabs} from 'react-bootstrap'
import { FaPlay } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../app/features/cartSlice';
import { loadLocalStorage, pullLocalStorage } from '../utils/LocalStorageOperations';
import { loadCategory } from '../../app/features/categorySlice';


const RecipeSection = ({recipeObject}) => {
    const[key,setKey] = useState();
    const dispatch = useDispatch()
    
    // const products = pullLocalStorage('AllProducts')
    const products = useSelector((state)=>state.product.data)
    let video
    console.log(products)
  if (recipeObject.recipe.video){
    let ext = recipeObject.recipe.video.split('//')
    let video_id = ext[1].split('/')
     video = video_id[1]
  }
  
  if (recipeObject.recipe){
    document.getElementById('recipeProcedure').innerHTML= recipeObject.recipe.procedure
   }
  
    function AddalltoCart(ingredients){
        const currentCart = pullLocalStorage("cart").length
        let productIngredient=[]
        let cartArray = []
        ingredients.forEach(element => {
            console.log(element)
            const corresponding= products.filter((item)=>item.id === element.id)
           console.log(corresponding)
            const fullproduct = {
                product : corresponding,
                Quantity: element.Quantity,
                Comment:element.Comment,
                units:element.units
            }
                corresponding.length>0 ? productIngredient.push(fullproduct):console.log("Empty")
            });
                console.log(productIngredient)
            productIngredient.forEach(item =>{
            // constitute the temp product for all elements
            const TempProduct = {
                            id:item.product[0].id,
                            description:item.product[0].desc,
                            title:item.product[0].name,
                            images:item.product[0].picture[0].img,
                            category:item.product[0].category,
                            quantity:item.Quantity,
                            Comment:item.Comment,
                            Units:item.units,
                            price:item.product[0].price,
                            subtotal:item.product[0].price*item.Quantity,
                            discount:item.product[0].pricePromotion>0?item.product[0].price-item.product[0].pricePromotion:0,
                     }
           let newCartArr =[...cartArray,TempProduct]
           cartArray = newCartArr
        })
        console.log(cartArray)
            // finally add the products to cart
          if(currentCart === 0){
          loadLocalStorage(cartArray,'cart')
               }
           cartArray.forEach(element =>{
             dispatch(addToCart(element))
             console.log("done :"+ element)
           })
              
    }
  return (
    <div >
        <div className='recipe-header'>
                        <h4> How To Prepare {recipeObject.recipe.name} </h4>
                        <div className='underliner'></div>
        </div>
        <div className=''>
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
            >
            <Tab eventKey="ingredients" title="Ingredients">
                <Table striped hover>
                    <thead>
                       <tr>
                            <th>#</th>
                            <th>Item </th>
                            <th>Quantity</th>
                            <th> Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipeObject.recipe.ingredients && recipeObject.recipe.ingredients.map((ingredient,index)=>(
                           <tr key={index}>
                                <td>{index+1}</td>
                                <td>{ingredient.name}</td>
                                <td>{ingredient.Quantity} {ingredient.units}</td>
                                <td>{ingredient.Comments}</td>
                          </tr>
                        ))}
                   </tbody>
                </Table>

                <button className='btn-bg' onClick={()=>AddalltoCart(recipeObject.recipe.ingredients)}> Add All Items to Cart</button>
            </Tab>
            <Tab eventKey="process" title="Process">
                <div className='recipe-process'>
                 <div id='iframe-video'>
                       <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video}?controls=0`}
                      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                 </div>
                 <div className='link-yt'>
                    <span>
                        If you Prefer to watch this On Youtube along side others
                    </span>
                    <br/><br/> <a href={`https://youtu.be/${video}`}> <FaPlay fontSize={11}/> Watch Now</a>
                 </div>
                 <div className='recipe-body-text'>
                    <h5>Let's Begin</h5>
                    <div id='recipeProcedure'>
                      
                    </div>
                 </div>
                </div>
            </Tab>
            
        </Tabs>
        </div>
    </div>
  )
}

export default RecipeSection