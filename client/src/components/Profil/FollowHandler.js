import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { isEmpty } from '../Utils'

export default function FollowHandler({ idToFollow }) {
    const userData = useSelector((state) => state.userReducer)
    const [isFollowed, setIsFollowed] = useState(false)

    const handleFollow = () => {

    }
    const handleUnfollow = () => {

    }

    useEffect(() => {
        if (!isEmpty(userData.following)) {
            if (userData.following.includes(idToFollow)) {
                setIsFollowed(true);
            } else setIsFollowed(false);
        }
    }, [userData, idToFollow]) // []<= callback to restart useEffect

    return (
        <>
            {isFollowed && (
                <span>
                    <button className='unfollow-btn'>Subscriber</button>
                </span>
            )}
            {isFollowed === false && (
                <span>
                    <button className='follow-btn'>Follow</button>
                </span>
            )}
        </>
    )
}
