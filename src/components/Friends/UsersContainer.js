import * as Axios from 'axios';
import React from 'react';
import User from './User';
import { connect } from "react-redux";
import { followAC, setTotalUserCountAC,setCurrentPageAC, setUsersAC, unfollowAC, toggleIsLoadingAC } from '../../redux/friendList-reducer';
import Preloader from '../Preloader';

class UsersContainer extends React.Component{ // презентационная компанента, делает запрос на сервер, полученные данные передает функциональной компаненте
    constructor(props){
        super(props);
        this.props.toggleIsLoading(true)
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`).then(
                response => {
                    this.props.toggleIsLoading(false)
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUserCount(response.data.totalCount)
                }
            );
    }
    onCangedPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsLoading(true)
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersOnPage}`).then(
            response => {
                this.props.setUsers(response.data.items)
                this.props.toggleIsLoading(false)
            }
        );
    }
    render(){
        return <>
                { this.props.isLoading ? <Preloader /> : null }
                <User
                    totalUsersCount = {this.props.totalUsersCount}
                    usersOnPage = {this.props.usersOnPage}
                    currentPage = {this.props.currentPage}
                    onCangedPage = {this.onCangedPage}
                    users = {this.props.users}
                    follow = {this.props.follow}
                    unfollow = {this.props.unfollow}
                />
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.friendsList.users,
        isLoading: state.friendsList.isLoading,
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
        },
        toggleIsLoading : (isLoading) => {
            dispatch(toggleIsLoadingAC(isLoading))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)