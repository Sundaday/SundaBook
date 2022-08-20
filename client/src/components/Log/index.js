import React, { useState } from 'react'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

export default function Log( props ) {
  const [signUpFormModel, setSignUpFormModel] = useState(props.signUp)
  const [signInFormModel, setSignInFormModel] = useState(props.signIn)

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
          <li className={signUpFormModel ? 'active-btn' : null} onClick={handleModals} id='signUp'>SignUp</li>
          <li className={signInFormModel ? 'active-btn' : null} onClick={handleModals} id='signIn'>SignIn</li>
        </ul>
        {signUpFormModel && <SignUpForm />}
        {signInFormModel && <SignInForm />}
      </div>
    </div>
  )
}
