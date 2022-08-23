import React, { useContext } from 'react'
import Log from '../components/Log/index'
import { UidContext } from '../components/AppContext'

export default function Profil() {
  const uid = useContext(UidContext)

  return (
    <div className='profil-page'>
      {uid ? (
        <h1>Update Page</h1>
      ) : (
        <div className='log-container'>
          <Log signIn={false} signUp={true} />
          <div className='img-container'>
            <img src='./img/log.svg' alt='img-log' />
          </div>
        </div>
      )}
    </div >
  )
}
