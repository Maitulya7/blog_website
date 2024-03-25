import React, { useState } from 'react'
import axios from "axios"

const RegisterPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/api/users/register", {
            username: username,
            password: password
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div>
            <form className='register' onSubmit={handleRegister}>
                <h1>Register</h1>
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
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default RegisterPage