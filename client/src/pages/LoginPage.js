import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/api/users/login", {
            username: username,
            password: password
        })
    }
    return (
        <div>
            <form className='login' onSubmit={handleLogin}>
                <h1>Login </h1>
                <input
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginPage