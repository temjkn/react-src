import React from 'react';
import classes from './../Friends.module.css';

function FriendsItem(props){
    return(
        <a href={props.state.linkOnPage} className={classes.friendItem}>
            <img className = {classes.friendPhoto} alt={props.state.name} src={props.state.photo}/>
            <span>{props.state.name}</span>
        </a>
    );
}

export default FriendsItem;