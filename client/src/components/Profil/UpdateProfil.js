import React, { useState } from 'react'
import LeftNav from '../LeftNav'
import { useSelector, useDispatch } from 'react-redux'
import UploadImg from './UploadImg'
import { updateBio } from '../../actions/user.actions'
import { dateParser } from '../Utils.js'

export default function UpdateProfil() {
  const [bio, setBio] = useState('')
  const [updateForm, setUpdateForm] = useState(false)
  const userData = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()

  const handleUpdate = () => {
    dispatch(updateBio(userData._id, bio))
    setUpdateForm(false)
  }

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
        <div className='right-part'>
          <div className='bio-update'>
            <h3>Bio</h3>
            {updateForm === false && (
              <>
                <p onClick={() => setUpdateForm(!updateForm)}>{userData.bio}</p>
                <button onClick={() => setUpdateForm(!updateForm)}>Submit Bio</button>
              </>
            )}
            {updateForm && (
              <>
                <textarea
                  type='text'
                  defaultValue={userData.bio}
                  onChange={(e) => setBio(e.target.value)}
                />
                <button onClick={handleUpdate}>Confirm Bio</button>
              </>
            )}
          </div>
          <h4>Membre since {dateParser(userData.createdAt)}</h4>
        </div>
      </div>
    </div>
  )
}
