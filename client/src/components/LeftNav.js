import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LeftNav() {
    return (
        <div className="left-nav-container">
            <div className="icons">
                <div className="icons-bis">
                    <NavLink to='/' activeclassname="active-left-nav">
                        <img src='./img/icons/home.svg' alt='left navbar' />
                    </NavLink>
                    <br />
                    <NavLink to='/trending' activeclassname="active-left-nav">
                        <img src='./img/icons/rocket.svg' alt='left navbar' />
                    </NavLink>
                    <br />
                    <NavLink to='/profil' activeclassname="active-left-nav">
                        <img src='./img/icons/user.svg' alt='left navbar' />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
