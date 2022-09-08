import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followUser, unfollowUser } from '../../actions/user.actions'
import { isEmpty } from '../Utils'

export default function FollowHandler({ idToFollow, type }) {
    const userData = useSelector((state) => state.userReducer);
    const [isFollowed, setIsFollowed] = useState(false);
    const dispatch = useDispatch();

    const handleFollow = () => {
        dispatch(followUser(userData._id, idToFollow));
        setIsFollowed(true);
    };
    const handleUnfollow = () => {
        dispatch(unfollowUser(userData._id, idToFollow));
        setIsFollowed(false);
    };

    useEffect(() => {
        if (!isEmpty(userData.following)) {
            if (userData.following.includes(idToFollow)) { setIsFollowed(true) }
            else setIsFollowed(false)
        }
    }, [idToFollow]) // []<= callback to restart useEffect PROBLEME HERE ! 

    return (
        <>
            {isFollowed && !isEmpty(userData) && (
                <span onClick={handleUnfollow}>
                    {type === "suggestion" && <button className='unfollow-btn'>Unfollow</button>}
                    {type === "card" && <img src='./img/icons/checked.svg' alt='checked' />}
                </span>
            )}
            {isFollowed === false && !isEmpty(userData) && (
                <span onClick={handleFollow}>
                    {type === "suggestion" && <button className='follow-btn'>Follow</button>}
                    {type === "card" && <img src='./img/icons/check.svg' alt='check' />}
                </span>
            )}
        </>
    )
}
