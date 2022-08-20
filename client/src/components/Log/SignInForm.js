import React, { useState } from 'react'
import axios from 'axios'

export default function SignInForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {

    }

    return (
        <form action='' onSubmit={handleLogin} id='sign-up-form'>
            <label htmlFor='email'>Email</label>
            <br />
            <input text='' id='email' name='email' />
            <input type='submit' value='Sign In' />
        </form>
    )
}
