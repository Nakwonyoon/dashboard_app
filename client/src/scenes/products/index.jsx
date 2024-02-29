import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardActions, CardContent, Collapse, Button, Typography, Rating, useMediaQuery } from '@mui/material';

import Header from 'components/Header';
import { useGetProductsQuery } from 'state/api';
import { CircularProgress } from "@mui/material";


const Product = ({
  _id, name ,description, price,category, supply, stat, rating
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "20px",
      }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary[700]}
          gutterBottom>
          {category}
        </Typography>

        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          ${Number(price).toFixed(2)}
        </Typography>
        <Rating value={rating} readOnly />

        <Typography variant="body2">{description}</Typography>

        <CardActions>
          <Button
            variant="primary"
            size="small"
            onClick={() => setIsExpanded(!isExpanded)}>
            See More
          </Button>
        </CardActions>
        <Collapse
          in={isExpanded}
          timeout="auto"
          unmountOnExit
          sx={{ color: theme.palette.neutral[300] }}>
          <CardContent>
            <Typography>id: {_id}</Typography>
            <Typography>supply: {supply}</Typography>
            <Typography>Yearly Sales This Year: {stat.yearlySalesTotal}</Typography>
            <Typography>Yearly Units Sold This Year: {stat.yearlyTotalSoldUnits}</Typography>
          </CardContent>
        </Collapse>
      </CardContent>
    </Card>
  );
}



const Products = () => {
  // isLoading is a boolean that is true when the query is still in progress from redux toolkit
  const {data, isLoading} = useGetProductsQuery();  
  const isNonMobile = useMediaQuery("(min-width: 1000px)")
  
  return (
    <Box>
      <Header title="PRODUCTS" subtitle="List of all products" />
      {/* {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": {
              gridColumn: isNonMobile ? "none" : "span 4",
            },
          }}>
          {data.map(
            ({
              _id,
              category,
              name,
              rating,
              description,
              price,
              supply,
              stat,
            }) => (
              <Product 
              key={_id}
              _id = {_id}
              category = {category}
              name = {name}
              rating = {rating}
              description = {description}
              price = {price}
              supply = {supply}
              stat = {stat}
              />
            )
          )}
        </Box>
      ) : (
        <>
          <CircularProgress />
        </>
      )} */}
    </Box>
  );
}

export default Products;
