import React from 'react'
import LeftNav from '../LeftNav'
import {useSelector} from 'react-redux'
import UploadImg from './UploadImg'

export default function UpdateProfil() {
  const userData = useSelector((state) => state.userReducer)

  return (
    <div className='profil-container'>
      <LeftNav />
      <h1>{userData.pseudo}'s profil</h1>
      <div className='update-container'>
        <div className='left-part'>
          <h3>Profil Picture</h3>
          <img src={userData.picture} alt='user-pic' />
          <UploadImg />
        </div>
      </div> 
    </div>
  )
}
