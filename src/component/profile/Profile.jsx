"use client";
import React from 'react';
import details from '../../database/db.json';
import { useAppDispatch } from '@/redux/store/hooks';
import { DeleteInfo } from '@/redux/slice/AuthSlice';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Box, Typography, Button, Paper } from '@mui/material';

function Profile() {
    const dispatch = useAppDispatch();
    const data = sessionStorage.getItem("authToken");
    const myroute = useRouter();

    const user = details.registration.find((user) => user.id === data);

    if (!user) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <Typography variant="h4" color="error">No user found. Please log in again.</Typography>
            </Box>
        );
    }

    const handleDelete = () => {
        dispatch(DeleteInfo(user.id))
            .then(() => {
                alert("Congratulation,your account has successfully deleted!")
                myroute.push('/detail');
            })
            .catch((error) => console.log("Error:", error));
    };

    return (
        <Paper sx={{ padding: 3, borderRadius: 2, boxShadow: 2, backgroundColor:'#edf7fc'}}>
            <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: 'bold', textAlign: 'center' }}>
                My Profile
            </Typography>
            <br></br>
            <Box sx={{ marginBottom: 2 }}>
          <Typography variant="h6">
            <span style={{ fontWeight: 'normal',color:'red'
             }}>Name:</span> {user.name}
          </Typography>

          <Typography variant="h6">
              <span style={{ fontWeight: 'normal',color:'red' }}>Email:</span> {user.email}
          </Typography>          


          <Typography variant="h6">
          <span style={{ fontWeight: 'normal',color:'red'}}>City</span>{user.city}
          </Typography>

            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
                <Button 
                    variant="contained" 
                    color="error" 
                    onClick={handleDelete} 
                    sx={{ flex: 1, marginRight: 1 }}
                >
                    Delete
                </Button>
                <Button 
                    variant='contained'
                    component={Link} 
                    href="/reset" 
                    sx={{ flex: 1, marginLeft: 1 }}
                >
                    Reset
                </Button>
            </Box>
        </Paper>
    );
}

export default Profile;
