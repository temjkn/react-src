import React from 'react';
import User from './User';
import { connect } from "react-redux";
import { followAC, setTotalUserCountAC,setCurrentPageAC, setUsersAC, unfollowAC } from '../../redux/friendList-reducer';

let mapStateToProps = (state) => {
    return {
        users: state.friendsList.users,
        totalUsersCount: state.friendsList.totalUsersCount,
        usersOnPage: state.friendsList.usersOnPage,
        currentPage: state.friendsList.currentPage
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
        },
        setTotalUserCount : (currentPage) => {
            dispatch(setTotalUserCountAC(currentPage))
        },
        setCurrentPage : (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UsersContainer;