import React from 'react';
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import FriendsShort from '../Friends/FriendsShort';

function Nav(props){
    return(
        <div>
            <nav className={classes.nav}>
                <NavLink activeClassName={classes.active} to="/profile">profile</NavLink>
                <NavLink activeClassName={classes.active} to="/dialogs">messages</NavLink>
                <NavLink activeClassName={classes.active} to="/news">news</NavLink>
                <NavLink activeClassName={classes.active} to="/setting">setting</NavLink>
                <NavLink activeClassName={classes.active} to="/users">Users</NavLink>
                <hr/>
                <span>MY FRIENDS:</span>
            </nav>
            <FriendsShort/>
        </div>
    );
}
export default Nav;