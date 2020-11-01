import React from 'react';
import User from './User';
import { connect } from "react-redux";
import {setCurrentPage,unfollowThunk,followThunk, getUsersThunk} from '../../redux/friendList-reducer';
import Preloader from '../Preloader';
import { withAuthRedirectHOC } from '../../hoc/withAuthRedirectHOC';
import { compose } from 'redux';

// презентационная компанента, полученные данные передает функциональной компаненте
class UsersContainer extends React.Component{
    constructor(props){
        super(props);
        this.props.getUsersThunk(this.props.currentPage,this.props.usersOnPage);

        //для удобства изменения создал обьект userAPI
        // Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`).then(
        //         response => {
        //             this.props.toggleIsLoading(false)
        //             this.props.setUsers(response.data.items)
        //             this.props.setTotalUserCount(response.data.totalCount)
        //         }
        //     );
    }
    onCangedPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        this.props.getUsersThunk(pageNumber,this.props.usersOnPage);
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
                    followingInProgress = {this.props.followingInProgress}
                    unfollowThunk = {this.props.unfollowThunk}
                    followThunk = {this.props.followThunk}
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

let UsersContainerWrapper = connect(mapStateToProps,{setCurrentPage,unfollowThunk,followThunk,getUsersThunk});

//метод compose - выполняет переданные ему инструкции начиная с права на лево,над компонентом во вторых скобках
export default compose(withAuthRedirectHOC,UsersContainerWrapper)(UsersContainer)