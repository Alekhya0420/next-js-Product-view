"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { all_products } from '@/api/api';
import { Container, Grid, Paper, Typography, Box, Button,TextField } from '@mui/material';
import Profile from '../profile/Profile';
import Link from 'next/link';

const CategoryDetail = ({ myslug }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const api_url = `${all_products.category}/${myslug}`;
      try {
        const res = await axios.get(api_url);
        setProducts(res.data.products);
      } catch (error) {
        console.log("Axios error is", error);
      }
    };

    fetchProducts();
  }, [myslug]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(all_products.items);
        setCategories(res.data);
      } catch (error) {
        console.log("error is", error);
      }
    };

    fetchCategories();
  }, []);

  //this is my searching logic
  let filteredProduct=categories.filter(data=>
    data.slug.toLowerCase().includes(searchInput.toLowerCase())
  );
 
  let handleSearch=(event:React.FormEvent)=>{
    setSearchInput(event.target.value);
  }
  console.log("my filter",filteredProduct)
  //which ends here

  return (
    <Container maxWidth="lg" sx={{ marginTop: '40px' }}>
      <Grid container spacing={4}>

<Grid item xs={12} md={3}>
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
    <Box sx={{ maxHeight:'400px',overflowY:'auto'}}>
      {filteredProduct.map((data, index) => (
         <Link href={`${data.slug}`} style={{textDecoration:'none',color:'#1976d2'}}>
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


        <Grid item xs={12} md={9}>
          <Grid container spacing={4}>
            {products.length > 0 && products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Paper elevation={6} sx={{ padding: 2, borderRadius: '12px', position: 'relative', transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'scale(1.02)', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)' }, backgroundColor: '#fff', border: '2px solid cyan' }}>
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '10px', marginBottom: '15px' }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333', fontSize: '18px' }}>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" sx={{ marginTop: 1, color: '#757575', lineHeight: 1.6 }}>
                    {product.description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                    <Button variant="contained" sx={{ border: "none" }}>
                    <Link href={`${product.category}/${product.id}`}
                    style={{textDecoration:"none",color:"white"}}
                    >Wanna see?</Link></Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CategoryDetail;
