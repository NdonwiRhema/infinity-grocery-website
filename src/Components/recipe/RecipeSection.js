import React,{useState} from 'react'

import './RecipeSection.css'
import { Tab, Table, Tabs} from 'react-bootstrap'
import { FaPlay } from 'react-icons/fa';
const RecipeSection = () => {
    const[key,setKey] = useState();
  return (
    <div >
        <div className='recipe-header'>
                        <h4> How To Prepare Achu </h4>
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
                        <tr>
                        <td>1</td>
                        <td>Cocoyams</td>
                        <td>5kg</td>
                        <td><span className='item-option'> *Obligatory* </span><br/>This quantity works for a 5person meal.
                            You can add per your requirement</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Green Bananas</td>
                        <td>5kg</td>
                        <td><span className='item-option'> *Obligatory* </span><br/>This quantity matches to the exact cocoyam quantity.
                            Depending on the texture required you could add</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Palm Oil</td>
                        <td>1Litre</td>
                        <td><span className='item-option'> *Obligatory* </span><br/>This quantity matches to the desired quantity of soup.</td>
                        </tr>
                       
                    </tbody>
                </Table>

                <button className='btn-bg'> Add All Items to Cart</button>
            </Tab>
            <Tab eventKey="process" title="Process">
                <div className='recipe-process'>
                 <div id='iframe-video'>
                       <iframe width="560" height="315" src="https://www.youtube.com/embed/2BdSYnfTT9M?controls=0" 
                      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                 </div>
                 <div className='link-yt'>
                    <span>
                        If you Prefer to watch this On Youtube along side others
                    </span>
                    <br/><br/> <a href='https://youtu.be/2BdSYnfTT9M'> <FaPlay fontSize={11}/> Watch Now</a>
                 </div>
                 <div className='recipe-body-text'>
                    <h5>Let's Begin</h5>
                    <div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
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