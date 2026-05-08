import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function LoginComponent() {
  const navigate = useNavigate()
    const [inputValue, setInputValue] = useState({
      email: "",
      password: "",
      role: "customer",
    });

function handleInputs(e){
    console.log(e)
    setInputValue((prev)=>({...prev,[e.target.name]:e.target.value}))
}

async function signUpUser(){
    try{
        const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputValue)
        });
if(!response.ok){
    alert("Error signing up")
    return
} 
const data = await response.json()
window.localStorage.setItem("token",data.token)
navigate("/products")
return
    }catch(e){
        console.log(e)
alert("Error signing up");
    }



}



useEffect(()=>{
    console.log(inputValue)
},[])
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        display: "flex",
        flexDirection: "column",
      }}
      noValidate
      autoComplete="off"
    >
      <Box
        sx={{
          
          display: "flex",
          flexDirection: "column",
        }}
      >
  
        <TextField
          required
          id="outlined-required"
          //   label="Required"

          placeholder="Enter email"
          //   value={inputValue.email}
          name="email"
          onChange={(e) => handleInputs(e)}
        />

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          placeholder="Enter password"
          //   value={inputValue.password}
          name="password"
          onChange={(e) => handleInputs(e)}
        />

        <Button onClick={signUpUser}>Sign Up</Button>
      </Box>
    </Box>
  );
}
