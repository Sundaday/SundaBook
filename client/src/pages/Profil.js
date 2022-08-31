import React, { useContext } from 'react'
import Log from '../components/Log/index'
import { UidContext } from '../components/AppContext'
import UpdateProfil from '../components/Profil/UpdateProfil'

export default function Profil() {
  const uid = useContext(UidContext)

  return (
    <div className='profil-page'>
      {uid ? (
        <UpdateProfil />
      ) : (
        <div className='log-container'>
          <Log signIn={false} signUp={true} />
          <div className='img-container'>
            <img src='./img/log.svg' alt='img-log' />
          </div>
        </div>
      )}
    </div>
  )
}
