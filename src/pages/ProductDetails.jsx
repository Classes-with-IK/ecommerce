import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
function ProductDetails() {
    const [productInfo,setProductInfo]=useState()
     let { id } = useParams();
     useEffect(()=>{
        getSingleProduct()
     },[])




   async function getSingleProduct (){
const response = await fetch(`https://fakestoreapi.com/products/${id}`);
const data = await response.json()
setProductInfo(data)
    }
    if(productInfo == undefined){
        return <div>
            <p>Please wait...</p>
        </div>
    }
  return (
    <div>
      <div>Product Details</div>
      <div key={productInfo.id} className="group relative w-42">
        <img
          alt={productInfo.title}
          src={productInfo.image}
          className="aspect-square w-full rounded-md bg-gray-200  group-hover:opacity-75 lg:aspect-auto lg:h-80 object-contain"
        />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <span aria-hidden="true" className="absolute inset-0" />
              {productInfo.title}
            </h3>
            {/* zzzz<p className="mt-1 text-sm text-gray-500">{productInfo.description}</p> */}
          </div>
          <p className="text-sm font-medium text-gray-900">{productInfo.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails