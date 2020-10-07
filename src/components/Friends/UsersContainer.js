import * as Axios from 'axios';
import React from 'react';
import User from './User';
import { connect } from "react-redux";
import { followAC, setTotalUserCountAC,setCurrentPageAC, setUsersAC, unfollowAC } from '../../redux/friendList-reducer';

class UsersContainer extends React.Component{ // презентационная компанента, делает запрос на сервер, полученные данные передает функциональной компаненте
    constructor(props){
        super(props);

        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`).then(
                response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUserCount(response.data.totalCount)
                }
            );
    }
    onCangedPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersOnPage}`).then(
            response => this.props.setUsers(response.data.items)
        );
    }
    render(){
        return <User
                totalUsersCount = {this.props.totalUsersCount}
                usersOnPage = {this.props.usersOnPage}
                currentPage = {this.props.currentPage}
                onCangedPage = {this.onCangedPage}
                users = {this.props.users}
                follow = {this.props.follow}
                unfollow = {this.props.unfollow}
            />
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)