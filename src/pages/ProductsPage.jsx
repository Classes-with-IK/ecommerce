
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router";
import {Button} from "@mui/material"
import AuthContext from '../hooks/AuthContext';
import ModalComponent from '../components/ModalComponent';
function ProductsPage() {
const [productsData,setProductsData] = useState([])
const currentUser = useContext(AuthContext);
const [modal, setModal]=useState({
  open:false,
  info:""
})
function closeModal(){
  setModal({...modal,open:false})

}
const navigate =useNavigate()
const fetchProducts =async()=>{
        const response = await fetch(`${import.meta.env.VITE_API_URL}/products`);
        const data = await response.json()
        console.log(data)
        setProductsData(data)
    }
const addToCart =async(productid,productName)=>{
if(!currentUser){
navigate('/')
return
}
    try{
        const response = await fetch(`${import.meta.env.VITE_API_URL}/cart/add`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization":`Bearer ${currentUser}`
            },
            body: JSON.stringify({
                productId: productid,quantity:4
            })
        });
if(!response.ok){
    alert("Error adding to cart")
    return
} 
const data = await response.json()
setModal({...modal,open:true,info:`${productName} added to cart`})
}catch(e){
    console.log(e)
alert("Error adding to cart");
}
}


    useEffect(()=>{
     fetchProducts()
        

    },[])
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productsData.map((product) => (
           
              <div key={product._id} className="group relative">
                <img
                  alt={product.name}
                  src={product.imageUrl}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </h3>
                    {/* zzzz<p className="mt-1 text-sm text-gray-500">{product.description}</p> */}
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
                <Button
                  onClick={() => addToCart(product._id,product.name)}
                  variant="contained"
                  color="primary"
                >
                  Add to Cart
                </Button>
              </div>
         
          ))}
        </div>
      </div>
      <ModalComponent open={modal.open} handleClose={()=>closeModal()} info={modal.info}/>
    </div>
  );
}

export default ProductsPage