import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uploadPicture } from '../../actions/user.actions';

export default function UploadImg() {
    const [file, setFile] = useState()
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userReducer)

    const handlePicture = (e) => {
        const data = new FormData();
        data.append('name', userData.pseudo)
        data.append('userId', userData._id)
        data.append('file', file)

        dispatch(uploadPicture(data, userData._id))
     }

    return (
        <form onSubmit={handlePicture} className='upload-pic'>
            <label htmlFor='file'>Select new Image</label>
            <input
                type='file'
                id='file'
                name='file'
                accept='.jpg, .png, .jpeg'
                onChange={(e) => setFile(e.target.files[0])}
            />
            <br />
            <input type='submit' value='Upload' />
        </form>
    )
}
