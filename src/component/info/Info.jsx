"use client"
import React from 'react'
import { useForm} from 'react-hook-form'
import {useAppDispatch} from '@/redux/store/hooks'
import {RegInfo} from '@/redux/slice/AuthSlice'
import  details from '../../database/db.json'

const Info = () => {
  let form =useForm();
  let {register,formState,handleSubmit} = form;
  let {errors}=formState;
  let dispatch=useAppDispatch();


  const submitHandle = (data) => {
    let existingData=details.registration.some((user)=>{
      return user.email === data.email || user.password === data.password; 
    });

    if(existingData)
    {
      alert("user already exist");
    }

    let userData=
    {
      name:data.name,
      email:data.email,
      city:data.city,
      password:data.password
    }
    dispatch(RegInfo(userData))
    .then((res)=>{
      console.log("output is",res.data);
      alert("congratulation");
    })

    .catch((errors)=>console.log("Errors are",errors));
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh",backgroundColor: '#f4f4f4' }}> 
     <fieldset
      style={{
        border:"1px solid blue",
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "20px",
        background:"white"
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
          User Information
        </legend>
        
      <form onSubmit={handleSubmit(submitHandle)}
      style={{
        background: 'linear-gradient(to right,white,white,white)', 
        borderRadius:"5px",
        width:"350px",
        padding: '20px',
      }}
      >

         
      <div style={{marginBottom:"15px"}}>     
        <label htmlFor="name" className='labeling'
        style={{color:"red",fontWeight:"300"}}
        >Name:</label>
        <input type="text"
        style={{
          width:"90%",
          borderRadius:"10px",
          border: '1px solid #ccc',
          padding:"8px"
        }}
        id="name" {...register("name",{required:"name is required"})} /><br/>
      </div>  


      <div style={{marginBottom:"15px"}}> 
        <label htmlFor="email" 
        style={{color:"red",fontWeight:"300"}}
        className='labeling'>Email:</label>
        <input type="text" 
        style={{
          width:"90%",
          borderRadius:"10px",
          border: '1px solid #ccc',
          padding:"8px"
        }}
        id="email" {...register("email",{required:"email is required"})}/>
      </div>  

      <div style={{marginBottom:"15px"}}>
        <label htmlFor="city"
        style={{color:"red",fontWeight:"300"}}
        >City</label>
        <input type="text"
        style={{
          width:"90%",
          borderRadius:"10px",
          border: '1px solid #ccc',
          padding:"8px"
        }}
        id="city" {...register("city",{required:"city is required"})}/>
      </div> 


      <div style={{marginBottom:"15px"}}>
        <label htmlFor="pass"
         style={{color:"red",fontWeight:"300"}}
        >Password</label>
        <input type="password"
        style={{
          width:"90%",
          borderRadius:"10px",
          border: '1px solid #ccc',
          padding:"8px"
        }}
        id="pass" {...register("password",{required:"password is required"})}/>
      </div>  
    
        <button type="submit"
        style={{
          backgroundColor:"#007bff",
          color:"white",
          width:"95%",
          padding:"8px",
          border:"none",
          borderRadius:"4px"
        }}
        >Submit</button>
      </form>
      </fieldset>
      
    </div>
  )
}

export default Info;


