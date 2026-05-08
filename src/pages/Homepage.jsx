import React, { useState } from 'react'
import { useNavigate } from "react-router";
import LoginComponent from '../components/LoginComponent';
import { Button, IconButton, Stack } from '@mui/material';
import { MapPinIcon } from '@heroicons/react/24/outline';
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
function Homepage() {
  const [inputEmail,setInputEmail] = useState("")
  const [inputPassword, setInputPassword] = useState("");
  const [quantity,setQuantity] =useState(1)
  let navigate = useNavigate()
  const handleSubmit =()=>{
    if(inputPassword.length <8){
      alert("Password should be greater than 8 characters")
    }
    
    setTimeout(() => {
      navigate('/products')
    }, 3000);
  }
  return (
    <div className="">
      <p className="text-2xl text-white z-">Homepage</p>

      <LoginComponent />
      <Stack direction={"row"}>
        <IconButton onClick={()=>setQuantity((prev) => prev - 1)}>
          <RemoveIcon />
        </IconButton>
        <p>{quantity}</p>
        <IconButton onClick={()=>setQuantity((prev) => prev + 1)}>
          <AddIcon />
        </IconButton>
      </Stack>
    </div>
  );
}

export default Homepage