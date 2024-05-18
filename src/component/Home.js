import React, { useEffect, useState } from 'react'
import ProductService from './service/ProductService'
import { Link } from 'react-router-dom'
import { Button } from 'bootstrap'

const Home = () => {

    const[productList, setProductList] = useState([])
    const[msg,setMsg] = useState("")
    const[searchQuery,setSearchQuery] = useState("")

    useEffect(()=>{
        init()      

    }, []);


    const init=()=> {
        ProductService.getAllProduct().then((res)=>{
            setProductList(res.data);

        }).catch((error)=>{
            console.log(error)
        })
        
    }

    const deleteProduct = (id)=>{
        ProductService.deleteProduct(id).then((response)=>{
            if(response.status===200){
                setMsg("Product Deleted Sucessfully")
                init()
            }
        }).catch((error)=>{
            console.log(error)
        })        
    }

    const handleSearchChange = (e)=> {
        setSearchQuery(e.target.value)
    }

    const filteredData = productList.filter((item) =>
        item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    

    return (
    
    <div className="container mt-3" >
            <h2 className="text-center mt-4" style={{color:'black',width:'100%', backgroundColor:'#D2B48C',
            padding:'.3rem',borderRadius:'1rem',fontSize:'1.9rem'}} >LIST OF PRODUCTS</h2>

            <div className='text-center ' style={{display:'flex',justifyContent:'center', marginTop:'2rem'}}>
                <input type='search' placeholder='Search Products..' className='form-control' value={searchQuery}
                onChange={handleSearchChange} 
                style={{width:'50%',color:'black', '::placeholder': {color:'blue'},
                 fontSize:'1.4rem', borderStyle:'solid', borderRadius:'2rem', borderColor:'black',borderWidth:'2px'}}></input>
               
            </div>
           
            <h4 className="fs-4 text-center text-success mt-2 ">{msg}</h4>
            
            <table className="table table-striped table-bordered mt-29" style={{marginTop:'2rem'}}>
                <thead>
                <tr>
                <th>Sl No</th>
                <th>Product Name</th>
                <th>Product Description</th>
                <th>Product Price</th>
                <th>Product Quantity</th>
                <th>Product Status</th>
                <th>Action</th>
                </tr>
                </thead>
            
            <tbody>
                
                {filteredData.map((p,index) =>(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{p.productName}</td>
                    <td>{p.description}</td>
                    <td>{p.price}</td>
                    <td>{p.quantity}</td>
                    <td>{p.status}</td>
                    <td>
                        <Link to={'editproduct/'+p.id}  className='btn btn-sm btn-primary'>Edit</Link>
                        <button onClick={()=>deleteProduct(p.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                    </td>

                </tr>
                
                ))}
                
                
            </tbody>
            </table>

        </div>
  )
}

export default Home
