
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import Profile from "../profile/Profile";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  Rating,
  Avatar,
  CircularProgress,
  Paper,
} from "@mui/material";
import { AccessTime, CheckCircle, ErrorOutline } from "@mui/icons-material";

const ProductDetails = ({ myid }) => {
  const [totalProduct, setfullInfo] = useState({});
  
  // Fetch product info from API
  function productInfo() {
    axios
      .get(`https://dummyjson.com/products/${myid}`) // Replace with your API endpoint
      .then((res) => {
        setfullInfo(res.data);
      })
      .catch((error) => console.log("error is", error));
  }

  useEffect(() => {
    productInfo();
  }, [myid]);

  return (
    <Box sx={{ padding: 4 }}>
      {Object.keys(totalProduct).length > 0 ? (
        <Grid container spacing={4}>
          {/* Left Side Category Information */}
          <Grid item xs={12} md={3}>
            <Paper elevation={3} sx={{padding:2,border:"3px solid cyan"}}>
              {/* <Profile/> */}
              <Typography variant="h6" gutterBottom align="center" sx={{ color: "#1976D2", fontWeight: "bold" }}>
                Category Details
              </Typography>

              <List dense>
                <ListItem>
                  <ListItemText primary="Category" secondary={totalProduct.category} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Brand" secondary={totalProduct.brand} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="SKU" secondary={totalProduct.sku} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Weight" secondary={`${totalProduct.weight} kg`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Dimensions" secondary={`W: ${totalProduct.dimensions?.width} cm, H: ${totalProduct.dimensions?.height} cm, D: ${totalProduct.dimensions?.depth} cm`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Warranty" secondary={totalProduct.warrantyInformation} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Shipping" secondary={totalProduct.shippingInformation} />
                </ListItem>
              </List>

              <Divider sx={{ marginY: 2 }} />

              <Typography variant="h6" align="center" sx={{ color: "#F50057" }}>
                {totalProduct.availabilityStatus === "Low Stock" ? (
                  <Chip label="Low Stock" color="error" icon={<ErrorOutline />} />
                ) : (
                  <Chip label="In Stock" color="success" icon={<CheckCircle />} />
                )}
              </Typography>
            </Paper>
          </Grid>

          {/* Main Product Information */}
          <Grid item xs={12} md={9}>
            <Card sx={{ boxShadow: 3, borderRadius: 3,border:"3px solid cyan"}}>
              <CardMedia
                component="img"
                // height="500"
                image={totalProduct.thumbnail}
                alt={totalProduct.title}
                sx={{ objectFit: "cover",height:"500px",width:"300px",
                  display:"block",
                  marginLeft:"auto",
                  marginRight:"auto",
                }}
              />
              <CardContent>

                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  align="center"
                  sx={{ fontWeight: "bold", color: "#3f51b5" }}
                >
                  {totalProduct.title}
                </Typography>

                <Typography variant="body1" color="text.secondary" paragraph>
                  {totalProduct.description}
                </Typography>

                <Divider sx={{ marginY: 2 }} />
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={6}>
                    <Typography variant="h6" sx={{ color: "#F44336", fontWeight: "bold" }}>
                      ${totalProduct.price}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#757575" }}>
                      Discount: {totalProduct.discountPercentage}%
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    {totalProduct.tags.map((tag, index) => (
                      <Chip key={index} label={tag} color="primary" sx={{ marginX: 0.5 }} />
                    ))}
                  </Grid>
                </Grid>

                <Divider/>
                
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#4CAF50", marginBottom: 2 }}>
                  Rating: {totalProduct.rating} ⭐
                </Typography>

                {totalProduct.reviews && totalProduct.reviews.length > 0 ? (
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Customer Reviews
                    </Typography>
                    {totalProduct.reviews.map((review, index) => (
                      <Paper key={index} elevation={2} sx={{ padding: 2, marginY: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={2}>
                            <Avatar>{review.reviewerName.charAt(0)}</Avatar>
                          </Grid>
                          <Grid item xs={10}>
                            <Typography variant="body2">
                              {review.reviewerName}{review.reviewerEmail}
                            </Typography>
                            <Rating value={review.rating} readOnly precision={0.5} />
                            <Typography variant="body2" color="textSecondary">
                              {new Date(review.date).toDateString()}
                            </Typography>
                            <Typography variant="body1" paragraph>
                              {review.comment}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Paper>
                    ))}
                  </Box>
                ) : (
                  <Typography variant="body2" color="textSecondary">
                    No reviews available.
                  </Typography>
                )}

                <Divider sx={{ marginY: 2 }} />

                {/* Additional Info */}
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Minimum Order Quantity: {totalProduct.minimumOrderQuantity}
                </Typography>

                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Return Policy: {totalProduct.returnPolicy}
                </Typography>

                {/* Barcode and QR Code */}
                <Grid container spacing={2} alignItems="center" sx={{ marginY: 2 }}>
                  <Grid item xs={6}>
                    <Typography variant="body2">Barcode: {totalProduct.meta.barcode}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <img
                      src={totalProduct.meta.qrCode}
                      alt="QR Code"
                      style={{ width: "100px", height: "100px" }}
                    />
                  </Grid>
                </Grid>

                {/* Add to Cart Button */}
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ marginTop: 3 }}
                  disabled={totalProduct.stock === 0}
                >
                  {totalProduct.stock > 0 ? "Add to Cart" : "Out of Stock"}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default ProductDetails;
