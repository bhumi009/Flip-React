import React from'react';
import or from '../images/or.jpg'
import mobilre from '../images/mobilre.jpg'
import electro from '../images/electro.png'
import tv from '../images/tv.jpg'
import fashion from '../images/fashion.png'
import beauty from '../images/beauty.png'
import home from '../images/home.png'
import furniture from '../images/furniture.png'
import flight from '../images/flight.png'
import grocery from '../images/grocery.png'
function Menu(){
    return(
        <>
        <div className='row mt-2 com'>
        <div className='col-md-1 '>
              <br></br>
        </div>
        <div className='col-md-1 '>
            <img src={or}/>  
            <p> Offer</p>
        </div>
        <div className='col-md-1 '>
            <img src={mobilre}/>  
            <p> Mobile </p>
        </div>
        <div className='col-md-1 '>
            <img src={electro}/>  
            <p> Electronics</p> 
        </div>
        <div className='col-md-1'>
            <img src={tv}/>  
            <p> TVs App</p> 
        </div>
        <div className='col-md-1 '>
        <img src={fashion}/>  
            <p> Fashion</p> 
        </div>
        <div className='col-md-1 '>
        <img src={beauty}/>  
            <p> Beauty</p> 
        </div>
        <div className='col-md-1'>
        <img src={home}/>  
            <p> Kitchen</p> 
        </div>
        <div className='col-md-1 '>
        <img src={furniture}/>  
            <p> Furniture</p> 
        </div>
        <div className='col-md-1'>
        <img src={flight}/>  
            <p> Flights</p> 
        </div>
        <div className='col-md-1 '>
        <img src={grocery}/>  
            <p> Grocery</p> 
        </div>
        <div className='col-md-1 '>
              <br></br>
        </div>
    </div>
    </>
        );
    }
    
    
    export default Menu;
