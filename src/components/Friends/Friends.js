import React from 'react';
import classes from './Friends.module.css';
import avatarImage from '../../assets/images/avatar.png'

function Friends(props){
    let item = props.friendsList.map(
        u => u.followed &&
            <a href={u.linkOnPage} className={classes.friendItem} key={u.id}>
                <img className = {classes.friendPhoto} alt={u.name} src={u.photos.small != null ? u.photos.small : avatarImage}/>
                <span>{u.name}</span>
            </a>
        // u => u.follow ?
        //     <a href={u.linkOnPage} className={classes.friendItem} key={u.id}>
        //         <img className = {classes.friendPhoto} alt={u.name} src={u.photo}/>
        //         <span>{u.name}</span>
        //     </a> :
        //     console.log(u.id)
    )
    
    return(
        <div className={classes.friendsWrap}>
            {item}
        </div>
    );
}


export default Friends;