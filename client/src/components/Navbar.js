import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UidContext } from './AppContext'
import Logout from './Log/Logout'

export default function Navbar() {
    const uid = useContext(UidContext)
    return (
        <nav>
            <div className="nav-container">
                <div className="logo">
                    <NavLink to="/">
                        <div className="logo">
                            <img src="./img/icon.png" alt="Logo" />
                            <h3>SundaBook</h3>
                        </div>
                    </NavLink>
                </div>
                {uid ? (
                    <ul>
                        <li></li>
                        <li className="welcome">
                            <NavLink to="/profil">
                                <h5>Welcome { }</h5>
                            </NavLink>
                        </li>
                        <Logout />
                    </ul>
                ) : (
                    <ul>
                        <li></li>
                        <li>
                            <NavLink to="/profil">
                                <img src='./img/icons/login.svg' alt='login' />
                            </NavLink>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    )
}
