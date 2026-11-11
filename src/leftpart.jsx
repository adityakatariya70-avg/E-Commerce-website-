import React from 'react'
import './index.css';

export default function LeftPart({productdata, setcategory}) {

  let alldata=productdata.map((v,i)=>{
 return(
  <li onClick={()=>setcategory(v.slug)} key={i}>{v.name}</li>
  
 )
  })
 

  return(
    <div className='left'>
  <h3>Product Category</h3>
<ul>
  {alldata}
</ul>

</div>
  )
}
