import React, { useState } from 'react'
import axios from 'axios'

export default function SignUpForm() {
  const [pseudo, setPseudo] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault()
    const terms = document.getElementById('terms')
    const pseudoError = document.querySelector('.pseudo.error')
    const emailError = document.querySelector('.email.error')
    const passwordError = document.querySelector('.password.error')
    const passwordConfirmError = document.querySelector('.password-confirm.error')
    const termsError = document.querySelector('.terms.error')

    passwordError.innerHTML = ''
    passwordConfirmError.innerHTML = ''
    termsError.innerHTML = ''


    if ( password !== confirmPassword || !terms.checked ) {
      if (password !== confirmPassword)
        passwordConfirmError.innerHTML = "Password don't match"

      if (!terms.checked)
        termsError.innerHTML = "You have to confirm terms before submitting"
    } else {
      await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}api/user/register`,
        data: {
          pseudo,
          email,
          password,
        }
      })
        .then((res) => {
          if (res.data.errors) {
            pseudoError.innerHTML = res.data.errors.pseudo
            emailError.innerHTML = res.data.errors.email
            passwordError.innerHTML = res.data.errors.password
          }
        })
        .catch((err) => { console.log(err) });
    }
  }

  return (
    <form action='' onSubmit={handleRegister} id='sign-up-form'>
      <label htmlFor='pseudo'>Pseudo</label>
      <br />
      <input
        type='text'
        name='pseudo'
        id='pseudo'
        onChange={(e) => setPseudo(e.target.value)}
        value={pseudo}
      />
      <br />
      <div className='pseudo error'></div>
      <br />
      <label htmlFor='email'>Email</label>
      <br />
      <input
        type='text'
        name='email'
        id='email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <br />
      <div className='email error'></div>
      <br />
      <label htmlFor='password'>Password</label>
      <br />
      <input
        type='password'
        name='password'
        id='password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <br />
      <div className='password error'></div>
      <br />
      <label htmlFor='password-conf'>Confirm Password</label>
      <br />
      <input
        type='password'
        name='password'
        id='password-conf'
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
      />
      <br />
      <div className='password-confirm error'></div>
      <br />
      <input type='checkbox' id='terms' />
      <label htmlFor='terms'>
        Terms of{' '}
        <a href='/' target='_blank' rel='noopener noreferrer'>
          Use
        </a>
      </label>
      <br />
      <div className='terms error'></div>
      <input type='submit' value='Register' />
    </form>
  )
}
