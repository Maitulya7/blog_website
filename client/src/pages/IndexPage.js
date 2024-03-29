import React from 'react'
import BlogPost from '../components/post'
import Navbar from '../components/navbar'
import { Box, Grid } from '@mui/material'
import Footer from '../components/footer'

const IndexPage = () => {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Navbar />
      <Box
        sx={{
          padding: {
            xs: "50px 50px 0px 50px",  // for smaller screens
            lg: "50px 150px 0px 150px"   // for larger screens
          }
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <BlogPost />
          </Grid>
          <Grid item xs={12} lg={6}>
            <BlogPost />
          </Grid>
          <Grid item xs={12} lg={6}>
            <BlogPost />
          </Grid>
          <Grid item xs={12} lg={6}>
            <BlogPost />
          </Grid>
        </Grid>
      </Box>
      <Footer/>
    </Box>
  )
}

export default IndexPage
