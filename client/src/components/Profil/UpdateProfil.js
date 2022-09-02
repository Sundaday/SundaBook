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
  const usersData = useSelector((state) => state.usersReducer)
  const dispatch = useDispatch()
  const [followingPopUp, setFollowingPopUp] = useState(false)
  const [followersPopUp, setFollowersPopUp] = useState(false)

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
          <h4>Registered since {dateParser(userData.createdAt)}</h4>
          <h5 onClick={() => setFollowingPopUp(true)}>Followings : {userData.following ? userData.following.length : ""}</h5>
          <h5 onClick={() => setFollowersPopUp(true)}>Followers : {userData.followers ? userData.followers.length : ""}</h5>
        </div>
      </div>
      {followingPopUp && (
        <div className='popup-profil-container'>
          <div className='modal'>
            <h3>Followings</h3>
            <span className='cross' onClick={() => setFollowingPopUp(false)}>&#10005;</span>
            <ul>
              {usersData.map((user) => {
                for (let i = 0; i < userData.following.length; i++) {
                  if (user._id === userData.following[i]) {
                    return (
                      <li key={user._id}>
                        <img src={user.picture} alt='user-pic' />
                        <h4>{user.pseudo}</h4>
                        <h1>FOLLOW HANDLER</h1>
                      </li>
                    )
                  }
                }
                return null;
              })}
            </ul>
          </div>
        </div>
      )}
      {followersPopUp && (
        <div className='popup-profil-container'>
          <div className='modal'>
            <h3>Followers</h3>
            <span className='cross' onClick={() => setFollowersPopUp(false)}>&#10005;</span>
            <ul>
              {usersData.map((user) => {
                for (let i = 0; i < userData.followers.length; i++) {
                  if (user._id === userData.followers[i]) {
                    return (
                      <li key={user._id}>
                        <img src={user.picture} alt='user-pic' />
                        <h4>{user.pseudo}</h4>
                        <h1>FOLLOW HANDLER</h1>
                      </li>
                    )
                  }
                }
                return null;
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
