import React from 'react';
import { Typography, IconButton, Grid, Stack } from '@mui/material';
import { Email, Facebook, Twitter, Instagram } from '@mui/icons-material';
import footerImage from "../images/navbar-bg.jpg";
import Lottie from 'react-lottie';
import animationData from '../images/footer-animation.json'; // Importing the animation JSON file

const Footer = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <footer style={{ backgroundImage: `url(${footerImage})`, backgroundSize: 'cover', color: '#fff', padding: '20px', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Lottie options={defaultOptions} style={{ width: '300px', height: '200px', marginLeft: '30px' }} />
                <div>
                    <Grid container spacing={2} justifyContent="center" alignItems="center">
                        <Grid item xs={12}>
                            <Typography variant="body2" gutterBottom align="center">
                                Interstellar Insights - All rights reserved &copy; 2024
                            </Typography>
                            <Typography variant="body2" align="center">
                                Designed and developed by Your Name
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <IconButton style={{ color: '#3b5998' }} aria-label="facebook">
                                    <Facebook />
                                </IconButton>
                                <IconButton style={{ color: '#00acee' }} aria-label="twitter">
                                    <Twitter />
                                </IconButton>
                                <IconButton style={{ color: '#bc2a8d' }} aria-label="instagram">
                                    <Instagram />
                                </IconButton>
                                <IconButton style={{ color: '#dd4b39' }} aria-label="email">
                                    <Email />
                                </IconButton>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2" align="center">
                                "We are all in the gutter, but some of us are looking at the stars." - Oscar Wilde
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
                <Lottie options={defaultOptions} style={{ width: '300px', height: '200px', marginRight: '30px' }} />
            </div>
        </footer>
    );
};

export default Footer;
