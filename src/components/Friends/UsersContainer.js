import React from 'react';
import User from './User';
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from '../../redux/friendList-reducer';

{/* <StoreContext.Consumer>
    {(store) => {
        let state = store.getState();
        return <Friends friendsList = {state.friendsList}/>
    }}
</StoreContext.Consumer> */}

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
        setUsersAC: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UsersContainer;