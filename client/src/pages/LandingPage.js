import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';

const LandingPage = () => {
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{ my: 6 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" gutterBottom>
            Welcome to My Awesome Blog
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            Discover, Share, and Connect with Others
          </Typography>
          <Button component={Link} to="/register" variant="contained" color="primary">
            Get Started
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
          </Card>
        </Grid>
      </Grid>

      {/* Features Section */}
      <Grid container spacing={3} alignItems="stretch" justifyContent="center" sx={{ mb: 6 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Register
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                Create your account and start sharing your thoughts and ideas.
              </Typography>
              <Button component={Link} to="/register" variant="outlined" color="primary">
                Register Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Explore Blogs
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                Dive into our collection of blogs categorized for easy discovery.
              </Typography>
              <Button component={Link} to="/blogs" variant="outlined" color="primary">
                Explore Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Manage Profile
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                Update your profile, manage followers, and customize your experience.
              </Typography>
              <Button component={Link} to="/profile" variant="outlined" color="primary">
                Go to Profile
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Call to Action Section */}
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Ready to Start Your Blogging Journey?
          </Typography>
          <Button component={Link} to="/register" variant="contained" color="primary">
            Get Started
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LandingPage;
