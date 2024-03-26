import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const BlogPost = () => {
    return (
        <Box
            className='post'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                maxWidth: '600px',
                margin: 'auto',
                marginBottom: '20px',
            }}
        >
            <img
                src='https://blogs.nasa.gov/spacestation/wp-content/uploads/sites/240/2024/03/53497239715_0372aabc26_o-1024x681.jpg'
                alt='bgImage'
                style={{ width: '100%', height: 'auto' }}
            />
            <Box p={2}>
                <Typography variant="h4" component="h1" sx={{ marginBottom: 1 }}>
                    Three Crew Members Launching to Station Aboard Soyuz Spacecraft Live on NASA TV
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                    <Typography variant="body2" sx={{ marginRight: 1 }}>
                        By{' '}
                    </Typography>
                    <Link href='/' color='primary'>
                        Maitulya Vaghela
                    </Link>
                    <Typography variant="body2" sx={{ marginX: 1 }}>|</Typography>
                    <time>25-03-2024 3:40 PM</time>
                </Box>
                <Typography variant="body1" className='summary'>
                    NASA coverage now is underway for the launch of a crewed Soyuz spacecraft to the International Space Station with NASA astronaut Tracy C. Dyson, Roscosmos cosmonaut Oleg Novitskiy, and spaceflight participant Marina Vasilevskaya of Belarus.
                </Typography>
            </Box>
        </Box>
    );
};

export default BlogPost;
