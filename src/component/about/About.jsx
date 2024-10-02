// import React from 'react';
// import { Container, Grid, Box, Typography, Button, Card, CardContent, CardMedia, Rating } from '@mui/material';
// import Link from 'next/link';
// import { myItems } from './data2';
// import { myShirts } from './data';

// function About() {
//   return (
//     <Container>
//       {/* Hero Section */}
//       <Box
//         sx={{
//           backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/hero4.png")',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           height: '100vh',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           // textAlign: 'center',
//           padding: '20px',
//           color: '#fff',
//         }}
//       >
//         <Typography variant="h5" sx={{ fontWeight: 'bold', letterSpacing: '2px' }}>Trade-in-offer</Typography>
//         <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize:'36px', marginBottom: '10px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Super Value Deals</Typography>
//         <Typography variant="h1" sx={{ fontSize:'36px' , lineHeight: '1.2' }}>On All Products</Typography>
//         <Typography variant="body1" sx={{ margin: '20px 0', fontSize: '18px', opacity: 0.9 }}>Save more with coupons with 70% off</Typography>
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: '#ff5722',
//             color: '#fff',
//             borderRadius: '25px',
//             padding: '12px 24px',
//             fontSize: '18px',
//             boxShadow: '0px 4px 15px rgba(255, 87, 34, 0.5)',
//             '&:hover': {
//               backgroundColor: '#e64a19',
//               boxShadow: '0px 6px 20px rgba(255, 87, 34, 0.6)',
//             },
//           }}
//         >
//           <Link href="/detail" style={{ textDecoration: 'none', color: '#fff' }}>Register</Link>
//         </Button>
//       </Box>

//       {/* Feature Section */}
//       <Box sx={{ padding: '50px 0', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
//         <Typography variant="h5" sx={{fontWeight:'bold',marginBottom:'20px',color:'red',textTransform:'uppercase'}}>
//           Our Features
//         </Typography>
//         <Grid container spacing={4}>
//           {[
//             { img: '/images/feature/f1.png', title: 'Free Shipping' },
//             { img: '/images/feature/f2.png', title: 'Online Order' },
//             { img: '/images/feature/f3.png', title: 'Save Money' },
//             { img: '/images/feature/f4.png', title: 'Promotions' },
//             { img: '/images/feature/f5.png', title: 'Happy Sale' },
//             { img: '/images/feature/f6.png', title: '24/7 Support' },
//           ].map((feature, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card sx={{ boxShadow: 4, transition: 'transform 0.3s', borderRadius: '15px', '&:hover': { transform: 'scale(1.05)', boxShadow: 8 } }}>
//                 <CardMedia component="img" image={feature.img} alt={feature.title} sx={{ height: '80px', objectFit: 'contain', padding: '20px', borderRadius: '15px 15px 0 0', backgroundColor: '#f0f0f0' }} />
//                 <CardContent>
//                   <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333', letterSpacing: '1px' }}>{feature.title}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       {/* Featured Products Section */}
//       <Box sx={{ padding: '50px 0', backgroundColor: '#fff', textAlign: 'center' }}>
//         <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '20px', color: '#ff5722' }}>Featured Products</Typography>
//         <Typography variant="body1" sx={{ marginBottom: '40px', color: '#666' }}>Summer Collection in Modern Design</Typography>
//         <Grid container spacing={4}>
//           {myItems.map((item, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <Card sx={{ boxShadow: 4, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)', boxShadow: 8 }, borderRadius: '15px' }}>
//                 <CardMedia
//                   component="img"
//                   image={item.myimg.src}
//                   alt={item.title}
//                   sx={{ height: '300px', objectFit: 'contain', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '15px 15px 0 0' }}
//                 />
//                 <CardContent>
//                   <Typography variant="body1" sx={{ marginTop: '10px', color: '#444', fontWeight: 'bold' }}>{item.title}</Typography>
//                   <Rating value={5} readOnly sx={{ marginBottom: '10px', color: '#ff5722' }} />
//                   <Typography variant="h5" sx={{ color: '#ff5722', fontWeight: 'bold' }}>${item.price}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       {/* Latest Shirts Section */}
//       <Box sx={{ padding: '50px 0', backgroundColor: '#f5f5f5' }}>
//         <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '30px', textAlign: 'center', color: 'red' }}>Latest Shirts</Typography>
//         <Grid container spacing={4}>
//           {myShirts.map((shirt, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card sx={{ boxShadow: 4, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)', boxShadow: 8 }, borderRadius: '15px' }}>
//                 <CardMedia
//                   component="img"
//                   image={shirt.images.src}
//                   alt={shirt.name}
//                   sx={{ height: '300px', objectFit: 'contain', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '15px 15px 0 0' }}
//                 />
//                 <CardContent>
//                   <Typography variant="h6" sx={{ marginTop: '20px', fontWeight: 'bold', color: '#333' }}>{shirt.name}</Typography>
//                   <Typography variant="body1" sx={{ marginBottom: '10px', color: '#666' }}>{shirt.description}</Typography>
//                   <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px', color: '#ff5722' }}>Price: ${shirt.price}</Typography>
//                   <Typography variant="body2" sx={{ color: '#777' }}>Rating: {shirt.rating} ★</Typography>
//                   <Box
//                     sx={{
//                       display: 'inline-block',
//                       padding: '5px 15px',
//                       marginTop: '10px',
//                       backgroundColor: shirt.color,
//                       color: '#fff',
//                       borderRadius: '5px',
//                     }}
//                   >
//                     {shirt.color}
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Container>
//   );
// }

