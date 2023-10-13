
import axios from 'axios';
import {useEffect,useState} from 'react';

export default function EditDel() {
    const [products,setProducts]=useState([{}]);
    useEffect(()=>{
        axios.get('http://localhost:3002/products')
        .then((res)=>setProducts(res.data))
    },[])
    console.log(products)

  return (
    <>
    <table className='table table-responsive table-bordered'>
        <thead>
            <tr>
                <th>Pid</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Brand</th>
                <th>thumbnail</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
    {
        products.map((element,index)=>{
            return(

            <tr>
                <td>{element.productId}</td>
                <td>{element.title}</td>
                <td>{element.description}</td>
                <td>{element.price}$</td>
                <td>{element.brand}</td>
                {/* <td><img src={element.thumbnail}  style={{width:"10rem",height:"8rem"}} className="card-img-top pl" alt="..."/></td> */}
               <td><img src={element.thumbnail}  style={{width:"10rem",height:"8rem"}} className="card-img-top pl" alt="..."/></td>
                           <td><button className="btn btn-primary"><i className='fa-solid fa-edit'></i></button>&nbsp;&nbsp;
                           <button className="btn btn-danger" /*onClick={handleDelete(e.id)}*/><i className='fa-solid fa-trash'></i></button>
                            </td> 
            </tr>
            )
        })
    }
        </tbody>
     </table>
    </>
  )
}