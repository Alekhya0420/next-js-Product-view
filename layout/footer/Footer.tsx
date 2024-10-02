import React from 'react'
import styles from '../../src/styles/layout.module.css'
import {Container,Grid,Divider} from '@mui/material'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container maxWidth="lg">
      <Grid container spacing={3}>

      <Grid item md={3}>
       <p style={{fontWeight:"bolder",fontSize:"25px"}}>Company</p> 
       <Divider sx={{ marginY: 2,backgroundColor:"blue" }}/>
       <p>About Us</p>
       <p>Services</p>
       <p>Private Policy</p>
       <p>Affiliate Programme</p>
      </Grid> 

      <Grid item md={3}>
       <p style={{fontWeight:"bolder",fontSize:"25px"}}>Get Help</p>
       <Divider sx={{ marginY: 2,backgroundColor:"blue"}}/>
       <p>FAQ</p>
       <p>Shopping</p>
       <p>Private Policy</p>
       <p>Order status</p>
       <p>Payment Options</p>
      </Grid> 
      
      <Grid item md={3}>
        <p style={{fontWeight:"bolder",fontSize:"25px"}}>Online Shop</p>
        <Divider sx={{ marginY: 2,backgroundColor:"blue"}}/>
       <p>Watch</p>
       <p>Blog</p>
       <p>Shoes</p>
       <p>Dress</p>
      </Grid> 

      <Grid item md={3}>
        <p style={{fontWeight:"bolder",fontSize:"25px"}}>Social Media</p>
        <Divider sx={{ marginY: 2,backgroundColor:"blue"}}/>
       <p>Instagram</p>
       <p>Linkdin</p>
       <p>Facebook</p>
       <p>Email</p>
      </Grid> 


      </Grid>  
      </Container>
    </footer>
  )
}

export default Footer