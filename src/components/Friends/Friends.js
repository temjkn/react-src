import React from 'react';
import classes from './Friends.module.css';
import avatarImage from '../../assets/images/avatar.png'
import { NavLink } from 'react-router-dom';

function Friends(props){
    // let item = props.friendsList.map(
    //     u => u.followed &&
    //         <a href={u.linkOnPage} className={classes.friendItem} key={u.id}>
    //             <img className = {classes.friendPhoto} alt={u.name} src={u.photos.small != null ? u.photos.small : avatarImage}/>
    //             <span>{u.name}</span>
    //         </a>
    // )
    return(
        <div className={classes.friendsWrap}>
            {/* <p>Friends</p> */}
            {props.myFriendtsList.length !== 0 ? props.myFriendtsList.map(
                friend => <NavLink to = {'/profile/' + friend.id} className={classes.friendItem} key={friend.id}>
                        <img className = {classes.friendPhoto} alt={friend.name} src={friend.photos.small != null ? friend.photos.small : avatarImage}/>
                        <span>{friend.name}</span>
                    </NavLink>
            ) : <span>==NO FRIENDS==</span>
        }
            {/* {item} */}
        </div>
    );
}


export default Friends;