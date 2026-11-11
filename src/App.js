import LeftPart from './leftpart';
import axios from 'axios';
import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
 
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
   <div className='main'>

  <LeftPart productdata={productdata} setcategory={setcategory}/>

<div className='right'>
<h2>Our Products</h2>
<div className='main-grid'>
  <RightPart allproduct={allproduct}/>
</div>

</div>
   </div>
   
  );
}

export default App;

function RightPart({allproduct}) {
  console.log(allproduct)
  let allproducts=allproduct.map((v,i)=>{
  return(
   <div className='main-box' key={i}>
     <img src={v.thumbnail} alt="product" /> 
      <h5>{v.title}</h5>
      <b className='product-cost'>{v.price}</b>
      </div>
  )
  })

  return (
    <div className='main-grid' >
     {allproducts}
   </div>
  );
}
