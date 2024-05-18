import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../component/images/Bajaj logo.jpg'



const NavBar = () => {
  return (
    <>

<nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:'#004da8'}}>
  <div className="container-fluid">
    <img src={img1}width={50} height={50}></img>
    <a className="navbar-brand fs-4" style={{marginLeft:'1rem'}}>
      Shivay Bajaj Bhawnathpur
    </a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={"/"} className="nav-link active " aria-current="page" href="">Home</Link>
        </li>
        <li className="nav-item">
          <Link to={"addProduct"} className="nav-link active" href="">Add Product</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>


    </>
  
  )
}

export default NavBar
