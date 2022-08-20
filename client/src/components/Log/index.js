import React, { useState } from 'react'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

export default function Log() {
  const [signUpFormModel, setSignUpFormModel] = useState("true")
  const [signInFormModel, setSignInFormModel] = useState("false")

  const handleModals = (e) => {
    if (e.target.id === 'signUp') {
      setSignInFormModel(false)
      setSignUpFormModel(true)
    } else if (e.target.id === 'signIn') {
      setSignUpFormModel(false)
      setSignInFormModel(true)
    }
  }
  return (
    <div className='connection-form'>
      <div className='form-container'>
        <ul>
          <li className={signUpFormModel ? 'active-btn' : null} onClick={handleModals} id="signUp">SignUp</li>
          <li className={signInFormModel ? 'active-btn' : null} onClick={handleModals} id="signIn">SignIn</li>
        </ul>
        {signUpFormModel && <SignUpForm />}
        {signInFormModel && <SignInForm />}
      </div>
    </div>
  )
}
