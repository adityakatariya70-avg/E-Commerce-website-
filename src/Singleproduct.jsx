
import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './singleProduct.css'

export default function Singleproduct() {
  let{id}=useParams();
  console.log(id);
let [product,setproduct]=useState();


let products=()=>{
  axios.get(`https://dummyjson.com/products/${id}`)
  .then(res=>res.data)
  .then(finalres=>{
   setproduct(finalres)
  
  })
}

useEffect(()=>{
 products();
},[id]);
console.log(product)
if (!product) {
    return <h2>Loading Product...</h2>;
}
  return (
    <div> 
<h2 className='text'>Get Your Product details from Here..</h2>
 
 <div className='main-box-2'>
<div className='left-2'>
  <div className='image-8'>
 <img src={product.thumbnail} alt="product"/> 
</div>

 <div className='desc'>{product.description}</div>
</div>

<div className='right-2'>

  <span><h5>{product.availabilityStatus}</h5></span>
  <h3>{product.title}</h3>
  <h5>Brand : {product.brand}</h5>
  <h5>Rating : {product.rating}</h5>
  <span> Price : {product.price}</span>
  <h3> Discount : {product.discountPercentage}</h3>
   <h3> Stock : {product.stock}</h3>
  <h5>{product.returnPolicy} </h5>
  <h5>{product.warrantyInformation}</h5>
  
  

</div>
 </div>

    </div>
  )
}

