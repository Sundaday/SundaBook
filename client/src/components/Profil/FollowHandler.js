import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function FollowHandler({ idToFollow }) {
    const userData = useSelector((state) => state.userReducer)
    const [isFollowed, setIsFollowed] = useState(false)

    const handleFollow = () => {
        
    }
    const handleUnfollow = () => {

    }

    useEffect(() => {

    }, [userData, idToFollow]) // []<= callback to restart useEffect

    return (
        <div>Follow</div>
    )
}
