import React from 'react';
import { useContext } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import TokenContext from '../../context/TokenContext.js';
import "./header.css"
import { useSelector } from 'react-redux';
function Header() {
    const token = localStorage.getItem("authToken");
    const {user} = useContext(TokenContext)
    
    const logout = () => {
        localStorage.removeItem("authToken");
        window.location.href = "/login";
    }

    return (
        <div>
            <nav className='header bg-slate-200 flex justify-between items-center'>
                <div className="logo text-center flex gap-2 flex-row items-center pl-9">
                    <img src="https://img.icons8.com/?size=100&id=13550&format=png&color=000000" alt="logo" className='w-8 h-6' />
                    <NavLink to="/">
                    <div>

                    Todo App
                    </div>
                    </NavLink>
                </div>
                <div className='flex justify-between'>
                    {
                        token ? (
                            <div className='flex items-center justify-center'>
                                <p className='mr-5'>welcome, <span className=' text-xl text-blue-800 capitalize'></span></p>
                                <button onClick={logout} className="logout mr-4">Logout</button>
                            </div>
                        ) : (
                            <ul className='flex justify-end gap-3 w-3/4 pr-6'>
                                <li>
                                    <NavLink to="/login">Login</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/register">Register</NavLink>
                                </li>
                            </ul>
                        )
                    }
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

export default Header;