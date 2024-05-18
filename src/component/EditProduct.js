
import React, { useEffect, useState } from 'react'
import ProductService from './service/ProductService'
import { useParams } from 'react-router-dom'

const EditProduct = () => {

  const[productData, setProductData]=useState({})
  const[msg, setMsg] = useState("")

  const {id} = useParams();
    
  useEffect(()=>{
    ProductService.getProductById(id).then((response)=>{
      if(response.status===200){
        const product=response.data;
        setProductData(product)
      }
    }).catch((error)=>{
        console.log(error)
    })
      
  },[])
    
    

    const productEdit=(e)=> {   
      e.preventDefault() 
        
        ProductService.editProduct(productData,productData.id).then((response)=> {
            if(response.status===200){
              setMsg("Product Edited Successfully")  
              productData.productName=""
              productData.description=""
              productData.price=""
              productData.quantity=""
              productData.status=""
              
            }

        }).catch((error)=> {
            console.log("anupji")

        })

    }

    const handleChange = (e)=> {
      setProductData({...productData, [e.target.name]:e.target.value});
    }

    return (
        <div className='container mt-3'>
           <div className='col-md-6 offset-md-3'>
             <div className='card'>
                <div className='card-header fs-3 text-center'>
                    Edit Product
                </div> 

                <h4 className="fs-4 text-center text-success mt-2 ">{msg}</h4>
                
                <div className='card-body'>
                    
                    <form onSubmit={productEdit}>
                        <div className='mb-3'>
                            <label >Enter Product Name</label>
                            <input type='text' name="productName" autoComplete='off' value={productData.productName} 
                            onChange={handleChange}
                            className='form-control'/>
                        </div>
                        <div className='mb-3'>
                            <label>Enter Description</label>
                            <input type='text' name="description" autoComplete='off' value={productData.description}
                            onChange={handleChange}
                            className='form-control'/>
                        </div>
                        <div className='mb-3'>
                            <label>Enter Quantity</label>
                            <input type='number' autoComplete='off' name="quantity" value={productData.quantity} 
                            onChange={handleChange}
                              className='form-control'/>
                        </div>
                        <div className='mb-3'>
                            <label>Enter Price Per Quantity</label>
                            <input type='number' autoComplete='off' name="price" value={productData.price}
                            onChange={handleChange}
                            className='form-control'/>
                        </div>
                        <div className='mb-3'>
                            <label>Enter Status :</label>
                            <select className='option ms-4 ' name='status' style={{width:'20rem'}} value={productData.status} onChange={handleChange} >
                                <option value="">-- Select Status -- </option>
                                <option value="Available" >Available</option>  
                                <option value="Not Available" >Not Available</option>                 
                            </select>
                        </div>
                        <button className='btn btn-primary col-md-12'>Submit</button>                       

                    </form>
                </div>
            </div>
        </div>
     
      
    </div>
  )

  
}

export default EditProduct
