import React from 'react';
import User from './User';
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from '../../redux/friendList-reducer';

let mapStateToProps = (state) => {
    return {
        users: state.friendsList.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UsersContainer;