"use client"

import React from 'react'
import details from '../../database/db.json'
import {useForm} from 'react-hook-form'
import { LogInfo } from '@/redux/slice/AuthSlice'
import {useAppDispatch} from '@/redux/store/hooks'

function Login() {
    let form=useForm();
    let{register,handleSubmit,formState}=form;
    let{errors}=formState;
    let dispatch=useAppDispatch();

    let submitHandle=(data)=>{
        let userData=details.registration.find((user)=>
            user.email === data.email && user.password === data.password
        );

        if(!userData)
        {
            alert("wrong credential");
            return;
        }

        dispatch(LogInfo(userData))
        .then((res)=>{
            alert("successful");
            console.log("RESULT IS",res);
            window.sessionStorage.setItem("authToken",res.meta.arg.id);
        })

        .catch((error)=>console.log("error is",error));
    }

  return (
    <div style={{display:"flex",justifyContent:"center",
    alignItems:"center",height:"100vh",backgroundColor: '#f4f4f4'}}>

<fieldset
      style={{
        border: "0.2px solid blue",
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "20px",
        background:"white",
      }}
      >

      <legend
          style={{
            color: "red",
            fontSize: "20px",
            fontWeight: "500",
            padding: "0 10px",
          }}
        >
          Login
        </legend>
    

        <form style={{
            padding: '10px', 
            background: 'linear-gradient(to right,white,white,white)', 
            
            borderRadius: '8px', 
            width: '300px' }}
            onSubmit={handleSubmit(submitHandle)}
        >
        <div style={{marginBottom:"15px"}}>    
            <label for="mymail"
            style={{color:"red",fontSize:"20px",fontWeight:"200"}}
            >Email:</label>
            <input type='email' 
            placeholder='enter mail'
            {...register("email",{required:"email is required"})}
        style={{width:"97%",padding:"5px",borderRadius:"10px", border: '1px solid #ccc'}}    
            ></input>
        </div>    

        <div style={{marginBottom:"15px"}}>
            <label for="mypassword"
            style={{color:"red",fontSize:"20px",fontWeight:"200"}}
            >Password:</label>
            <input type='password' 
            {...register("password",{required:"password is required"})}
            placeholder='enter password'
        style={{width:"97%",padding:"5px",borderRadius:"10px", border: '1px solid #ccc'}}        
            ></input>
        </div>    

            <button type='submit'
            style={{width:"100%",
                borderRadius:"4px",
                padding:"10px",
                border:"none",
                color:"#fff",
                fontSize:"16px",
                backgroundColor:"#007bff"}}
            >Submit</button>
        </form>
        </fieldset>
    </div>
  )
}

export default Login