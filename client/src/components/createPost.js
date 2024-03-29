import React, { useState } from 'react';
import Navbar from './navbar';
import { TextField, Button, Grid, Typography, Box, IconButton } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import axios from 'axios';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [image, setImage] = useState(null);
    const [content, setContent] = useState('');

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file); 
        }
    };

    const handleContentChange = (value) => {
        setContent(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('access-token');

        const formData = new FormData();
        formData.append('title', title);
        formData.append('summary', summary);
        formData.append('content', content);
        formData.append('image', image);
        console.log(formData)
        try {
            const response = await axios.post(
                "http://localhost:5000/api/users/post",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            console.log('Response:', response);
        } catch (error) {
            console.error('Error submitting the form:', error.response); // Log error response
        }
    };

    // Default content for the Quill editor
    const defaultContent = `
        <h1>Welcome to My Blog!</h1>
        <p>This is a default blog post created using React Quill and Material-UI, inspired by Medium's layout.</p>
        <h2>Introduction</h2>
        <p>In this post, I will cover...</p>
        <h2>Main Points</h2>
        <ul>
            <li>Main point 1</li>
            <li>Main point 2</li>
            <li>Main point 3</li>
        </ul>
        <h2>Conclusion</h2>
        <p>Thank you for reading!</p>
    `;

    return (
        <div>
            <Navbar />
            <Grid sx={{ marginTop: '20px' }} container spacing={2} justifyContent="center">
                <Grid item xs={12} md={8}>
                    <Typography variant="h5" gutterBottom>Create a New Post</Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Title"
                                    variant="outlined"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Summary"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    value={summary}
                                    onChange={(e) => setSummary(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <input
                                    type="file"
                                    accept="image/*"
                                    id="image-input"
                                    style={{ display: 'none' }}
                                    onChange={handleImageChange}
                                />
                                <label htmlFor="image-input">
                                    <IconButton color="primary" component="span">
                                        <PhotoCamera />
                                    </IconButton>
                                    {image && <Typography variant="body2">Image uploaded</Typography>}
                                </label>
                            </Grid>
                            {image && (
                                <Grid item xs={12}>
                                    <img src={URL.createObjectURL(image)} alt="Post" style={{ maxWidth: '100%' }} />
                                </Grid>
                            )}
                            <Grid item xs={12}>
                                <Typography variant="body1" gutterBottom>
                                    Content:
                                </Typography>
                                <Box sx={{ border: '1px solid #c4c4c4', borderRadius: '4px' }}>
                                    <ReactQuill
                                        theme="snow"
                                        value={content || defaultContent}
                                        onChange={handleContentChange}
                                        placeholder="Write your post here..."
                                        modules={{
                                            toolbar: [
                                                [{ header: '1' }, { header: '2' }, { font: [] }],
                                                [{ size: [] }],
                                                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                                [{ list: 'ordered' }, { list: 'bullet' }],
                                                ['link', 'image', 'video'],
                                                ['clean'],
                                            ],
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="primary">
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};

export default CreatePost;
