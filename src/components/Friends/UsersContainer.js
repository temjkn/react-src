import React from 'react';
import User from './User';
import { connect } from "react-redux";
import { follow, setTotalUserCount,
    setCurrentPage, setUsers,
    unfollow, toggleIsLoading,
    toggleFollowingInProgress } from '../../redux/friendList-reducer';
import Preloader from '../Preloader';
import { usersAPI } from '../../api/api';

// презентационная компанента, делает запрос на сервер, полученные данные передает функциональной компаненте
class UsersContainer extends React.Component{
    constructor(props){
        super(props);
        this.props.toggleIsLoading(true)
        usersAPI.getUsers(this.props.currentPage, this.props.usersOnPage).then(
            data => {
                this.props.toggleIsLoading(false)
                this.props.setUsers(data.items)
                this.props.setTotalUserCount(data.totalCount)
            }
        );

        //для удобства изменения создал обьект suserAPI
        // Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`).then(
        //         response => {
        //             this.props.toggleIsLoading(false)
        //             this.props.setUsers(response.data.items)
        //             this.props.setTotalUserCount(response.data.totalCount)
        //         }
        //     );
    }
    onCangedPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsLoading(true)

        usersAPI.getUsers(pageNumber, this.props.usersOnPage).then(
            data => {
                this.props.setUsers(data.items)
                this.props.toggleIsLoading(false)
            }
        );

        // Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersOnPage}`).then(
        //     response => {
        //         this.props.setUsers(response.data.items)
        //         this.props.toggleIsLoading(false)
        //     }
        // );
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
                    followingInProgress = {this.props.followingInProgress}
                    toggleFollowingInProgress = {this.props.toggleFollowingInProgress}
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
        currentPage: state.friendsList.currentPage,
        followingInProgress: state.friendsList.followingInProgress
    }
}

// let mapDispatchToProps = (dispatch) => {  раньше создавал эту функцию и отправлял в connect, теперь передаю обьект с названиемя функций из редюсера
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setTotalUserCount : (currentPage) => {
//             dispatch(setTotalUserCountAC(currentPage))
//         },
//         setCurrentPage : (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         toggleIsLoading : (isLoading) => {
//             dispatch(toggleIsLoadingAC(isLoading))
//         }
//     }
// }

export default connect(mapStateToProps, {toggleIsLoading,setCurrentPage,setTotalUserCount,setUsers,unfollow,follow,toggleFollowingInProgress})(UsersContainer)