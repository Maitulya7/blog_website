import React from 'react';
import { Grid, Typography, Box, Divider } from '@mui/material';
import BlogPost from '../components/post'; // Import your BlogPost component

const BlogPage = () => {
    return (
        <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={8}>
                <Typography variant="h1" align="center" gutterBottom>
                    Welcome to the Blog Page
                </Typography>
                <Divider sx={{ marginBottom: 3 }} />
                <Box sx={{ marginBottom: 3 }}>
                    <BlogPost />
                </Box>
                <Box sx={{ marginBottom: 3 }}>
                    <BlogPost />
                </Box>
                {/* Add more BlogPost components or content here */}
            </Grid>
        </Grid>
    );
};

export default BlogPage;
