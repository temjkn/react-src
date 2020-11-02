import React from 'react';
import ProfileInfo from './profileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { getUserProfileThunk, getUserStatusTHUNK, updateStatusTHUNK } from '../../redux/profile-reduser';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component{
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId) userId = 9323;
        this.props.getUserProfileThunk(userId);
        this.props.getUserStatusTHUNK(userId);
        //так делал до thunk
        // usersAPI.getProfile(userId).then(
        //     response => {
        //         this.props.setUserProfile(response.data);
        //     }
        // )
    }

    render() {
        // if(!this.props.isAuth) return <Redirect to = 'login'/>
        return(
            <div>
                <ProfileInfo {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatusTHUNK = {this.props.updateStatusTHUNK}
                />
                <MyPostsContainer/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {getUserProfileThunk, getUserStatusTHUNK, updateStatusTHUNK}),
    withRouter
)(ProfileContainer)