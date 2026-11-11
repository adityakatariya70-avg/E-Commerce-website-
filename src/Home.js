import LeftPart from './leftpart';
import axios from 'axios';
import { useState } from 'react';
import './index.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
 
  let [productdata,setproductdata]=useState([]);

 let [allproduct,setallproduct]=useState([]);

 let [category,setcategory]=useState('');

let allcategory=()=>{
  axios.get('https://dummyjson.com/products/categories')
  .then(res=>res.data)
  .then(finalres=>{
   setproductdata(finalres)
  
  })
}

let allproducts=()=>{
  axios.get('https://dummyjson.com/products')
  .then(res=>res.data)
  .then(finaldata=>{
    setallproduct(finaldata.products)
  }
  )
}


useEffect(()=>{

  if(category !==""){
     axios.get(`https://dummyjson.com/products/category/${category}`)
  .then(res=>res.data)
  .then(finaldata=>{
    setallproduct(finaldata.products)
  })
}

},[category])



useEffect(()=>{
  allcategory();
  allproducts();

},[]);


return(


  <>

    <Header/>
 

   <div className='main'>

  <LeftPart productdata={productdata} setcategory={setcategory}/>

<div className='right'>
<h2>Our Products</h2>
<div className='main-grid'>
  <RightPart  allproduct={allproduct}/>
</div>

</div>
   </div>
   </>
  );
}

export default Home;

function RightPart({allproduct}) {
  console.log(allproduct)
  let allproducts=allproduct.map((v,i)=>{
  return(

    <Link to={`/product/${v.id}`}key={i} className='link'>
   <div className='main-box' >
     <img src={v.thumbnail} alt="product" /> 
      <h5>{v.title}</h5>
      <b className='product-cost'>{v.price}</b>
      </div>
      </Link>
  ) 
  })

  return (
    <div className='main-grid' >
     {allproducts}
   </div>
  );
}

export function Header(){
   return(
    <div className='header'>
    <h2 className='main-text'>
      Welcome to Our Online Shopping Website.</h2>
      <p className='tagline'> Here you can find all the products you want to buy. Just click on the product and get all the details about it.
   </p>
   </div>
   )
}