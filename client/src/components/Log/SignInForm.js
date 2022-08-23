import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

export default function SignInForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        const emailError = document.querySelector('.email.error')
        const passwordError = document.querySelector('.password.error')

        axios({
            method: 'post',
            url: `${process.env.REACT_APP_API_URL}api/user/login`,
            withCredentials: true,
            data: {
                email: email,
                password: password,
            }
        })
            .then((res) => {
                console.log(res)
                if (res.data.errors) {
                    emailError.innerHTML = res.data.errors.email;
                    passwordError.innerHTML = res.data.errors.password;
                } else {
                    window.location = '/';
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <form action='' onSubmit={handleLogin} id='sign-up-form'>
            <label htmlFor='email'>Email</label>
            <br />
            <input
                id='email'
                name='email'
                type='text'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <div className='email error'></div>
            <br />
            <label htmlFor='password'>Password</label>
            <br />
            <input
                id='password'
                name='password'
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <div className='password error'></div>
            <br />
            <input type='submit' value='Sign In' />
        </form>
    )
}
