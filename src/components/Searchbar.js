import React from'react';
import logo from '../images/logo.svg'
function Searchbar(){
    return(
        <>
            <div className='row bg-info'>
                <div className='col-md-1'>
                    <img src={logo}  width="100"/>
                </div>
                <div className='col-md-6 search'>
                    <button className='btn'><i className='fa-solid fa-search'></i></button>
                    <input type='text' placeholder='Search ' />
                </div>
                <div className='col-md-2'>
                <p className='mb-1' > <i class="fa-solid fa-store"></i>Become a Seller</p>
                </div>
                <div className='col-md-1'>
                 <p > <i class="fa-regular fa-user"></i> Bhumi</p>
                      </div>
             <div className='col-md-1 '>
              <p  > <i class="fa-solid fa-cart-shopping"></i>  Cart</p>
             </div>
               <div className='col-md-1 '>
               <p className='mb-2 ' > <i class="fa-solid fa-ellipsis-vertical"></i>  </p>
               </div>
            </div>
         
        </>
       
        );
    }
    
    
    export default Searchbar;
