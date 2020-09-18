import React from 'react';
import classes from './Friends.module.css';
import FriendsItem from './FriendsItem/FriendsItem'

function Friends(props){
    let friendsList =  props.friendsList.map(
        el => <FriendsItem key = {el.id} state={el}/>
    )
    return(
        <div className={classes.friendsWrap}>
            {friendsList}
        </div>
    );
}


export default Friends;