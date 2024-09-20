"use client"
import React from 'react'
import details from '../../database/db.json'
import {useAppDispatch} from '@/redux/store/hooks';
import {DeleteInfo} from '@/redux/slice/AuthSlice';
import {useRouter} from 'next/navigation';
import Link from 'next/link';

function Profile() {

    let dispatch=useAppDispatch();
    let data = sessionStorage.getItem("authToken");
    console.log("mydata is",data);
    let myroute=useRouter();

    let user=details.registration.find((user)=>{
        return user.id === data;
    });
    console.log("user is",user);

    if (!user) {
        return (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <h1>No user found. Please log in again.</h1>
          </div>
        );
    }

    let handleDelete=()=>{
      dispatch(DeleteInfo(user.id))
      .then((res)=>{
        console.log(res);
        myroute.push('/detail');
      })

      .catch((error)=>console.log("error is",error));
    }
    
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh"}}>
      My Profile Page details are given below:
      <h1>Name:{user.name}</h1>
      <h1>Email:{user.email}</h1>
      <h1>City:{user.city}</h1>
      <button onClick={handleDelete}>Delete</button>
     
      

      <button>
        <Link href="/reset">Reset</Link>
      </button>


    </div>
  )
}

export default Profile