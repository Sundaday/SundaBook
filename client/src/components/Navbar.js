import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UidContext } from './AppContext'

export default function Navbar() {
    const uid = useContext(UidContext)
    return (
        <nav>
            <div className="nav-container">
                <div className="logo">
                    <NavLink exact to='/'>
                        <div className="logo">
                            <img src="./img/icon.png" alt="Logo" />
                            <h3>SundaBook</h3>
                        </div>
                    </NavLink>
                </div>
                {uid ? (
                    <ul>
                        <li>
                            <li className="welcome">
                                <NavLink exact to='/profil'>
                                    <h5>Welcome { }</h5>
                                </NavLink>
                            </li>
                        </li>
                        logo logout
                    </ul>
                ) : (
                    <ul>
                        <li></li>
                        <li>
                            <NavLink exact to='/profil'>
                                <img src='./img/icons/login.svg' alt='login' />
                            </NavLink>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    )
}
