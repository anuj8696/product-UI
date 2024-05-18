import React, { useState } from 'react'
import ProductService from './service/ProductService'

const AddProduct = () => {
    const initialProductData = {};
    initialProductData.productName = '';
    initialProductData.description = '';
    initialProductData.quantity = 0;
    initialProductData.price = 0;
    initialProductData.status = '';

    const[productData, setProductData]=useState(initialProductData);
    const[msg, setMsg] = useState("")

    const productRegister=(e)=> {
        e.preventDefault()
        if(validateInputField()){
            ProductService.saveProduct(productData).then((response)=> {
                if(response.status===200){
                    setMsg("Product added successfully")
                }
    
            }).catch((error)=> {
                console.log("Anuj")
    
            })
        } 
    }

    const validateInputField=()=>{
        if(productData.productName.length < 1 || productData.description.length < 1 || productData.status.length <1
        ) {
            setMsg("data can't be empty")
            return false;
        }
        return true;
    }


    const handleChange = (e)=> {
        setProductData({...productData, [e.target.name]:e.target.value});
    }


    return (
        <div className='container mt-3'>
           <div className='col-md-6 offset-md-3'>
             <div className='card'>
                <div className='card-header fs-3 text-center'>
                    Add Product
                </div> 
                <h4 className="fs-4 text-center text-success mt-2 ">{msg}</h4>
                
                <div className='card-body'>
                    
                <form onSubmit={productRegister}>
                        <div className='mb-3'>
                            <label >Enter Product Name</label>
                            <input type='text' autoComplete='off' name="productName" value={productData.productName} 
                            onChange={handleChange}
                            className='form-control'/>
                        </div>
                        <div className='mb-3'>
                            <label>Enter Description</label>
                            <input type='text' autoComplete='off' name="description" value={productData.description}
                            onChange={handleChange}
                            className='form-control'/>
                        </div>
                        <div className='mb-3'>
                            <label>Enter Quantity</label>
                            <input type='number' name="quantity" autoComplete='off' value={productData.quantity} 
                            onChange={handleChange}
                              className='form-control'/>
                        </div>
                        <div className='mb-3'>
                            <label>Enter Price Per Quantity</label>
                            <input type='number' name="price" autoComplete='off' value={productData.price}
                            onChange={handleChange}
                            className='form-control'/>
                        </div>
                        <div className='mb-3'>
                            <label>Enter Status :</label>
                            <select className='option ms-4 ' autoComplete='off' name='status' style={{width:'20rem'}} value={productData.status} onChange={handleChange} >
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

export default AddProduct
