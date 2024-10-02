"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { all_products } from '@/api/api';
import { Container, Grid, Paper, TextField, Typography, Box,Button } from '@mui/material';
import Profile from '../profile/Profile';

function Category() {
  
  const [category, categoryState] = useState([]);
  const [details, detailState] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  function fetchCategories() {
    axios.get(all_products.items)
      .then((res) => {
        categoryState(res.data);
      })
      .catch((error) => console.log("Axios error is", error));
  }

  function fetchDetails() {
    axios.get(all_products.all)
      .then((res) => {
        detailState(res.data.products);
      })
      .catch((error) => console.log("error is", error));
  }

  useEffect(() => {
    fetchDetails();
  }, []);

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredCategories = category.filter(categoryItem =>
    categoryItem.slug.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ marginTop: '40px' }}>
      <Grid container spacing={4}>

        <Grid item xs={12} sm={3}>
          <Paper elevation={2} sx={{padding:3,backgroundColor:'#ffffff',borderRadius:'10px',
            border:'3px solid lightblue'
           }}>
           <Profile/> 
            <Typography 
              variant="h6" 
              sx={{ marginBottom: 2, fontWeight: 'bold', color: '#333' }}
            >
              Categories
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Search categories..."
              onChange={handleSearch}
              sx={{
                marginBottom: 4,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                },
              }}
            />
            <Box sx={{ maxHeight:'500px',overflowY:'auto'}}>
              {filteredCategories.map((data, index) => (
                <Link key={index} href={`category/${data.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      padding: '8px 12px', 
                      borderRadius: '8px', 
                      color: '#1976d2', 
                      '&:hover': { backgroundColor: '#f4f4f4' },
                      transition: 'background-color 0.3s ease'
                    }}
                  >
                    {data.slug}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Details Section */}
        <Grid item xs={12} sm={9}>
          <Grid container spacing={4}>
            {details.length > 0 && details.map((data, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper 
                  elevation={6} 
                  sx={{
                    padding: 2, 
                    borderRadius: '12px', 
                    position: 'relative', 
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                    },
                    backgroundColor: '#fff',
                    border:'2px solid cyan'
                  }}
                >
                  <img
                    src={data.images[0]}
                    alt={data.title}
                    style={{
                      width: '100%', 
                      height: '220px', 
                      objectFit: 'cover', 
                      borderRadius: '10px',
                      marginBottom: '15px'
                    }}
                  />
                  <Typography 
                    variant="h6" 
                    sx={{ fontWeight: 'bold', color: '#333', fontSize: '18px' }}
                  >
                    {data.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      marginTop: 1, 
                      color: '#757575',
                      lineHeight: 1.6
                    }}
                  >
                    {data.description.length > 150 ? `${data.description.substring(0, 120)}...` : data.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Category;

