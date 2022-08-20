import React, { useState } from 'react'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
export default function Log() {
  const [SignUpFormModel, setSignUpFormModel] = useState("true")
  const [SignInFormModel, setSignInFormModel] = useState("false")

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
          <li onClick={handleModals} id="signUp">SignUp</li>
          <li onClick={handleModals} id="signIn">SignIn</li>
        </ul>
        {SignUpFormModel && <SignUpForm />}
        {SignInFormModel && <SignInForm />}
      </div>
    </div>
  )
}
