import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header(props){
    return(
        <header className="header">
            I`m header
            <div className = "login">{props.isAuth
                ?
                    <>{props.login} <button onClick={props.logoutTHUNK}>logout</button></>
                :
                    <NavLink to = "/login">Login</NavLink>}</div>
        </header>
    );
}
export default Header;