// export default About;


import React from 'react';
import { Container, Grid, Box, Typography, Button, Card, CardContent, CardMedia, Rating } from '@mui/material';
import Link from 'next/link';
import { myItems } from './data2';
import { myShirts } from './data';

function About() {
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box
        sx={{
          height: '70vh',
          backgroundImage: 'url("/images/hero4.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h4" sx={{ color: '#fff', fontWeight: 'bold', mb: 2, letterSpacing: 1 }}>
            Exclusive Offers
          </Typography>
          <Typography variant="h1" sx={{ color: '#fff', fontWeight: '900', fontSize: '42px', mb: 3 }}>
            Luxury Products at Unbeatable Prices
          </Typography>
          <Typography variant="body1" sx={{ color: '#fff', opacity: 0.85, fontSize: '18px', mb: 4 }}>
            Indulge in premium quality and luxury designs
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FF4081',
              padding: '10px 30px',
              borderRadius: '25px',
              fontWeight: 'bold',
              fontSize: '16px',
              boxShadow: '0px 6px 18px rgba(255, 64, 129, 0.6)',
              '&:hover': {
                backgroundColor: '#F50057',
                boxShadow: '0px 8px 22px rgba(245, 0, 87, 0.7)',
              },
            }}
          >
            <Link href="/detail" style={{ textDecoration: 'none', color: '#fff' }}>Shop Now</Link>
          </Button>
        </Box>
      </Box>

      {/* Why Shop With Us Section */}
      <Box sx={{ py: 6, textAlign: 'center', backgroundColor: '#fff', mt: 5, borderRadius: '10px', boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#FF4081', mb: 2 }}>
          Why Shop With Us?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            { img: '/images/feature/f1.png', title: 'Fast Shipping' },
            { img: '/images/feature/f2.png', title: 'Secure Payment' },
            { img: '/images/feature/f3.png', title: 'Great Savings' },
            { img: '/images/feature/f4.png', title: 'Exclusive Offers' },
            { img: '/images/feature/f5.png', title: '24/7 Support' },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={2} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <img src={feature.img} alt={feature.title} style={{ width: '70px', height: '70px', marginBottom: '10px' }} />
                <Typography variant="h6" sx={{ fontWeight: '600', fontSize: '16px' }}>{feature.title}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Featured Product Cards */}
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333', mb: 5 }}>
          Featured Collections
        </Typography>
        <Grid container spacing={4}>
          {myItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                sx={{
                  backgroundColor: '#fff',
                  border:'none',
                  overflow: 'hidden',
                  position: 'relative',
                  transform: 'perspective(1000px) rotateY(0)',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.4s ease',
                }}
              >
                <CardMedia
                  component="img"
                  image={item.myimg.src}
                  alt={item.title}
                  sx={{ height: '220px', objectFit: 'cover', borderRadius: '20px 20px 0 0' }}
                />
                <CardContent
                  sx={{
                    textAlign: 'left',
                    padding: '15px',
                    transition: 'background-color 0.3s ease, color 0.3s ease',
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: '600', mb: 1 }}>{item.title}</Typography>
                  <Rating value={5} readOnly sx={{ mb: 1, color: '#FF4081' }} />
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#FF4081' }}>${item.price}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Shirts Collection */}
      <Box sx={{ py: 8, backgroundColor: '#fff', borderRadius: '20px', boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#333', mb: 5 }}>
          Latest Shirt Collection
        </Typography>
        <Grid container spacing={4}>
          {myShirts.map((shirt, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: '#fff',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                  transform: 'scale(1)',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'scale(1.05)' },
                  border:'none'
                }}
              >
                <CardMedia
                  component="img"
                  image={shirt.images.src}
                  alt={shirt.name}
                  sx={{ height: '260px', objectFit: 'cover'}}
                />
                <CardContent sx={{ padding: '15px', textAlign: 'left' }}>
                  <Typography variant="h6" sx={{ fontWeight: '600', mb: 1 }}>{shirt.name}</Typography>
                  <Typography variant="body1" sx={{ color: '#666', mb: 1 }}>{shirt.description}</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#FF4081' }}>Price: ${shirt.price}</Typography>
                  <Typography variant="body2" sx={{ color: '#999' }}>Rating: {shirt.rating} ★</Typography>
                  <Box
                    sx={{
                      display: 'inline-block',
                      padding: '5px 10px',
                      marginTop: '10px',
                      backgroundColor: shirt.color,
                      color: '#fff',
                      border:'none',
                    }}
                  >
                    {shirt.color}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default About;


