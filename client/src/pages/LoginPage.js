import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';
import Navbar from '../components/navbar';

const LoginPage = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/api/users/login", {
            username: username,
            password: password
        }).then((res) => {
            if (res.status === 200) {
                toast.success("You have successfully logged in!", {
                    position: "top-right",
                    autoClose: 3000, // Adjust as needed
                });
                localStorage.setItem("access-token", res.data.accessToken)
                localStorage.setItem("username", res.data.username)
                navigate('/')
                
            }
        }).catch((err) => {
            console.log(err)

            toast.error("Something went wrong please try again", {
                position: "top-right",
                autoClose: 3000
            })
        })
    }
    return (
        <>
        <Navbar />
            <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                spacing={2}
                sx={{ width: "100%" , marginTop:"50px"}}
            >
                <Typography variant="h4" component="h1">
                    Login
                </Typography>
                <form onSubmit={handleLogin}>
                    <Stack spacing={2} sx={{ width: '500px' }}>
                        <TextField
                            label="Username"
                            variant="outlined"
                            value={username}
                            fullWidth
                            onChange={(e) => setUsername(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <AccountCircle color="action" />
                                ),
                            }}
                        />
                        <TextField
                            type="password"
                            label="Password"
                            variant="outlined"
                            value={password}
                            fullWidth
                            onChange={(e) => setPassword(e.target.value)}
                            InputProps={{
                                startAdornment: <Lock color="action" />,
                            }}
                        />
                        <Button variant="contained" color='success' type="submit">
                            Login
                        </Button>
                    </Stack>
                </form>
            </Stack>
        </>
    )
}

export default LoginPage