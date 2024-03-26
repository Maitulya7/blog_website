import React from 'react';
import { Box, Typography, Link, IconButton, Avatar, Divider } from '@mui/material';
import { FavoriteBorder as FavoriteBorderIcon, Share as ShareIcon, Comment as CommentIcon } from '@mui/icons-material';

const BlogPost = () => {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                width: "100%",
                margin: 'auto',
                marginBottom: '40px',
            }}
        >
            <Box sx={{ flex: 1 }}>
                <img
                    src='https://blogs.nasa.gov/spacestation/wp-content/uploads/sites/240/2024/03/53497239715_0372aabc26_o-1024x681.jpg'
                    alt='bgImage'
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </Box>
            <Box p={3} sx={{ flex: 1 }}>
                <Typography variant="h5" sx={{ marginBottom: 1, color: '#333' }}>
                    Three Crew Members Launching to Station Aboard Soyuz Spacecraft Live on NASA TV
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                    <Avatar alt="Author" src="/static/images/avatar/1.jpg" sx={{ marginRight: 1 }} />
                    <Typography variant="body2" sx={{ marginRight: 1, color: '#666' }}>
                        By{' '}
                    </Typography>
                    <Link href='/' color='primary'>
                        Maitulya Vaghela
                    </Link>
                    <Typography variant="body2" sx={{ marginX: 1, color: '#666' }}>|</Typography>
                    <time style={{ color: '#666' }}>25-03-2024 3:40 PM</time>
                </Box>
                <Typography variant="body1" className='summary' sx={{ color: '#555', marginBottom: 2 }}>
                    NASA coverage now is underway for the launch of a crewed Soyuz spacecraft to the International Space Station with NASA astronaut Tracy C. Dyson, Roscosmos cosmonaut Oleg Novitskiy, and spaceflight participant Marina Vasilevskaya of Belarus.
                </Typography>
                <Divider sx={{ marginY: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton>
                            <FavoriteBorderIcon style={{ color: '#FF5722' }} />
                        </IconButton>
                        <Typography variant="body2" sx={{ marginRight: 2, color: '#666' }}>
                            123 Likes
                        </Typography>
                        <IconButton>
                            <CommentIcon style={{ color: '#2196F3' }} />
                        </IconButton>
                        <Typography variant="body2" sx={{ color: '#666' }}>
                            35 Comments
                        </Typography>
                    </Box>
                    <Box>
                        <IconButton>
                            <ShareIcon style={{ color: '#4CAF50' }} />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default BlogPost;
