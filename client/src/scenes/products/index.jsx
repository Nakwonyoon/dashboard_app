import React, { useState} from 'react'
import { Box, Card, CardActions, CardContent, Collapse, Button, Typography, Rating, useTheme, useMediaQuery } from '@mui/material';

import Header from 'components/Header';
import { useGetProductsQuery } from 'state/api';


const Products = () => {
  // isLoading is a boolean that is true when the query is still in progress from redux toolkit
  const {data, isLoading} = useGetProductsQuery();  
  console.log("data", data);
  const theme = useTheme();
  
  return (
    <Box>
     <Header title="PRODUCTS" subtitle="List of all products"
     />
    </Box>
  )
}

export default Products;
