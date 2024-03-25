import React from 'react'

const RegisterPage = () => {
    return (
        <div>
            <form className='register'>
                <h1>Register</h1>
                <input type='text' placeholder='Username' />
                <input type='password' placeholder='Password' />
                <button>Register</button>
            </form>
        </div>
    )
}

export default RegisterPage