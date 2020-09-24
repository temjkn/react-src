import React from 'react';
import classes from './Friends.module.css';

function Friends(props){
    let item = props.friendsList.map(
        u => u.follow ?
            <a href={u.linkOnPage} className={classes.friendItem} key={u.id}>
                <img className = {classes.friendPhoto} alt={u.name} src={u.photo}/>
                <span>{u.name}</span>
            </a> :
            console.log(u.id)
    )
    return(
        <div className={classes.friendsWrap}>
            {item}
        </div>
    );
}


export default Friends;