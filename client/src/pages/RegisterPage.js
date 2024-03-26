import React, { useState } from 'react';
import { Stack, TextField, Button, Typography } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';
import axios from 'axios';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/users/register', {
                username: username,
                password: password,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={2}
        >
            <Typography variant="h4" component="h1">
                Register
            </Typography>
            <form onSubmit={handleRegister}>
                <Stack spacing={2} sx={{ width: '500px' }}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <AccountCircle color="action" />
                            ),
                        }}
                        fullWidth
                    />
                    <TextField
                        type="password"
                        label="Password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            startAdornment: <Lock color="action" />,
                        }}
                        fullWidth
                    />
                    <Button variant="contained" color='success' type="submit">
                        Register
                    </Button>
                </Stack>
            </form>
        </Stack>
    );
};

export default RegisterPage;
