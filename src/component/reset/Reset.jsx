"use client"
import React from 'react'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'
import details from '../../database/db.json'
import {UpdateInfo} from '@/redux/slice/AuthSlice'

function Reset() {
    let form=useForm();
    let{register,handleSubmit,formState}=useForm();
    let{errors}=formState;
    let dispatch=useDispatch();

    let token=sessionStorage.getItem("authToken");

    let user=details.registration.find((user)=>{
        return user.id === token;
    });

    console.log("user is",user);

    let submitHandle=(data)=>{
    
        let token=sessionStorage.getItem("authToken");

        let user=details.registration.find((item)=>{
            return item.id === token;
        });


        let userData=
        {
            id:user.id,
            password:data.password||user.password
        }

        console.log("myuser is",userData)

        dispatch(UpdateInfo(userData))
        .then((res)=>{
            console.log("result is",res);
            alert("update done");
        })

        .catch((errors)=>console.log("error is",error));

    }

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
    
    <form onSubmit={handleSubmit(submitHandle)}>
     <label for="update Password">Password:</label>
     <input type='password'
     {...register("password",{required:"password required"})}
     ></input>

     <button type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default Reset