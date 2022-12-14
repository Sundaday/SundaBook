import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FollowHandler from '../Profil/FollowHandler'
import { dateParser, isEmpty } from '../Utils'

export default function Card({ post }) {
    const [isLoading, setIsLoading] = useState(true)
    const usersData = useSelector((state) => state.usersReducer)
    const userData = useSelector((state) => state.userReducer)

    useEffect(() => {
        !isEmpty(usersData[0]) && setIsLoading(false)
    }, [usersData])

    return (
        <li className='card-container' key={post._id}>
            {isLoading ? (
                <i className='fas fa-spinner fa-spin'></i> //put loadSpinner until data will be load
            ) : (
                <>
                    <div className='card-left'>
                        <img
                            src={
                                !isEmpty(usersData[0]) &&
                                usersData.map((user) => {
                                    if (user._id === post.posterId) return user.picture
                                    else return null
                                })
                                    .join('')
                            }
                            alt='poster-pic'
                        />
                    </div>
                    <div className='card-right'>
                        <div className='card-header'>
                            <div className='pseudo'>
                                <h3>
                                    {
                                        !isEmpty(usersData[0]) &&
                                        usersData.map((user) => {
                                            if (user._id === post.posterId) return user.pseudo
                                            else return null
                                        })
                                    }
                                </h3>
                                {post.posterId !== userData._id && (
                                    <FollowHandler idToFollow={post.posterId} type={"card"} />
                                )}
                            </div>
                            <span>{dateParser(post.createdAt)}</span>
                        </div>
                    </div>
                </>
            )}
        </li>
    )
}